(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{451:function(e,t,r){"use strict";r.r(t);r(140),r(139);var a=r(55),n=r(141),s=r(416),i=r.n(s),o={name:"edit-user",props:{info:{type:Object,default:function(){}}},data:function(){return{formData:{}}},created:function(){this.isEdit&&(this.formData=Object(n.a)({},this.info))},methods:{confirm:function(e,t){var r=this;return Object(a.a)(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s={},!r.isEdit){a.next=7;break}return a.next=4,i.a.post("/update-user",Object(n.a)({},e));case 4:s=a.sent,a.next=10;break;case 7:return a.next=9,i.a.post("/add-user",Object(n.a)({},e));case 9:s=a.sent;case 10:200===s.status&&1===(s=s.data).code&&(r.$message.success(r.isEdit?"编辑用户成功":"添加用户成功"),r.$emit("refresh-table"),r.$emit("close")),t();case 12:case"end":return a.stop()}}),a)})))()}},computed:{formItems:function(){return[{type:"input",label:"姓名",prop:"name",trim:!0,required:!0},{type:"radio",label:"性别",prop:"sex",options:[{label:"男",value:1},{label:"女",value:0}],required:!0},{type:"input",label:"地址",prop:"address"},{type:"date",label:"出生日期",prop:"birth",attrs:{"value-format":"timestamp"},required:!0},{slot:"describe",label:"描述",prop:"describe"}]},rules:function(){return{address:{required:!0,message:"请输入地址",trigger:"change"}}},isEdit:function(){return Object.keys(this.info).length}}},u=r(21),c=Object(u.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p-dialog-form",e._g({attrs:{title:e.isEdit?"编辑用户":"添加用户","form-items":e.formItems,width:"500px",rules:e.rules,originData:e.formData},on:{confirm:e.confirm},scopedSlots:e._u([{key:"describe",fn:function(t){var a=t.form,n=t.item;return[r("el-form-item",{attrs:{label:n.label,prop:n.prop}},[r("el-input",{attrs:{type:"textarea"},model:{value:a[n.prop],callback:function(t){e.$set(a,n.prop,t)},expression:"form[item.prop]"}})],1)]}}]),model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}},e.$listeners))}),[],!1,null,"3ae17963",null);t.default=c.exports}}]);