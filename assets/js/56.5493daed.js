(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{455:function(t,a,s){"use strict";s.r(a);var e=s(56),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"translate-和-绝对定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#translate-和-绝对定位"}},[t._v("#")]),t._v(" translate 和 绝对定位")]),t._v(" "),s("p",[t._v("使用 JavaScript 做动画的时候， 为了操作盒子移动，需要给定盒子 position: absolute; 这样子就可以操作盒子的 top、left 了。")]),t._v(" "),s("h3",{attrs:{id:"那么为什么还需要使用-translate-呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#那么为什么还需要使用-translate-呢"}},[t._v("#")]),t._v(" 那么为什么还需要使用 translate 呢？")]),t._v(" "),s("p",[t._v("在 PC 端上，我们使用绝对定位来做移动是完全没问题的，也可以使用 translate.")]),t._v(" "),s("p",[t._v("因为 PC 上使用绝对定位使用 CPU，触发重排和重绘，浏览器依然可以以每秒60帧来运行，我们肉眼看不出来。")]),t._v(" "),s("p",[t._v("但是放到移动端上，触发浏览器重拍和重绘，造成页面的卡顿。")]),t._v(" "),s("p",[t._v("使用 translate 不会触发重排或重绘，但会触发合成。会使得元素创建一个 GPU 层（图层），这样子位移也只是在你自己的图层上，不会影响整个页面布局。translate 效率更高，绘制时间端，更加流畅。")])])}),[],!1,null,null,null);a.default=r.exports}}]);