(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{1046:function(e,t,s){"use strict";s.r(t);var a=s(9),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),s("TocHeader"),e._v(" "),s("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),s("p",[e._v("The default theme for VuePress uses several plugins that are maintained by the\nVuePress team. Additionally this project uses plugins developed by the VuePress\ncommunity. An attempt has been made to only use community plugins that are\npopular and maintained.")]),e._v(" "),s("p",[e._v("All plugins are installed as\n"),s("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/main/package.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("devDependencies"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"vuepress-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugins"}},[e._v("#")]),e._v(" VuePress Plugins")]),e._v(" "),s("p",[e._v("VuePress plugins are used and some are added by VuePress when a project is\ncreated. They only need to be updated as new releases come forward. The versions\nof each should always be in sync (the same). These plugins are not explained\nfurther in this document.")]),e._v(" "),s("h3",{attrs:{id:"vuepress-plugin-back-to-top"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-back-to-top"}},[e._v("#")]),e._v(" @vuepress/plugin-back-to-top")]),e._v(" "),s("p",[e._v("Places an up arrow in the bottom right corner that takes the reader to the top\nof the current page.")]),e._v(" "),s("h3",{attrs:{id:"vuepress-plugin-last-updated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-last-updated"}},[e._v("#")]),e._v(" @vuepress/plugin-last-updated")]),e._v(" "),s("p",[e._v("This plugin is added to the project by the default-theme. By default, this\nplugin produces a 13-bit timestamp for each page, you can also pass in a\ntransformer to convert it to any format that you want.")]),e._v(" "),s("h2",{attrs:{id:"community-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#community-plugins"}},[e._v("#")]),e._v(" Community Plugins")]),e._v(" "),s("p",[e._v("The docs use a few community plugins and packages to enhance the reader\nexperience and to validate certain content.")]),e._v(" "),s("ul",[s("li",[e._v("v-click-outside")]),e._v(" "),s("li",[e._v("vuepress-plugin-element-tabs")]),e._v(" "),s("li",[e._v("vuepress-plugin-table-of-contents")])]),e._v(" "),s("h3",{attrs:{id:"lychee"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lychee"}},[e._v("#")]),e._v(" Lychee")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/lycheeverse/lychee",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lychee"),s("OutboundLink")],1),e._v(" finds broken hyperlinks, image\nsrc and mail addresses inside Markdown, HTML, reStructuredText, or any other\ntext file or website. It is available as a CLI utility and as a GitHub Action:\n"),s("a",{attrs:{href:"https://github.com/lycheeverse/lychee-action",target:"_blank",rel:"noopener noreferrer"}},[e._v("lycheeverse/lychee-action"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("See the "),s("RouterLink",{attrs:{to:"/dev/github-actions.html"}},[e._v("GitHub Action")]),e._v(" doc for info on its implementation.")],1),e._v(" "),s("h3",{attrs:{id:"link-validator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#link-validator"}},[e._v("#")]),e._v(" Link Validator")]),e._v(" "),s("p",[e._v("This custom Node.js script uses the following packages to validate links. See\n"),s("RouterLink",{attrs:{to:"/dev/link-validator.html"}},[e._v("Link Validator")]),e._v(" to understand and run the script.")],1),e._v(" "),s("ul",[s("li",[e._v("axios")]),e._v(" "),s("li",[e._v("colors")]),e._v(" "),s("li",[e._v("file")]),e._v(" "),s("li",[e._v("oust")])]),e._v(" "),s("h3",{attrs:{id:"v-click-outside"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-click-outside"}},[e._v("#")]),e._v(" v-click-outside")]),e._v(" "),s("p",[e._v("This community plugin detects clicks outside an element without stopping the\nevent propagation. It is used in the "),s("strong",[e._v(".vuepress/components/VersionsModal.vue")]),e._v("\ncustom component to allow clicks behind to close the modal. Note that\n"),s("RouterLink",{attrs:{to:"/dev/custom-components.html#versions-vue-and-versionsmodal-vue"}},[e._v("VersionsModal.vue")]),e._v("\nis a child component of "),s("strong",[e._v("Versions.vue")]),e._v(". VersionsModal.vue uses this plugin to\nemit an event to Versions.vue that in turn closes the modal.")],1),e._v(" "),s("h3",{attrs:{id:"vuepress-plugin-element-tabs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-element-tabs"}},[e._v("#")]),e._v(" vuepress-plugin-element-tabs")]),e._v(" "),s("p",[e._v("This\n"),s("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-plugin-element-tabs",target:"_blank",rel:"noopener noreferrer"}},[e._v("community plugin"),s("OutboundLink")],1),e._v("\nis used to add tabs inside markdown files.")]),e._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Tab One"}},[s("p",[e._v("Tab one contents")])]),e._v(" "),s("Tab",{attrs:{label:"Tab Two"}},[s("p",[e._v("Tab two contents")])])],1),e._v(" "),s("div",{staticClass:"language-md line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[e._v(":::: tabs\n\n::: tab Tab One\n\nTab one contents\n\n:::\n\n::: tab Tab Two\n\nTab two contents\n\n:::\n\n::::\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])]),s("h3",{attrs:{id:"vuepress-plugin-table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-table-of-contents"}},[e._v("#")]),e._v(" vuepress-plugin-table-of-contents")]),e._v(" "),s("p",[e._v("This community plugin was added to avoid using the VuePress native Table of\nContents which is not properly adding its links to the browser history stack.\nThis plugin uses the Vue Router for its links which are correctly added to the\nbrowser history. As a result the user experience when going back or forward\nthrough the history stack is accurate to include anchor positions.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);