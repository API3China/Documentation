(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{566:function(e,r,s){e.exports=s.p+"assets/img/relay-meta-flow.35426950.png"},939:function(e,r,s){"use strict";s.r(r);var t=s(15),a=Object(t.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("TitleSpan",[e._v("Concepts and Definitions")]),e._v(" "),t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),t("VersionWarning"),e._v(" "),t("TocHeader"),e._v(" "),t("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),t("p",[e._v("There are two methods by which the API provider can manage access to their API by on-chain smart contracts known as requesters.")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/guides/build-an-airnode/apply-auth.html"}},[e._v("Authorizers")]),e._v(" (on-chain)")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/guides/build-an-airnode/api-security.html"}},[e._v("Relayed Meta Data Security Schemes")]),e._v(" (off-chain)")],1)]),e._v(" "),t("p",[e._v("Relayed meta data is known information about the requester (smart contract) passed along to the API endpoint by Airnode.")]),e._v(" "),t("p",[e._v("Using the relayed meta data security schemes does not require blockchain-specific knowledge or blockchain interaction by an API provider and there are no blockchain transaction (gas) fees. Just apply the desired security scheme fields in the Airnode "),t("code",[e._v("config.json")]),e._v(" file during deployment of an Airnode, see "),t("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/guides/build-an-airnode/"}},[e._v("Building an Airnode")]),e._v(". Then have your API operations check for any security scheme values you configured (typically the "),t("code",[e._v("sponsorAddress")]),e._v(") against your customer database.")],1),e._v(" "),t("h2",{attrs:{id:"simple-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-example"}},[e._v("#")]),e._v(" Simple Example")]),e._v(" "),t("p",[e._v("The illustration below is one way to make use of relayed meta data for security purposes. Here a sponsor (a.k.a. developer or customer) submits their "),t("code",[e._v("sponsorAddress")]),e._v(" to be stored by an API provider. The "),t("code",[e._v("sponsorAddress")]),e._v(" can be used to authenticate requests by a sponsor's smart contracts.")]),t("p"),e._v(" "),t("p",[t("img",{attrs:{src:s(566),alt:"concept-authorizer"}})]),e._v(" "),t("p",[e._v("The following sections relate to the numbers shown in the diagram above.")]),e._v(" "),t("h3",{attrs:{id:"_1-deploy-airnode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-deploy-airnode"}},[e._v("#")]),e._v(" 1: Deploy Airnode")]),e._v(" "),t("p",[e._v("An Airnode is deployed with the "),t("code",[e._v("sponsorAddress")]),e._v(" security scheme instructing Airnode to pass along the "),t("code",[e._v("sponsorAddress")]),e._v(" with all requests.")]),e._v(" "),t("h3",{attrs:{id:"_2-register-sponsors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-register-sponsors"}},[e._v("#")]),e._v(" 2: Register Sponsors")]),e._v(" "),t("p",[e._v("A sponsor is the developer of an on-chain smart contract that wishes to request off-chain data from an API provider. A sponsor has a know "),t("code",[e._v("sponsorAddress")]),e._v(". The API provider can request the "),t("code",[e._v("sponsorAddress")]),e._v(" from the sponsor using a webform as part of a paid subscription setup.")]),e._v(" "),t("h3",{attrs:{id:"_3-making-requests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-making-requests"}},[e._v("#")]),e._v(" 3: Making Requests")]),e._v(" "),t("p",[e._v("When a smart contract (requester) makes a request of any API operation, the "),t("code",[e._v("sponsorAddress")]),e._v(" will be part of the request. A sponsor can have more than one requester.")]),e._v(" "),t("ul",[t("li",[e._v("3a: The requester makes a request to Airnode.")]),e._v(" "),t("li",[e._v("3b: Airnode adds the "),t("code",[e._v("sponsorAddress")]),e._v(" to the request before passing the request to the API operation. The API operation performs a lookup on the "),t("code",[e._v("sponsorAddress")]),e._v(" to verify it has a subscription. If verified the API operation returns the response to Airnode.")]),e._v(" "),t("li",[e._v("3c: Airnode returns the response to the requester.")])]),e._v(" "),t("h2",{attrs:{id:"security-schemes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-schemes"}},[e._v("#")]),e._v(" Security Schemes")]),e._v(" "),t("p",[e._v("Including the "),t("code",[e._v("sponsorAddress")]),e._v(" used in the "),t("RouterLink",{attrs:{to:"/airnode/v0.5/concepts/relay-meta-auth.html#simple-example"}},[e._v("Simple Example")]),e._v(" above, there are five "),t("em",[e._v("relayed meta data security schemes")]),e._v(" that can be incorporated into any Airnode.")],1),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/guides/build-an-airnode/api-security.html#relaychainid"}},[e._v("relayChainId")]),e._v(" - The chain ID the request came from.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/guides/build-an-airnode/api-security.html#relaychaintype"}},[e._v("relayChainType")]),e._v(" - The chain type the request came from.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/guides/build-an-airnode/api-security.html#relaysponsoraddress"}},[e._v("relaySponsorAddress")]),e._v(" - The sponsor's wallet address. The sponsor owns and operates one or more requesters.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/guides/build-an-airnode/api-security.html#relaysponsorwalletaddress"}},[e._v("relaySponsorWalletAddress")]),e._v(" - Other wallet addresses associated with each requester. These are owned and funded by a sponsor to pay on-chain gas costs.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/guides/build-an-airnode/api-security.html#relayrequesteraddress"}},[e._v("relayRequesterAddress")]),e._v(" - The on-chain address of the requester (smart contract).")],1)])],1)}),[],!1,null,null,null);r.default=a.exports}}]);