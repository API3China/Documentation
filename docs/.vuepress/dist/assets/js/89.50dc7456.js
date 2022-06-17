(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{559:function(t,s,a){t.exports=a.p+"assets/img/gateway.c684f4ba.png"},896:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("TitleSpan",[t._v("Build an Airnode")]),t._v(" "),e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),e("VersionWarning"),t._v(" "),e("TocHeader"),t._v(" "),e("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),t._v(" "),e("p",[t._v("As part of the Airnode deployment you can decide to deploy an HTTP Gateway. The gateway allows the testing of defined Airnode endpoints without accessing the blockchain. You provide endpoint arguments directly to the Airnode with a tool. of your choice and get a response from an integrated API operation. This results in confirmation your integration is set up properly. The HTTP gateway feature is available when deploying to both the AWS and GCP cloud providers.")]),t._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:a(559),alt:"gateway"}})])]),t._v(" "),e("h2",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),e("p",[t._v("Enable the HTTP gateway by setting two fields in the config.json ("),e("code",[t._v("nodeSettings.httpGateway")]),t._v(").")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("enabled")]),t._v(": A boolean setting enable/disable for the Airnode's HTTP gateway.")]),t._v(" "),e("li",[e("strong",[t._v("apiKey")]),t._v(": A user defined API key to authenticate against the gateway. The key must have a length of between 30 - 120 characters.")])]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nodeSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cloudProvider"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aws"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"us-east-1"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"airnodeWalletMnemonic"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${AIRNODE_WALLET_MNEMONIC}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"heartbeat"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"httpGateway"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"apiKey"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${HTTP_GATEWAY_API_KEY}"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("p",[t._v("You must also add each endpoint to test in the "),e("code",[t._v("triggers.http[n]")]),t._v(" array. The "),e("code",[t._v("rrp")]),t._v(" field serves its endpoints on-chain. The "),e("code",[t._v("http")]),t._v(" field serves its endpoints via the HTTP gateway. It may be desirable to serve some or all endpoints on-chain and only some via the gateway, or vise versa.")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in config.json")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"triggers"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rrp"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"endpointId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xf466b8feec41e9e50815e0c9dca4db1ff959637e564bb13fefa99e9f9f90453c"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"oisTitle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CoinGecko Basic Request"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"endpointName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coinMarketData"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"http"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"endpointId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xf466b8feec41e9e50815e0c9dca4db1ff959637e564bb13fefa99e9f9f90453c"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"oisTitle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CoinGecko Basic Request"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"endpointName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coinMarketData"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br")])]),e("h2",{attrs:{id:"gateway-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gateway-url"}},[t._v("#")]),t._v(" Gateway URL")]),t._v(" "),e("p",[t._v("A gateway URL is generated when your Airnode is deployed. You can obtain the URL ("),e("code",[t._v("api.httpGatewayUrl")]),t._v(") from the receipt.json file returned by the deployer or as part of a request sent from Airnode's "),e("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/heartbeat.html"}},[t._v("heartbeat")]),t._v(" to your specified heartbeat URL.")],1),t._v(" "),e("h2",{attrs:{id:"using-curl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-curl"}},[t._v("#")]),t._v(" Using CURL")]),t._v(" "),e("p",[t._v("In order to test an endpoint make a HTTP POST request with the "),e("code",[t._v("endpointId")]),t._v(" as a path parameter, the "),e("code",[t._v("Content-Type")]),t._v(" header set to "),e("code",[t._v("application/json")]),t._v(", the "),e("code",[t._v("x-api-key")]),t._v(" header set to the key and place the endpoint parameters in the request body. As an alternative to CURL try an app such as "),e("a",{attrs:{href:"https://insomnia.rest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Insomnia"),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"https://www.postman.com/product/rest-client/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postman"),e("OutboundLink")],1),t._v(". Windows users can also use "),e("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows Subsystem for Linux"),e("OutboundLink")],1),t._v(" (WSL2) to run CURL for Linux.")]),t._v(" "),e("ul",[e("li",[t._v("An "),e("code",[t._v("endpointId")]),t._v(" can found in config.json under "),e("code",[t._v("triggers[n].endpointId")]),t._v(".")]),t._v(" "),e("li",[t._v("The "),e("code",[t._v("x-api-key")]),t._v(" can found in config.json under "),e("code",[t._v("nodesettings.httpGateway.apiKey")]),t._v(".")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("parameter")]),t._v(" "),e("th",[t._v("in")]),t._v(" "),e("th",[t._v("CURL options")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Content-Type")]),t._v(" "),e("td",[t._v("header")]),t._v(" "),e("td",[e("code",[t._v("-H 'Content-Type: application/json'")])])]),t._v(" "),e("tr",[e("td",[t._v("x-api-key")]),t._v(" "),e("td",[t._v("header")]),t._v(" "),e("td",[e("code",[t._v("-H 'x-api-key: 8d890a46-799d-48b3-a337-8531e23dfe8e'")])])]),t._v(" "),e("tr",[e("td",[t._v("endpointId")]),t._v(" "),e("td",[t._v("path")]),t._v(" "),e("td",[e("code",[t._v("0xf466b8feec...99e9f9f90453c")])])]),t._v(" "),e("tr",[e("td",[t._v("<user-defined>")]),t._v(" "),e("td",[t._v("body")]),t._v(" "),e("td",[e("code",[t._v('-d \'{"parameters": {"param1": "string", "param2": 5}}\'')])])])])]),t._v(" "),e("p",[t._v("Replace "),e("code",[t._v("<httpGatewayUrl>")]),t._v(" in the example below with your gateway URL from the "),e("code",[t._v("receipt.json")]),t._v(" file using the "),e("code",[t._v("httpGatewayUrl")]),t._v(" field. The "),e("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/deploying-airnode.html#receipt-json"}},[t._v("receipt.json")]),t._v(" file is created when you deploy an Airnode.")],1),t._v(" "),e("p",[t._v("Request:")]),t._v(" "),e("Tabs",{attrs:{type:"border-card"}},[e("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-X POST "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-api-key: 8d890a46-799d-48b3-a337-8531e23dfe8e'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-d "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"parameters": {"param1": "string", "param2": 5}}\'')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<httpGatewayUrl>/0xf466b8feec...99e9f9f90453c'")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])]),t._v(" "),e("Tab",{attrs:{label:"Windows"}},[e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" ^\n-X POST ^\n-H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" ^\n-H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x-api-key: 8d890a46-799d-48b3-a337-8531e23dfe8e"')]),t._v(" ^\n-d "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("parameters"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("param1"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("string"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("param2"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': 5}}"')]),t._v(" ^\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("httpGatewayUrl"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/0xf466b8feec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".99e9f9f90453c\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])])],1),t._v(" "),e("p",[t._v("Response:")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rawValue"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usd"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6421.4"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encodedValue"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x0000000000000000000000000000000000000000000000000000000ef373e180"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"values"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"64214000000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("The response format is a simple JSON object with the following fields:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("rawValue")]),t._v(" - the API response")]),t._v(" "),e("li",[e("code",[t._v("values")]),t._v(" - an array of values after they are "),e("RouterLink",{attrs:{to:"/airnode/v0.4/reference/packages/adapter.html#conversion"}},[t._v("extracted and converted")]),t._v(" to the target type")],1),t._v(" "),e("li",[e("code",[t._v("encodedValue")]),t._v(" - the encoded bytes value that is sent as payload in the response transaction on chain")])]),t._v(" "),e("p",[t._v("There are additional examples of using CURL to call the HTTP gateway in both the "),e("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/tutorial/quick-deploy-aws/#execute-endpoint"}},[t._v("Quick Deploy AWS")]),t._v(" and "),e("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/tutorial/quick-deploy-gcp/#execute-endpoint"}},[t._v("Quick Deploy GCP")]),t._v(" tutorials.")],1)],1)}),[],!1,null,null,null);s.default=n.exports}}]);