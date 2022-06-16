(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{519:function(e,t,s){e.exports=s.p+"assets/img/concepts-request.f0111867.png"},520:function(e,t,s){e.exports=s.p+"assets/img/request-outcomes.1e4c7e60.png"},738:function(e,t,s){"use strict";s.r(t);var a=s(9),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("TitleSpan",[e._v("Concepts and Definitions")]),e._v(" "),a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("VersionWarning"),e._v(" "),a("TocHeader"),e._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3,4]}}),e._v(" "),a("p",[e._v("A request is made, by a "),a("RouterLink",{attrs:{to:"/airnode/v0.2/concepts/requester.html"}},[e._v("requester")]),e._v(", to either the\n"),a("code",[e._v("makeFullRequest()")]),e._v(" or "),a("code",[e._v("makeTemplateRequest()")]),e._v(" functions of the\n"),a("RouterLink",{attrs:{to:"/airnode/v0.2/concepts/#airnoderrp-sol"}},[e._v("AirnodeRrp.sol")]),e._v(" protocol contract which adds the\nrequest to its storage. The targeted off-chain "),a("RouterLink",{attrs:{to:"/airnode/v0.2/concepts/airnode.html"}},[e._v("Airnode")]),e._v(" gathers the\nrequest from AirnodeRrp.sol's storage and responds using the "),a("code",[e._v("fulFill()")]),e._v("\nfunction of AirnodeRrp.sol.")],1),e._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:s(519),alt:"concepts-request"}})]),e._v(" "),a("ol",[a("li",[a("p",{staticClass:"diagram-line"},[e._v("The requester calls makeFullRequest() on the AirnodeRrp protocol contract.")])]),e._v(" "),a("li",[a("p",{staticClass:"diagram-line"},[e._v("makeFullRequest() assigns a requestId to the request for tracking purposes, adds the requestId to storage, emits the request to the event logs and returns the requestId to the requester.")])]),e._v(" "),a("li",[a("p",{staticClass:"diagram-line",staticStyle:{color:"gray"}},[e._v("Airnode, during its run cycle, picks the request from the event logs.")])]),e._v(" "),a("li",[a("p",{staticClass:"diagram-line",staticStyle:{color:"blue"}},[e._v("Airnode gets data from the API.")])]),e._v(" "),a("li",[a("p",{staticClass:"diagram-line",staticStyle:{color:"green"}},[e._v("Airnode sends the response to fulFill() in AirnodeRrp which in turn removes the pending requestId from storage and forwards the response to myFulFill(). The requestId is included as part of the response.")])])])]),e._v(" "),a("p",[e._v("Learn more on how to "),a("RouterLink",{attrs:{to:"/airnode/v0.2/grp-developers/call-an-airnode.html"}},[e._v("Call an Airnode")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"requestid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestid"}},[e._v("#")]),e._v(" "),a("code",[e._v("requestId")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("requestId")]),e._v(" uniquely identifies a request. When a requester makes a request\nusing AirnodeRrp.sol, a "),a("code",[e._v("requestId")]),e._v(" is generated before the request is added to\nthe event logs and the requestId is returned to the requester. This "),a("code",[e._v("requestId")]),e._v("\nis a hash of certain data members depending on which type of request is made,\n"),a("code",[e._v("makeFullRequest()")]),e._v(" or "),a("code",[e._v("makeTemplateRequest()")]),e._v(". They only differ in that one\nuses "),a("code",[e._v("endpointId")]),e._v(" plus "),a("code",[e._v("airnode")]),e._v(" address and the other "),a("code",[e._v("templateId")]),e._v(" (since\ntemplate already contains the "),a("code",[e._v("airnode")]),e._v(" address).")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("makeFullRequest()")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("makeTemplateRequest()")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("block.chainid")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("block.chainid")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("address(this)")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("address(this)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("msg.sender")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("msg.sender")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("requesterRequestCount")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("requesterRequestCount")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("airnode")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"purple","font-weight":"bold"}},[e._v("endpointId")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"purple","font-weight":"bold"}},[e._v("templateId")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sponsor")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("sponsor")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sponsorWallet")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("sponsorWallet")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("fulfillAddress")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("fulfillAddress")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("fulfillFunctionId")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("fulfillFunctionId")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("parameters")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("parameters")])])])]),e._v(" "),a("p",[e._v("After the request (with "),a("code",[e._v("requestId")]),e._v(") is added to the event logs, Airnode gathers\nthe request and verifies the "),a("code",[e._v("requestId")]),e._v(" by re-computing its hash before\nresponding to the request. This verifies the parameters have not been tampered\nwith.")]),e._v(" "),a("h2",{attrs:{id:"request-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-parameters"}},[e._v("#")]),e._v(" Request Parameters")]),e._v(" "),a("p",[e._v("The following list summarizes the values expected for the parameters of a\nrequest.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("templateId")]),e._v(" the id of a template to use, "),a("em",[e._v("(only used for\n"),a("code",[e._v("makeTemplateRequest")]),e._v(")")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("airnode")]),e._v(" (address) and "),a("code",[e._v("endpointId")]),e._v(" specify the endpoint, "),a("em",[e._v("(only used for\n"),a("code",[e._v("makeFullRequest")]),e._v(")")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("sponsor")]),e._v(" and "),a("code",[e._v("sponsorWallet")]),e._v(" (addresses) specify which wallet will be used to\nfulfill the request")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("fulfillAddress")]),e._v(" and "),a("code",[e._v("fulfillFunctionId")]),e._v(" specify which contract/function will\nbe called to fulfill the request")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("parameters")]),e._v(" specify the API and\n"),a("RouterLink",{attrs:{to:"/airnode/v0.2/reference/specifications/ois.html#_5-4-reservedparameters"}},[e._v("reserved")]),e._v("\nparameters (see\n"),a("RouterLink",{attrs:{to:"/airnode/v0.2/reference/specifications/airnode-abi-specifications.html"}},[e._v("Airnode ABI specifications")]),e._v("\nfor how these are encoded)")],1)])]),e._v(" "),a("h2",{attrs:{id:"full-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-request"}},[e._v("#")]),e._v(" Full Request")]),e._v(" "),a("p",[e._v("A full request does not refer to a template at all. Full requests are useful if\nthe requester will not make a similar request ever again (e.g., in a prediction\nmarket context).")]),e._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("makeFullRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" airnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" endpointId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" sponsor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" sponsorWallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" fulfillAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes4")]),e._v(" fulfillFunctionId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("calldata")]),e._v(" parameters\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h2",{attrs:{id:"template-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-request"}},[e._v("#")]),e._v(" Template Request")]),e._v(" "),a("p",[e._v("A template request refers to a template for the "),a("code",[e._v("airnode")]),e._v(" address, "),a("code",[e._v("endpointId")]),e._v("\nand "),a("code",[e._v("parameters")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Template")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" airnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" endpointId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),e._v(" parameters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("The requester can refer to the "),a("code",[e._v("templateId")]),e._v(" of a template while making a\nrequest, and the Airnode will fetch these and use them in the request.")]),e._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("makeTemplateRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" templateId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" sponsor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" sponsorWallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" fulfillAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes4")]),e._v(" fulfillFunctionId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("calldata")]),e._v(" parameters\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("When a template is used to make a request, both the parameters encoded in\n"),a("code",[e._v("parameters")]),e._v(" of the template and "),a("code",[e._v("parameters")]),e._v(" provided at request-time by the\nrequester will be used by the Airnode. In case the two include a parameter with\nthe same name, the one provided at request-time will be used.")]),e._v(" "),a("h2",{attrs:{id:"request-outcomes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-outcomes"}},[e._v("#")]),e._v(" Request Outcomes")]),e._v(" "),a("p",[e._v("A request made to an Airnode has three possible outcomes:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.2/concepts/request.html#fulfill"}},[e._v("Fulfill")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.2/concepts/request.html#fail"}},[e._v("Fail")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.2/concepts/request.html#ignore"}},[e._v("Ignore")])],1)]),e._v(" "),a("h3",{attrs:{id:"fulfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fulfill"}},[e._v("#")]),e._v(" Fulfill")]),e._v(" "),a("p",[a("code",[e._v("fulfill()")]),e._v(" is the desired outcome and it will only be called if Airnode\nreceived a successful response from the API provider.")]),e._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:s(520),alt:"request-outcomes"}})]),e._v(" "),a("ol",[a("li",[a("p",{staticClass:"diagram-line"},[e._v("Airnode calls AirnodeRRP.fulFill() with a response only if the API has not responded with an error. AirnodeRrp.fulfill() performs a call back to myFulFill() which in turn receives the response.")])]),e._v(" "),a("li",[a("p",{staticClass:"diagram-line",staticStyle:{color:"green"}},[e._v("If AirnodeRrp.fulFill() fails internally or the underlying low level call to myFulFill() reverts then Airnode will start the process in step #3 to fail the request.")])]),e._v(" "),a("li",[a("p",{staticClass:"diagram-line",staticStyle:{color:"green"}},[e._v("If Airnode errors, or is told by AirnodeRrp.fulFill() to error, it calls AirnodeRrp.fail() which removes the request from the pending list of requestIds on-chain.")])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Important to Note")]),e._v(" "),a("p",[e._v("Fulfill is the only outcome that returns results to a requester contract.")])]),e._v(" "),a("p",[e._v("For a successful request, Airnode calls the "),a("code",[e._v("fulfill()")]),e._v(" function in\nAirnodeRrp.sol that will in turn call back the requester contract at\n"),a("code",[e._v("fulfillAddress")]),e._v(" using function "),a("code",[e._v("fulfillFunctionId")]),e._v(" to deliver "),a("code",[e._v("data")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("fulfill()")]),e._v(" also receives a signature to validate on-chain that the response\ndata was submitted by the Airnode. This is to prevent requesters from fulfilling\ntheir own requests in order to manipulate data submitted by AirnodeRrp.sol.")]),e._v(" "),a("p",[a("code",[e._v("fulfill()")]),e._v(" will not revert if the "),a("code",[e._v("fulfillFunctionId")]),e._v(" external call reverts.\nHowever, it will return "),a("code",[e._v("false")]),e._v(" in this case or if there is no function with a\nmatching signature at "),a("code",[e._v("fulfillAddress")]),e._v(". On the other hand, it will return "),a("code",[e._v("true")]),e._v("\nif the external call returns successfully or if there is no contract deployed at\n"),a("code",[e._v("fulfillAddress")]),e._v(". In the case "),a("code",[e._v("false")]),e._v(" is returned then an error message will\nalso be returned in a variable which can be decoded to retrieve the revert\nstring. For example Airnode will decode this variable when this function returns\n"),a("code",[e._v("false")]),e._v(" and call "),a("code",[e._v("fail()")]),e._v(" on AirnodeRrp.sol with the revert string as the error\nmessage.")]),e._v(" "),a("h3",{attrs:{id:"fail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fail"}},[e._v("#")]),e._v(" Fail")]),e._v(" "),a("p",[e._v("As noted in the diagram above, if the transaction that calls "),a("code",[e._v("fulfill()")]),e._v(" returns\n"),a("code",[e._v("false")]),e._v(", the Airnode decodes the revert string and calls the "),a("code",[e._v("fail()")]),e._v(" method to\nreport the failure. The node will not attempt to fulfill a failed request\nafterwards.")]),e._v(" "),a("p",[e._v('Airnode is stateless, which means that there is no database storing which\nrequests have been fulfilled or failed, which are waiting on confirmations and\nwhich are still pending. This information is retrieved from the chain on each\nrequest-response cycle (roughly every minute). During each cycle, retrieved\nrequests need to be ordered in the same way to ensure they are submitted using\nthe same nonce. This is important because it\'s possible for a transaction to not\nhave been confirmed by the time the next cycle runs. If this happens, the\ntransaction is re-submitted with a "faster" transaction fee, overwriting the\nprevious transaction.')]),e._v(" "),a("h3",{attrs:{id:"blocked"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blocked"}},[e._v("#")]),e._v(" Blocked")]),e._v(" "),a("p",[e._v('Airnode is also dependent on the blockchain provider to supply it with the\nonchain data. If the blockchain provider is unavailable for whatever reason, it\nis possible that a request cannot be fully validated, which means that it cannot\nbe submitted back to the blockchain. As mentioned above, keeping requests in the\nsame order, using the same nonce is critical. Therefore, any request that cannot\nbe fully validated due to a blockchain provider error becomes "blocked". This\nmeans that it and any requests after it are unable to be submitted during the\ncurrent cycle and will be retried during the following cycle. It is important to\nnote that this is specific to each requester. e.g. a request sent from requester\nA that becomes "blocked", will not block requests sent from requester B.')]),e._v(" "),a("p",[e._v("The blocked requests get ignored after "),a("code",[e._v("ignoreBlockedRequestsAfterBlocks")]),e._v("\n(default value: 20), meaning that they are treated as an Ignored request\n(invalid requests are ignored, e.g., a request whose sponsor and sponsorWallet\ndon't match).")]),e._v(" "),a("h4",{attrs:{id:"blocking-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blocking-cases"}},[e._v("#")]),e._v(" Blocking cases")]),e._v(" "),a("p",[e._v("In chronological order in the coordinator life-cycle.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Airnode RRP has full requests ("),a("code",[e._v("makeFullRequest()1")]),e._v("), for which all\nparameters are specified, or template requests, which specify some of the\nparameters and specify the ID of a template that contains the rest of the\nparameters. After fetching templates, if the node can't find the template for\na template request, that request gets blocked. This may happen if the\nblockchain provider is not responding to valid requests (e.g., the node is\nmaking too many requests and is being rate-limited).")])]),e._v(" "),a("li",[a("p",[e._v("To check authorization for a request, the node needs to know its endpoint ID.\nFull requests already specify the endpoint ID, and the templates should be\nfetched for template requests by this point, which specify the endpoint ID.\nWhile checking authorizations, if the endpoint ID of a request is not\nspecified, that request gets blocked. This should never happen, because\ntemplate requests that are missing templates are already blocked in sample #1\nabove.")])]),e._v(" "),a("li",[a("p",[e._v("The node makes a static call with some of the request parameters to check if\na specific request is authorized (i.e., if it should respond to it). After\nfetching authorization results, if the node can't find the results for a\nrequest, that request gets blocked.This may happen if the blockchain provider\nis not responding to valid requests (e.g., the node is making too many\nrequests and is being rate-limited).")])]),e._v(" "),a("li",[a("p",[e._v("The node invokes a worker for each request with a unique request ID to make\nthe API calls. These workers should return either with a payload or an error\n(if the call has timed our or the API errored). While mapping the worker\nresponses back (referred to as “disaggregation” in the code), if the node\ncan't find the response for a request, that request gets blocked. In theory\nthis should never happen.")])])]),e._v(" "),a("h3",{attrs:{id:"ignore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ignore"}},[e._v("#")]),e._v(" Ignore")]),e._v(" "),a("p",[e._v("If the Airnode cannot even fail a request (e.g., the requester is not sponsored\nby the sponsor), the request gets ignored.")]),e._v(" "),a("p",[e._v('After X blocks (20 by default for EVM chains), any requests that would become\n"blocked", will instead become "ignored". This means that Airnode will stop\nattempting to process the request in order to process later requests.')]),e._v(" "),a("h2",{attrs:{id:"check-if-request-is-awaiting-fulfillment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-if-request-is-awaiting-fulfillment"}},[e._v("#")]),e._v(" Check if request is awaiting fulfillment")]),e._v(" "),a("p",[e._v("There is a convenience method in AirnodeRrp.sol called\n"),a("code",[e._v("requestIsAwaitingFulfillment()")]),e._v(" that can be called to check if a request was\nmade but not yet fulfilled/failed. If a requester has made a request, received a\n"),a("code",[e._v("requestId")]),e._v(" but did not hear back, it can call this method to check if the\nAirnode has called back "),a("code",[e._v("fail()")]),e._v(" instead.Returns "),a("code",[e._v("true")]),e._v(" if the request is\nawaiting fulfillment (i.e., "),a("code",[e._v("true")]),e._v(" if "),a("code",[e._v("fulfill()")]),e._v(" or "),a("code",[e._v("fail()")]),e._v(" is not called back\nyet), "),a("code",[e._v("false")]),e._v(" otherwise.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);