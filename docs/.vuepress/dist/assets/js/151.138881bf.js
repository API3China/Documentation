(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{715:function(s,a,e){"use strict";e.r(a);var n=e(15),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[s._v("#")]),s._v(" "+s._s(s.$frontmatter.title))]),s._v(" "),e("VersionWarning"),s._v(" "),e("TocHeader"),s._v(" "),e("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),s._v(" "),e("ol",[e("li",[e("p",[s._v("Build the Docker image")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -t api3/airnode-deployer:pre-alpha\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Ensure that your "),e("code",[s._v(".env")]),s._v(" file looks like "),e("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/pre-alpha/packages/deployer/.env.example",target:"_blank",rel:"noopener noreferrer"}},[s._v(".env.example"),e("OutboundLink")],1),s._v(" and is the current working directory.")])]),s._v(" "),e("li",[e("p",[s._v("If you will be running "),e("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/docker/deployer-image.html#deploy-first-time"}},[s._v("deploy-first-time")]),s._v(" or "),e("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/docker/deployer-image.html#redeploy"}},[s._v("redeploy")]),s._v(", your "),e("code",[s._v("config.json")]),s._v(" and "),e("code",[s._v("security.json")]),s._v(" must be in the current working directory. (They are also needed for other commands temporarily.)")],1)]),s._v(" "),e("li",[e("p",[s._v("Run the image with one of the following commands:")])])]),s._v(" "),e("h2",{attrs:{id:"deploy-first-time"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy-first-time"}},[s._v("#")]),s._v(" "),e("code",[s._v("deploy-first-time")])]),s._v(" "),s._v(' ="" tab="undefined" Linux/Mac="undefined" >\n'),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env-file .env "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("deploy-first-time "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(':/airnode/out"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  api3/airnode-deployer:pre-alpha\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("::: ::: tab Windows")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --rm ^\n  --env-file .env ^\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("deploy-first-time ^\n  -v "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%cd%:/airnode/out"')]),s._v(" ^\n  api3/airnode-deployer:pre-alpha\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("::: ::::")]),s._v(" "),e("h2",{attrs:{id:"redeploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redeploy"}},[s._v("#")]),s._v(" "),e("code",[s._v("redeploy")])]),s._v(" "),s._v(' ="" tab="undefined" Linux/Mac="undefined" >\n'),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env-file .env "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redeploy "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(':/airnode/out"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  api3/airnode-deployer:pre-alpha\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("::: ::: tab Windows")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --rm ^\n  --env-file .env ^\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redeploy ^\n  -v "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%cd%:/airnode/out"')]),s._v(" ^\n  api3/airnode-deployer:pre-alpha\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("::: ::::")]),s._v(" "),e("h2",{attrs:{id:"deploy-mnemonic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy-mnemonic"}},[s._v("#")]),s._v(" "),e("code",[s._v("deploy-mnemonic")])]),s._v(" "),e("p",[s._v("Note that you must replace "),e("code",[s._v("$MNEMONIC")]),s._v(" and "),e("code",[s._v("$REGION")]),s._v(" with your values Enclose your mnemonic in quotation marks because it includes white spaces.")]),s._v(" "),s._v(' ="" tab="undefined" Linux/Mac="undefined" >\n'),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env-file .env "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("deploy-mnemonic "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MNEMONIC")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MNEMONIC")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REGION")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REGION")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(':/airnode/out"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  api3/airnode-deployer:pre-alpha\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("::: ::: tab Windows")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --rm ^\n  --env-file .env ^\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("deploy-mnemonic ^\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MNEMONIC")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MNEMONIC")]),s._v(" ^\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REGION")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REGION")]),s._v(" ^\n  -v "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%cd%:/airnode/out"')]),s._v(" ^\n  api3/airnode-deployer:pre-alpha\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("::: ::::")]),s._v(" "),e("h2",{attrs:{id:"remove-with-receipt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remove-with-receipt"}},[s._v("#")]),s._v(" "),e("code",[s._v("remove-with-receipt")])]),s._v(" "),e("p",[s._v("Note that you must replace "),e("code",[s._v("$RECEIPT_FILENAME")]),s._v(" with your value and "),e("code",[s._v("$RECEIPT_FILENAME")]),s._v(" must be in the current working directory.")]),s._v(" "),s._v(' ="" tab="undefined" Linux/Mac="undefined" >\n'),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env-file .env "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("remove-with-receipt "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RECEIPT_FILENAME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$RECEIPT_FILENAME")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(':/airnode/out"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  api3/airnode-deployer:pre-alpha\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("::: ::: tab Windows")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --rm ^\n  --env-file .env ^\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("remove-with-receipt ^\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RECEIPT_FILENAME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$RECEIPT_FILENAME")]),s._v(" ^\n  -v "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%cd%:/airnode/out"')]),s._v(" ^\n  api3/airnode-deployer:pre-alpha\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("::: ::::")]),s._v(" "),e("h2",{attrs:{id:"remove-mnemonic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remove-mnemonic"}},[s._v("#")]),s._v(" "),e("code",[s._v("remove-mnemonic")])]),s._v(" "),e("p",[s._v("Note that you must replace "),e("code",[s._v("$PROVIDER_ID_SHORT")]),s._v(" and "),e("code",[s._v("$REGION")]),s._v(" with your values.")]),s._v(" "),s._v(' ="" tab="undefined" Linux/Mac="undefined" >\n'),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env-file .env "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("remove-mnemonic "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROVIDER_ID_SHORT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROVIDER_ID_SHORT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REGION")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REGION")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(':/airnode/out"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  api3/airnode-deployer:pre-alpha\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("::: ::: tab Windows")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --rm ^\n  --env-file .env ^\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("remove-mnemonic ^\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROVIDER_ID_SHORT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROVIDER_ID_SHORT")]),s._v(" ^\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REGION")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REGION")]),s._v(" ^\n  -v "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%cd%:/airnode/out"')]),s._v(" ^\n  api3/airnode-deployer:pre-alpha\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("::: ::::")]),s._v(" "),e("h2",{attrs:{id:"remove-airnode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remove-airnode"}},[s._v("#")]),s._v(" "),e("code",[s._v("remove-airnode")])]),s._v(" "),e("p",[s._v("Note that you must replace "),e("code",[s._v("$PROVIDER_ID_SHORT")]),s._v(", "),e("code",[s._v("$REGION")]),s._v(" and "),e("code",[s._v("$STAGE")]),s._v(" with your values.")]),s._v(" "),s._v(' ="" tab="undefined" Linux/Mac="undefined" >\n'),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env-file .env "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("remove-airnode "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROVIDER_ID_SHORT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROVIDER_ID_SHORT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REGION")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REGION")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("STAGE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$STAGE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(':/airnode/out"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  api3/airnode-deployer:pre-alpha\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("::: ::: tab Windows")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --rm ^\n  --env-file .env ^\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("remove-airnode ^\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROVIDER_ID_SHORT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROVIDER_ID_SHORT")]),s._v(" ^\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REGION")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REGION")]),s._v(" ^\n  --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("STAGE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$STAGE")]),s._v(" ^\n  -v "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%cd%:/airnode/out"')]),s._v(" ^\n  api3/airnode-deployer:pre-alpha\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("::: ::::")])],1)}),[],!1,null,null,null);a.default=t.exports}}]);