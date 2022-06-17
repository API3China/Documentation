(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{889:function(e,a,s){"use strict";s.r(a);var n=s(15),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("TitleSpan",[e._v("Docker Images")]),e._v(" "),s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),s("VersionWarning"),e._v(" "),s("TocHeader"),e._v(" "),s("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),s("p",[e._v("Usually the Airnode is deployed on a serverless platform using the "),s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/docker/deployer-image.html"}},[e._v("deployer")]),e._v(". However, there is another option which is to run the Airnode in a docker container on your machine locally, on premise or cloud hosted.")],1),e._v(" "),s("p",[e._v("A docker client image has been published on "),s("a",{attrs:{href:"https://hub.docker.com/r/api3/airnode-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),s("OutboundLink")],1),e._v(". If you want to build the container from the source yourself, you can find the image and built instructions in the "),s("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/v0.4/packages/airnode-node/docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airnode repository"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),s("p",[e._v("The Airnode needs two configuration files for its run: "),s("code",[e._v("config.json")]),e._v(" and "),s("code",[e._v("secrets.env")]),e._v(". These files need to be passed to the Docker container via volumes.")]),e._v(" "),s("p",[e._v("The Docker container looks for configuration files mounted internally in the "),s("code",[e._v("/app/config")]),e._v(" directory.")]),e._v(" "),s("p",[e._v("Your current working directory should contain the "),s("code",[e._v("config")]),e._v(" folder with the configuration files above and you bind it to the "),s("code",[e._v("/app/config")]),e._v(" directory for the docker using the "),s("code",[e._v("--volume")]),e._v(" parameter.")]),e._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ tree\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n└── config\n    ├── config.json\n    └── secrets.env\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run --volume "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("/config:/app/config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])])]),e._v(" "),s("Tab",{attrs:{label:"Windows PowerShell"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ tree\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n└── config\n    ├── config.json\n    └── secrets.env\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run --volume "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("/config:/app/config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])])]),e._v(" "),s("Tab",{attrs:{label:"Windows CMD"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ tree\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n└── config\n    ├── config.json\n    └── secrets.env\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run --volume %cd%:/config:/app/config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])])])],1),e._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("Example directory structure and commands for running the Airnode Docker container. The below commands are run from the depicted directory.")]),e._v(" "),s("h3",{attrs:{id:"running-airnode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-airnode"}},[e._v("#")]),e._v(" Running Airnode")]),e._v(" "),s("p",[e._v("It is recommended to run the Airnode in a detached mode using the "),s("code",[e._v("--detach")]),e._v(" parameter, but you may run the it without it as well.")]),e._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run --detach "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --volume "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("/config:/app/config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --name airnode "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-client:0.4.1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])]),e._v(" "),s("Tab",{attrs:{label:"Windows PowerShell"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run --detach "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --volume "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("/config:/app/config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --name airnode "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-client:0.4.1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])]),e._v(" "),s("Tab",{attrs:{label:"Windows"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run --detach ^\n  --volume %cd%/config:/app/config ^\n  --name airnode ^\n  api3/airnode-client:0.4.1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])])],1),e._v(" "),s("blockquote",[s("p",[e._v("If you want to connect Airnode to a blockchain running on localhost, you need to make the blockchain accessible from within the docker itself. If you use docker for linux you can use "),s("code",[e._v('--network="host"')]),e._v(" parameter. For windows, wsl or mac connect to "),s("code",[e._v("host.docker.internal")]),e._v(" instead of "),s("code",[e._v("127.0.0.1")]),e._v(". See "),s("a",{attrs:{href:"https://stackoverflow.com/a/24326540",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://stackoverflow.com/a/24326540"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"checking-airnode-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checking-airnode-logs"}},[e._v("#")]),e._v(" Checking Airnode logs")]),e._v(" "),s("p",[e._v("If you run the Airnode in a detached mode, you need to use the "),s("code",[e._v("logs")]),e._v(" command to access the logs. You can also use "),s("code",[e._v("--follow")]),e._v(" parameter to stream the Airnode log output.")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" logs airnode\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("or")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" logs --follow airnode\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"stopping-airnode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stopping-airnode"}},[e._v("#")]),e._v(" Stopping Airnode")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" stop airnode\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])],1)}),[],!1,null,null,null);a.default=t.exports}}]);