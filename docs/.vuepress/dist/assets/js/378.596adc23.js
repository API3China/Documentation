(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{1013:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("TitleSpan",[t._v("开发者")]),t._v(" "),a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),a("VersionWarning"),t._v(" "),a("TocHeader"),t._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),t._v(" "),a("p",[t._v("对 Airnode 的请求可能有许多参数。 请求者合约（例如数据馈送）用完全相同的参数重复请求是很常见的。 在这种情况下，重复传递所有参数是很浪费的。 模板用于在链上保存一组参数值，当从"),a("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/v0.5/packages/airnode-protocol/contracts/rrp/AirnodeRrp.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("AirnodeRrp.sol"),a("OutboundLink")],1),t._v(" 中调用"),a("code",[t._v("makeTemplateRequest()")]),t._v("函数时，可以重复使用。 不同于"),a("code",[t._v("makeFullRequest(), makeTemplateRequest()")]),t._v("要求请求者通过"),a("code",[t._v("模板Id")]),t._v("指定模板。")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeTemplateRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" templateId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" sponsor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" sponsorWallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" fulfillAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes4")]),t._v(" fulfillFunctionId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" parameters\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" override "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" requestId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("当使用模板提出请求时， 在模板参数中，编码的参数和在请求时提供的参数(如果有的话) 将被Airnode使用。 如果两者包括一个具有相同名称的参数，将使用请求时提供的参数。")]),t._v(" "),a("p",[t._v("如下所示，模板的结构很简单。")]),t._v(" "),a("ul",[a("li",[t._v("所需的 Airnode 地址")]),t._v(" "),a("li",[t._v("airnode 的 endpointId")]),t._v(" "),a("li",[t._v("端点参数")])]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" airnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" endpointId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" parameters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("创建和放置一个模板到链上用于请求者合约，只需要几个步骤。 每个模板都由"),a("code",[t._v("templateId")]),t._v("确定，该模板是其内容的哈希值。 当您创建一个链上的模板记录时， "),a("RouterLink",{attrs:{to:"/airnode/v0.6/grp-developers/using-templates.html#part-2-upload-template"}},[t._v("查看第二部分：上传模板")]),t._v("，将返回一个模板ID。")],1),t._v(" "),a("divider"),t._v(" "),a("h2",{attrs:{id:"第-1部分-构建模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-1部分-构建模板"}},[t._v("#")]),t._v(" 第#1部分：构建模板")]),t._v(" "),a("p",[t._v("首先创建一个包含模板对象的文件。 参见下面的示例。 您需要调用 Airnode 及其endpointId 地址。 下面是讨论请求参数的链接，如果你需要帮助，可以自行查看。")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.6/concepts/request.html"}},[t._v("参考资料 > 请求-响应协议 > 请求")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.6/grp-developers/call-an-airnode.html#request-parameters"}},[t._v("调用Airnode")])],1)]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "airnode": "0x15e7097beac1fd23c0d1e3f5a882a6f99ecbcf2e0c1011d1bd43707c6c0ec717",\n  "endpointId": "0x2605589dfc93c8f9c35eecdfe1e666c2193df30a8b13e1e0dd72941f59f9064c",\n  "parameters": [\n    {\n      "name": "name1",\n      "value": "value1",\n      "type": "string"\n    },\n    {\n      "name": "name2",\n      "value": "1000",\n      "type": "uint256"\n    }\n  ]\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("如果您使用相同的参数值为 Airnode/endpointID 创建多个模板，每个模板将返回相同的"),a("code",[t._v("templateId")]),t._v(" 当参数相同时，仅创建一个 模板。")]),t._v(" "),a("divider"),t._v(" "),a("h2",{attrs:{id:"第-2部分-上传模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-2部分-上传模板"}},[t._v("#")]),t._v(" 第#2部分：上传模板")]),t._v(" "),a("p",[t._v("使用@api3/airnode-admin包中的"),a("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/v0.5/packages/airnode-admin#create-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("create-template"),a("OutboundLink")],1),t._v("命令，将你的模板移到链上。 通过命令"),a("code",[t._v("create-template")]),t._v("读取一个文件，使用其内容创建一个模板，并返回"),a("code",[t._v("templateId")]),t._v("。 若要创建一个新的模板记录，您需要关注以下要点。")]),t._v(" "),a("ul",[a("li",[t._v("来自区块链供应商的providerURL。")]),t._v(" "),a("li",[t._v("资助记录创建的gas的助记符。")]),t._v(" "),a("li",[t._v("模板文件的路径。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("mnemonic")]),t._v(" "),a("p",[t._v("这个钱包通过支付交易gas费用，写入模板记录。 这不是支付实际执行任何Airnode的gas费用的钱包，因为Airnode本身将代表你的赞助者，记录创建赞助者钱包。")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("npx @api3/airnode-admin create-template "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --providerUrl https://ropsten.infura.io/v3/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --mnemonic "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nature about salad..."')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --templateFilePath ./template.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("divider"),t._v(" "),a("h2",{attrs:{id:"关于模板的更多信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于模板的更多信息"}},[t._v("#")]),t._v(" 关于模板的更多信息")]),t._v(" "),a("p",[t._v("您可以根据需要创建更多模板。 调用 "),a("code",[t._v("getTemplates")]),t._v("命令在 @api3/airnode-admin软件包获取模板列表的 "),a("code",[t._v("templateIds")]),t._v("。")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);