(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{1124:function(t,s,e){"use strict";e.r(s);var a=e(15),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),e("TocHeader"),t._v(" [[toc]]\n"),e("p",[t._v("The project docs are deployed to the remote repo "),e("strong",[t._v("gh-pages branch")]),t._v(" using the "),e("strong",[t._v("deploy.sh")]),t._v(" bash script. The script is run locally from the "),e("strong",[t._v("main")]),t._v(" branch which will be used for the build. Local "),e("strong",[t._v("main")]),t._v(" must be up-to-date with all changes by contributors.")]),t._v(" "),e("h2",{attrs:{id:"link-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#link-validator"}},[t._v("#")]),t._v(" Link Validator")]),t._v(" "),e("p",[t._v("Link Validator validates links with or without attached anchors. It is the last line of defense to prevent invalid links in the docs prior to deployment. See "),e("RouterLink",{attrs:{to:"/dev/link-validator.html"}},[t._v("Link Validation")]),t._v(" to run its Node.js script.")],1),t._v(" "),e("h2",{attrs:{id:"understand-deploy-sh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#understand-deploy-sh"}},[t._v("#")]),t._v(" Understand deploy.sh")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Builds a static website and places it in "),e("strong",[t._v(".vuepress/dist")]),t._v(". The "),e("strong",[t._v("/dist")]),t._v(" folder is deleted if it exists and re-created.")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build the docs")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("The deployment must be run from the .vuepress/dist folder.")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# navigate to the build output directory")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("The .vuepress/dist folder is staged to be pushed.")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# api3dao/api3-doc uses the main branch as default.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git init must start with a main branch so gh-pages will")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "hang" off of it.')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init --initial-branch"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("main\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Deploying a locally built /dist folder to main:gh-pages as its own commit history.'")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("A git push is "),e("em",[t._v("forced")]),t._v(" onto the remote branch gh-pages.")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If you are deploying to https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# NEVER push to main, use main:gh-pages.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:api3dao/api3-docs.git main:gh-pages\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])])]),t._v(" "),e("h2",{attrs:{id:"deploying"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying"}},[t._v("#")]),t._v(" Deploying")]),t._v(" "),e("p",[t._v("It is important to pull down the "),e("strong",[t._v("main branch")]),t._v(" (step 3) after the remote master repo has been merged with all contributions. This insures the local build of the /dist folder gets the latest from all contributors.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Verify the repo target in "),e("code",[t._v("deploy.sh")]),t._v(" is set to "),e("code",[t._v("api3dao/api3-docs")]),t._v(". It is unlikely this has changed since the script went through final testing back in Feb 2021.")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Verify only, do not execute outside the deploy.sh script.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:api3dao/api3-docs.git main:gh-pages\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("Run "),e("RouterLink",{attrs:{to:"/dev/link-validator.html#link-validator-js"}},[t._v("link-validator.js")]),t._v(" to verify hyperlinks and any anchors.")],1)]),t._v(" "),e("li",[e("p",[t._v("Verify the proper "),e("RouterLink",{attrs:{to:"/dev/versioning.html"}},[t._v("versions")]),t._v(" are up-to-date in config.json.")],1),t._v(" "),e("ul",[e("li",[t._v("Document set versions.")]),t._v(" "),e("li",[t._v("Document set latest version.")]),t._v(" "),e("li",[t._v("Check the Airnode startPath.")])])]),t._v(" "),e("li",[e("p",[t._v("Git")]),t._v(" "),e("ul",[e("li",[t._v("Commit and push local work to the remote repo.")]),t._v(" "),e("li",[t._v("From the remote repo, merge contributing branches to main.")]),t._v(" "),e("li",[t._v("Return to your local repo and switch to the main branch.")]),t._v(" "),e("li",[t._v("Pull remote main to local main.")])])]),t._v(" "),e("li",[e("p",[t._v("Deploy")]),t._v(" "),e("ul",[e("li",[t._v("Deploy from a desired local branch, usually "),e("strong",[t._v("main")]),t._v(".")]),t._v(" "),e("li",[t._v("Execute "),e("code",[t._v("deploy.sh")]),t._v(" to deploy.")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd <root of project>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Verify the branch that is set.")]),t._v("\n% /Users/warren/DEV/api3-docs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" deploy.sh\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);