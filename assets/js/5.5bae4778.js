(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{455:function(e,t,r){var a=r(2),n=r(456);a({global:!0,forced:parseInt!=n},{parseInt:n})},456:function(e,t,r){var a=r(5),n=r(161).trim,o=r(162),s=a.parseInt,c=/^[+-]?0[Xx]/,i=8!==s(o+"08")||22!==s(o+"0x16");e.exports=i?function(e,t){var r=n(String(e));return s(r,t>>>0||(c.test(r)?16:10))}:s},563:function(e,t,r){"use strict";r.r(t);r(32),r(455),r(25),r(247),r(33);var a=r(27),n=r(173),o=(r(160),r(73)),s=r(452),c=r.n(s),i=r(3),p={designer:"设计",programmer:"程序员",testers:"测试",product:"产品"},l={0:"女",1:"男"},u={name:"search-list-demo-01",data:function(){return{formData:{id:"",name:"",birth:"",sex:"",job:""}}},methods:{getTableData:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function r(){var o,s,p,l,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.currentPage,s=e.pageSize,p=e.sex,l=Object(n.a)(e,["currentPage","pageSize","sex"]),r.next=3,c.a.post("/search-table",Object(i.b)(Object(a.a)({currentPage:o,pageSize:s,sex:p?parseInt(p):""},l)));case 3:200===(u=r.sent).status&&(u=u.data,t({data:u.list,total:u.total}));case 5:case"end":return r.stop()}}),r)})))()},deleteData:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.post("/delete-user",{id:e.id});case 2:200===r.sent.status&&(t.$message.success("删除成功"),t.$refs.plSearchList.search());case 4:case"end":return r.stop()}}),r)})))()}},computed:{columns:function(){var e=this;return[{prop:"index",label:"序号",type:"index"},{prop:"id",label:"id",formType:"input"},{prop:"name",label:"姓名",attrs:{width:60},formType:"input"},{prop:"address",label:"地址",attrs:{minWidth:140}},{prop:"birth",label:"生日",formatter:"date",formType:"date"},{prop:"job",label:"职位",dict:p,formType:"select",options:p},{prop:"sex",label:"性别",formType:"select",options:l,tagMap:{1:{text:"男",type:"primary"},0:{text:"女",type:"success"}}},{actions:[{action:"del",text:"删除",btnConfig:{type:"danger"},confirm:function(t){var r=t.row;t.col,t.index;e.deleteData(r)}},{text:"查看",onClick:function(t){var r=t.row;t.col,t.index;e.$message.success(JSON.stringify(r))}},{text:"编辑",onClick:function(e){e.row,e.col,e.index}}],label:"操作",attrs:{minWidth:180}}]},formItems:function(){var e=[];return this.columns.forEach((function(t){if(t.formType||t.formSlotName){var r=t.formType,a=t.label,n=t.prop,o=t.formSlotName,s=t.options,c=t.formAttrs;e.push({label:a,prop:n,slotName:o,options:s,attrs:c,comp:r})}})),e}}},f=r(1),m=Object(f.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pl-search-list",{ref:"plSearchList",attrs:{columns:e.columns,"form-items":e.formItems},on:{"get-table-data":e.getTableData},scopedSlots:e._u([{key:"handle",fn:function(t){t.row;return[r("pl-button",[e._v("fjoaj")])]}}]),model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}})}),[],!1,null,"6c8145bc",null);t.default=m.exports}}]);