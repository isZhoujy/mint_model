webpackJsonp([6],[,,function(t,e){},,,,,,,,,,,function(t,e,n){n(34);var o=n(1)(n(68),n(29),null,null);t.exports=o.exports},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){var o=n(24),i={install:function(t){t.component("loading",o)}};t.exports=i},function(t,e,n){"use strict";var o=n(0),i=n(63);o.default.use(i.a);var a=new i.a({routes:[{path:"*",name:"*",redirect:"/index"},{path:"/index",name:"index",component:function(t){n.e(3).then(function(){var e=[n(75)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{gobackShow:!1,tabberShow:!0,scrollNum:0}},{path:"/indexsub",name:"indexsub",component:function(t){n.e(2).then(function(){var e=[n(76)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{gobackShow:!0,tabberShow:!1,scrollNum:0}},{path:"/book",name:"book",component:function(t){n.e(1).then(function(){var e=[n(74)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{gobackShow:!1,tabberShow:!0,scrollNum:0}},{path:"/movie",name:"movie",component:function(t){n.e(0).then(function(){var e=[n(78)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{gobackShow:!1,tabberShow:!0,scrollNum:0}},{path:"/me",name:"me",component:function(t){n.e(4).then(function(){var e=[n(77)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{gobackShow:!1,tabberShow:!0,scrollNum:0}}]});e.a=a},function(t,e,n){"use strict";var o=n(0),i=n(7);o.default.use(i.b);var a=new i.b.Store({modules:{rouSta:{state:{tabberShow:!0,gobackShow:!0,loadingShow:!1,direction:"forward"},mutations:{GOBACKACTION:function(t,e){t.gobackShow=e},TABBERSHOW:function(t,e){t.tabberShow=e},LODINGSHOW:function(t,e){t.loadingShow=e},updateDirection:function(t,e){t.direction=e.direction}}}}});e.a=a},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJsb2FkZXItMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgICAgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogIDxwYXRoIGZpbGw9IiMyNmEyZmYiIGQ9Ik00My45MzUsMjUuMTQ1YzAtMTAuMzE4LTguMzY0LTE4LjY4My0xOC42ODMtMTguNjgzYy0xMC4zMTgsMC0xOC42ODMsOC4zNjUtMTguNjgzLDE4LjY4M2g0LjA2OGMwLTguMDcxLDYuNTQzLTE0LjYxNSwxNC42MTUtMTQuNjE1YzguMDcyLDAsMTQuNjE1LDYuNTQzLDE0LjYxNSwxNC42MTVINDMuOTM1eiI+CiAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVUeXBlPSJ4bWwiCiAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIKICAgICAgdHlwZT0icm90YXRlIgogICAgICBmcm9tPSIwIDI1IDI1IgogICAgICB0bz0iMzYwIDI1IDI1IgogICAgICBkdXI9IjAuNnMiCiAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiAgICA8L3BhdGg+CiAgPC9zdmc+Cg=="},function(t,e,n){n(33);var o=n(1)(n(69),n(28),null,null);t.exports=o.exports},function(t,e,n){n(35);var o=n(1)(n(70),n(30),null,null);t.exports=o.exports},function(t,e,n){n(32);var o=n(1)(n(71),n(27),null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"m-tabbar"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"loading"},[o("img",{attrs:{src:n(23),alt:""}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("mt-header",{attrs:{title:"多个按钮",fixed:""}},[t.gobackShow?n("mt-button",{directives:[{name:"goback",rawName:"v-goback"}],attrs:{icon:"back"},slot:"left"},[t._v("返回")]):t._e(),t._v(" "),n("mt-button",{attrs:{icon:"more"},on:{click:t.jump},slot:"right"})],1),t._v(" "),n("transition",{attrs:{name:t.direction}},[n("keep-alive",[n("router-view",{staticClass:"view"})],1)],1),t._v(" "),t.loadingShow?n("loading"):t._e(),t._v(" "),t.tabberShow?n("m-tabbar",{attrs:{value:t.select}},[n("m-tabbar-item",{attrs:{id:"index",isRouter:""}},[n("i",{staticClass:"iconfont icon-shouye",staticStyle:{color:"#26a2ff"},slot:"icon-active"}),t._v(" "),n("i",{staticClass:"iconfont icon-shouye",slot:"icon-normal"}),t._v(" "),t._v("\n      首页\n    ")]),t._v(" "),n("m-tabbar-item",{attrs:{id:"book",isRouter:""}},[n("i",{staticClass:"iconfont icon-shoucang",staticStyle:{color:"#26a2ff"},slot:"icon-active"}),t._v(" "),n("i",{staticClass:"iconfont icon-shoucang",slot:"icon-normal"}),t._v("\n      图书\n    ")]),t._v(" "),n("m-tabbar-item",{attrs:{id:"movie",isRouter:""}},[n("i",{staticClass:"iconfont icon-guanzhu",staticStyle:{color:"#26a2ff"},slot:"icon-active"}),t._v(" "),n("i",{staticClass:"iconfont icon-guanzhu",slot:"icon-normal"}),t._v("\n      电影\n    ")]),t._v(" "),n("m-tabbar-item",{attrs:{id:"me",isRouter:""}},[n("i",{staticClass:"iconfont icon-wode",staticStyle:{color:"#26a2ff"},slot:"icon-active"}),t._v(" "),n("i",{staticClass:"iconfont icon-wode",slot:"icon-normal"}),t._v("\n      我的\n    ")])],1):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"m-tabbar-item",class:{"is-active":t.isActive},on:{click:t.goToRouter}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isActive,expression:"!isActive"}],staticClass:"m-tabbar-item-icon"},[t._t("icon-normal")],2),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"m-tabbar-item-icon"},[t._t("icon-active")],2),t._v(" "),n("span",{staticClass:"m-tabbar-item-text"},[t._t("default")],2)])},staticRenderFns:[]}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=(n.n(o),n(18)),a=n.n(i),c=n(14),r=(n.n(c),n(19)),s=n.n(r),u=n(0),l=n(13),m=n.n(l),d=n(22),f=n(17),b=(n.n(f),n(16)),h=(n.n(b),n(15)),v=(n.n(h),n(21)),p=n(20),g=n.n(p);u.default.use(s.a),u.default.directive("goback",{bind:function(t){t.addEventListener("click",function(){window.history.go(-1)},!1)}}),u.default.use(g.a),u.default.use(a.a);var I=window.sessionStorage;I.clear();var w=1*I.getItem("count")||0;I.setItem("/",0),function(t){t.forEach(function(t,e){I.setItem(t,e+1),I.setItem("count",e+1),w=e+1})}(["/index","/book","/movie","/me","/indexsub"]),v.a.beforeEach(function(t,e,n){d.a.commit("GOBACKACTION",t.meta.gobackShow),d.a.commit("TABBERSHOW",t.meta.tabberShow);var o=I.getItem(t.path),i=I.getItem(e.path);o?!i||parseInt(o,10)>parseInt(i,10)||"0"===o&&"0"===i?d.a.commit("updateDirection",{direction:"forward"}):d.a.commit("updateDirection",{direction:"reverse"}):(++w,I.setItem("count",w),"/"!==t.path&&I.setItem(t.path,w),d.a.commit("updateDirection",{direction:"forward"})),setTimeout(function(){var e=document.querySelector("."+t.name);e&&(e.scrollTop=t.meta.scrollNum)}),n()}),v.a.afterEach(function(t,e){var n=document.querySelector(".view");n&&(e.meta.scrollNum=n.scrollTop)}),new u.default({render:function(t){return t(m.a)},router:v.a,store:d.a}).$mount("#app-box")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(66),i=n.n(o),a=n(7),c=n(26),r=n.n(c),s=n(25),u=n.n(s);e.default={data:function(){return{select:"index",selected:"我的"}},computed:i()({},n.i(a.a)({gobackShow:function(t){return t.rouSta.gobackShow},tabberShow:function(t){return t.rouSta.tabberShow},loadingShow:function(t){return t.rouSta.loadingShow},direction:function(t){return t.rouSta.direction}})),mounted:function(){},components:{mTabbar:r.a,mTabbarItem:u.a},methods:{jump:function(){this.$router.push("/index")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{id:{type:String},isRouter:{type:Boolean,default:!1}},computed:{isActive:function(){if(this.$parent.value===this.id)return!0}},methods:{goToRouter:function(){this.$parent.$emit("input",this.id),this.isRouter&&this.$router.push(this.id)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{},computed:{value:function(){return this.$route.name}}}}],[67]);
//# sourceMappingURL=app.2ddb7c5da9a5a19219ad.js.map