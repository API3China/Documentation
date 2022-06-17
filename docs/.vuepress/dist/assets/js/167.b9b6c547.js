(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{733:function(t,e,n){"use strict";n.r(e);var s=n(15),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"frontmatter-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),n("VersionWarning"),t._v(" "),n("TocHeader"),t._v(" "),n("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),t._v(" "),n("p",[t._v("Airnode serves APIs to blockchains according to "),n("RouterLink",{attrs:{to:"/airnode/pre-alpha/airnode/specifications/ois.html"}},[t._v("Oracle Integration Specifications (OIS)")]),t._v(". APIs are composed of "),n("RouterLink",{attrs:{to:"/airnode/pre-alpha/airnode/specifications/ois.html#_4-4-paths"}},[t._v("operations")]),t._v(", which represent individual functionalities that an API offers. OIS maps each API operation to an "),n("RouterLink",{attrs:{to:"/airnode/pre-alpha/airnode/specifications/ois.html#_5-endpoints"}},[t._v("endpoint")]),t._v(", which can be thought of as an Airnode operation. The endpoints that an Airnode will serve over the request–response protocol are listed under "),n("RouterLink",{attrs:{to:"/airnode/pre-alpha/airnode/specifications/config-json.html#triggers"}},[t._v("triggers")]),t._v(" of "),n("RouterLink",{attrs:{to:"/airnode/pre-alpha/airnode/specifications/config-json.html"}},[t._v("config.json")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"endpointid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#endpointid"}},[t._v("#")]),t._v(" "),n("code",[t._v("endpointId")])]),t._v(" "),n("p",[n("code",[t._v("endpointId")]),t._v(" identifies specific endpoints that a provider serves, and is computed in JS (using ethers.js) as follows:")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("endpointId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ethers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ethers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaultAbiCoder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OIS_TITLE")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENDPOINT_NAME")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("Note that this means that "),n("code",[t._v("endpointId")]),t._v("s are not unique, and two providers can serve equivalent endpoints using the same ID (in fact, this is the desired outcome). This is not an issue, as requests are made with a "),n("code",[t._v("providerId")]),t._v(" and "),n("code",[t._v("endpointId")]),t._v(" pair.")]),t._v(" "),n("p",[t._v("This convention of determining "),n("code",[t._v("endpointId")]),t._v("s is not enforced at the protocol-level. For example, the provider can choose to generate their "),n("code",[t._v("endpointId")]),t._v("s randomly, and as long as their requesters use correct "),n("code",[t._v("endpointId")]),t._v("s, this will not be an issue.")]),t._v(" "),n("h2",{attrs:{id:"authorizers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authorizers"}},[t._v("#")]),t._v(" Authorizers")]),t._v(" "),n("p",[t._v("Providers can assign a list of authorizers to their endpoints. See the "),n("RouterLink",{attrs:{to:"/airnode/pre-alpha/protocols/request-response/authorizer.html"}},[t._v("section about authorizers")]),t._v(" for more details.")],1)],1)}),[],!1,null,null,null);e.default=a.exports}}]);