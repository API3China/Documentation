(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{956:function(a,e,s){"use strict";s.r(e);var t=s(15),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("TitleSpan",[a._v("Docker Images")]),a._v(" "),s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[a._v("#")]),a._v(" "+a._s(a.$frontmatter.title))]),a._v(" "),s("VersionWarning"),a._v(" "),s("TocHeader"),a._v(" "),s("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),a._v(" "),s("p",[a._v("Use the deployer image to deploy or remove an Airnode with a cloud provider such as AWS. The simplest way is to use the pre-built packages. If you would rather build the images yourself see the "),s("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/v0.5/packages/airnode-deployer/docker",target:"_blank",rel:"noopener noreferrer"}},[a._v("README"),s("OutboundLink")],1),a._v(" in the deployer package.")]),a._v(" "),s("p",[a._v("The deployer image has two commands.")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("deploy")]),a._v(": Deploys or updates an Airnode using configuration files.")]),a._v(" "),s("li",[s("code",[a._v("remove")]),a._v(": Removes an Airnode using its "),s("code",[a._v("receipt.json")]),a._v(" file.")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Quick Deploy Demos")]),a._v(" "),s("p",[a._v("See the "),s("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/tutorial/"}},[a._v("Quick Deploy Demos")]),a._v(" to quickly "),s("code",[a._v("deploy")]),a._v(" and "),s("code",[a._v("remove")]),a._v(" a preconfigured Airnode using the deployer image.")],1)]),a._v(" "),s("h2",{attrs:{id:"cloud-provider-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cloud-provider-credentials"}},[a._v("#")]),a._v(" Cloud Provider Credentials")]),a._v(" "),s("p",[a._v("In order to deploy Airnode to a serverless cloud provider, you need to provide could provider credentials to the Airnode deployer image. The deployer image currently supports deploying to AWS and GCP.")]),a._v(" "),s("h3",{attrs:{id:"aws"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws"}},[a._v("#")]),a._v(" AWS")]),a._v(" "),s("p",[a._v("If you are new to AWS watch this "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=KngM5bfpttA",target:"_blank",rel:"noopener noreferrer"}},[a._v("video"),s("OutboundLink")],1),a._v(" to set up an AWS account and create cloud provider credentials.")]),a._v(" "),s("h3",{attrs:{id:"gcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gcp"}},[a._v("#")]),a._v(" GCP")]),a._v(" "),s("ul",[s("li",[a._v("Create a "),s("a",{attrs:{href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects",target:"_blank",rel:"noopener noreferrer"}},[a._v("Google Cloud project"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("Enable "),s("a",{attrs:{href:"https://console.cloud.google.com/apis/library/appengine.googleapis.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("App Engine Admin API"),s("OutboundLink")],1),a._v(" for your project")]),a._v(" "),s("li",[a._v("Create a new "),s("a",{attrs:{href:"https://console.cloud.google.com/iam-admin/serviceaccounts",target:"_blank",rel:"noopener noreferrer"}},[a._v("service account"),s("OutboundLink")],1),a._v(" with the "),s("code",[a._v("Owner")]),a._v(" role")]),a._v(" "),s("li",[a._v("Add a new access key of type JSON for the service account and download it as "),s("code",[a._v("gcp.json")])])]),a._v(" "),s("h2",{attrs:{id:"deploy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[a._v("#")]),a._v(" deploy")]),a._v(" "),s("p",[a._v("The "),s("code",[a._v("deploy")]),a._v(" command will create the Airnode with a cloud provider or update it if it already exists. Three files are needed to run the deploy command.")]),a._v(" "),s("ul",[s("li",[a._v("config.json")]),a._v(" "),s("li",[a._v("secrets.env")]),a._v(" "),s("li",[a._v("aws.env (AWS only)")]),a._v(" "),s("li",[a._v("gcp.json (GCP only)")])]),a._v(" "),s("p",[a._v("A "),s("code",[a._v("receipt.json")]),a._v(" file will be created upon completion. It contains some deployment information and is used to remove the Airnode.")]),a._v(" "),s("airnode-WarningSimultaneousDeployments",{attrs:{removeLink:"./deployer-image.html#manual-removal"}}),a._v(" "),s("p",[s("airnode-DeployerPermissionsWarning")],1),a._v(" "),s("h3",{attrs:{id:"aws-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws-2"}},[a._v("#")]),a._v(" AWS")]),a._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -it --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --env-file aws.env "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("USER_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" -u"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GROUP_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" -g"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('/config:/app/config"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('/output:/app/output"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  api3/airnode-deployer:0.5.0 deploy\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])])]),a._v(" "),s("Tab",{attrs:{label:"Windows"}},[s("p",[a._v("For Windows, use CMD (and not PowerShell).")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -it --rm ^\n  --env-file aws.env ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cd%/config:/app/config"')]),a._v(" ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cd%/output:/app/output"')]),a._v(" ^\n  api3/airnode-deployer:0.5.0 deploy\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])],1),a._v(" "),s("h3",{attrs:{id:"gcp-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gcp-2"}},[a._v("#")]),a._v(" GCP")]),a._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -it --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("USER_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" -u"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GROUP_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" -g"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('/gcp.json:/app/gcp.json"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('/config:/app/config"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('/output:/app/output"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  api3/airnode-deployer:0.5.0 deploy\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])])]),a._v(" "),s("Tab",{attrs:{label:"Windows"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -it --rm ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cd%/gcp.json:/app/gcp.json"')]),a._v(" ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cd%/config:/app/config"')]),a._v(" ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cd%/output:/app/output"')]),a._v(" ^\n  api3/airnode-deployer:0.5.0 deploy\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])],1),a._v(" "),s("h2",{attrs:{id:"remove"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[a._v("#")]),a._v(" remove")]),a._v(" "),s("p",[a._v("When an Airnode was deployed using the "),s("code",[a._v("deploy")]),a._v(" command a "),s("code",[a._v("receipt.json")]),a._v(" file was created. Use this file to remove an Airnode.")]),a._v(" "),s("h3",{attrs:{id:"aws-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws-3"}},[a._v("#")]),a._v(" AWS")]),a._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -it --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --env-file aws.env "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('/output:/app/output"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  api3/airnode-deployer:0.5.0 remove -r output/receipt.json\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])])]),a._v(" "),s("Tab",{attrs:{label:"Windows"}},[s("p",[a._v("For Windows, use CMD (and not PowerShell).")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -it --rm ^\n  --env-file aws.env ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cd%/output:/app/output"')]),a._v(" ^\n  api3/airnode-deployer:0.5.0 remove -r output/receipt.json\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])])])],1),a._v(" "),s("h3",{attrs:{id:"gcp-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gcp-3"}},[a._v("#")]),a._v(" GCP")]),a._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -it --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('/gcp.json:/app/gcp.json"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('/output:/app/output"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  api3/airnode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("deployer:0.5.0 remove -r output/receipt.json\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])])]),a._v(" "),s("Tab",{attrs:{label:"Windows"}},[s("p",[a._v("For Windows, use CMD (and not PowerShell).")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -it --rm ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cd%/gcp.json:/app/gcp.json"')]),a._v(" ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cd%/output:/app/output"')]),a._v(" ^\n  api3/airnode-deployer:0.5.0 remove -r output/receipt.json\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])])])],1),a._v(" "),s("h2",{attrs:{id:"manual-removal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-removal"}},[a._v("#")]),a._v(" Manual Removal")]),a._v(" "),s("p",[a._v("Optionally you can remove an Airnode manually though it is highly recommended that you do so using the deployer image's "),s("code",[a._v("remove")]),a._v(" command. Airnode has a presence in several areas of both AWS and GCP. An Airnode has a "),s("code",[a._v("airnodeAddressShort")]),a._v(" (e.g., "),s("code",[a._v("0ab830c")]),a._v(") that is included in the element name of AWS and GCP deployed features.")]),a._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[a._v("Remember")]),a._v(" "),s("p",[a._v("Only delete elements of a feature with the "),s("code",[a._v("airnodeAddressShort")]),a._v(" address in the name you are targeting. There can be more than one Airnode.")])]),a._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"AWS"}},[s("airnode-DeleteAirnodeAws")],1),a._v(" "),s("Tab",{attrs:{label:"GCP"}},[s("airnode-DeleteAirnodeGcp")],1)],1),a._v(" "),s("p",[a._v("Learn more about AWS or GCP resources that Airnode uses in the "),s("RouterLink",{attrs:{to:"/airnode/v0.5/reference/cloud-resources.html"}},[a._v("Cloud Resources")]),a._v(" doc.")],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);