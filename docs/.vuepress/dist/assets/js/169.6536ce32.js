(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{749:function(e,t,n){"use strict";n.r(t);var r=n(9),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"frontmatter-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),n("VersionWarning"),e._v(" "),n("p",[e._v("An oracle node requires access to a blockchain (e.g., Ethereum) node to listen\nfor request events and send transactions to fulfill requests. The Airnode model\naims to minimize the node operation effort using managed services wherever\npossible. Accordingly, it is assumed that the typical user will be using an\nEthereum provider such as Infura, Alchemy, etc. These services will only\nincrease in variety, so designing a solution depending on these is not expected\nto cause a problem in the future. In addition, among these Ethereum providers,\nInfura provides 100,000 calls per day for free. An oracle that doesn't get any\nrequests makes less than 3,000 calls per day (2 calls per minute), which allows\nthe user to keep an oracle online for free, and upgrade to a paid plan once it\ngains traction.")]),e._v(" "),n("p",[e._v("Although it is assumed that the user will be using an Ethereum provider, there\nis no reason for providers to not be able to use a private Ethereum node.\nFurthermore, Airnode is designed to allow the usage of multiple Ethereum\nproviders simultaneously. This is achieved by treating all integrated providers\nindividually. As a result, the operations of an Airnode cannot be disrupted\nreliably unless all of its providers are malicious. Therefore, using multiple\nEthereum providers is a better strategy to achieve the best availability than\nusing a private Ethereum node.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);