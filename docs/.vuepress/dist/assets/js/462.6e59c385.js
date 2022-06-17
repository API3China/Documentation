(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{1118:function(t,e,s){"use strict";s.r(e);var n=s(15),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("/common")]),t._v(" folder holds files that may be common to different document sets. Such a file is "),s("RouterLink",{attrs:{to:"/common/blog-posts.html"}},[t._v("blog-posts.md")]),t._v(". The general rule is that a common file should not contain links to other docs in document sets unless the link is guaranteed to be the same in those document sets.")],1),t._v(" "),s("p",[t._v("A document set can create one or more symlinks, anywhere within itself, to common files and then use the symlink in its sidebar to render the common file.")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd to the directory to place the symlink")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ln -s <path-to-markdown-file> <symlink file-name>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/common/blog-posts.md symlink-blog-posts.md\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Warning")]),t._v(" "),s("p",[t._v("Use the "),s("code",[t._v("/common")]),t._v(" folder with caution. It is difficult to link to other internal docs content from docs within "),s("code",[t._v("/common")]),t._v(". See the "),s("code",[t._v("CommonLink.vue")]),t._v(" component but think hard about using it.")])])])}),[],!1,null,null,null);e.default=o.exports}}]);