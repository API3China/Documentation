(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{781:function(e,a,t){"use strict";t.r(a);var s=t(9),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("TitleSpan",[e._v("Specifications")]),e._v(" "),t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),t("VersionWarning"),e._v(" "),t("TocHeader"),e._v(" "),t("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),t("p",[e._v("A requester can pass request parameters either by referencing a\n"),t("RouterLink",{attrs:{to:"/airnode/v0.2/concepts/template.html"}},[e._v("template")]),e._v(" that contains them, or as an argument of\nthe request-making methods of "),t("RouterLink",{attrs:{to:"/airnode/v0.2/concepts/#airnoderrp-sol"}},[e._v("Airnode.sol")]),e._v(". In\neither case, these parameters are encoded in a "),t("code",[e._v("bytes")]),e._v("-type variable using\n"),t("RouterLink",{attrs:{to:"/airnode/v0.2/reference/specifications/airnode-abi-specifications.html"}},[e._v("Airnode ABI")]),e._v(". There are two types of parameters:")],1),e._v(" "),t("ol",[t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.2/reference/specifications/ois.html#_5-5-parameters"}},[e._v("Endpoint parameters")]),e._v(" are mapped to API operation\nparameters.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.2/reference/specifications/ois.html#_5-4-reservedparameters"}},[e._v("Reserved parameters")]),e._v(" signal the provider to\nperform a specific operation while fulfilling the request. Reserved parameter\nnames start with "),t("code",[e._v("_")]),e._v(".")],1)]),e._v(" "),t("h2",{attrs:{id:"type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" "),t("code",[e._v("_type")])]),e._v(" "),t("p",[e._v("Can be "),t("code",[e._v("int256")]),e._v(", "),t("code",[e._v("bool")]),e._v(", or "),t("code",[e._v("bytes32")]),e._v(". Signifies what Solidity type the API\nresponse will be typecast to before fulfillment. See the\n"),t("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/v0.2/packages/airnode-adapter#conversion-behaviour",target:"_blank",rel:"noopener noreferrer"}},[e._v("conversion behavior docs"),t("OutboundLink")],1),e._v("\nfor details.")]),e._v(" "),t("h2",{attrs:{id:"path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" "),t("code",[e._v("_path")])]),e._v(" "),t("p",[e._v("Assuming that the API response will be a JSON object, defines the field to be\nused to fulfill the request using dot notation. For example, if the API returns")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "field1": {\n    "fieldA": [\n      "valueA1",\n      "valueA2"\n    ],\n    "fieldB: "valueB"\n  },\n  "field2": {\n    "fieldZ": "valueZ"\n  }\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("p",[e._v("and "),t("code",[e._v("_path")]),e._v(" is "),t("code",[e._v("field1.fieldA.1")]),e._v(", the response will be "),t("code",[e._v("valueA2")]),e._v(".")]),e._v(" "),t("p",[e._v("If the response is a literal value (i.e., not a JSON object) and "),t("code",[e._v("_path")]),e._v(" is not\nprovided, Airnode will use the literal value to fulfill the request.")]),e._v(" "),t("h2",{attrs:{id:"times"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#times"}},[e._v("#")]),e._v(" "),t("code",[e._v("_times")])]),e._v(" "),t("p",[e._v("If "),t("code",[e._v("_type")]),e._v(" is "),t("code",[e._v("int256")]),e._v(" and a "),t("code",[e._v("_times")]),e._v(" parameter is provided, Airnode multiplies\nthe value returned by the API with the "),t("code",[e._v("_times")]),e._v(" parameter before fulfilling the\nrequest. For example, if the API returns:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "data": "1.238",\n  "apiVersion": "1.0.4"\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("and the reserved parameters are")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("_type: int256\n_path: data\n_times: 100\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("the request will be fulfilled with the value "),t("code",[e._v("123")]),e._v(". Note that the number gets\nmultiplied by "),t("code",[e._v("100")]),e._v(", and then gets floored.")]),e._v(" "),t("h2",{attrs:{id:"relay-metadata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relay-metadata"}},[e._v("#")]),e._v(" "),t("code",[e._v("_relay_metadata")])]),e._v(" "),t("p",[e._v("By setting this reserved parameter to a specific version string then Airnode\nwill attach its metadata as request parameters before performing the API call.")]),e._v(" "),t("p",[e._v("For example, "),t("code",[e._v("v1")]),e._v(" will add the following request parameters with their\ncorresponding values:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("_airnode_airnode_id: '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',\n_airnode_requester_address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',\n_airnode_sponsor_wallet: '0x1c5b7e13fe3977a384397b17b060Ec96Ea322dEc',\n_airnode_endpoint_id: '0xeddc421714e1b46ef350e8ecf380bd0b38a40ce1a534e7ecdf4db7dbc9319353',\n_airnode_request_id: '0xd1984b7f40c4b5484b756360f56a41cb7ee164d8acd0e0f18f7a0bbf5a353e65',\n_airnode_chain_id: '31337',\n_airnode_chain_type: 'evm',\n_airnode_airnode_rrp: '0x5FbDB2315678afecb367f032d93F642f64180aa3',\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[e._v("Available values: "),t("code",[e._v("v1")]),e._v(".")]),e._v(" "),t("p",[e._v("Learn more about "),t("code",[e._v("_relay_meta_data")]),e._v(" in the "),t("em",[e._v("Concepts and Definitions")]),e._v(" section\n"),t("RouterLink",{attrs:{to:"/airnode/v0.2/concepts/authorization.html"}},[e._v("Authorization")]),e._v(" doc.")],1)],1)}),[],!1,null,null,null);a.default=r.exports}}]);