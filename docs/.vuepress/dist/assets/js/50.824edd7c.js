(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{751:function(e,t,a){"use strict";a.r(t);var s={name:"table-demo-02",data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},computed:{columns:function(){return[{label:"日期",attrs:{width:180},slotName:"date"},{label:"姓名",attrs:{width:180},slotName:"name"},{label:"地址",prop:"address"}]}}},n=a(18),r=Object(n.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pl-table",{attrs:{data:e.tableData,columns:e.columns},scopedSlots:e._u([{key:"date",fn:function(t){var s=t.row;return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(s.date))])]}},{key:"name",fn:function(t){var s=t.row;return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("p",[e._v("姓名: "+e._s(s.name))]),e._v(" "),a("p",[e._v("住址: "+e._s(s.address))]),e._v(" "),a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[e._v(e._s(s.name))])],1)])]}}])})}),[],!1,null,null,null);t.default=r.exports}}]);