(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"074c":function(t,e,a){t.exports=a.p+"img/china.3a5b5ac1.svg"},"07bb":function(t,e,a){},1:function(t,e){},1564:function(t,e,a){"use strict";var n=a("ba47"),s=a.n(n);s.a},1610:function(t,e,a){"use strict";var n=a("f20c"),s=a.n(n);s.a},2:function(t,e){},3:function(t,e){},"30d6":function(t,e,a){},"420f":function(t,e,a){"use strict";var n=a("5bbe"),s=a.n(n);e["default"]=s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("a026"),s=a("2f62"),i=a("28dd"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-navbar"),a("router-view"),a("app-footer")],1)},r=[],c=(a("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticClass:"header",attrs:{shadow:t.shadow,"fixed-top":t.fixedTop}},[n("template",{slot:"brand"},[n("a",{attrs:{href:"/"}},[n("img",{staticClass:"jcent-logo",attrs:{src:a("f761")}})])]),n("template",{slot:"end"},[t._l(t.navLeftItems,(function(e){return"en-US"==t.locale?n("b-navbar-item",{key:e.item,staticClass:"navbar-item",attrs:{href:e.route,target:"_blank"}},[t._v("\n               "+t._s(e.item)+"\n             ")]):t._e()})),t._l(t.navLeftItemsCN,(function(e){return"zh-CN"==t.locale?n("b-navbar-item",{key:e.item,staticClass:"navbar-item",attrs:{href:e.route,target:"_blank"}},[t._v("\n               "+t._s(e.item)+"\n             ")]):t._e()})),n("b-navbar-item",{staticClass:"navbar-item"},[n("b-navbar-dropdown",{attrs:{label:t.languageLabel}},[n("b-navbar-item",{on:{click:function(e){return t.toggleLang("en")}}},[t._v("\n                    English\n                ")]),n("b-navbar-item",{on:{click:function(e){return t.toggleLang("zh")}}},[t._v("\n                    简体中文\n                ")])],1)],1),n("b-navbar-item",{attrs:{tag:"div"}},[n("div",{staticClass:"buttons"},[t.loggedIn?t._e():n("a",{staticClass:"button is-light unlock-button",on:{click:function(e){return t.loginTronWeb()}}},[t._v("\n                   "+t._s(t.$t("login.signIn"))+"\n                ")]),t.loggedIn?n("a",{staticClass:"button is-light unlock-button"},[t._v("\n                   "+t._s(t.subAddress)+"\n                ")]):t._e()])])],2)],2)}),l=[],u=a("074c"),d=a.n(u),f=a("d0ff"),h=a.n(f),m={data:function(){return{usa:h.a,china:d.a,shadow:!1,fixedTop:!0,active:!1,navLeftItems:[{item:"Stake",route:"/stake"},{item:"Whitepaper",route:"https://github.com/JCentNetwork/Documentation/blob/master/README.md"}],navLeftItemsCN:[{item:"质押挖矿",route:"/stake"},{item:"白皮书",route:"https://github.com/JCentNetwork/Documentation/blob/master/README_CN.md"}],isChinese:!1,languageLabel:"English"}},created:function(){"zh-CN"==this.locale?this.languageLabel="简体中文":this.languageLabel="English",console.log(this.loggedIn)},computed:{locale:function(){return this.$store.state.language.lang.locale},loggedIn:function(){return this.$store.state.tronbalance.status.loggedIn},address:function(){return this.$store.state.tronbalance.tron.address},subAddress:function(){return this.address.slice(0,4)+"..."+this.address.slice(-4)}},methods:{loginTronWeb:function(){if(this.$store.dispatch("tronweb/showLoginBox",!0),window.tronWeb){this.$store.dispatch("tronbalance/updateTronStatus",!0);var t={address:window.tronWeb.defaultAddress.base58,balance:0};this.$store.dispatch("tronbalance/updateTron",t)}},logoutTronWeb:function(){this.$store.dispatch("tronweb/showLoginBox",!1)},toggleLang:function(t){var e=null;"zh"==t?(e={locale:"zh-CN"},this.isChinese=!0,this.languageLabel="简体中文"):"en"==t&&(e={locale:"en-US"},this.isChinese=!1,this.languageLabel="English"),localStorage.setItem("lang",JSON.stringify(e)),this.$i18n.locale=e.locale,this.$store.dispatch("language/updateLang",e)},randomTheme:function(){this.selectedNavTheme=this.navbarThemes[Math.floor(Math.random()*this.navbarThemes.length)]}}},g=m,p=(a("5dfc"),a("2877")),b=Object(p["a"])(g,c,l,!1,null,null,null),v=b.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",{staticClass:"footer"},[a("div",{staticClass:"content has-text-centered"},[a("div",{staticClass:"columns"},[t._m(0),a("div",{staticClass:"column"},[a("div",{staticClass:"footer-title"},[t._v(t._s(t.$t("footer.developer")))]),t._m(1),a("a",{attrs:{href:"https://github.com/JCentNetwork/Documentation",target:"_blank"}},[a("div",{staticClass:"footer-subtitle"},[t._v(t._s(t.$t("footer.doc")))])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"footer-title"},[t._v(t._s(t.$t("footer.resources")))]),t._m(2)])]),a("p",[t._v("\n       JCent Finance Labs 2020\n      ")])])])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column is-two-fifths"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:a("f761")}})]),n("div"),n("br"),n("br"),n("div"),n("div")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://github.com/JCentNetwork",target:"_blank"}},[a("div",{staticClass:"footer-subtitle"},[t._v("Github")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://twitter.com/jcentnetwork",target:"_blank"}},[a("div",{staticClass:"footer-subtitle"},[t._v("Twitter")])])}],x={},_=x,y=(a("760c"),Object(p["a"])(_,C,w,!1,null,null,null)),k=y.exports,S=a("d01b"),T={components:{"app-navbar":v,"app-footer":k},mounted:function(){this.initLanguate(),this.loadTronWeb()},methods:{initLanguate:function(){this.$i18n.locale=this.$store.state.language.lang.locale,"zh-CN"==this.$i18n.locale||this.$i18n.locale},loadTronWeb:function(){if(!window.tronWeb){var t=S.providers.HttpProvider,e=new t("https://api.trongrid.io"),a=new t("https://api.trongrid.io"),n="https://api.trongrid.io/",s=new S(e,a,n);window.tronWeb=s}},snackbarTrig:function(){var t=this;this.$snackbar.open({duration:5e3,message:"Snackbar with red action, positioned on bottom-left and a callback.",type:"is-danger",position:"is-top",actionText:"Undo",queue:!1,onAction:function(){t.$toast.open({message:"Action pressed",queue:!1})}})}}};document.addEventListener("DOMContentLoaded",(function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach((function(t){t.addEventListener("click",(function(){var e=t.dataset.target,a=document.getElementById(e);t.classList.toggle("is-active"),a.classList.toggle("is-active")}))}))}));var $=T,E=(a("5c0b"),a("b0a0"),a("1564"),Object(p["a"])($,o,r,!1,null,null,null)),L=E.exports,j=a("8c4f"),J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-content"},[n("section",{staticClass:"hero is-fullheight is-info home-main-content"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered"},[n("div",{staticClass:"column "},[n("h1",{staticClass:"title search-title"},[n("span",{staticStyle:{color:"#003dc6"}},[t._v("JUSD: "+t._s(t.$t("home.profitable")))])])]),n("div",{staticClass:"search-subtitle"},[n("span",[t._v(t._s(t.$t("home.subprofitable")))])]),n("div",{staticClass:"column "}),n("div",{staticClass:"search-telegram"},[n("a",{staticClass:"button is-light join-button",attrs:{href:"https://t.me/jcent_defi",target:"_blank"}},[t._v("\n                   "+t._s(t.$t("home.joinTelegram"))+"\n                ")])])])])]),n("section",{staticClass:"hero"},[n("div",{staticClass:"columns jcent-feature"},[n("div",{staticClass:"column has-text-centered"},[n("div",{staticClass:"center"},[t._v(t._s(t.$t("home.integrateDesc")))]),n("br"),n("br"),n("br")])])]),n("section",{staticClass:"hero is-fullheight",staticStyle:{background:"#FFF"}},[n("div",{staticClass:"column has-text-centered jcent-detail"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column has-text-centered"},[n("h2",{staticClass:"eveolution-jcent-title"},[t._v("\n                "+t._s(t.$t("home.feature"))+"\n              ")])])]),n("div",{staticClass:"columns"},[n("div",{staticClass:"column has-text-centered"},[n("div",{staticClass:"column",staticStyle:{padding:"0px"}},[n("img",{attrs:{src:t.earn,width:"80px",height:"80px"}}),n("h2",{staticClass:"eveolution-jcent-detail"},[t._v("\n                  "+t._s(t.$t("home.feature1Title"))+"\n                ")]),n("h2",{staticClass:"eveolution-jcent-subdetail has-text-centered"},[t._v("\n                  "+t._s(t.$t("home.feature1Detail"))+"\n                ")])])]),n("div",{staticClass:"column has-text-centered"},[n("div",{staticClass:"column",staticStyle:{padding:"0px"}},[n("img",{attrs:{src:t.pool,width:"80px",height:"80px"}}),n("h2",{staticClass:"eveolution-jcent-detail"},[t._v("\n                  "+t._s(t.$t("home.feature2Title"))+"\n                ")]),n("h2",{staticClass:"eveolution-jcent-subdetail has-text-centered"},[t._v("\n                  "+t._s(t.$t("home.feature2Detail"))+"\n                ")])])]),n("div",{staticClass:"column has-text-centered"},[n("div",{staticClass:"column",staticStyle:{padding:"0px"}},[n("img",{attrs:{src:t.dao,width:"80px",height:"80px"}}),n("h2",{staticClass:"eveolution-jcent-detail"},[t._v("\n                  "+t._s(t.$t("home.feature3Title"))+"\n                ")]),n("h2",{staticClass:"eveolution-jcent-subdetail has-text-centered"},[t._v("\n                  "+t._s(t.$t("home.feature3Detail"))+"\n                ")])])])])])]),n("section",{staticClass:"hero",staticStyle:{background:"#FFF"}},[n("div",{staticClass:"column has-text-centered partner-detail"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column has-text-centered"},[n("h2",{staticClass:"eveolution-jcent-title"},[t._v("\n                "+t._s(t.$t("home.joinUs"))+"\n              ")]),n("h2",{staticClass:"community-subtitle"},[n("span",[t._v(t._s(t.$t("home.subJoinUs")))])])])]),n("div",{staticClass:"columns community"},[n("div",{staticClass:"column has-text-centered"},[n("div",{staticClass:"column has-text-centered",staticStyle:{padding:"0px"}},[n("a",{attrs:{href:"https://twitter.com/jcentnetwork",target:"_blank"}},[n("img",{attrs:{src:t.twitter,width:"60px",height:"60px"}})]),n("div",{staticClass:"coin"},[t._v("Twitter")])])]),n("div",{staticClass:"column has-text-centered"},[n("div",{staticClass:"column has-text-centered",staticStyle:{padding:"0px"}},[n("a",{attrs:{href:"https://t.me/jcent_defi",target:"_blank"}},[n("img",{attrs:{src:t.telegram,width:"60px",height:"60px"}})]),n("div",{staticClass:"coin"},[t._v("Telegram")])])]),n("div",{staticClass:"column has-text-centered"},[n("div",{staticClass:"column has-text-centered",staticStyle:{padding:"0px"}},[n("a",{attrs:{href:"https://github.com/JCentNetwork",target:"_blank"}},[n("img",{attrs:{src:t.github,width:"60px",height:"60px"}})]),n("div",{staticClass:"coin"},[t._v("Github")])])])])]),n("el-dialog",{attrs:{title:t.$t("login.connect"),"before-close":t.dismissLoginBox,visible:t.showLoginBox,width:"500px"},on:{"update:visible":function(e){t.showLoginBox=e}}},[n("span",[n("div",{staticClass:"tronstatus"},[n("div",[t._v(t._s(t.$t("login.useTronLink")))])]),n("div",{staticClass:"tronlink"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:a("5c7b")}})]),n("div",{staticClass:"name"},[n("span",[t._v("TronLink")])])])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("span",[t._v(t._s(t.$t("login.dontHaveTronLink"))),n("a",{attrs:{href:"https://chrome.google.com/webstore/detail/tronlink%EF%BC%88%E6%B3%A2%E5%AE%9D%E9%92%B1%E5%8C%85%EF%BC%89/ibnejdfjmmkpcnlpebklmnkoeoihofec",target:"_blank"}},[t._v(t._s(t.$t("login.clickHere")))])])])])],1)])},D=[],O=(a("96cf"),a("3b8d")),N=a("bd86"),P=a("e44e"),B=a.n(P),U=a("5a0b"),I=a.n(U),A=a("76f4"),F=a.n(A),W=a("7574"),z=a.n(W),H=a("cfa1"),R=a.n(H),M=a("e460"),V=a.n(M),q={data:function(){return Object(N["a"])({github:F.a,telegram:B.a,twitter:I.a,earn:z.a,pool:R.a,dao:V.a,dialogVisible:!1,jcent:"",isOpen:100},"dialogVisible",!1)},created:function(){if(window.tronWeb){this.$store.dispatch("tronbalance/updateTronStatus",!0);var t={address:window.tronWeb.defaultAddress.base58,balance:0};this.$store.dispatch("tronbalance/updateTron",t)}},computed:{locale:function(){return this.$store.state.language.lang.locale},showLoginBox:function(){return this.$store.state.tronweb.status.loginBoxShow}},methods:{loadTronWeb:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("login"),this.dialogVisible=!0;case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dismissLoginBox:function(){this.$store.dispatch("tronweb/showLoginBox",!1)},searchjcent:function(){""!=this.jcent&&this.$router.push({path:"/search",query:{name:this.jcent}})}}},G=q,Y=(a("992b"),Object(p["a"])(G,J,D,!1,null,"2391f5cb",null)),K=Y.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-body"},[a("div",{staticClass:"column box-max"},[a("div",{staticClass:"columns "},[a("div",{staticClass:"column box "},[a("div",{staticClass:"container",staticStyle:{"margin-left":"5px","padding-bottom":"1.5rem"}},[a("div",{staticClass:"title",staticStyle:{"margin-bottom":"0px"}},[t._v("Stake: Coming Soon !")]),a("div",{staticStyle:{color:"#95989A","margin-bottom":"24px","margin-top":"12px"}},[a("a",{attrs:{href:"/"}},[t._v("Back To Home")])])])])])])])},X=[],Z={mounted:function(){this.loadTronWeb()},methods:{loadTronWeb:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=console,t.next=3,window.tronWeb.isConnected();case 3:t.t1=t.sent,t.t0.log.call(t.t0,t.t1);case 5:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},tt=Z,et=(a("64ab"),Object(p["a"])(tt,Q,X,!1,null,null,null)),at=et.exports,nt=a("9703"),st=[{path:"/",component:K},{path:"/stake",component:at},{path:"*",component:nt["default"]}];n["default"].use(j["a"]);var it=new j["a"]({mode:"history",routes:st}),ot=it,rt=JSON.parse(localStorage.getItem("lang")),ct={locale:"en-US"},lt=rt?{status:{langSetted:!0},lang:rt}:{status:{langSetted:!1},lang:ct},ut={namespaced:!0,state:lt,actions:{updateLang:function(t,e){var a=t.commit;a("updateLang",e)}},mutations:{updateLang:function(t,e){t.lang=e,t.status.langSetted=!0}}},dt={status:{loginBoxShow:!1}},ft={namespaced:!0,state:dt,actions:{showLoginBox:function(t,e){var a=t.commit;a("showLoginBox",e)}},mutations:{showLoginBox:function(t,e){t.status.loginBoxShow=e}}},ht={address:"",balance:0},mt={status:{loggedIn:!1},tron:ht},gt={namespaced:!0,state:mt,actions:{updateTronStatus:function(t,e){var a=t.commit;a("updateTronStatus",e)},updateTron:function(t,e){var a=t.commit;a("updateTron",e)}},mutations:{updateTronStatus:function(t,e){t.status.loggedIn=e},updateTron:function(t,e){t.tron=e}}};n["default"].use(s["a"]);var pt=new s["a"].Store({modules:{language:ut,tronweb:ft,tronbalance:gt}}),bt=a("289d"),vt=(a("5363"),a("ecee")),Ct=a("c074"),wt=a("ad3d"),xt=a("5c96"),_t=a.n(xt),yt=(a("0fae"),a("9ec0"),a("a925"));vt["c"].add(Ct["a"]),n["default"].component("vue-fontawesome",wt["a"]),n["default"].use(bt["a"],{defaultIconComponent:"vue-fontawesome",defaultIconPack:"fas",customIconPacks:{fas:{sizes:{default:"lg","is-small":"1x","is-medium":"2x","is-large":"3x"},iconPrefix:""}}}),n["default"].use(s["a"]),n["default"].use(i["a"]),n["default"].use(_t.a),n["default"].use(yt["a"]);var kt=new yt["a"]({locale:"en-US",messages:{"zh-CN":a("8066"),"en-US":a("e088")}});n["default"].config.productionTip=!1,n["default"].use(bt["a"]),new n["default"]({router:ot,i18n:kt,store:pt,render:function(t){return t(L)}}).$mount("#app")},"5a0b":function(t,e,a){t.exports=a.p+"img/twitter.d5da4a7f.svg"},"5bbe":function(t,e){},"5c0b":function(t,e,a){"use strict";var n=a("e332"),s=a.n(n);s.a},"5c7b":function(t,e,a){t.exports=a.p+"img/tronlink.551ca42f.svg"},"5dfc":function(t,e,a){"use strict";var n=a("30d6"),s=a.n(n);s.a},"64ab":function(t,e,a){"use strict";var n=a("c04a"),s=a.n(n);s.a},"6f8a":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-body"},[a("div",{staticClass:"column box-max"},[a("div",{staticClass:"columns "},[a("div",{staticClass:"column box "},[a("div",{staticClass:"container",staticStyle:{"margin-left":"5px","padding-bottom":"1.5rem"}},[a("div",{staticClass:"title",staticStyle:{"margin-bottom":"0px"}},[t._v("404: Not Found !")]),a("div",{staticStyle:{color:"#95989A","margin-bottom":"24px","margin-top":"12px"}},[a("a",{attrs:{href:"/"}},[t._v("Back To HomePage")])])])])])])])},s=[]},7574:function(t,e,a){t.exports=a.p+"img/earn.4f3567ac.svg"},"760c":function(t,e,a){"use strict";var n=a("b675"),s=a.n(n);s.a},"76f4":function(t,e,a){t.exports=a.p+"img/github.7697c1bf.svg"},8066:function(t){t.exports=JSON.parse('{"button":{"sure":"确定","cancel":"取消"},"home":{"search":"搜索","names":"域名","profitable":"可生息的稳定币","subprofitable":"重新定义稳定币,让投资变的更简单","feature":"创新特点","joinUs":"加入社区","subJoinUs":"深入了解JCent, 一起来探索新型稳定币JUSD未来","integrate":"整合区块链域名","integrateDesc":"JUSD是由JCent DAO发型的新型稳定币, 系统储备池资金借贷收益归JCent DAO全体用户所有. 用户持有JEN原生代币即可享受利润收益.","experience":"立即体验","ecosystem":"生态","integrations":"整合","users":"用户","featureTitle":"革命性的域名","featureSubitle":"专为加密货币和防审查网站的域名.","feature1Title":"可生息的金融系统","feature1Detail":"用户持有JEN原生代币,即可享受系统资产池产生的借贷收益分红.","feature2Title":"去中心化系统资产池","feature2Detail":"系统有一部分代币锁定在JCent系统中,归系统所有,用户可以借出此部分映射出的一定比例的稳定币.","feature3Title":"JCent DAO治理","feature3Detail":"所有持有JEN都可参与治理JUSD和JCent协议,实现完全去中心化自治.","searchTitle":"拥有您完美的区块链域名","searchSubtitle":"开始您的加密货币的旅程","findDomain":"拥有您完美的区块链域名","joinTelegram":"加入社群","partner":"合作伙伴"},"login":{"signIn":"连接钱包","connect":"连接钱包","useTronLink":"请登录TronLink钱包进行连接","dontHaveTronLink":"还没安装 TronLink？","clickHere":"请点击此处"},"footer":{"developer":"开发者","doc":"文档","resources":"资源"},"error":{"emailOrPasswordError":"邮箱或者密码错误","emailFormartError":"邮箱格式错误","passwordLengthError":"密码长度至少为8个字符","passwordRepeatError":"密码不匹配","registerError":"注册失败,稍后重试","registerSuccessful":"新账户注册成功","resetPasswordSuccessful":"密码修改成功!","resetPasswordFailure":"密码修改失败!"},"info":{"emailSendSuccess":"邮件已经发送您的邮箱.","emailSendFailure":"发送邮件失败，请稍后再试.","isVerified":"您的邮箱已经验证.","isVerifiedError":"电子邮件验证错误，请稍后再试。"},"social":{"news":"在收件箱中获取最新的新闻.","subscribe":"订阅","thankyou":"感谢您的订阅!","emailError":"电子邮件格式错误!"}}')},"8b20":function(t,e,a){},9703:function(t,e,a){"use strict";var n=a("6f8a"),s=a("420f"),i=(a("1610"),a("2877")),o=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},"992b":function(t,e,a){"use strict";var n=a("8b20"),s=a.n(n);s.a},"9ec0":function(t,e,a){},b0a0:function(t,e,a){"use strict";var n=a("07bb"),s=a.n(n);s.a},b675:function(t,e,a){},ba47:function(t,e,a){},c04a:function(t,e,a){},cfa1:function(t,e,a){t.exports=a.p+"img/assetpool.5c1c7109.svg"},d0ff:function(t,e,a){t.exports=a.p+"img/usa.119b75fe.svg"},e088:function(t){t.exports=JSON.parse('{"button":{"sure":"Sure","cancel":"Cancel"},"home":{"search":"Search","names":"Names","profitable":"Profitable Stablecoin","subprofitable":"Redefining stablecoin to make investment more simple","feature":"Innovative feature","joinUs":"Join the community","subJoinUs":"Lean more about JCent, and explore the future of new stablecoin JUSD","integrate":"Integrate Blockchain Domain","integrateDesc":"JUSD is a new stablecoin developed by JCent Dao. The loan income of system reserve pool is shared by all users of JCent Dao. Users can share the profit by holding JEN token.","experience":"Get Started","ecosystem":"Ecosystem","integrations":"Integrations","users":"Users","featureTitle":"The evolution of Domain Names","featureSubitle":"One domains for all of your cryptocurrencies and censorship-resistant websites.","feature1Title":"Profitable financial system","feature1Detail":"Users holding JEN native token can share the loan income dividend generated by the system asset pool.","feature2Title":"Decentralized system asset pool","feature2Detail":"A part of the token is locked in JCent system and owned by the system. Users can borrow a certain proportion of stablecoin mapped out from this part.","feature3Title":"JCent DAO governance","feature3Detail":"All the holders of JEN can participate in the governance of JUST and JCent protocols to achieve full decentralization and autonomy.","searchTitle":"Find Your Perfect Blockchain Domains","searchSubtitle":"Begin your journey of cryptocurrency","findDomain":"Find Your Perfect Blockchain domains","joinTelegram":"Join Community","partner":"Partners"},"login":{"signIn":"Unlock Wallet","connect":"Connect to Wallet","useTronLink":"Please login to your TronLink wallet to connect","dontHaveTronLink":"Haven\'t installed TronLink yet?","clickHere":"Click here"},"footer":{"developer":"Developer","doc":"Documentation","resources":"Resources"},"error":{"emailOrPasswordError":"the email or password isn\'t right","emailFormartError":"the email format error","passwordLengthError":"the password length is at least 8 characters","passwordRepeatError":"the password didn\'t match","registerError":"registration failed, try again later","registerSuccessful":"New account register successful","resetPasswordSuccessful":"Password modified successfully!","resetPasswordFailure":"Password modified failure!"},"info":{"emailSendSuccess":"The email has been send to your emailbox.","emailSendFailure":"Failed to send mail, please try it later.","isVerified":"Your email has been verified.","isVerifiedError":"Email verifid error, try it later."},"social":{"news":"Get the latest news to your inbox.","subscribe":"Subscribe","thankyou":"Thank you for subscribing!","emailError":"The email format is error!"}}')},e332:function(t,e,a){},e44e:function(t,e,a){t.exports=a.p+"img/telegram.9fd84549.svg"},e460:function(t,e,a){t.exports=a.p+"img/dao.9d43d509.svg"},f20c:function(t,e,a){},f761:function(t,e,a){t.exports=a.p+"img/jcent.d5475c95.svg"}});
//# sourceMappingURL=app.f274fd5e.js.map