(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{1040:function(e,t,o){"use strict";o.r(t);var n=o(9),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"frontmatter-title"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),o("TocHeader"),e._v(" "),o("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),o("p",[e._v("There are custom Vue Components located in .vuepress/components. See the code\ncomments within each component for execution details. These components are\ncopied to node_modules/@vuepress/themeConfig/components or\nnode_modules/@vuepress/plugins when running or building the project locally.")]),e._v(" "),o("h2",{attrs:{id:"tocheader-vue"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tocheader-vue"}},[e._v("#")]),e._v(" TocHeader.vue")]),e._v(" "),o("p",[e._v('TocHeader.vue adds an element to any markdown file and displays "Table of\nContents" above the VuePress community generated\n'),o("strong",[e._v("vuepress-plugin-table-of-contents")]),e._v(". It aligns itself above the TOC using css\nin index.styl, look for the .toc-label class.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/main/docs/.vuepress/components/TocHeader.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("TocHeader.vue"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"versions-vue-and-versionsmodal-vue"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#versions-vue-and-versionsmodal-vue"}},[e._v("#")]),e._v(" Versions.vue and VersionsModal.vue")]),e._v(" "),o("p",[e._v("VersionsModal.vue is a child component of Versions.vue. Versions.vue has been\nadded to the navbar to allow users to switch between versions of the docs. It\nhas been added to the "),o("RouterLink",{attrs:{to:"/dev/override-components.html#navbar-vue"}},[e._v("Navbar.vue")]),e._v(" VuePress\ncomponent which api3-docs overrides.")],1),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/main/docs/.vuepress/components/Versions.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("Versions.vue"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/main/docs/.vuepress/components/VersionsModal.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("VersionsModal.vue"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"versionwarning-vue"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#versionwarning-vue"}},[e._v("#")]),e._v(" VersionWarning.vue")]),e._v(" "),o("p",[e._v("VersionsModal.vue is a warning dialog that appears at the top of each page in\nolder versions of all versioned documents sets. It contains a link to the latest\nversion.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/main/docs/.vuepress/components/VersionWarning.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("VersionWarning.vue"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"documentsets-vue"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#documentsets-vue"}},[e._v("#")]),e._v(" DocumentSets.vue")]),e._v(" "),o("p",[e._v("DocumentSets.vue is placed on the top of\n"),o("RouterLink",{attrs:{to:"/dev/override-components.html#sidebar-vue"}},[e._v("Sidebar.vue")]),e._v(". It contains a pick list to\nthe different document sets of which some are versioned.")],1),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/main/docs/.vuepress/components/DocumentSets.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("DocumentSets.vue"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"jobsicon-vue"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jobsicon-vue"}},[e._v("#")]),e._v(" JobsIcon.vue")]),e._v(" "),o("p",[e._v("This component displays a "),o("em",[e._v("Job Icon")]),e._v(" that links to a job listing page in the\nAPI3 document set. It also displays a checkmark badge when a counter\n("),o("code",[e._v("jobPageRevision")]),e._v(") from the "),o("code",[e._v("config.js")]),e._v(" file is incremented and is larger than\nthe counter stored in the browser's localStorage by the SPA.")]),e._v(" "),o("p",[e._v("Therefore, when the user visits the job page the SPA stores a reference to the\n"),o("code",[e._v("jobPageRevision")]),e._v(" integer locally in the browser's localStorage. The badge will\nbe removed for the life of the SPA. So if the browser localStorage key\n"),o("code",[e._v("jobPageRevision")]),e._v(" equals the config.js field "),o("code",[e._v("jobPageRevision")]),e._v(", the badge is\nhidden.")]),e._v(" "),o("p",[e._v("All the logic for the jobs icon and its badge are self contained in this\ncomponent.")]),e._v(" "),o("p",[e._v("Anytime you wish to force the reappearance of the badge, increment the\n"),o("code",[e._v("jobPageRevision")]),e._v(" field in the "),o("code",[e._v("config.js")]),e._v(" file by (1) before redeploying the\ndocs. Once incremented the badge will eventually reappear. This is accomplished\nby the reader's behavior.")]),e._v(" "),o("ul",[o("li",[e._v("The reader launches the doc site from a blank browser page thus loading the\nSPA.")]),e._v(" "),o("li",[e._v("The reader reloads the currently displayed SPA.")])]),e._v(" "),o("p",[e._v("Not all readers will experience the reappearance of the badge at the same time.\nThere is no backend support such as websockets for the docs to implement such\nbehavior at his time.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);