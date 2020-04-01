import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pgSize: 10,
        options: [],
        items: [],
        feature: "help",
        itmNdx: 0,
        ftrCode: {},
        preQ: "",
        q: "",
        gridData: [],
        filteredData: [],
        sortOrder: 0,
        baseOrders: {},
        strForFilter: [],
        sortKey: "",
        sNdx: 0,
        batNum: ""
    },
    getters: {
        tCnt: (state) => { return state.gridData.length },
        sCnt: (state) => { return state.filteredData.length },
        columnHeaders: (state) => {
            return Object.keys(state.gridData[0])
        },
        getQry: (state) => { return state.q }
    },
    mutations: {
        setData(state, J) {
            state.gridData = state.filteredData = J;
            state.sNdx = 0
        },
        setFtrJsn(state, J) {
            state.pgSize = J.pgSize;
            state.batNum = J.batNum;
            state.options = J.options;
            state.ftrCode = J.ftrCode;
            state.items = J.items;
        },
        setPgSize(state, size) {
            state.pgSize = size
        },
        setQ(state, q) {
            state.preQ = state.q;
            state.q = q;
            state.sNdx = 0
        },
        resetfilteredData(state) {
            state.filteredData = state.gridData
        },
        setSortAndSearchOption(state) {
            const S = state.strForFilter = [];
            state.gridData.forEach(item => {
                var arr = Object.values(item);
                arr.shift(); //去除第1項，搜尋時不包含序號
                S.push(arr.join(" ").toLowerCase().replace(/<br\/>/g, ' '));
            });
            state.preQ = "";
            state.sortKey = "序號";
            state.sortOrder = 1;
        },
        setSortKey(state, k) {
            state.sortKey = k;
            state.sortOrder = 1;
        },
        sortingA(state) {  // 重新排序
            state.sNdx = 0;
            const k = state.sortKey;
            if (state.sortOrder == 1)
                state.filteredData.sort((a, b) => {
                    return a[k] > b[k] ? 1 : a[k] === b[k] ? 0 : -1;
                });
            else
                state.filteredData.sort((a, b) => {
                    return a[k] > b[k] ? -1 : a[k] === b[k] ? 0 : 1;
                });
        },
        sortingB(state) {  // 不重新排序，僅reverse
            state.sNdx = 0;
            state.sortOrder *= -1;
            state.filteredData.reverse();
            return;
        },
        filtering(state, q) {
            q = q.trim().toLowerCase()
            if (q == "") return;
            const re = q.split(" "),
                S = state.strForFilter;
            state.filteredData = state.filteredData.filter(row => {
                var ndx = row.id === undefined ? row.序號 : row.id;
                if (ndx === undefined) return false;
                var t = S[ndx - 1];
                for (var i = 0; i < re.length; ++i) {
                    if (t.indexOf(re[i]) == -1) return false;
                }
                return true;
            });
        },
        setsNdx(state, ndx) {
            state.sNdx = ndx;
        },
        setItmNdx(state, itmNdx) {
            state.itmNdx = itmNdx;
            state.feature = state.items[itmNdx].id
        },
        setBatNum(state, bt) {
            state.batNum = bt;
        }
    },
    actions: {
        getFtrJsn({ commit }) {
            let addr = "http://10.10.12.203:1991/ftr"
            commit('setData', [{ 序號: -999999, Message: '<div class="move">處理中 請稍候...</div>' }])
            fetch(addr)
                .then(response => response.json())
                .then(J => commit('setFtrJsn', J))
                .catch(err => {
                    commit('setData', [{
                        id: 1,
                        description: err.description,
                        message: err.message,
                        number: err.number
                    }]);
                })
        },
        getData({ commit }) {
            // "http://randomuser.me/api/?results=50" "http://10.10.12.203:1991/sd23/2017102001001" 
            // "https://jsonplaceholder.typicode.com/photos"
            var s = ['help', 'tmpt', 'calc', 'dcnd', 'ftr'].join(' ').indexOf(this.state.feature)
            // console.log('store.state.feature:',store.state.feature)
            if ((s == -1) && this.state.batNum == "")
                return commit('setData', [{ 序號: -999999, Message: "<div class='move'>請輸入名單批號或相關代號</div>" }])
            let addr = "http://10.10.12.203:1991/" + this.state.feature
            if (s == -1) addr += "/" + this.state.batNum
            commit('setData', [{ 序號: -999999, Message: '<div class="move">處理中 請稍候...</div>' }])
            fetch(addr)
                .then(response => response.json())
                .then(J => (commit('setData', J)))
                .then(() => {
                    commit('setSortAndSearchOption')
                    commit('filtering', this.state.q)
                })
                .catch(err => {
                    commit('setData', [{
                        id: -999999,
                        description: err.description,
                        message: err.message,
                        number: err.number
                    }]);
                })
        },
        chgPgSize({ commit }, size) {
            if (size == this.state.pgSize) return
            commit('setPgSize', size)
        },
        chgDataItmNdx({ commit }, itmNdx) {
            if (itmNdx == this.state.itmNdx) return
            commit('setItmNdx', itmNdx);
        },
        chgBatNum({ commit }, bt) {
            if (bt.trim() == '') return
            if (bt.trim() == this.state.batNum) return
            commit('setBatNum', bt.trim())
        },
        chgQryStr({ commit }, q) {
            if (q == this.state.q) return
            commit('setQ', q);
            var cntn = q.indexOf(this.state.preQ) > -1;
            if (cntn) return commit("filtering", q);
            //以下狀況均為搜尋字串變更，且前次字串非子字串,先從【母體篩選】【再排序篩選結果】
            commit("resetfilteredData"); //設定篩選範圍為【母體】
            commit("filtering", q); // 篩選
            commit("sortingA");  // sortKey不變，重新排序 
        },
        sortBy({ commit }, k) {
            if (k == this.state.sortKey) commit("sortingB") // sortKey 不變
            else {
                commit("setSortKey", k);
                commit("sortingA"); // sortKey 改變，重新排序
            }
        },
        chgsNdx({ commit }, sNdx) {
            commit("setsNdx", sNdx)
        }
    }
})