(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{727:function(e,t,a){"use strict";a.r(t);var r=a(9),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("VersionWarning"),e._v(" "),a("TocHeader"),e._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),a("p",[e._v("Using the "),a("a",{attrs:{href:"https://github.com/api3dao/airnode-starter/tree/pre-alpha",target:"_blank",rel:"noopener noreferrer"}},[e._v("airnode-starter"),a("OutboundLink")],1),e._v(" project you will deploy an Airnode and make requests to it. This project is composed of setup and three steps.")]),e._v(" "),a("ul",[a("li",[e._v("Prepare tutorial requirements.")]),e._v(" "),a("li",[e._v("Deploy an Airnode on a supported chain.")]),e._v(" "),a("li",[e._v("Make a request to the deployed Airnode in a contract.")]),e._v(" "),a("li",[e._v("Remove the Airnode.")])]),e._v(" "),a("p",[e._v("You can skip "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/tutorials/airnode-starter.html#step-1-deploy-an-airnode"}},[e._v("Step #1: Deploy an Airnode")]),e._v(" and use the Airnode that we have deployed on "),a("strong",[e._v("Ropsten")]),e._v(" if preferred. You are recommended to read the contents of the "),a("a",{attrs:{href:"https://github.com/api3dao/airnode-starter/tree/pre-alpha/scripts",target:"_blank",rel:"noopener noreferrer"}},[e._v("scripts"),a("OutboundLink")],1),e._v(" as you run them, and read the entire readme before starting.")],1),e._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("p",[e._v("In preparation to deploy an Airnode a few items need to be prepared.")]),e._v(" "),a("ul",[a("li",[e._v("Build the"),a("code",[e._v("airnode-starter")]),e._v("repo.")]),e._v(" "),a("li",[e._v("Create a wallet and fund it.")]),e._v(" "),a("li",[e._v("Install/setup Metamask.")]),e._v(" "),a("li",[e._v("Get a blockchain provider account/URL.")]),e._v(" "),a("li",[e._v("Get AWS (cloud provider) credentials.")])]),e._v(" "),a("h3",{attrs:{id:"airnode-starter-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airnode-starter-repo"}},[e._v("#")]),e._v(" airnode-starter repo")]),e._v(" "),a("ol",[a("li",[e._v("Clone the "),a("a",{attrs:{href:"https://github.com/api3dao/airnode-starter/tree/pre-alpha",target:"_blank",rel:"noopener noreferrer"}},[e._v("airnode-starter"),a("OutboundLink")],1),e._v(" repo."),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Using SSH")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.com:api3dao/airnode-starter.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Using https")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/api3dao/airnode-starter.git  \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])])]),e._v(" "),a("li",[e._v("Be sure to use the pre-alpha branch."),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" airnode-starter\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" switch pre-alpha\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[e._v("Run the following to install the dependencies from the repo root."),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[e._v("Run the following to build the contracts."),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])]),e._v(" "),a("h3",{attrs:{id:"create-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-wallet"}},[e._v("#")]),e._v(" Create Wallet")]),e._v(" "),a("p",[e._v("You will need a wallet to hold funds for a testnet such as Ropsten. These funds will be used to pay fees to setup an Airnode. Funds on a testnet are free.")]),e._v(" "),a("p",[e._v("Run the following to generate a new wallet, whose mnemonic phrase will be displayed on the terminal and recorded in a "),a("code",[e._v(".env")]),e._v(" file at the project root. If you already have a wallet for your desired testnet you can use it by entering its MNEMONIC manually into "),a("code",[e._v(".env")]),e._v(" at the project root.")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run generate-wallet\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"metamask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metamask"}},[e._v("#")]),e._v(" Metamask")]),e._v(" "),a("ol",[a("li",[e._v("Install "),a("a",{attrs:{href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Metamask"),a("OutboundLink")],1),e._v(" to your web browser.")]),e._v(" "),a("li",[e._v("Import the mnemonic phrase to Metamask.")]),e._v(" "),a("li",[e._v("Use the "),a("a",{attrs:{href:"https://faucet.metamask.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("faucet"),a("OutboundLink")],1),e._v(" to get some Ropsten ETH, or use any other appropriate source for the chain you will be working on.")])]),e._v(" "),a("h3",{attrs:{id:"ropsten"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ropsten"}},[e._v("#")]),e._v(" Ropsten")]),e._v(" "),a("p",[e._v("You need to get a provider URL. This will be used both by the deployed Airnode and by you while interacting with contracts. If you will be working on Ropsten follow these two steps.")]),e._v(" "),a("ol",[a("li",[e._v("Go to "),a("a",{attrs:{href:"https://infura.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Infura"),a("OutboundLink")],1),e._v(", create an account and get a Ropsten provider URL")]),e._v(" "),a("li",[e._v("Replace "),a("code",[e._v("https://ropsten.infura.io/v3/{YOUR_KEY}")]),e._v(" in your "),a("code",[e._v(".env")]),e._v(" file with the URL you got from Infura")])]),e._v(" "),a("p",[e._v("Adapt the steps above if you will be using another chain. Note that you can use any other provider or your own node. However, if you will be deploying your own Airnode, the provider endpoint must be publicly accessible (i.e., "),a("code",[e._v("127.0.0.1:8545")]),e._v(" will not work).")]),e._v(" "),a("p",[e._v("This tutorial can be run on these supported chains.")]),e._v(" "),a("ul",[a("li",[e._v("Ropsten")]),e._v(" "),a("li",[e._v("Rinkeby")]),e._v(" "),a("li",[e._v("Goerli")]),e._v(" "),a("li",[e._v("xDai")]),e._v(" "),a("li",[e._v("Fantom")])]),e._v(" "),a("h3",{attrs:{id:"aws-cloud-credentials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-cloud-credentials"}},[e._v("#")]),e._v(" AWS Cloud Credentials")]),e._v(" "),a("p",[a("em",[e._v("If you wish to skip Step: #1 then you do not need AWS cloud credentials.")])]),e._v(" "),a("p",[e._v("Read "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/provider/deploying-airnode.html#creating-cloud-credentials"}},[e._v("Creating cloud credentials")]),e._v(" to create your cloud credentials. Place them at "),a("code",[e._v("/config/.env")]),e._v(", similar to "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/tutorials/config-examples/example-env.html"}},[e._v("/config/example.env")]),e._v(". Do not confuse this "),a("code",[e._v(".env")]),e._v(" file with the one in the project root that keeps your mnemonic phrase and provider URL.")],1),e._v(" "),a("h2",{attrs:{id:"step-1-deploy-an-airnode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-deploy-an-airnode"}},[e._v("#")]),e._v(" Step 1: Deploy an Airnode")]),e._v(" "),a("p",[a("em",[e._v("Following these instructions to deploy an Airnode on AWS is "),a("a",{attrs:{href:"https://aws.amazon.com/free/",target:"_blank",rel:"noopener noreferrer"}},[e._v("free"),a("OutboundLink")],1),e._v(" as of May 22nd, 2021.")])]),e._v(" "),a("p",[e._v("Normally, you would need to do two things before you deploy an Airnode:")]),e._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/provider/api-integration.html"}},[e._v("Specify the API integration")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/provider/configuring-airnode.html"}},[e._v("Configure your Airnode")])],1)]),e._v(" "),a("p",[e._v("For this project, we specified a minimal integration to the popular and free "),a("a",{attrs:{href:"https://www.coingecko.com/en/api/documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoinGecko API"),a("OutboundLink")],1),e._v(", and prepared the configuration files. We only integrated a single API operation, "),a("code",[e._v("GET")]),e._v(" for "),a("code",[e._v("/coins/{id}")]),e._v(", which you can see below. The "),a("code",[e._v("localization")]),e._v(", "),a("code",[e._v("tickers")]),e._v(", "),a("code",[e._v("community_data")]),e._v(", "),a("code",[e._v("developer_data")]),e._v(" and "),a("code",[e._v("sparkline")]),e._v(" parameters are "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/provider/api-integration.html#fixedoperationparameters"}},[e._v("fixed")]),e._v(" as "),a("code",[e._v('"false"')]),e._v(", while "),a("code",[e._v("market_data")]),e._v(" is fixed as "),a("code",[e._v('"true"')]),e._v(". The "),a("code",[e._v("id")]),e._v(" parameter will be provided by the requester (e.g., "),a("code",[e._v('"ethereum"')]),e._v(") under the name "),a("code",[e._v("coinId")]),e._v(". You can make test calls over the "),a("a",{attrs:{href:"https://www.coingecko.com/en/api/documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoinGecko API docs"),a("OutboundLink")],1),e._v(" to see the response format.\n")],1),e._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://user-images.githubusercontent.com/19530665/103151070-be14ea00-478b-11eb-9608-a967c4282d9f.png",width:"1024"}})]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/tutorials/config-examples/config-example-json.html"}},[e._v("config.example.json")]),e._v(" for how this integration is achieved. We fixed the "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/provider/api-integration.html#reservedparameters"}},[e._v("reserved parameters")]),e._v(" to read the value from "),a("code",[e._v("market_data.current_price.usd")]),e._v(", cast it as an "),a("code",[e._v("int256")]),e._v(" and multiply it by "),a("code",[e._v("1,000,000")]),e._v(" before returning. No security scheme (i.e., API key) is defined in "),a("code",[e._v("config.json")]),e._v(" or "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/tutorials/config-examples/security-json.html"}},[e._v("security.json")]),e._v(" because the CoinGecko API is publicly accessible.")],1),e._v(" "),a("h3",{attrs:{id:"customize-your-config-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customize-your-config-json"}},[e._v("#")]),e._v(" Customize your "),a("code",[e._v("config.json")])]),e._v(" "),a("p",[e._v("Run the following to insert the contents of "),a("code",[e._v(".env")]),e._v(" to "),a("code",[e._v("config/config.example.json")]),e._v(" and save it as "),a("code",[e._v("config/config.json")])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run customize-config\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[e._v("#")]),e._v(" Deploy")]),e._v(" "),a("p",[e._v("Now your"),a("code",[e._v("/config")]),e._v("directory should have the required "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/airnode/specifications/config-json.html"}},[e._v("config.json")]),e._v(", "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/airnode/specifications/security-json.html"}},[e._v("security.json")]),e._v(" and "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/provider/deploying-airnode.html#creating-cloud-credentials"}},[e._v(".env")]),e._v(" files. Run the following to deploy your node.")],1),e._v(" "),a("Tabs",{attrs:{type:"border-card"}},[a("Tab",{attrs:{label:"Linux/Mac"}},[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" config\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The deployer has to be run in the directory where the configuration files are")]),e._v("\ndocker run -it --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env-file .env "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("COMMAND")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("deploy-first-time "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(":/airnode/out "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-deployer:pre-alpha\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])])]),e._v(" "),a("Tab",{attrs:{label:"Windows"}},[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" config\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The deployer has to be run in the directory where the configuration files are")]),e._v("\ndocker run -it --rm ^\n  --env-file .env ^\n  --env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("COMMAND")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("deploy-first-time ^\n  -v "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%cd%"')]),e._v(":/airnode/out ^\n  api3/airnode-deployer:pre-alpha\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])])])],1),e._v(" "),a("p",[e._v("This will output a receipt file with the extension"),a("code",[e._v(".receipt.json")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"fund-your-master-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fund-your-master-wallet"}},[e._v("#")]),e._v(" Fund your master wallet")]),e._v(" "),a("p",[e._v("Run the following to send your master wallet 0.1 ETH for it to "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/protocols/request-response/provider.html#creating-a-provider-record"}},[e._v("create a provider record")]),e._v(" for you on-chain.")],1),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run fund-master-wallet\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Your deployed Airnode will use these funds to make the transaction that will create the provider record on the chain you are operating on, and send the leftover ETH back to your address automatically.\n"),a("strong",[e._v("You will have to wait ~1 minute for this to happen, otherwise the next step will fail.")])]),e._v(" "),a("h3",{attrs:{id:"make-your-endpoint-publicly-accessible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-your-endpoint-publicly-accessible"}},[e._v("#")]),e._v(" Make your endpoint publicly accessible")]),e._v(" "),a("p",[a("code",[e._v("config.json")]),e._v("defines an "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/protocols/request-response/endpoint.html"}},[e._v("endpoint")]),e._v(" named"),a("code",[e._v("coinMarketData")]),e._v(", whose "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/protocols/request-response/endpoint.html#endpointid"}},[e._v("endpoint ID")]),e._v(" is "),a("code",[e._v("0xf466b8feec41e9e50815e0c9dca4db1ff959637e564bb13fefa99e9f9f90453c")]),e._v(". Endpoints are not publicly accessible by default, so you will have to make a transaction for this. Run the following to set your endpoint's "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/protocols/request-response/authorizer.html"}},[e._v("authorizers")]),e._v(" to "),a("code",[e._v("[0x0000000000000000000000000000000000000000]")]),e._v(", which makes it "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/provider/setting-authorizers.html#allow-all"}},[e._v("publicly accessible")]),e._v(":")],1),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run update-authorizers\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"step-2-make-a-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-make-a-request"}},[e._v("#")]),e._v(" Step 2: Make a request")]),e._v(" "),a("p",[e._v("The scripts in this step will use the Airnode you have deployed if you have completed Step 1.\nOtherwise, it will use the "),a("code",[e._v("providerId")]),e._v(" of the Airnode that we have deployed given in "),a("code",[e._v("src/parameters.js")]),e._v(".\nNote that the "),a("code",[e._v("endpointId")]),e._v(" will be the same either way because it is "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/protocols/request-response/endpoint.html#endpointid"}},[e._v("derived from the OIS and endpoint name")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"create-a-requester"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-requester"}},[e._v("#")]),e._v(" Create a requester")]),e._v(" "),a("p",[e._v("Run the following to create an on-chain "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/protocols/request-response/requester.html"}},[e._v("requester")]),e._v(" record.")],1),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run create-requester\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("You can use this requester denoted with an index in other projects as well.\nNote that "),a("code",[e._v("requesterIndex")]),e._v(" is chain-specific, so you will have to create another requester record on other chains.")]),e._v(" "),a("h3",{attrs:{id:"deploy-the-client-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-client-contract"}},[e._v("#")]),e._v(" Deploy the client contract")]),e._v(" "),a("p",[e._v("Run the following to deploy"),a("code",[e._v("ExampleClient.sol")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run deploy-client\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"endorse-the-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endorse-the-client"}},[e._v("#")]),e._v(" Endorse the client")]),e._v(" "),a("p",[e._v("Run the following to "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/protocols/request-response/endorsement.html"}},[e._v("endorse")]),e._v(" your deployed "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/protocols/request-response/client.html"}},[e._v("client")]),e._v(" contract using the requester you have created.")],1),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run endorse-client\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"derive-and-fund-the-designated-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#derive-and-fund-the-designated-wallet"}},[e._v("#")]),e._v(" Derive and fund the designated wallet")]),e._v(" "),a("p",[e._v("First run the following to derive the "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/protocols/request-response/designated-wallet.html"}},[e._v("designated wallet")]),e._v(" for the provider–requester pair.")],1),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run derive-designated-wallet-address\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Then fund this designated wallet with 0.1 ETH.")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run fund-designated-wallet\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The requests that the client contract will make will be funded by this 0.1 ETH.\nNote that you may have to run "),a("code",[e._v("fund-designated-wallet")]),e._v(" again if you make too many requests and use up this 0.1 ETH (very unlikely).")]),e._v(" "),a("h3",{attrs:{id:"make-a-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-a-request"}},[e._v("#")]),e._v(" Make a request")]),e._v(" "),a("p",[e._v("Run the following to make a request. The request will be fulfilled by the Airnode and printed out on the terminal. Now that the price is on-chain, you can use it in your contract to implement any arbitrary logic.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm run make-request\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Try replacing the "),a("code",[e._v("coinId")]),e._v(" value in "),a("code",[e._v("/scripts/make-request")]),e._v(" from "),a("code",[e._v('"ethereum"')]),e._v(" to "),a("code",[e._v('"bitcoin"')]),e._v(" and make another request.")]),e._v(" "),a("h2",{attrs:{id:"step-3-remove-airnode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-remove-airnode"}},[e._v("#")]),e._v(" Step 3: Remove Airnode")]),e._v(" "),a("p",[e._v("Don't forget to take down your Airnode as it is designed to be "),a("em",[e._v("set-and-forget")]),e._v(". When you are done with this project, go to"),a("code",[e._v("config/")]),e._v("as your working directory and use the command below where"),a("code",[e._v("$RECEIPT_FILENAME")]),e._v("is replaced with the name of your receipt file ending with"),a("code",[e._v(".receipt.json")]),e._v(". You can refer to our "),a("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/docker/deployer-image.html"}},[e._v("Docker instructions")]),e._v(" for more information.")],1),e._v(" "),a("Tabs",{attrs:{type:"border-card"}},[a("Tab",{attrs:{label:"Linux/Mac"}},[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("docker run -it --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env-file .env "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("COMMAND")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("remove-with-receipt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("RECEIPT_FILENAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$RECEIPT_FILENAME")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(":/airnode/out "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-deployer:pre-alpha\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])])]),e._v(" "),a("Tab",{attrs:{label:"Windows"}},[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("docker run -it --rm ^\n  --env-file .env ^\n  --env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("COMMAND")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("remove-with-receipt ^\n  --env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("RECEIPT_FILENAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$RECEIPT_FILENAME")]),e._v(" ^\n  -v "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%cd%"')]),e._v(":/airnode/out ^\n  api3/airnode-deployer:pre-alpha\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])])])],1),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("You deployed an Airnode, made a request to it and received the response at the contract.\nIf you want to learn more, see the following resources:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/api3dao/api3-whitepaper",target:"_blank",rel:"noopener noreferrer"}},[e._v("API3 whitepaper"),a("OutboundLink")],1),e._v(" will give you a broad overview of the project.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/api3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Medium posts"),a("OutboundLink")],1),e._v(" explain API3 in smaller, more digestible articles.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/pre-alpha/packages/admin",target:"_blank",rel:"noopener noreferrer"}},[e._v("@api3/airnode-admin"),a("OutboundLink")],1),e._v(" lets you interact with the Airnode contract (to create a request, endorse a client, etc.) using a CLI tool.")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);