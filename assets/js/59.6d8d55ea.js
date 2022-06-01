(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{454:function(t,a,s){"use strict";s.r(a);var e=s(56),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"层叠"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#层叠"}},[t._v("#")]),t._v(" 层叠")]),t._v(" "),s("p",[t._v("当书写 css 时候，什么会对 css 产生影响，实际上会使用哪一条规则。")]),t._v(" "),s("h3",{attrs:{id:"有三个因素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有三个因素"}},[t._v("#")]),t._v(" 有三个因素")]),t._v(" "),s("h4",{attrs:{id:"资源顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源顺序"}},[t._v("#")]),t._v(" 资源顺序.")]),t._v(" "),s("p",[t._v("资源进行加载的相时候，如果权重同，那么处于后面的规则会被应用。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("我们可以利用加载顺序做兼容, css 遇到不认识的/错误的规则会忽略。\n\n.box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("linear-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[t._v("#")]),t._v(" 优先级")]),t._v(" "),s("p",[t._v("权重大的选择器会覆盖掉权重小的选择器。（跟位置无关）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("权重")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("包括")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("占比")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("千位")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("style")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("1000")])]),t._v(" "),s("tr",[s("td",[t._v("百位")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("id")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("0100")])]),t._v(" "),s("tr",[s("td",[t._v("十位")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("类、属性、伪类")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("0010")])]),t._v(" "),s("tr",[s("td",[t._v("个位")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("元素、伪元素")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("0001")])])])]),t._v(" "),s("h5",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("通用选择器 (*)，组合符 (+, >, ~, ' ')，和否定伪类 (:not) 不会影响优先级。")])]),t._v(" "),s("li",[s("p",[t._v("在进行计算时不允许进行进位, 无论多少个类选择器的权重叠加，都不会超过一个 ID 选择器.")])])]),t._v(" "),s("h3",{attrs:{id:"重要程序-important"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重要程序-important"}},[t._v("#")]),t._v(" 重要程序 !important")]),t._v(" "),s("p",[t._v("覆盖所有上面所有优先级计算, 小心的使用 — !important.")]),t._v(" "),s("p",[t._v("覆盖 !important 唯一的办法就是另一个 !important 具有 相同优先级 而且顺序靠后，或者更高优先级。")]),t._v(" "),s("p",[t._v("要小心使用 !important, 改变了层叠的常规工作方式，它会使调试 CSS 问题非常困难")])])}),[],!1,null,null,null);a.default=r.exports}}]);