(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{464:function(t,s,a){"use strict";a.r(s);var n=a(56),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器"}},[t._v("#")]),t._v(" 选择器")]),t._v(" "),a("h3",{attrs:{id:"类型选择器-h1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型选择器-h1"}},[t._v("#")]),t._v(" 类型选择器 h1 {}")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"通配选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通配选择器"}},[t._v("#")]),t._v(" 通配选择器  * {}")]),t._v(" "),a("p",[t._v("全局选择器 。 由 * 带指的， 它选中了文档中的所有内容。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("更加易读\narticle *:first-child")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"类选择器-box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类选择器-box"}},[t._v("#")]),t._v(" 类选择器 .box {}")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])]),a("h3",{attrs:{id:"id选择器-box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#id选择器-box"}},[t._v("#")]),t._v(" ID选择器 #box {}")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])]),a("h3",{attrs:{id:"标签属性选择器-a-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签属性选择器-a-title"}},[t._v("#")]),t._v(" 标签属性选择器 a[title] {}")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("1. [attr]    a[title]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v('2. [attr=value]  a[href="https://www.x.com"]')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n3. [attr~=value]  p[class~="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"special"')]),t._v("]  会匹配一个 special 类，也可以匹配一列用空格分开、包含a类的值。\n\n4. [attr|=value]  div[lang|="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zh"')]),t._v("]  匹配 zh 或者 以 zh 开头的。\n\n5. [attr^=value]  li[class^="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"box-"')]),t._v("]  匹配所有开头位 box 的\n\n6. [attr$=value] li[class$="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-box"')]),t._v("] 匹配结尾为 -box 的。\n\n7. [attr*=value] li[class*="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"box"')]),t._v("] 会匹配任何出现 box 的。\n\n8. [attr="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),t._v(" i]   会忽略大小写进行匹配。\n")])])]),a("h3",{attrs:{id:"伪类选择器-p-first-child"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪类选择器-p-first-child"}},[t._v("#")]),t._v(" 伪类选择器 p:first-child {}")]),t._v(" "),a("p",[t._v("用于选择处于特定状态的元素, 比如当它们是这一类型的第一个元素时，或者是当鼠标指针悬浮在元素上面的时候。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("1. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("active  在用户激活（例如点击）元素的时候匹配。\n2. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("checked 匹配处于选中状态的单选或者复选框。\n3. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("disabled 匹配处于关闭状态的用户界面元素\n4. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first-child \n5. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first-of-type\n6. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("focus\n7. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hover\n8. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("last-child\n9. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("not\n10. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nth-child\n11. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nth-of-type\n12. only-child\n13. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("visited\n\n\n")])])]),a("h3",{attrs:{id:"伪元素选择器-p-first-child"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪元素选择器-p-first-child"}},[t._v("#")]),t._v(" 伪元素选择器 p::first-child {}")]),t._v(" "),a("p",[t._v("伪元素以类似方式表现，不过表现得是像你往标记文本中加入全新的HTML元素一样.而不是向现有的元素上应用类。伪元素开头为双冒号::。")]),t._v(" "),a("p",[t._v("一些早期的伪元素曾使用单冒号的语法, 现代的浏览器为了保持后向兼容，支持早期的带有单双冒号语法的伪元素。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("1. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("after\n2. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("before\n3. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first-letter\n4. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first-line \n5. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("selection 匹配文档中被选择的那部分。\n\n")])])]),a("ul",[a("li",[t._v("组合使用: article p:first-child::first-line {}")])]),t._v(" "),a("h3",{attrs:{id:"关系选择器-后代选择器-article-p"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系选择器-后代选择器-article-p"}},[t._v("#")]),t._v(" 关系选择器： 后代选择器 article p {}")]),t._v(" "),a("h3",{attrs:{id:"关系选择器-子代选择器-article-p"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系选择器-子代选择器-article-p"}},[t._v("#")]),t._v(" 关系选择器： 子代选择器 article > p {}")]),t._v(" "),a("h3",{attrs:{id:"关系选择器-相邻兄弟选择器-h1-p"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系选择器-相邻兄弟选择器-h1-p"}},[t._v("#")]),t._v(" 关系选择器： 相邻兄弟选择器 h1 + p {}")]),t._v(" "),a("h3",{attrs:{id:"关系选择器-通用兄弟选择器-h1-p"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系选择器-通用兄弟选择器-h1-p"}},[t._v("#")]),t._v(" 关系选择器： 通用兄弟选择器  h1 ~ p {}")])])}),[],!1,null,null,null);s.default=r.exports}}]);