(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{586:function(e,t,a){e.exports=a.p+"assets/img/api-integration-ois.a9073315.png"},945:function(e,t,a){"use strict";a.r(t);var n=a(9),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("TitleSpan",[e._v("Build an Airnode")]),e._v(" "),n("h1",{attrs:{id:"frontmatter-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),n("VersionWarning"),e._v(" "),n("TocHeader"),e._v(" "),n("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,4]}}),e._v(" "),n("p",[e._v("A successful integration of an API with an Airnode requires the mapping of each\nother's interface. This is accomplished using an OIS\n("),n("RouterLink",{attrs:{to:"/ois/v1.0.0/ois.html"}},[e._v("Oracle Integration Specifications")]),e._v(") json object, found in\nthe config.json file, that is designed to follow three basic steps.")],1),e._v(" "),n("ul",[n("li",[e._v("API operations are specified")]),e._v(" "),n("li",[e._v("Airnode endpoints are specified")]),e._v(" "),n("li",[e._v("Airnode endpoints are mapped to API operations")])]),e._v(" "),n("blockquote",[n("p",[n("img",{attrs:{src:a(586),alt:"api-integration-ois"}}),e._v(" "),n("br"),n("br")]),e._v(" "),n("p",{staticClass:"diagram-line"},[e._v("The OIS object in config.json contains mapping information of API operations to Airnode endpoint definitions.")])]),e._v(" "),n("p",[e._v("OIS is a mapping of API operations, such as "),n("code",[e._v("GET /coins/{id}")]),e._v(", to Airnode\nendpoints. When a requester contract calls a AirnodeRrp.sol contract request\nfunction, such as "),n("code",[e._v("makeFullRequest(..., callData)")]),e._v(", the callData is communicated\nto the off-chain Airnode which uses OIS mappings to translate the callData into\na valid HTTP request for the appropriate API operation.")]),e._v(" "),n("p",[e._v("The only thing needed to integrate an API to Airnode is to create an OIS object\nwhich is in the Airnode's "),n("code",[e._v("config.json")]),e._v(" file. This guide is an instructive\napproach to create an OIS object. OIS borrows formatting from\n"),n("a",{attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAS OpenAPI Specification"),n("OutboundLink")],1),e._v(".\nIf you have experience with OAS, OIS will seem familiar.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("OAS")]),e._v(" "),n("p",[e._v("It is not recommended to refer to OAS for help while creating your OIS object.\nOIS only borrows formatting practices from OAS. Everything needed to create an\nOIS object is in these docs.")])]),e._v(" "),n("p",[n("strong",[e._v("Tips while using this guide.")])]),e._v(" "),n("ul",[n("li",[e._v("Open the "),n("RouterLink",{attrs:{to:"/airnode/v0.5/reference/templates/ois-json.html"}},[e._v("OIS template")]),e._v(" in another\nbrowser window to follow along.")],1),e._v(" "),n("li",[e._v("View an example of an\n"),n("RouterLink",{attrs:{to:"/airnode/v0.5/reference/examples/config-json.html"}},[e._v("Airnode config.json file")]),e._v(" from\nthe Airnode Starter tutorial.")],1)]),e._v(" "),n("h2",{attrs:{id:"ois-template"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ois-template"}},[e._v("#")]),e._v(" OIS Template")]),e._v(" "),n("p",[e._v("OIS is a json object that is added to an Airnode's\n"),n("RouterLink",{attrs:{to:"/airnode/v0.5/reference/templates/config-json.html"}},[e._v("config.json")]),e._v(" file as the ("),n("code",[e._v("ois")]),e._v(")\n"),n("em",[e._v("key")]),e._v(", sometimes called a "),n("em",[e._v("field")]),e._v(". Try using the\n"),n("RouterLink",{attrs:{to:"/airnode/v0.5/reference/templates/ois-json.html"}},[e._v("OIS template")]),e._v(" to construct an OIS and\nadd it to the Airnode's config.json file later.")],1),e._v(" "),n("p",[e._v("In the OIS template, there are some fields that contain "),n("code",[e._v("{FILL_*}")]),e._v(". This means\nthat the value added is independent from other fields. On the other hand, if two\nfields contain the same expression (e.g., "),n("code",[e._v("{FILL_OPERATION_PARAMETER_1_NAME}")]),e._v("),\nyou must use the same value in them, because they are referencing each other.")]),e._v(" "),n("p",[e._v("OIS uses a simplified version of the OAS. This means that if you have the\nOpenAPI specifications of the API that you are going to integrate, you are about\n80% done, because you can copy paste entire sections (but make sure that you\nmake the necessary modifications to conform to the OIS format).")]),e._v(" "),n("p",[e._v("This guide will assume you do not have the OpenAPI specifications of the API\nthat you will be integrating.")]),e._v(" "),n("h2",{attrs:{id:"step-1-specify-ois-definitions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-1-specify-ois-definitions"}},[e._v("#")]),e._v(" Step 1: Specify OIS Definitions")]),e._v(" "),n("p",[e._v("Start building an OIS by adding three descriptive fields to the root of the OIS\njson object.")]),e._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"oisFormat"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"title"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"myOisTitle"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.1.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  ...\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("h3",{attrs:{id:"oisformat"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#oisformat"}},[e._v("#")]),e._v(" oisFormat")]),e._v(" "),n("p",[e._v("Leave this as "),n("code",[e._v("1.0.0")]),e._v(", which is the current OIS format version.")]),e._v(" "),n("h3",{attrs:{id:"title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[e._v("#")]),e._v(" title")]),e._v(" "),n("p",[e._v("This is a unique title of the OIS. Note that an Airnode can be configured with\nmore than one OIS and uses the title as the OIS identifier.")]),e._v(" "),n("h3",{attrs:{id:"version"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" version")]),e._v(" "),n("p",[e._v("This is the version of the OIS which allows for version-control of the OIS\nintegration. It is recommended to use "),n("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("semver"),n("OutboundLink")],1),e._v(" versioning.\nThe initial version could be <"),n("code",[e._v("0.1.0")]),e._v(">.")]),e._v(" "),n("h2",{attrs:{id:"step-2-specifying-the-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-2-specifying-the-api"}},[e._v("#")]),e._v(" Step 2: Specifying the API")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("apiSpecifications")]),e._v(" field is used to describe the API and its operations.")]),e._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"apiSpecifications"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"servers"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"paths"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"components"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("h3",{attrs:{id:"servers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#servers"}},[e._v("#")]),e._v(" Servers")]),e._v(" "),n("p",[e._v("The first step of specifying your API is to enter its "),n("em",[e._v("baseURL")]),e._v(" in the\n"),n("code",[e._v("apiSpecifications.servers[0].url")]),e._v(" field. Only one object (i.e., url) is allowed\nin the "),n("code",[e._v("apiSpecifications.servers")]),e._v(" array. A warning is raised during conversion\nif servers has multiple elements. This baseURL will apply to all operations.")]),e._v(" "),n("h4",{attrs:{id:"choosing-a-base-url"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#choosing-a-base-url"}},[e._v("#")]),e._v(" Choosing a Base URL")]),e._v(" "),n("p",[e._v("Consider the following full URL to execute an API operation that returns all\nknow tokens.")]),e._v(" "),n("blockquote",[n("p",[e._v("https://www.myapi.com/v1/tokens")])]),e._v(" "),n("p",[e._v("There are two ways to segment this.")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("baseURL:")]),e._v(" https://www.myapi.com")]),e._v(" "),n("p",[n("strong",[e._v("path:")]),e._v(" /v1/data")])]),e._v(" "),n("p",[e._v("or")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("baseURL")]),e._v(": https://www.myapi.com/v1")]),e._v(" "),n("p",[n("strong",[e._v("path:")]),e._v(" /data")])]),e._v(" "),n("p",[e._v("Because the call will be made to <"),n("code",[e._v("baseURL+path")]),e._v("> both will result in the same\nfull URL.")]),e._v(" "),n("p",[e._v("Set the baseURL as the section of the full URL that you expect to be shared by\nall operations. From the examples above it is recommended to use\n"),n("code",[e._v("https://www.myapi.com")]),e._v(", in case additional paths starting with "),n("code",[e._v("/v2")]),e._v(" get added\nto the API in the future. As you can tell, API integration requires many\nsubjective choices, and is more art than science.")]),e._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"apiSpecifications"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"servers"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Only one element is allowed in the servers array.")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"url"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://www.myapi.com"')]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  ...\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("h3",{attrs:{id:"paths"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#paths"}},[e._v("#")]),e._v(" Paths")]),e._v(" "),n("p",[e._v("The "),n("em",[e._v("paths")]),e._v(" field defines all the API operations much like an OpenAPI\nSpecification file.")]),e._v(" "),n("p",[n("em",[e._v("What is an API operation?")])]),e._v(" "),n("blockquote",[n("p",[e._v("An API operation is specified as a unique combination of a "),n("em",[n("strong",[e._v("path")])]),e._v(" and an\nHTTP "),n("em",[n("strong",[e._v("method")])]),e._v(". "),n("code",[e._v("GET /token/{id}")])])]),e._v(" "),n("h4",{attrs:{id:"operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#operations"}},[e._v("#")]),e._v(" Operations")]),e._v(" "),n("p",[e._v("In the examples below, "),n("code",[e._v("GET")]),e._v(" refers to an\n"),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP request method"),n("OutboundLink")],1),e._v(".\nThis implies that you could have another API operation that can be specified\nusing a different method but the same path.")]),e._v(" "),n("blockquote",[n("p",[e._v("path: /data")]),e._v(" "),n("p",[e._v("method: GET")])]),e._v(" "),n("blockquote",[n("p",[e._v("path: /data")]),e._v(" "),n("p",[e._v("method: POST")])]),e._v(" "),n("p",[e._v("Therefore, a path is not enough to specify an API operation by itself, you must\nalso provide a method. If a new path is needed then it must start a new object\nin paths with its own methods. Currently only the GET and POST methods are\nsupported by Airnode.")]),e._v(" "),n("p",[e._v("With regards to the "),n("RouterLink",{attrs:{to:"/airnode/v0.5/reference/templates/ois-json.html"}},[e._v("OIS template")]),e._v(",\nthe name of the element (denoted as "),n("code",[e._v("{FILL_PATH}")]),e._v(") should be replaced with the\npath (e.g., "),n("code",[e._v("/data")]),e._v("). Similarly, "),n("code",[e._v("{FILL_METHOD}")]),e._v(" should be replaced with the\nmethod of the operation you want to integrate (e.g., "),n("code",[e._v("get")]),e._v("). The method must be\nlowercase.")],1),e._v(" "),n("p",[e._v("The following example illustrates three operations, "),n("code",[e._v("GET /data")]),e._v(", "),n("code",[e._v("POST /data")]),e._v(",\n"),n("code",[e._v("GET /tokens")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"paths"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"/data"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// path    {FILL_PATH}")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"get"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// method  {FILL_METHOD}")]),e._v("\n      ...      "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// parameters")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"post"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// method  {FILL_METHOD}")]),e._v("\n      ...      "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// parameters")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"/tokens"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// path    {FILL_PATH}")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"get"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// method  {FILL_METHOD}")]),e._v("\n      ...      "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// parameters")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br")])]),n("h4",{attrs:{id:"parameters-operation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parameters-operation"}},[e._v("#")]),e._v(" Parameters (operation)")]),e._v(" "),n("p",[e._v("After specifying the path and method of an API operation, the final step is to\nspecify its parameters. Each parameter is an object in the\n"),n("code",[e._v("apiSpecifications.paths.{PATH}.{METHOD}.parameters")]),e._v(" array, with the fields "),n("code",[e._v("in")]),e._v("\nand "),n("code",[e._v("name")]),e._v(". "),n("code",[e._v("in")]),e._v(" tells where the parameter goes in the HTTP request and "),n("code",[e._v("name")]),e._v("\ntells the name that the parameter value will be sent under. Currently Airnode\nsupports the following parameter types for use with "),n("code",[e._v("in")]),e._v(".")]),e._v(" "),n("ul",[n("li",[e._v("query")]),e._v(" "),n("li",[e._v("header")]),e._v(" "),n("li",[e._v("path")]),e._v(" "),n("li",[e._v("cookie")])]),e._v(" "),n("p",[e._v("When integrating a POST method, define the body parameters with "),n("code",[e._v("in: query")]),e._v(".\nAirnode will convert all "),n("code",[e._v("query")]),e._v(" types into the "),n("code",[e._v("requestBody")]),e._v(". Note that only\nthe non-nested application/json content-type is supported.")]),e._v(" "),n("p",[e._v("It is not necessary to specify all API operation parameters, but only the ones\nthe on-chain requester will need to be able to provide (see Airnode endpoint\n"),n("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/guides/build-an-airnode/api-integration.html#parameters"}},[e._v("parameters")]),e._v("), and the ones that you want to\nhard-code a value for (see Airnode endpoint\n"),n("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/guides/build-an-airnode/api-integration.html#fixedoperationparameters"}},[e._v("fixed operation parameters")]),e._v(").")],1),e._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"paths"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"/data/{id}"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"get"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"parameters"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"in"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"path"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n          "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"id"')]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"in"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"header"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n          "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Accept"')]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br")])]),n("p",[n("em",[e._v("Example: Get a token")])]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("GET /token/{id}")]),e._v(" returns a token using the token's "),n("code",[e._v("id")]),e._v(" which is a "),n("code",[e._v("path")]),e._v("\nparameter.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Method")]),e._v(" "),n("th",[e._v("Path")]),e._v(" "),n("th",[e._v("in")]),e._v(" "),n("th",[e._v("name")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("GET")]),e._v(" "),n("td",[e._v("/token/{id}")]),e._v(" "),n("td",[e._v("path")]),e._v(" "),n("td",[e._v("id")])])])]),e._v(" "),n("p",[n("em",[e._v("Example: Create a token")])]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("POST /token")]),e._v(" operation accepts three parameters. The name and description\nof the token are placed in the type "),n("code",[e._v("query")]),e._v(" and will be moved by Airnode to the\nrequestBody upon calling the API operation. The third is a "),n("code",[e._v("header")]),e._v(" parameter\nthat describes the Content-Type of the request such as "),n("code",[e._v("application/json")]),e._v(" or\n"),n("code",[e._v("application/x-www-form-urlencoded")]),e._v(".")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Method")]),e._v(" "),n("th",[e._v("Path")]),e._v(" "),n("th",[e._v("in")]),e._v(" "),n("th",[e._v("name")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("POST")]),e._v(" "),n("td",[e._v("/token")]),e._v(" "),n("td",[e._v("query")]),e._v(" "),n("td",[e._v("name")])]),e._v(" "),n("tr",[n("td"),e._v(" "),n("td"),e._v(" "),n("td",[e._v("query")]),e._v(" "),n("td",[e._v("description")])]),e._v(" "),n("tr",[n("td"),e._v(" "),n("td"),e._v(" "),n("td",[e._v("header")]),e._v(" "),n("td",[e._v("Accept")])])])]),e._v(" "),n("p",[n("em",[e._v("Example: Get all tokens")])]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("GET /tokens")]),e._v(" returns a list of all tokens. The list count can be limited\nusing the `limit' parameter which the API operation considers as optional since\nit will not return an error if omitted.")]),e._v(" "),n("blockquote",[n("p",[n("code",[e._v("GET /tokens")]),e._v(" returns all tokens.")]),e._v(" "),n("p",[n("code",[e._v("GET /tokens?limit=10")]),e._v(" returns the first ten tokens.")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Method")]),e._v(" "),n("th",[e._v("Path")]),e._v(" "),n("th",[e._v("in")]),e._v(" "),n("th",[e._v("name")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("GET")]),e._v(" "),n("td",[e._v("/tokens")]),e._v(" "),n("td",[e._v("query")]),e._v(" "),n("td",[e._v("limit")])])])]),e._v(" "),n("h2",{attrs:{id:"step-3-specifying-airnode-endpoints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-3-specifying-airnode-endpoints"}},[e._v("#")]),e._v(" Step 3: Specifying Airnode Endpoints")]),e._v(" "),n("p",[e._v("An Airnode endpoint is a service that Airnode exposes to on-chain requesters. It\nmaps to an API operation, but the nature of this mapping is customizable. It is\nthe integrator's job to define what this service is.")]),e._v(" "),n("p",[e._v("For example, if your API operation returns an asset price given its ticker\n(e.g., "),n("code",[e._v("BTC")]),e._v("), you can specify the endpoint such that the requester provides the\nticker as a parameter. The resulting endpoint would be a general one that\nreturns prices for any kind of asset. On the other hand, you can hardcode "),n("code",[e._v("BTC")]),e._v("\nas the asset whose price will be returned (using\n"),n("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/guides/build-an-airnode/api-integration.html#fixedoperationparameters"}},[e._v("fixed operation parameters")]),e._v("),\nwhich would make your endpoint a specific one that only returns the BTC price.")],1),e._v(" "),n("p",[e._v("The recommended endpoint definition pattern is to create an Airnode endpoint for\neach API operation, and allow the requesters to provide all operation parameters\nthemselves. This results in optimal flexibility, and essentially allows the\nrequesters to use the entire API functionality on-chain. Normally, oracle\nintegrations strive to hard-code as many API parameters as possible because\npassing these parameters on-chain results in a gas cost overhead. However, the\nAirnode protocol uses "),n("RouterLink",{attrs:{to:"/airnode/v0.5/concepts/template.html"}},[e._v("templates")]),e._v(" (not to be\nconfused with the OIS template used for this guide), which allow requesters to\nspecify a large number of endpoint parameters at no additional gas cost.")],1),e._v(" "),n("p",[e._v("Note that there are some cases where you may not want to map endpoints to API\noperations one-to-one. For example, an API operation can have a "),n("code",[e._v("header")]),e._v("\nparameter, "),n("code",[e._v("Accept")]),e._v(", that can take the values "),n("code",[e._v("application/json")]),e._v(" or\n"),n("code",[e._v("applicatino/xml")]),e._v(" to determine how to format the data that the API will respond\nto the call. Airnode expects responses to be in JSON format, and thus\nhard-coding this parameter as "),n("code",[e._v("JSON")]),e._v(" would be more suitable than letting the\nrequester decide, as there is only one valid choice. Again, the integrator's job\nis to be aware of these subtleties and use judgement.")]),e._v(" "),n("p",[e._v("After this brief detour, let us get back to filling in our OIS template.")]),e._v(" "),n("h3",{attrs:{id:"endpoints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[e._v("#")]),e._v(" Endpoints")]),e._v(" "),n("p",[e._v("The field "),n("code",[e._v("endpoints")]),e._v(" is an array, with each row representing an Airnode\nendpoint. The first field you need to fill in is "),n("code",[e._v("name")]),e._v(". Make sure that it is\ndescriptive and unique from other endpoint names. If you are integrating API\noperations to Airnode endpoints one-to-one, using the API operation path as the\nendpoint name is a decent choice (i.e., "),n("code",[e._v("/token")]),e._v("). Note that you would also add\nthe method to this name if there were multiple operations with different methods\nfor a single path (i.e., "),n("code",[e._v("GET/token")]),e._v(").")]),e._v(" "),n("p",[e._v("The next step is to fill in "),n("code",[e._v("operation")]),e._v(" object. Here, you need to enter the\n"),n("code",[e._v("path")]),e._v(" and "),n("code",[e._v("method")]),e._v(" of an API operation you have defined in\n"),n("code",[e._v("apiSpecifications.paths")]),e._v(", resulting in the Airnode endpoint calling the now\nlinked API operation.")]),e._v(" "),n("h4",{attrs:{id:"fixedoperationparameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fixedoperationparameters"}},[e._v("#")]),e._v(" fixedOperationParameters")]),e._v(" "),n("p",[e._v("It is not uncommon to hard-code API parameters (recall the "),n("code",[e._v("Accept")]),e._v(" operation\nparameter in the above example). Such hard-coded parameters are called\n"),n("code",[e._v("fixedOperationParameters")]),e._v(".")]),e._v(" "),n("p",[e._v("In the OIS template there is a fixed operation parameter under\n"),n("code",[e._v("endpoints[n].fixedOperationParameters")]),e._v(", and it refers to the first API\noperation parameter. This means that whenever the Airnode receives a request for\nthis endpoint, the respective API call will be made with that API operation\nparameter set to\n"),n("code",{staticStyle:{"overflow-wrap":"break-word"}},[e._v("endpoints[n].fixedOperationParameters[n].value")]),e._v(".\nThe requester does not supply a value for "),n("code",[e._v("fixedOperationParameters")]),e._v(".")]),e._v(" "),n("p",[e._v("An Airnode endpoint can have multiple "),n("code",[e._v("fixedOperationParameters")]),e._v(". An API\noperation parameter cannot be in both "),n("code",[e._v("endpoints[n].fixedOperationParameters")]),e._v("\nand "),n("code",[e._v("endpoints[n].parameters")]),e._v(".")]),e._v(" "),n("h4",{attrs:{id:"reservedparameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reservedparameters"}},[e._v("#")]),e._v(" reservedParameters")]),e._v(" "),n("p",[e._v('The requester can provide some parameters that are not mapped to API operation\nparameters. These parameters are called "reserved parameters", and their names\nstart with an underscore. See the\n'),n("RouterLink",{attrs:{to:"/ois/v1.0.0/ois.html#_5-4-reservedparameters"}},[e._v("related OIS docs")]),e._v(" for more\ninformation.")],1),e._v(" "),n("p",[e._v("The current list of reserved parameters are "),n("code",[e._v("_type")]),e._v(", "),n("code",[e._v("_path")]),e._v(" and "),n("code",[e._v("_times")]),e._v(". See\n"),n("RouterLink",{attrs:{to:"/ois/v1.0.0/reserved-parameters.html"}},[e._v("Reserved Parameters")]),e._v(" in the OIS document\nset to understand what each of these parameters are for. In most cases, all\nthree should be defined as reserved parameters with no fixed/default values, as\ndoing so provides the requester with the most flexibility.")],1),e._v(" "),n("h4",{attrs:{id:"parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" parameters")]),e._v(" "),n("p",[e._v("Airnode endpoint parameters map to API operation parameters that the requester\nis allowed to provide values for. It refers to an API operation through its\nfield "),n("code",[e._v("operationParameter")]),e._v(". You can also provide "),n("code",[e._v("default")]),e._v(" values for endpoint\nparameters, though this is not recommended in most cases.")]),e._v(" "),n("p",[e._v("Endpoint parameters have a "),n("code",[e._v("name")]),e._v(" field, which does not have to be the same as\nthe API operation parameter that they map to. As a separate note, an Airnode\nendpoint can have multiple parameters.")]),e._v(" "),n("h2",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),n("p",[e._v("The API operations and Airnode endpoints are now specified. Each Airnode\nendpoint maps to an API operation, and each Airnode endpoint parameter or\nfixedOperationParameter maps to an API operation parameter. The resulting OIS\nincludes no user-specific information, which means that you can share it for\nothers to easily provide the same services (for example, to set up a third-party\noracle network).")]),e._v(" "),n("p",[e._v("Note that there was some subjectivity while defining the Airnode endpoints. This\nmeans that two different OISes can exist for the same exact API, differing based\non how the integrators designed the interface that the requester will use.\nHowever, in most cases, one would simply map API operations to Airnode endpoints\ndirectly, and let the requester provide all API operation parameters through the\nAirnode endpoint parameters.")]),e._v(" "),n("p",[e._v("Now that you have an OIS object, the next step is\n"),n("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/guides/build-an-airnode/configuring-airnode.html"}},[e._v("Configuring Airnode")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);