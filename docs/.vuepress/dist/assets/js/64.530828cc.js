(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{532:function(t,e,r){t.exports=r.p+"assets/img/RRP-protocol-contracts.f5e94885.png"},787:function(t,e,r){"use strict";r.r(e);var o=r(9),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("TitleSpan",[t._v("Concepts and Definitions")]),t._v(" "),o("h1",{attrs:{id:"frontmatter-title"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),o("VersionWarning"),t._v(" "),o("TocHeader"),t._v(" "),o("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),t._v(" "),o("p",[t._v("The first protocol implemented for Airnode is request–response. An Airnode\nserving the request–response protocol listens for requests, makes the API call\nspecified by the request, and finally makes the response transaction back on\nchain.")]),t._v(" "),o("h2",{attrs:{id:"contracts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contracts"}},[t._v("#")]),t._v(" Contracts")]),t._v(" "),o("blockquote",[o("p",[t._v("This sections briefly describes the structure of the request response protocol\ncontracts. You can find more information in the\n"),o("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/v0.3/packages/airnode-protocol/contracts/rrp",target:"_blank",rel:"noopener noreferrer"}},[t._v("source files on github"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("p",[t._v("The request–response protocol is implemented as a single permissionless contract\nthat all Airnodes interact with, which is named "),o("code",[t._v("AirnodeRrp.sol")]),t._v(". This base\ncontract has the following inheritance tree that compartmentalizes the aspects\nof the protocol.")]),t._v(" "),o("blockquote",[o("p",[o("img",{attrs:{src:r(532),alt:"rrp-sol-diagram"}})])]),t._v(" "),o("h3",{attrs:{id:"airnoderrp-sol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#airnoderrp-sol"}},[t._v("#")]),t._v(" AirnodeRrp.sol")]),t._v(" "),o("p",[t._v("The\n"),o("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/v0.3/packages/airnode-protocol/contracts/rrp/AirnodeRrp.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("AirnodeRrp.sol"),o("OutboundLink")],1),t._v("\ncontract sits between a "),o("RouterLink",{attrs:{to:"/airnode/v0.3/concepts/requester.html"}},[t._v("requester")]),t._v(" and the\n"),o("RouterLink",{attrs:{to:"/airnode/v0.3/concepts/airnode.html"}},[t._v("Airnode")]),t._v(". It inherits from four additional contracts as\nillustrated in the diagram above:")],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/airnode/v0.3/concepts/#iairnoderrp-sol"}},[t._v("IAirnodeRrp.sol")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/airnode/v0.3/concepts/#authorizationutils-sol"}},[t._v("AuthorizationUtils.sol")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/airnode/v0.3/concepts/#withdrawalutils-sol"}},[t._v("WithdrawalUtils.sol")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/airnode/v0.3/concepts/#templateutils-sol"}},[t._v("TemplateUtils.sol")])],1)]),t._v(" "),o("p",[t._v("This contract has two key responsibilities:")]),t._v(" "),o("ul",[o("li",[t._v("It is used by requesters to make requests.")]),t._v(" "),o("li",[t._v("It is used by Airnodes to fulfill requests.")])]),t._v(" "),o("p",[t._v("However, this contract is shared for all requesters and Airnodes on a particular\nchain. This means that neither Airnode operators nor requesters need to deploy\nthis contract themselves. Instead, API3 will deploy this contract once per chain\nand you simply connect your Airnode or requester contract to that deployed\ncontract. See the\n"),o("RouterLink",{attrs:{to:"/airnode/v0.3/reference/airnode-addresses.html"}},[t._v("Airnode contract addresses")]),t._v(" for reference.")],1),t._v(" "),o("p",[t._v("The "),o("RouterLink",{attrs:{to:"/airnode/v0.3/reference/packages/admin-cli.html"}},[o("code",[t._v("@api3/airnode-admin")])]),t._v(" package is a CLI\ntool used to interact with "),o("code",[t._v("AirnodeRrp.sol")]),t._v(" and perform administrative actions.")],1),t._v(" "),o("h3",{attrs:{id:"iairnoderrp-sol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#iairnoderrp-sol"}},[t._v("#")]),t._v(" IAirnodeRrp.sol")]),t._v(" "),o("p",[t._v("The\n"),o("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/v0.3/packages/airnode-protocol/contracts/rrp/interfaces/IAirnodeRrp.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("IAirnodeRrp.sol"),o("OutboundLink")],1),t._v("\ninterface describes all functions and events of the "),o("code",[t._v("AirnodeRrp.sol")]),t._v(" contract\nwhich implements this interface.")]),t._v(" "),o("p",[t._v("This interface inherits:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/v0.3/packages/airnode-protocol/contracts/rrp/interfaces/IAuthorizationUtils.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("IAuthorizationUtils.sol"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/v0.3/packages/airnode-protocol/contracts/rrp/interfaces/IWithdrawalUtils.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("IWithdrawalUtils.sol"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/v0.3/packages/airnode-protocol/contracts/rrp/interfaces/ITemplateUtils.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("ITemplateUtils.sol"),o("OutboundLink")],1)])]),t._v(" "),o("h3",{attrs:{id:"authorizationutils-sol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#authorizationutils-sol"}},[t._v("#")]),t._v(" AuthorizationUtils.sol")]),t._v(" "),o("p",[t._v("The\n"),o("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/v0.3/packages/airnode-protocol/contracts/rrp/AuthorizationUtils.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("AuthorizationUtils.sol"),o("OutboundLink")],1),t._v("\ncontract implements Airnode "),o("RouterLink",{attrs:{to:"/airnode/v0.3/concepts/authorization.html#authorizers"}},[t._v("authorization")]),t._v("\nchecks.")],1),t._v(" "),o("h3",{attrs:{id:"withdrawalutils-sol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#withdrawalutils-sol"}},[t._v("#")]),t._v(" WithdrawalUtils.sol")]),t._v(" "),o("p",[t._v("The\n"),o("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/v0.3/packages/airnode-protocol/contracts/rrp/WithdrawalUtils.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("WithdrawalUtils.sol"),o("OutboundLink")],1),t._v("\ncontract allows the "),o("RouterLink",{attrs:{to:"/airnode/v0.3/concepts/sponsor.html"}},[t._v("sponsor")]),t._v(" to trigger a withdrawal request\nwhich is later fulfilled by Airnode and all sponsor wallet funds are sent back\nto the sponsor.")],1),t._v(" "),o("h3",{attrs:{id:"templateutils-sol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#templateutils-sol"}},[t._v("#")]),t._v(" TemplateUtils.sol")]),t._v(" "),o("p",[t._v("The\n"),o("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/v0.3/packages/airnode-protocol/contracts/rrp/TemplateUtils.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("TemplateUtils.sol"),o("OutboundLink")],1),t._v("\ncontract is used to create and store Airnode "),o("RouterLink",{attrs:{to:"/airnode/v0.3/concepts/template.html"}},[t._v("templates")]),t._v(" used to\ncreate a "),o("RouterLink",{attrs:{to:"/airnode/v0.3/concepts/request.html#template-request"}},[t._v("template request")]),t._v(".")],1)],1)}),[],!1,null,null,null);e.default=a.exports}}]);