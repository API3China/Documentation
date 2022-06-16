(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{1059:function(e,t,s){"use strict";s.r(t);var a=s(9),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("TitleSpan",[e._v("OIS")]),e._v(" "),s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),s("VersionWarning"),e._v(" "),s("TocHeader"),e._v(" "),s("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,4]}}),e._v(" "),s("p",[e._v("Reserved parameters are part of an OIS object as part of the "),s("code",[e._v("endpoints")]),e._v(" field\n(Airnode endpoints) and warrant a more in-depth explanation. They are part of an\nAirnode's defined endpoints in an OIS object but do not map to operation\nparameters (API parameters). They are used by Airnode for special purposes.")]),e._v(" "),s("p",[e._v("A requester can pass request parameters either by referencing a\n"),s("RouterLink",{attrs:{to:"/airnode/v0.5/concepts/template.html"}},[e._v("template")]),e._v(" that contains them, or as an\nargument of the request-making methods of\n"),s("RouterLink",{attrs:{to:"/airnode/v0.5/concepts/#airnoderrp-sol"}},[e._v("AirnodeRrp.sol")]),e._v(". In either case, these\nparameters are encoded using the\n"),s("RouterLink",{attrs:{to:"/airnode/v0.5/reference/specifications/airnode-abi-specifications.html"}},[e._v("AirnodeRrp ABI")]),e._v(".\nThere are two types of parameters which are part of the "),s("RouterLink",{attrs:{to:"/ois/v1.0.0/"}},[e._v("OIS")]),e._v("\nobject:")],1),e._v(" "),s("ol",[s("li",[s("RouterLink",{attrs:{to:"/ois/v1.0.0/ois.html#_5-5-parameters"}},[e._v("Endpoint parameters")]),e._v(" - Airnode endpoint\nparameters are mapped to API operation parameters.")],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ois/v1.0.0/ois.html#_5-4-reservedparameters"}},[e._v("Reserved parameters")]),e._v(" - Reserved\nparameters perform a specific operation on the response before fulfilling the\nrequest. Reserved parameter names start with "),s("code",[e._v("_")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" "),s("code",[e._v("_type")])]),e._v(" "),s("p",[e._v("Signifies what Solidity type the API response will be encoded to before\nfulfillment.")]),e._v(" "),s("p",[e._v("Support is provided for most common\n"),s("a",{attrs:{href:"https://docs.soliditylang.org/en/latest/abi-spec.html#types",target:"_blank",rel:"noopener noreferrer"}},[e._v("solidity types"),s("OutboundLink")],1),e._v(",\nbut the following are not supported.")]),e._v(" "),s("ul",[s("li",[e._v("Custom bits integer types - e.g. "),s("code",[e._v("uint32")]),e._v(" or "),s("code",[e._v("uint8")])]),e._v(" "),s("li",[e._v("Fixed point decimal numbers - e.g. "),s("code",[e._v("fixed128x18")]),e._v(" or "),s("code",[e._v("ufixed128x18")])]),e._v(" "),s("li",[e._v("Custom fixed size bytes - e.g. "),s("code",[e._v("bytes4")])]),e._v(" "),s("li",[e._v("Tuples - e.g. "),s("code",[e._v("(int256, string)")])])]),e._v(" "),s("p",[e._v('On top of supported solidity types, there is support for a few "artificial"\ntypes created for special purposes that would otherwise be hard or impossible to\nrepresent.')]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ois/v1.0.0/reserved-parameters.html#string32-encoded-to-bytes32-on-chain"}},[s("code",[e._v("string32")])])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ois/v1.0.0/reserved-parameters.html#timestamp-encoded-to-uint256-on-chain"}},[s("code",[e._v("timestamp")])])],1)]),e._v(" "),s("p",[e._v("You can also encode multiple values for one single API call - but this impacts\nall of the reserved parameters and is explained in the\n"),s("RouterLink",{attrs:{to:"/ois/v1.0.0/reserved-parameters.html#encoding-multiple-values"}},[e._v("Encoding Multiple Values")]),e._v("\nsection below.")],1),e._v(" "),s("h3",{attrs:{id:"conversion-and-encoding-behavior"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conversion-and-encoding-behavior"}},[e._v("#")]),e._v(" Conversion and encoding behavior")]),e._v(" "),s("p",[e._v("Before the API response value is encoded for on chain use, it is parsed and\nconverted. The conversion behaviors for any given type is explained in depth in\nthe\n"),s("RouterLink",{attrs:{to:"/airnode/v0.5/reference/packages/adapter.html#conversion"}},[e._v("adapter package docs")]),e._v(".")],1),e._v(" "),s("p",[e._v("The converted value is then encoded internally by\n"),s("a",{attrs:{href:"https://docs.ethers.io/v5/api/utils/abi/coder/#AbiCoder",target:"_blank",rel:"noopener noreferrer"}},[e._v("ethers ABI Coder"),s("OutboundLink")],1),e._v("\nusing the following")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("ethers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("defaultAbiCoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("solidityType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"supported-primitive-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-primitive-values"}},[e._v("#")]),e._v(" Supported Primitive Values")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("int256")])]),e._v(" "),s("li",[s("code",[e._v("uint256")])]),e._v(" "),s("li",[s("code",[e._v("bool")])]),e._v(" "),s("li",[s("code",[e._v("bytes32")])]),e._v(" "),s("li",[s("code",[e._v("address")])]),e._v(" "),s("li",[s("code",[e._v("bytes")])]),e._v(" "),s("li",[s("code",[e._v("string")])])]),e._v(" "),s("h4",{attrs:{id:"string32-encoded-to-bytes32-on-chain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string32-encoded-to-bytes32-on-chain"}},[e._v("#")]),e._v(" string32 (encoded to "),s("code",[e._v("bytes32")]),e._v(" on chain)")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("string32")]),e._v(" is an artificial type that is not supported by solidity. It is\ninstead encoded to "),s("code",[e._v("bytes32")]),e._v(" and provides a cheaper alternative to the regular\n"),s("code",[e._v("string")]),e._v(" type for values with less than 32 characters.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Limitations")]),e._v(" "),s("p",[e._v("While using "),s("code",[e._v("string32")]),e._v(" is more efficient, decoding the original string from\n"),s("code",[e._v("bytes32")]),e._v(" on chain is both difficult and expensive.")]),e._v(" "),s("p",[e._v("Also bear in mind that this type is able to encode only strings shorter than 32\ncharacters. If the value is longer, it will be trimmed and only first 31\ncharacters will be encoded.")])]),e._v(" "),s("h4",{attrs:{id:"timestamp-encoded-to-uint256-on-chain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timestamp-encoded-to-uint256-on-chain"}},[e._v("#")]),e._v(" timestamp (encoded to "),s("code",[e._v("uint256")]),e._v(" on chain)")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("timestamp")]),e._v(" is an artificial type that is not supported by solidity. It is\ninstead encoded to "),s("code",[e._v("uint256")]),e._v(' and specifies the UNIX timestamp value at the time\nwhen the transaction was encoded. You can use this value on chain to check the\n"freshness" of the Airnode response. This might be useful in certain scenarios,\nbecause Airnode cannot guarantee when a particular transaction will be mined on\nchain.')]),e._v(" "),s("p",[e._v("When using the "),s("code",[e._v("timestamp")]),e._v(" type, the corresponding "),s("code",[e._v("_path")]),e._v(" and "),s("code",[e._v("_times")]),e._v("\nvariables must be empty strings or not provided.")]),e._v(" "),s("h4",{attrs:{id:"arrays"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arrays"}},[e._v("#")]),e._v(" Arrays")]),e._v(" "),s("p",[e._v('Apart from the primitives defined above as well as all "artificial" types we\ncreated, you are free to use arrays with any of the above. Multidimensional\narrays are supported as well. Solidity allows you to define fixed size arrays,\nwhich are more gas efficient to encode and you can use those as well.')]),e._v(" "),s("p",[e._v("For example")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("int256[]")]),e._v(" - regular integer array")]),e._v(" "),s("li",[s("code",[e._v("uint256[8]")]),e._v(" - unsigned integer array with 8 elements")]),e._v(" "),s("li",[s("code",[e._v("int256[][]")]),e._v(" - 2 dimensional integer array")]),e._v(" "),s("li",[s("code",[e._v("string32[]")]),e._v(" - is an array of "),s("code",[e._v("string32")]),e._v(" values, which will be encoded to\n"),s("code",[e._v("bytes32[]")]),e._v(" on chain")]),e._v(" "),s("li",[s("code",[e._v("string[2][][3]")]),e._v(" - 3 dimensional string array, where first dimension contains\n3 elements, second unboundedly many and last dimension only 2. Notice, that\nthis\n"),s("a",{attrs:{href:"https://ethereum.stackexchange.com/questions/64331/why-is-multidimensional-array-declaration-order-reversed",target:"_blank",rel:"noopener noreferrer"}},[e._v("definition is read backwards"),s("OutboundLink")],1),e._v("\ncompared to C-style languages")])]),e._v(" "),s("h2",{attrs:{id:"path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" "),s("code",[e._v("_path")])]),e._v(" "),s("p",[e._v("Assuming that the API response will be a JSON object, defines the field to be\nused to fulfill the request using dot notation. For example, if the API returns")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "field1": {\n    "fieldA": [\n      "valueA1",\n      "valueA2"\n    ],\n    "fieldB: "valueB"\n  },\n  "field2": {\n    "fieldZ": "valueZ"\n  }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("p",[e._v("and "),s("code",[e._v("_path")]),e._v(" is "),s("code",[e._v("field1.fieldA.1")]),e._v(", the response will be "),s("code",[e._v("valueA2")]),e._v(".")]),e._v(" "),s("p",[e._v("If the response is a literal value (i.e., not a JSON object) and "),s("code",[e._v("_path")]),e._v(" is not\nprovided or is an empty string (needed for\n"),s("RouterLink",{attrs:{to:"/ois/v1.0.0/reserved-parameters.html#encoding-multiple-values"}},[e._v("encoding multiple values")]),e._v("),\nAirnode will use the API response itself to fulfill the request.")],1),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Beware the separator")]),e._v(" "),s("p",[e._v("Make sure the keys in the path of the API response do not contain "),s("code",[e._v(".")]),e._v(", because\nit will be incorrectly considered as a separator.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "strange.key": "123"\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("The "),s("code",[e._v("_path")]),e._v(" defined as "),s("code",[e._v('"strange.key"')]),e._v(" will not work. As workaround you can\n"),s("RouterLink",{attrs:{to:"/ois/v1.0.0/reserved-parameters.html#escaping-separators"}},[e._v("escape the separator")]),e._v(".")],1)]),e._v(" "),s("h3",{attrs:{id:"escaping-separators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#escaping-separators"}},[e._v("#")]),e._v(" Escaping Separators")]),e._v(" "),s("p",[e._v("In rare cases, when the "),s("code",[e._v("_path")]),e._v(" to the API response would contain "),s("code",[e._v(",")]),e._v(" or "),s("code",[e._v(".")]),e._v("\n(comma or a dot) things get a bit complicated. Those symbols have a very\nspecific meaning when parsing the reserved parameters and they need to be\nescaped if they are to be considered as literals. For example, if the API\nprovider response looks like the following")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "very,strange.key": "123"\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("Then you need to escape those symbols, in this case\n"),s("code",[e._v('_path="very//,strange\\\\.key"')]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"times"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#times"}},[e._v("#")]),e._v(" "),s("code",[e._v("_times")])]),e._v(" "),s("p",[e._v("If "),s("code",[e._v("_type")]),e._v(" is "),s("code",[e._v("int256")]),e._v(" or "),s("code",[e._v("uint256")]),e._v(" and a valid "),s("code",[e._v("_times")]),e._v(" parameter is provided\nAirnode multiplies the value returned by the API with the "),s("code",[e._v("_times")]),e._v(" parameter\nbefore fulfilling the request. For example, if the API returns:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "data": "1.238",\n  "apiVersion": "1.0.4"\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("and the reserved parameters are")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('_type: int256\n_path: data\n_times: "100"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("the request will be fulfilled with the value "),s("code",[e._v("123")]),e._v(". Note that the number gets\nmultiplied by "),s("code",[e._v("100")]),e._v(", and then gets floored. This is because the result of the\nmultiplication is "),s("RouterLink",{attrs:{to:"/airnode/v0.5/reference/packages/adapter.html"}},[e._v("cast")]),e._v(" to\n"),s("code",[e._v("int256")]),e._v(" afterwards.")],1),e._v(" "),s("p",[e._v("Make sure to pass the "),s("code",[e._v("_times")]),e._v(" parameter as string. Airnode will convert this\nstring to number internally. You can also pass and empty string "),s("code",[e._v('""')]),e._v(" to "),s("code",[e._v("_times")]),e._v("\nparameter - this has the same effect as if the "),s("code",[e._v("_times")]),e._v(" parameter was not\nprovided. However, this is important when\n"),s("RouterLink",{attrs:{to:"/ois/v1.0.0/reserved-parameters.html#encoding-multiple-values"}},[e._v("encoding multiple values")]),e._v(".")],1),e._v(" "),s("p",[e._v("The "),s("code",[e._v("_times")]),e._v(" parameter also works in conjunction with arrays and\nmultidimensional arrays. All elements of the API response array will be\nmultiplied before they are encoded.")]),e._v(" "),s("h2",{attrs:{id:"encoding-multiple-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encoding-multiple-values"}},[e._v("#")]),e._v(" Encoding Multiple Values")]),e._v(" "),s("p",[e._v('Solidity has support for decoding and "destructuring" multiple values. For\nexample')]),e._v(" "),s("div",{staticClass:"language-solidity line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("decodeMultipleParameters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("calldata")]),e._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("pure")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("memory")]),e._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint256")]),e._v(" num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" abi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("The example above demonstrates the decoding on chain of three values of types\n"),s("code",[e._v("string")]),e._v(", "),s("code",[e._v("uint256")]),e._v(" and "),s("code",[e._v("address")]),e._v(" respectively. You can instruct Airnode to\nencode these values using the reserved parameters by separating the values using\n"),s("code",[e._v(",")]),e._v(" (comma). For example using the following combination of reserved parameters")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  _type"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'string,uint256,address'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  _path"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'pathToString,pathToFloat,pathToAddress'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  _times"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("',10000,'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("Airnode will split the reserved parameters by "),s("code",[e._v(",")]),e._v(' into "split values" and ensure\nthey all contain the same number of them. It will extract and convert each of\nthe "split values". Notice, that an '),s("code",[e._v('""')]),e._v(' (empty string) is used to specify that\na certain reserved parameter should not be used for a certain "split value".')]),e._v(" "),s("p",[e._v("For example, let's say the API response looks like this")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"pathToString"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"some string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"pathToFloat"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1234.567"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"pathToAddress"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0xe021...08a74"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v('Airnode will extract and convert each of the "split values" separately')]),e._v(" "),s("ol",[s("li",[e._v("Combination of "),s("code",[e._v('_type="string"')]),e._v(", "),s("code",[e._v('_path="pathToString"')]),e._v(" and "),s("code",[e._v('__times=""')]),e._v("\nresults in "),s("code",[e._v('"some string"')])]),e._v(" "),s("li",[e._v("Combination of "),s("code",[e._v('_type="uint256"')]),e._v(", "),s("code",[e._v('_path="pathToFloat"')]),e._v(" and "),s("code",[e._v('__times="10000"')]),e._v("\nresults in "),s("code",[e._v("12345670")])]),e._v(" "),s("li",[e._v("Combination of "),s("code",[e._v('_type="address"')]),e._v(", "),s("code",[e._v('_path="pathToAddress"')]),e._v(" and "),s("code",[e._v('__times=""')]),e._v("\nresults in "),s("code",[e._v('"0xe021...8a74"')])])]),e._v(" "),s("p",[e._v("All of these values are then together encoded to single bytes value that can be\nsent on chain. You can use\n"),s("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/guides/build-an-airnode/deploying-airnode.html#testing-with-http-gateway"}},[e._v("testing gateway")]),e._v("\nto inspect the raw API response, casting results and the final encoded value.")],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);