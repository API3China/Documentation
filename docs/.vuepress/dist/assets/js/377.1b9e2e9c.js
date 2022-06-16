(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{1018:function(e,t,n){"use strict";n.r(t);var a=n(9),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("TitleSpan",[e._v("Reference")]),e._v(" "),n("h1",{attrs:{id:"frontmatter-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),n("VersionWarning"),e._v(" "),n("TocHeader"),e._v(" "),n("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),n("p",[e._v("A "),n("code",[e._v("beaconId")]),e._v(" and its "),n("code",[e._v("templateId")]),e._v(" are identical across chains. When accessing a\nBeacon's value with the "),n("RouterLink",{attrs:{to:"/beacon/v0.2/functions/read-beacon.html"}},[e._v("readBeacon()")]),e._v(" function\nonly the "),n("code",[e._v("beaconId")]),e._v(" is needed by the caller to access its value. The use of a\n"),n("code",[e._v("templateId")]),e._v(" is only required when there is a need to update a Beacon value.\nUsually this is called by the Beacon itself and is "),n("strong",[e._v("not")]),e._v(" a normal operational\nprocedure a Beacon consumer needs to concern themselves with.")],1),e._v(" "),n("p",[e._v("A Beacon will update itself when an allowed deviation of its current value is\nmet. Behind every Beacon there is a single template. Additionally, behind every\nBeacon template there is an Airnode which returns the Beacon's value from an API\nendpoint. The template contains the parameters used by Airnode when calling the\nAPI endpoint. Additional Beacon parameters may be required to merge with the\ntemplate for the Airnode to call an API endpoint. This entire process is\ncompleted using the function\n"),n("RouterLink",{attrs:{to:"/beacon/v0.2/functions/request-beacon-update.html"}},[e._v("requestBeaconUpdate()")]),e._v(".")],1),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("Useless you intent to ask the Beacon to update itself, outside of its normal\nupdate process, the use of a Beacon's template will be of no concern. However to\nupdate a Beacon manually a requester will need the templateId of the Beacon when\ncalling the "),n("RouterLink",{attrs:{to:"/beacon/v0.2/functions/request-beacon-update.html"}},[e._v("requestBeaconUpdate()")]),e._v("\nfunction.")],1)]),e._v(" "),n("h2",{attrs:{id:"deriving-ids"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deriving-ids"}},[e._v("#")]),e._v(" Deriving IDs")]),e._v(" "),n("p",[e._v("Create a "),n("code",[e._v("templateId")]),e._v(" by hashing the Airnode address, the endpointId and the\nparameters of the template. See the\n"),n("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/TemplateUtils.sol#L17-L46",target:"_blank",rel:"noopener noreferrer"}},[e._v("createTemplate()"),n("OutboundLink")],1),e._v("\nfunction in the monorepo.")]),e._v(" "),n("p",[e._v("Create a "),n("code",[e._v("beaconId")]),e._v(" by hashing the "),n("code",[e._v("templateId")]),e._v(" and the Beacon parameters. See\nthe\n"),n("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/requesters/RrpBeaconServer.sol#L213",target:"_blank",rel:"noopener noreferrer"}},[e._v("requestBeaconUpdate()"),n("OutboundLink")],1),e._v("\nfunction in the monorepo.")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("templateId")]),e._v(" cannot be derived from the "),n("code",[e._v("beaconId")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);