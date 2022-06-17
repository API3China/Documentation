(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{719:function(e,t,o){"use strict";o.r(t);var n=o(15),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"frontmatter-title"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),o("VersionWarning"),e._v(" "),o("TocHeader"),e._v(" "),o("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),o("p",[e._v("Users configure their Airnodes by providing a "),o("code",[e._v("config.json")]),e._v(" and a "),o("code",[e._v("security.json")]),e._v(" file during deployment/redeployment. "),o("code",[e._v("config.json")]),e._v(" specifies the API–oracle integration specifications in the form of "),o("RouterLink",{attrs:{to:"/airnode/pre-alpha/airnode/specifications/ois.html"}},[e._v("OIS")]),e._v("es, but also user-specific configuration details. "),o("code",[e._v("security.json")]),e._v(" includes security credentials such as API keys. Both "),o("RouterLink",{attrs:{to:"/airnode/pre-alpha/airnode/specifications/config-json.html"}},[e._v("config.json")]),e._v(" and "),o("RouterLink",{attrs:{to:"/airnode/pre-alpha/airnode/specifications/security-json.html"}},[e._v("security.json")]),e._v(" formats are documented, which you can follow to create these files. This guide aims to follow a more instructive approach and give some tips along the way.")],1),e._v(" "),o("p",[e._v("We assume that you have already followed the "),o("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/provider/api-integration.html"}},[e._v("API integration guide")]),e._v(" and created your OIS. Similar to the "),o("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/templates/ois-json.html"}},[e._v("OIS template")]),e._v(" we have provided in the previous guide, we have a "),o("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/templates/config-json.html"}},[e._v("config.json template")]),e._v(" and a "),o("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/templates/security-json.html"}},[e._v("security.json template")]),e._v(" for this guide. Download these files and see the "),o("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/provider/api-integration.html#ois-template"}},[e._v("template notation information")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"creating-config-json"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-config-json"}},[e._v("#")]),e._v(" Creating "),o("code",[e._v("config.json")])]),e._v(" "),o("p",[e._v("As you can see in the template, "),o("code",[e._v("config.json")]),e._v(" has 4 fields:")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("ois")])]),e._v(" "),o("li",[o("code",[e._v("triggers")])]),e._v(" "),o("li",[o("code",[e._v("nodeSettings")])]),e._v(" "),o("li",[o("code",[e._v("id")])])]),e._v(" "),o("h3",{attrs:{id:"ois"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ois"}},[e._v("#")]),e._v(" "),o("code",[e._v("ois")])]),e._v(" "),o("p",[o("code",[e._v("ois")]),e._v(" is a list OIS objects that Airnode will be serving. This means that a single instance of an Airnode can serve multiple APIs. You can simply copy paste OISes that you will be serving into the "),o("code",[e._v("ois")]),e._v(" list.")]),e._v(" "),o("h3",{attrs:{id:"triggers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#triggers"}},[e._v("#")]),e._v(" "),o("code",[e._v("triggers")])]),e._v(" "),o("p",[o("code",[e._v("triggers")]),e._v(" allow you to expose the endpoints in your OIS selectively. For example, your OIS may include 10 endpoints, but you may only want to serve 2. Instead of modifying the OIS, you would simply create triggers for the 2. Similarly, you may want to serve an endpoint through the request–response protocol, but not the pub–sub protocol. In that case, you would only create the trigger for the request–response protocol.")]),e._v(" "),o("p",[e._v("Note that at this stage, only the request–response protocol is implemented. You can list the endpoints that you want to serve under "),o("code",[e._v("triggers.request")]),e._v(". In most cases, you would create a trigger for each endpoint in your OIS.")]),e._v(" "),o("p",[e._v("Each trigger has an "),o("code",[e._v("oisTitle")]),e._v(" and "),o("code",[e._v("endpointName")]),e._v(" that allow you to refer to one of the endpoints in one of the OISes. Fill these in accordingly. "),o("code",[e._v("endpointId")]),e._v(" is the ID that the requester will use in their on-chain requests to refer to this specific trigger. As a convention, we recommend this to be chosen as the Keccak256 hash of "),o("code",[e._v("{oisTitle}/{endpointName}")]),e._v(". In JS (using ethers.js):")]),e._v(" "),o("div",{staticClass:"language-js line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[e._v("endpointId "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ethers"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("utils"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("keccak256")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ethers"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("utils"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("defaultAbiCoder"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("encode")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'string'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),o("span",{pre:!0,attrs:{class:"token template-string"}},[o("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),o("span",{pre:!0,attrs:{class:"token interpolation"}},[o("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("${")]),e._v("oisTitle"),o("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("}")])]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("/")]),o("span",{pre:!0,attrs:{class:"token interpolation"}},[o("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("${")]),e._v("endpointName"),o("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("}")])]),o("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("You can also use "),o("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/pre-alpha/packages/admin#derive-endpoint-id",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("@api3/airnode-admin")]),o("OutboundLink")],1),e._v(" to derive endpoint IDs according to this convention. However, you can set "),o("code",[e._v("endpointId")]),e._v(" to an arbitrary "),o("code",[e._v("bytes32")]),e._v(" value (e.g., "),o("code",[e._v("0x0000000000000000000000000000000000000000000000000000000000000123")]),e._v("), and as long as the requester uses the same "),o("code",[e._v("endpointId")]),e._v(" while making requests to this endpoint, it will work fine. If you are not using the recommended convention, make sure that your endpoints have different IDs.")]),e._v(" "),o("h3",{attrs:{id:"nodesettings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nodesettings"}},[e._v("#")]),e._v(" "),o("code",[e._v("nodeSettings")])]),e._v(" "),o("p",[o("code",[e._v("nodeSettings")]),e._v(" are node-specific configuration parameters. The first of these is "),o("code",[e._v("providerIdShort")]),e._v(", which is used as a label by the deployer to detect previous deployments. Therefore, you must not have the "),o("code",[e._v("providerIdShort")]),e._v(" field in your "),o("code",[e._v("config.json")]),e._v(" during the first deployment. On the other hand, you must have it for the following redeployments. You can find your "),o("code",[e._v("providerIdShort")]),e._v(" in the receipt file outputted after deployment. This guide assumes that you have not deployed Airnode yet, so we did not include the "),o("code",[e._v("providerIdShort")]),e._v(" field in the "),o("code",[e._v("config.json")]),e._v(" template.")]),e._v(" "),o("p",[o("code",[e._v("nodeVersion")]),e._v(" indicates which node version this "),o("code",[e._v("config.json")]),e._v(" is prepared for. Since the "),o("code",[e._v("config.json")]),e._v(" format can be expected to change with node versions, using a "),o("code",[e._v("config.json")]),e._v(" prepared for one Airnode version with another may result in unexpected issues. The current node version is "),o("code",[e._v("0.1.0")]),e._v(", so you can leave it as such.")]),e._v(" "),o("p",[o("code",[e._v("cloudProvider")]),e._v(" indicates to the deployer which cloud provider Airnode should be deployed at. The deployer currently supports AWS, so you can leave this value as "),o("code",[e._v("aws")]),e._v(". We are planning to extend the deployer to support a wide variety of cloud providers. If you would like to contribute, please join the conversation in "),o("a",{attrs:{href:"https://github.com/api3dao/airnode/issues/154",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("code",[e._v("region")]),e._v(" can be seen as an extension of "),o("code",[e._v("cloudProvider")]),e._v(", it refers to which region of the cloud provider Airnode will be deployed at. An example value would be "),o("code",[e._v("us-east-1")]),e._v(". Note that transferring a deployment from one region to the other is not trivial at this moment (i.e., it does not take one command like deployment, but rather three). Therefore, try to pick a region and stick to it for this specific deployment. If you would like to contribute to related tooling, please join the conversation in "),o("a",{attrs:{href:"https://github.com/api3dao/airnode/issues/155",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("code",[e._v("stage")]),e._v(" allows you to deploy multiple Airnodes with the same provider ID. For example, the provider may deploy one Airnode with the stage "),o("code",[e._v("api3")]),e._v(" to serve API3 dAPIs, and one with the stage "),o("code",[e._v("public")]),e._v(" that serves the public. A regular user will have a single deployment, so feel free to set any descriptive name as your "),o("code",[e._v("stage")]),e._v(". And finally, you probably want your "),o("code",[e._v("logFormat")]),e._v(" to be set to "),o("code",[e._v("json")]),e._v(" for your Airnode to log in JSON.")]),e._v(" "),o("h4",{attrs:{id:"nodesettings-chains"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nodesettings-chains"}},[e._v("#")]),e._v(" "),o("code",[e._v("nodeSettings.chains")])]),e._v(" "),o("p",[e._v("An Airnode can serve multiple chains simultaneously. You can specify each of these chains under "),o("code",[e._v("nodeSettings.chains")]),e._v(" as an object.")]),e._v(" "),o("p",[e._v("You should set the ID of the chain in "),o("code",[e._v("id")]),e._v(" (e.g., "),o("code",[e._v("3")]),e._v(" for Ropsten testnet). "),o("code",[e._v("type")]),e._v(" is the type of the chain, and only "),o("code",[e._v("evm")]),e._v(" is supported at the moment.")]),e._v(" "),o("p",[e._v("Airnode can use multiple Ethereum providers per chain. These can both be your private Ethereum node, or an Ethereum service provider such as Infura. Accordingly, the "),o("code",[e._v("providers")]),e._v(" field is list. Enter the "),o("code",[e._v("name")]),e._v(" (to be used in logs) and the "),o("code",[e._v("url")]),e._v(" of the Ethereum provider as an object.")]),e._v(" "),o("p",[o("code",[e._v("contracts")]),e._v(" contains the addresses of the contracts that implement the Airnode protocols. Although you can deploy these contracts yourself, you are recommended to use the ones that were deployed by API3. You can find them "),o("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/pre-alpha/packages/protocol/deployments",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("code",[e._v("providerAdminForRecordCreation")]),e._v(" is the address that your Airnode will set as the "),o("RouterLink",{attrs:{to:"/airnode/pre-alpha/protocols/request-response/provider.html#provideradmin"}},[e._v("provider admin")]),e._v(" while creating the provider record on the respective chain. You should set this field to an address that only you control.")],1),e._v(" "),o("h3",{attrs:{id:"id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[e._v("#")]),e._v(" "),o("code",[e._v("id")])]),e._v(" "),o("p",[o("code",[e._v("config.json")]),e._v(" has an "),o("code",[e._v("id")]),e._v(" field, which identifies the specific configuration. Furthermore, "),o("code",[e._v("security.json")]),e._v(" has the same field with the identical value, allowing the deployer to verify that the two files match. For this to work, you are recommended to choose a unique value for this field for each "),o("code",[e._v("config.json")]),e._v("/"),o("code",[e._v("security.json")]),e._v(" you create (e.g., use a UUID).")]),e._v(" "),o("h2",{attrs:{id:"creating-security-json"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-security-json"}},[e._v("#")]),e._v(" Creating "),o("code",[e._v("security.json")])]),e._v(" "),o("p",[o("code",[e._v("security.json")]),e._v(" is where we will store our API keys. Make sure to download the "),o("RouterLink",{attrs:{to:"/airnode/pre-alpha/guides/templates/security-json.html"}},[o("code",[e._v("security.json")]),e._v(" template")]),e._v(" and refer to the "),o("RouterLink",{attrs:{to:"/airnode/pre-alpha/airnode/specifications/security-json.html"}},[e._v("docs")]),e._v(" as needed.")],1),e._v(" "),o("p",[e._v("For each security scheme you have defined in your "),o("code",[e._v("config.json")]),e._v(", you need to create an entry in "),o("code",[e._v("security.json")]),e._v(" that includes its value. Feel free to duplicate the OIS entries under "),o("code",[e._v("apiCredentials")]),e._v(" or security scheme entries under these OIS entries as needed. Finally, make sure that you use the same "),o("code",[e._v("id")]),e._v(" that you have used in "),o("code",[e._v("config.json")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"conclusion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),o("p",[e._v("In this guide, we created the "),o("code",[e._v("config.json")]),e._v(" and "),o("code",[e._v("security.json")]),e._v(" files required to deploy our Airnode. Note that "),o("code",[e._v("config.json")]),e._v(" is user-specific, so your "),o("code",[e._v("config.json")]),e._v(" file is probably of not much use to others. Furthermore, it contains your Ethereum provider URLs, which tend to include security credentials/keys. Your "),o("code",[e._v("security.json")]),e._v(" contains your API keys, so it should definitely be kept secret. Therefore, even though you can safely share your OIS, you should avoid publishing your configuration files/pushing them to repos.")]),e._v(" "),o("p",[e._v("Now that we have our Airnode configuration files, the next step is deployment.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);