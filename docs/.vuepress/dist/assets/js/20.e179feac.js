(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{625:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(41),r(150),r(66);function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},741:function(e,t,r){"use strict";r.r(t);r(27),r(232);var n=r(625),a=(r(151),r(67)),o=r(623),s=r.n(o),i=(r(63),{designer:"设计",programmer:"程序员",testers:"测试",product:"产品"}),l={0:"女",1:"男"},c={name:"search-list-demo-02",data:function(){return{formData:{id:"",name:"",birth:"",sex:"",job:"",testValue:[]},visible:!1}},methods:{getTableData:function(e,t){return Object(a.a)(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(e.sex,Object(n.a)(e,["sex"]),a=[],o=0;o<1e4;o++)a.push({id:o,address:"地址".concat(o),fixedRight:o});t({data:a,total:100});case 4:case"end":return r.stop()}}),r)})))()},deleteData:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.post("/delete-user",{id:e.id});case 2:200===r.sent.status&&(t.$message.success("删除成功"),t.$refs.plSearchList.search());case 4:case"end":return r.stop()}}),r)})))()},handleChange:function(){}},computed:{columns:function(){return[{prop:"id",label:"id"},{prop:"address",label:"地址",attrs:{minWidth:140}},{prop:"birth",label:"生日",formatter:"date"},{prop:"job",label:"职位",dict:i,options:i},{prop:"sex",label:"性别",tagMap:{1:{text:"男",type:"primary"},0:{text:"女",type:"success"}}},{label:"固定右边列",prop:"fixedRight",attrs:{minWidth:180,fixed:"right"}}]},formItems:function(){return[{comp:"input",prop:"id",label:"id"},{comp:"input",prop:"name",label:"姓名"},{comp:"date",prop:"birth",label:"生日"},{comp:"select",prop:"job",label:"职位",options:i},{comp:"select",prop:"sex",label:"性别",options:l}]}}},p=r(18),u=Object(p.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-dialog",{attrs:{visible:e.visible,fullscreen:""},on:{close:function(t){e.visible=!1}}},[r("pl-search-list",{ref:"plSearchList",attrs:{columns:e.columns,"form-items":e.formItems,"show-pager":!1,"table-config":{virtualScroll:!0}},on:{"get-table-data":e.getTableData},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}})],1),e._v(" "),r("el-alert",{attrs:{type:"warning",closable:!1,center:""}},[e._v("此例请全屏查看")]),e._v(" "),r("el-button",{on:{click:function(t){e.visible=!0}}},[e._v("全屏展示")])],1)}),[],!1,null,"bcdd55b0",null);t.default=u.exports}}]);