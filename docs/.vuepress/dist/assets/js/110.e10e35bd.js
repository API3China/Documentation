(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1014:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("TitleSpan",[s._v("开发者")]),s._v(" "),n("h1",{attrs:{id:"frontmatter-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[s._v("#")]),s._v(" "+s._s(s.$frontmatter.title))]),s._v(" "),n("VersionWarning"),s._v(" "),n("TocHeader"),s._v(" "),n("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),s._v(" "),n("p",[s._v("请求者是一个可以触发Airnode 请求的合约。 要做到这一点，请求者需要被赞助，并使用匹配的赞助者 钱包提出请求。 查看 "),n("RouterLink",{attrs:{to:"/airnode/v0.6/grp-developers/requesters-sponsors.html"}},[s._v("Requesters and Sponsors")]),s._v("章节，了解如何赞助请求者，并获取赞助者钱包。")],1),s._v(" "),n("p",[s._v("Airnode 由两个部分组成：链下 "),n("strong",[s._v("Airnode")]),s._v('(例如 "节点")已部署为自托管或云端提供功能，例如AWS)，以及链上的 '),n("strong",[s._v("协议合约")]),s._v(" AirnodeRrp.sol。 请求者调用协议合约，发出带有请求参数的区块链事件。 Airnode 监听AirnodeRrp 合约释放的事件。 在下一个运行周期，Airnode从发出的事件中获得请求参数。 下图和为开发者准备的"),n("RouterLink",{attrs:{to:"/airnode/v0.6/grp-developers/"}},[s._v("Overview")]),s._v(" 文档中的图表说明了整个过程的机制。")],1),s._v(" "),n("p",[s._v("AirnodeRrp协议的设计是灵活的，意在为各种不同的使用案例服务。 关于潜在的设计模式，参见Airnode"),n("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/v0.5/packages/airnode-examples/contracts",target:"_blank",rel:"noopener noreferrer"}},[s._v("requester examples"),n("OutboundLink")],1),s._v("的例子。")]),s._v(" "),n("p",[s._v("忽略整个过程的机制，请求者调用 Airnode 主要集中于两个任务， 以下图表中点A & B所示。")]),s._v(" "),n("ul",[n("li",[n("span",{staticStyle:{color:"green","font-weight":"bold"}},[s._v("1")]),s._v(": 发出请求")]),s._v(" "),n("li",[n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[s._v("2")]),s._v(": 接受并解码 回应")])]),s._v(" "),n("blockquote",[n("p",[n("img",{attrs:{src:a(591),alt:"请求流程"}})]),s._v(" "),n("ol",[n("li",[n("p",{staticClass:"diagram-line",staticStyle:{color:"green"}},[s._v("请求者向AirnodeRrp合同提出请求，将 "),n("code",[s._v("requestId")]),s._v(" 添加到存储，将请求发送到事件日志，并将 "),n("code",[s._v("requestId")]),s._v(" 退回请求者。 在下一个运行周期，Airnode 将检索这个请求。 然后，它通过检查分配给Airnode的授权者合约，验证请求者是否得到授权。")])]),s._v(" "),n("li",[n("p",{staticClass:"diagram-line",staticStyle:{color:"blue"}},[s._v("如果请求获得授权，Airnode 开始响应。 它首先从API收集请求的数据，并调用AirnodeRrp中的"),n("code",[s._v("fulfill()")]),s._v("函数，该函数从存储中删除待定的 "),n("code",[s._v("requestId")]),s._v(" ，并对"),n("code",[s._v("myFulfill()")]),s._v("进行回调。 与相应有关的gas费用>由请求者的赞助者承担。")])])])]),s._v(" "),n("p",[s._v("本文档以下部分讨论了请求者的实施、部署和赞助。")]),s._v(" "),n("h2",{attrs:{id:"步骤-1-继承rrprequestter-sol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步骤-1-继承rrprequestter-sol"}},[s._v("#")]),s._v(" 步骤 #1: 继承RrpRequestter.sol")]),s._v(" "),n("p",[s._v("请求者从"),n("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/v0.5/packages/airnode-protocol/contracts/rrp/requesters/RrpRequester.sol",target:"_blank",rel:"noopener noreferrer"}},[s._v("RrpRequester.sol"),n("OutboundLink")],1),s._v("合约继承过来。 这将向请求者公开AnnodeRrp.sol协议合约，允许其提出Annode请求。")]),s._v(" "),n("div",{staticClass:"language-solidity line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@api3/airnode-protocol/contracts/rrp/requesters/RrpRequester.sol"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("contract")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyRequester")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" RrpRequester "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constructor")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),s._v(" airnodeRrpAddress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("RrpRequester")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("airnodeRrpAddress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("注意构造函数参数"),n("code",[s._v("airnodeRrpAddress")]),s._v("，它是你想使用的区块链上AirnodeRrp.sol协议合约的公共地址。 它是RrpRequestter.sol 用于将其指向AirnodeRrp.sol的。")]),s._v(" "),n("p",[s._v("请参阅参考文献部分的所有"),n("RouterLink",{attrs:{to:"/airnode/v0.6/reference/airnode-addresses.html"}},[s._v("Airnode contract addresses")]),s._v("列表。")],1),s._v(" "),n("h2",{attrs:{id:"步骤-2-实现请求逻辑。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2-实现请求逻辑。"}},[s._v("#")]),s._v(" 步骤 #2: 实现请求逻辑。")]),s._v(" "),n("p",[s._v("AirnodeRrp.sol合约提出了两类要求。 请参阅 "),n("RouterLink",{attrs:{to:"/airnode/v0.6/concepts/request.html"}},[s._v("请求")]),s._v(" 页面获取与每个请求 类型相关的信息。")],1),s._v(" "),n("p",[s._v("这个例子使用了一个"),n("RouterLink",{attrs:{to:"/airnode/v0.6/concepts/request.html#full-request"}},[s._v("full request")]),s._v(" type类型（注意下面代码中的"),n("code",[s._v("airnodeRrp.makeFullRequest")]),s._v("函数调用），它是由请求者自己的函数"),n("code",[s._v("callTheAirnode")]),s._v("调用。 函数"),n("code",[s._v("makeFullRequest")]),s._v(" 要求请求者传递 Airnode 所需的所有参数，来调用其原始API。")],1),s._v(" "),n("p",[s._v("一旦向"),n("code",[s._v("airnodeRrp.makeFullRequest")]),s._v("提出请求，AirnodeRrp.sol合约就会返回一个"),n("code",[s._v("requestId")]),s._v("，确认该请求已被接受并正在执行中。 您的请求者很可能 会追踪所有 "),n("code",[s._v("requestId")]),s._v("。 注意下面代码中的"),n("code",[s._v("incomingFulfillments[requestId] = true;")]),s._v(" 一行，它将"),n("code",[s._v("requestId")]),s._v("存储在一个映射中。 当Airnode在稍后的函数("),n("code",[s._v("airnodeCallback")]),s._v(") 中，以"),n("code",[s._v("requestId")]),s._v(" 和 "),n("code",[s._v("data")]),s._v("响应请求者时，这很有用。")]),s._v(" "),n("div",{staticClass:"language-solidity line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@api3/airnode-protocol/contracts/rrp/requesters/RrpRequester.sol"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("contract")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyRequester")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" RrpRequester "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes32")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" incomingFulfillments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes32")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int256")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" fulfilledData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constructor")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),s._v(" airnodeRrpAddress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("RrpRequester")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("airnodeRrpAddress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("callTheAirnode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),s._v(" airnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes32")]),s._v(" endpointId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),s._v(" sponsor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),s._v(" sponsorWallet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("calldata")]),s._v(" parameters "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Inbound API parameters which may already be ABI encoded")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("external")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes32")]),s._v(" requestId "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" airnodeRrp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("makeFullRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Make the Airnode request")]),s._v("\n          airnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// airnode")]),s._v("\n          endpointId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// endpointId")]),s._v("\n          sponsor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// sponsor's address")]),s._v("\n          sponsorWallet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// sponsorWallet")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// fulfillAddress")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("airnodeCallback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("selector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// fulfillFunctionId")]),s._v("\n          parameters                      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// API parameters")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      incomingFulfillments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("requestId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("airnodeCallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// The AirnodeRrp.sol protocol contract will callback here.")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes32")]),s._v(" requestId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("calldata")]),s._v(" data\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])]),n("h3",{attrs:{id:"请求参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#请求参数"}},[s._v("#")]),s._v(" 请求参数")]),s._v(" "),n("p",[s._v("使用AirnodeRrp.sol合约"),n("code",[s._v("makeFullRequest")]),s._v("函数的完整请求，需要在运行时传递Airnode应用程序所需的所有参数。 这与模板请求不同，模板请求会使用部分或全部所需参数的模板。 了解更多关于使用模板"),n("RouterLink",{attrs:{to:"/airnode/v0.6/grp-developers/call-an-airnode.html#using-templates"}},[s._v("using templates")]),s._v("的信息。")],1),s._v(" "),n("p",[s._v("由于 "),n("code",[s._v("callTheAirnode")]),s._v(" 函数提出了一个"),n("RouterLink",{attrs:{to:"/airnode/v0.6/concepts/request.html#full-request"}},[s._v("full request")]),s._v("，它必须收集以下参数来传递给"),n("code",[s._v("airnodeRrp.makeFullRequest")]),s._v("。")],1),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("airnode")]),s._v(" and "),n("strong",[s._v("endpointId")]),s._v(": 作为一个配对, 它们独特地识别了在某个特定的 Airnode所需要的 端点。")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("赞助者")]),s._v(": "),n("RouterLink",{attrs:{to:"/airnode/v0.6/grp-developers/requesters-sponsors.html#what-is-a-sponsor"}},[s._v("赞助者")]),s._v(" 地址")],1)]),s._v(" "),n("li",[n("p",[n("strong",[s._v("sponsorWallet")]),s._v("："),n("RouterLink",{attrs:{to:"/airnode/v0.6/grp-developers/requesters-sponsors.html#how-to-derive-a-sponsor-wallet"}},[s._v("sponsor wallet")]),s._v("地址，赞助者在为被调用的Airnode派生钱包时收到的钱包。")],1)]),s._v(" "),n("li",[n("p",[n("strong",[s._v("fulfillAddress")]),s._v(" 和 "),n("strong",[s._v("fulfillFunctionId")]),s._v("：请求者合约的公共地址及其在返回请求时被调用的函数。")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("parameters")]),s._v(": 指定API参数和任何"),n("RouterLink",{attrs:{to:"/airnode/v0.6/reference/specifications/reserved-parameters.html"}},[s._v("reserved parameters")]),s._v("，这些必须被编码。 关于这些参数的编码方式，请参见"),n("RouterLink",{attrs:{to:"/airnode/v0.6/reference/specifications/airnode-abi-specifications.html"}},[s._v("Airnode ABI specifications")]),s._v("。")],1),s._v(" "),n("p",[s._v("在大多数情况下，参数是在链下编码外传递到 请求者，后者只是转发它们。 您可以使用 "),n("RouterLink",{attrs:{to:"/airnode/v0.6/reference/specifications/airnode-abi-specifications.html#api3-airnode-abi"}},[s._v("@api3/airnode-abi")]),s._v(" 软件包来执行编码和解码。 请查看下面的 JavaScript代码片段。")],1),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// JavaScript snippet")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" encode "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@api3/airnode-abi'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" parameters "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string32'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'coin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("value")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ETH'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string32'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'apiKey'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("value")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'UHHS7SRGC975E'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" encodedData "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("encode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parameters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encodedData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// '0x...'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("然而，这不是一个硬性要求，您也可以在链上编码参数。 请查看下面的 JavaScript代码片段。")]),s._v(" "),n("div",{staticClass:"language-solidity line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Solidity snippet")]),s._v("\n\nabi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("encode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("string32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1SS"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("string32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"period"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("string32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"symbols"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"btc,eth,matic,link,uni,sushi,aave,chz,theta,rsr,grt,enj,ocean,kacy"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])]),s._v(" "),n("p",[s._v("关于调用"),n("code",[s._v("airnodeRrp.makeFullRequest()")]),s._v("时请求参数的其他信息，请参见参考文献中的"),n("RouterLink",{attrs:{to:"/airnode/v0.6/concepts/request.html#request-parameters"}},[s._v("Request Parameters")]),s._v(" 。")],1),s._v(" "),n("h2",{attrs:{id:"步骤-3-捕捉响应"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步骤-3-捕捉响应"}},[s._v("#")]),s._v(" 步骤 #3：捕捉响应")]),s._v(" "),n("p",[s._v("一旦Airnode收到请求，它就会收集数据，对其进行编码，并启动一个响应请求的链上交易。 Airnode 调用AirnodeRrp合约函数 "),n("code",[s._v("fulfill()")]),s._v("， 后者又调用请求者，在本例中为 "),n("code",[s._v("airnodeCallback")]),s._v("。 为了回调的目的，回顾请求提供的请求合同地址和所需的回调函数，AirnodeRrp.sol协议合同与"),n("code",[s._v("requestId")]),s._v("一起存储。")]),s._v(" "),n("div",{staticClass:"language-solidity line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@api3/airnode-protocol/contracts/rrp/requesters/RrpRequester.sol"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("contract")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyRequester")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" RrpRequester "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes32")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" incomingFulfillments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes32")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int256")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" fulfilledData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constructor")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),s._v(" airnodeRrpAddress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("RrpRequester")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("airnodeRrpAddress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("callTheAirnode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("airnodeCallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// The AirnodeRrp.sol protocol contract will callback here.")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes32")]),s._v(" requestId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("calldata")]),s._v(" data\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("external")]),s._v("\n        onlyAirnodeRrp\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("incomingFulfillments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("requestId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"No such request made"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" incomingFulfillments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("requestId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int256")]),s._v(" decodedData "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" abi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("decode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int256")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        fulfilledData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("requestId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" decodedData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("h3",{attrs:{id:"响应参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应参数"}},[s._v("#")]),s._v(" 响应参数:")]),s._v(" "),n("p",[s._v("对请求者的回调包含两个参数，如上面代码样本中的"),n("code",[s._v("airnodeCallback")]),s._v("函数所示。")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("requestId")]),s._v(": 在提出请求时首次获得，在此作为参考传递，以确定响应所针对的请求。")]),s._v(" "),n("li",[n("strong",[s._v("data")]),s._v(": 在响应成功的情况下，这就是请求的数据并且已经被编码，除了其他响应数据外，还包含一个"),n("RouterLink",{attrs:{to:"/ois/v1.0.0/reserved-parameters.html#timestamp-encoded-to-uint256-on-chain"}},[s._v("时间戳")]),s._v("。 要使用 "),n("code",[s._v("abi")]),s._v(" 对象的函数"),n("code",[s._v("decode()")]),s._v("对其进行解码。")],1)]),s._v(" "),n("h2",{attrs:{id:"步骤-4-部署并赞助请求者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步骤-4-部署并赞助请求者"}},[s._v("#")]),s._v(" 步骤 #4：部署并赞助请求者")]),s._v(" "),n("p",[s._v("将请求者部署到有需要的区块链上，然后赞助请求者。 查看 "),n("RouterLink",{attrs:{to:"/airnode/v0.6/grp-developers/requesters-sponsors.html#how-to-sponsor-a-requester"}},[s._v("请求者和赞助者")]),s._v("，了解更多关于赞助请求者的信息。")],1)],1)}),[],!1,null,null,null);t.default=e.exports},591:function(s,t,a){s.exports=a.p+"assets/img/call-an-airnode.613b900e.png"}}]);