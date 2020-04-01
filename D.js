const presetSize = 15;
const options = [10, 15, 20, 25, 30, 40, 50];
const dataItems = [
    { id: "help", content: "請選擇資料項目" }
    ,{ id: "tmpt", content: "公文範本維護" }
    ,{ id: "calc", content: "概括授權檢核" }
    ,{ id: "dcnd", content: "應申報清單(不含定期申報)" }
    ,{ id: "car",  content: "汽車(路政司) " }
    ,{ id: "crdd", content: "從汽車資料分析重號"}
    ,{ id: "land", content: "土地(DOLA)" }
    ,{ id: "build",content: "建物(DOLA)" }
    ,{ id: "ubld", content: "建物(FIA)" }
    ,{ id: "bcmp", content: "評估未登記建物(bcmp)"}
    ,{ id: "cmmr", content: "公司商號(MOEA)" }
    ,{ id: "insu", content: "保險(保險公司) " }
    //,{ id: "indp", content: "保險重複資料篩檢" }
    ,{ id: "depo", content: "存款(銀行)" }
    ,{ id: "depx", content: "存款異常篩檢" }
    ,{ id: "depoc",content: "銀行保險資料筆數統計" }
    ,{ id: "loan", content: "放款(銀行及保險公司)" }
    ,{ id: "jcic", content: "放款(JCIC)" }
    ,{ id: "lncp", content: "銀行與JCIC放款比對" }
    ,{ id: "lndp", content: "放款重複資料篩檢" }
    ,{ id: "fund", content: "有價證券(銀行)" }
    ,{ id: "fudp", content: "有價證券重複資料篩檢" }
    ,{ id: "ofp",  content: "其他金融商品(銀行)" }
    ,{ id: "sd11", content: "往來參加人資料" }
    ,{ id: "sd13", content: "集保客戶股票餘額" }
    ,{ id: "sd21", content: "集保專戶參加人資料" }
    ,{ id: "sd23", content: "集保專戶股票餘額" }
    ,{ id: "sd24", content: "集保專戶存券異動明細" }
    ,{ id: "sd25", content: "集保信用交易存券異動明細" }
    ,{ id: "sd26", content: "集保客戶存券異動明細" }
    ,{ id: "stck", content: "股票交易明細(TSE & OTC)" }
    ,{ id: "stpr", content: "收盤價查詢(TSE & OTC)" }
    ,{ id: "trsL", content: "強制信託土地" }
    ,{ id: "trsB", content: "強制信託建物" }
    ,{ id: "trsS", content: "強制信託股票" }
    ,{ id: "scba", content: "有價證券餘額(證券投信投顧)" }
    ,{ id: "sctx", content: "有價證券交易明細" }
    ,{ id: "vaba", content: "虛擬帳戶餘額(證券投信投顧)" }
    ,{ id: "vatx", content: "虛擬帳戶交易明細" }
];
export { presetSize, options, dataItems };