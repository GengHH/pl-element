(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{443:function(t,e,a){},486:function(t,e,a){"use strict";var n=a(443);a.n(n).a},513:function(t,e,a){"use strict";var n=a(514),i=a(515),o=a(485),c=a.n(o),s={components:{PageEdit:n.a,PageNav:i.a},props:["sidebarItems"],mounted:function(){var t=this;this.init(location.pathname),this.$router.afterEach((function(e,a){e.path!==a.path&&(console.log(e.path,a.path,"页面切换了"),t.init(e.path))}))},methods:{init:function(t){var e=new c.a({clientID:"bd729577007e51c7024e",clientSecret:"2ffab37b6220d89b521a4c2e3d1093bf7ca86ec1",repo:"p-element",owner:"pangao66",admin:["pangao66"],id:location.pathname,body:location.pathname,distractionFreeMode:!1}),a=document.getElementById("gitalk-container");a&&(a.innerHTML=""),e.render("gitalk-container")}}},r=(a(486),a(1)),d=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page"},[t._t("top"),t._v(" "),a("Content",{staticClass:"theme-default-content"}),t._v(" "),a("PageEdit"),t._v(" "),a("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom"),t._v(" "),a("div",{attrs:{id:"gitalk-container"}})],2)}),[],!1,null,null,null);e.a=d.exports}}]);