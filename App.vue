<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">HOME</router-link>&nbsp;|&nbsp;
      <router-link to="/sngl?ftrCode=help">使用說明</router-link>&nbsp;|&nbsp;
      <router-link to="/sngl?ftrCode=calc">概括授權及財產申報狀況</router-link>&nbsp;|&nbsp;
      <router-link to="/sngl?ftrCode=sein">申報人任職紀錄及起訖區間</router-link>&nbsp;|&nbsp;
      <router-link to="/sngl?ftrCode=dcnd">異動通報公文下載</router-link>&nbsp;|&nbsp;
      <!-- <router-link to="/fdcc">比對指定日期金融機構資料</router-link>&nbsp;|&nbsp; -->
      <router-link to="/bdpv">介接資料檢核</router-link>&nbsp;|&nbsp;
      <a href="ftp://10.10.12.203:1331" target="_blank" rel="noopener" >查核文件下載</a>&nbsp;|&nbsp;
      <router-link to="/tmpt?ftrCode=tmpt">公文範本維護</router-link>
    </div>
    <keep-alive>
      <router-view :key="$route.fullPath"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getFtrJsn");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #00cccc;
}

.home {
  margin: 20px;
  display: block;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #11bbbb;
}

body {
  font-family: 微軟正黑體, "Times New Roman", Times, serif;
  font-size: 14px;
  color: #333;
}
.move {
  width: 300px;
  height: 30px;
  background-color: #00ff0030;
  position: relative;
  text-align: center;
  vertical-align: center;
  animation: mL 2s linear infinite;
}
@keyframes mL {
  0% {
    left: 35%;
  }
  50% {
    left: 43%;
  }
  100% {
    left: 35%;
  }
}
button {
  background-color: #00eeee60;
  margin-left: 1px;
  border: 0px;
  font-family: 微軟正黑體;
  font-size: 13x;
}
.container {
  width: 98%;
  margin: 8px 0px;
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.4);
}
.a {
  font-family: Lucida Handwriting;
  width: 65%;
  display: flex;
  justify-content: flex-start;
  color: #0000a0;
}
.sq {
  padding: 1px;
  color: red;
  background-color: rgb(164, 281, 281);
}
.sq::before {
  content: "篩選條件 ";
  color: black;
}

table {
  width: 98%;
  table-layout: auto;
  border: 1px solid #0000ff;
  border-radius: 1px;
  background-color: #0000ff41;
  border-spacing: 1px;
}

.hd {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

th {
  background-color: #00cccc;
  font-size: 13px;
  font-weight: normal;
  font-family: 微軟正黑體;
  color: rgba(0, 0, 0, 0.9);
}

table tr:hover td {
  background-color: #00ff0040;
}

th,
td {
  padding: 2px;
  cursor: pointer;
}

tr.odd {
  background-color: #f0ffff;
}

tr.even {
  background-color: #fff;
}

.arrow {
  border-top: 4px solid #ffffff;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  border-bottom: 4px solid #ffffff;
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 4px;
  opacity: 0.5;
}

.arrow.asc {
  border-top: 4px solid transparent;
}

.arrow.active.asc {
  border-bottom: 4px solid #000;
}

.arrow.dsc {
  border-bottom: 4px solid transparent;
}

.arrow.active.dsc {
  border-top: 4px solid #000;
}

.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

input.visually-hidden:focus + label {
  outline: thin dotted;
  background-color: #22f;
}

label {
  background-color: #aff;
}

.aa {
  background: #aff;
}
.pageFooter {
  width: 98%;
  padding: 4px;
  font-weight: 500;
  display: flex;
}
</style>