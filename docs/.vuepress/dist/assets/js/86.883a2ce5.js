(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{556:function(e,t,a){e.exports=a.p+"assets/img/api-integration-ois.a9073315.png"},890:function(e,t,a){"use strict";a.r(t);var s=a(15),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("TitleSpan",[e._v("Build an Airnode")]),e._v(" "),s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),s("VersionWarning"),e._v(" "),s("TocHeader"),e._v(" "),s("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,4]}}),e._v(" "),s("p",[e._v("A successful integration of an API with an Airnode requires the mapping of each other's interface. This is accomplished using an OIS ("),s("RouterLink",{attrs:{to:"/ois/v1.0.0/ois.html"}},[e._v("Oracle Integration Specifications")]),e._v(") json object, found in the config.json file, that is designed to follow three basic steps.")],1),e._v(" "),s("ul",[s("li",[e._v("API operations are specified")]),e._v(" "),s("li",[e._v("Airnode endpoints are specified")]),e._v(" "),s("li",[e._v("Airnode endpoints are mapped to API operations")])]),e._v(" "),s("blockquote",[s("p",[s("img",{attrs:{src:a(556),alt:"api-integration-ois"}}),e._v(" "),s("br"),s("br")]),e._v(" "),s("p",{staticClass:"diagram-line"},[e._v("The OIS object in config.json contains mapping information of API operations to Airnode endpoint definitions.")])]),e._v(" "),s("p",[e._v("OIS is a mapping of API operations, such as "),s("code",[e._v("GET /coins/{id}")]),e._v(", to Airnode endpoints. When a requester contract calls a AirnodeRrp.sol contract request function, such as "),s("code",[e._v("makeFullRequest(..., callData)")]),e._v(", the callData is communicated to the off-chain Airnode which uses OIS mappings to translate the callData into a valid HTTP request for the appropriate API operation.")]),e._v(" "),s("p",[e._v("The only thing needed to integrate an API to Airnode is to create an OIS object which is in the Airnode's "),s("code",[e._v("config.json")]),e._v(" file. This guide is an instructive approach to create an OIS object. OIS borrows formatting from "),s("a",{attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAS OpenAPI Specification"),s("OutboundLink")],1),e._v(". If you have experience with OAS, OIS will seem familiar.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("OAS")]),e._v(" "),s("p",[e._v("It is not recommended to refer to OAS for help while creating your OIS object. OIS only borrows formatting practices from OAS. Everything needed to create an OIS object is in these docs.")])]),e._v(" "),s("p",[s("strong",[e._v("Tips while using this guide.")])]),e._v(" "),s("ul",[s("li",[e._v("Open the "),s("RouterLink",{attrs:{to:"/airnode/v0.4/reference/templates/ois-json.html"}},[e._v("OIS template")]),e._v(" in another browser window to follow along.")],1),e._v(" "),s("li",[e._v("View an example of an "),s("RouterLink",{attrs:{to:"/airnode/v0.4/reference/examples/config-json.html"}},[e._v("Airnode config.json file")]),e._v(" from the Airnode Starter tutorial.")],1)]),e._v(" "),s("h2",{attrs:{id:"ois-template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ois-template"}},[e._v("#")]),e._v(" OIS Template")]),e._v(" "),s("p",[e._v("OIS is a json object that is added to an Airnode's "),s("RouterLink",{attrs:{to:"/airnode/v0.4/reference/templates/config-json.html"}},[e._v("config.json")]),e._v(" file as the ("),s("code",[e._v("ois")]),e._v(") "),s("em",[e._v("key")]),e._v(", sometimes called a "),s("em",[e._v("field")]),e._v(". Try using the "),s("RouterLink",{attrs:{to:"/airnode/v0.4/reference/templates/ois-json.html"}},[e._v("OIS template")]),e._v(" to construct an OIS and add it to the Airnode's config.json file later.")],1),e._v(" "),s("p",[e._v("In the OIS template, there are some fields that contain "),s("code",[e._v("{FILL_*}")]),e._v(". This means that the value added is independent from other fields. On the other hand, if two fields contain the same expression (e.g., "),s("code",[e._v("{FILL_OPERATION_PARAMETER_1_NAME}")]),e._v("), you must use the same value in them, because they are referencing each other.")]),e._v(" "),s("p",[e._v("OIS uses a simplified version of the OAS. This means that if you have the OpenAPI specifications of the API that you are going to integrate, you are about 80% done, because you can copy paste entire sections (but make sure that you make the necessary modifications to conform to the OIS format).")]),e._v(" "),s("p",[e._v("This guide will assume you do not have the OpenAPI specifications of the API that you will be integrating.")]),e._v(" "),s("h2",{attrs:{id:"step-1-specify-ois-definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-specify-ois-definitions"}},[e._v("#")]),e._v(" Step 1: Specify OIS Definitions")]),e._v(" "),s("p",[e._v("Start building an OIS by adding three descriptive fields to the root of the OIS json object.")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"oisFormat"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"myOisTitle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.1.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h3",{attrs:{id:"oisformat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oisformat"}},[e._v("#")]),e._v(" oisFormat")]),e._v(" "),s("p",[e._v("Leave this as "),s("code",[e._v("1.0.0")]),e._v(", which is the current OIS format version.")]),e._v(" "),s("h3",{attrs:{id:"title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[e._v("#")]),e._v(" title")]),e._v(" "),s("p",[e._v("This is a unique title of the OIS. Note that an Airnode can be configured with more than one OIS and uses the title as the OIS identifier.")]),e._v(" "),s("h3",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" version")]),e._v(" "),s("p",[e._v("This is the version of the OIS which allows for version-control of the OIS integration. It is recommended to use "),s("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("semver"),s("OutboundLink")],1),e._v(" versioning. The initial version could be <"),s("code",[e._v("0.1.0")]),e._v(">.")]),e._v(" "),s("h2",{attrs:{id:"step-2-specifying-the-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-specifying-the-api"}},[e._v("#")]),e._v(" Step 2: Specifying the API")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("apiSpecifications")]),e._v(" field is used to describe the API and its operations.")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"apiSpecifications"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"servers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"paths"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"components"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"servers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servers"}},[e._v("#")]),e._v(" Servers")]),e._v(" "),s("p",[e._v("The first step of specifying your API is to enter its "),s("em",[e._v("baseURL")]),e._v(" in the "),s("code",[e._v("apiSpecifications.servers[0].url")]),e._v(" field. Only one object (i.e., url) is allowed in the "),s("code",[e._v("apiSpecifications.servers")]),e._v(" array. A warning is raised during conversion if servers has multiple elements. This baseURL will apply to all operations.")]),e._v(" "),s("h4",{attrs:{id:"choosing-a-base-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#choosing-a-base-url"}},[e._v("#")]),e._v(" Choosing a Base URL")]),e._v(" "),s("p",[e._v("Consider the following full URL to execute an API operation that returns all know tokens.")]),e._v(" "),s("blockquote",[s("p",[e._v("https://www.myapi.com/v1/tokens")])]),e._v(" "),s("p",[e._v("There are two ways to segment this.")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("baseURL:")]),e._v(" https://www.myapi.com")]),e._v(" "),s("p",[s("strong",[e._v("path:")]),e._v(" /v1/data")])]),e._v(" "),s("p",[e._v("or")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("baseURL")]),e._v(": https://www.myapi.com/v1")]),e._v(" "),s("p",[s("strong",[e._v("path:")]),e._v(" /data")])]),e._v(" "),s("p",[e._v("Because the call will be made to <"),s("code",[e._v("baseURL+path")]),e._v("> both will result in the same full URL.")]),e._v(" "),s("p",[e._v("Set the baseURL as the section of the full URL that you expect to be shared by all operations. From the examples above it is recommended to use "),s("code",[e._v("https://www.myapi.com")]),e._v(", in case additional paths starting with "),s("code",[e._v("/v2")]),e._v(" get added to the API in the future. As you can tell, API integration requires many subjective choices, and is more art than science.")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"apiSpecifications"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"servers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Only one element is allowed in the servers array.")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://www.myapi.com"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("h3",{attrs:{id:"paths"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#paths"}},[e._v("#")]),e._v(" Paths")]),e._v(" "),s("p",[e._v("The "),s("em",[e._v("paths")]),e._v(" field defines all the API operations much like an OpenAPI Specification file.")]),e._v(" "),s("p",[s("em",[e._v("What is an API operation?")])]),e._v(" "),s("blockquote",[s("p",[e._v("An API operation is specified as a unique combination of a "),s("em",[s("strong",[e._v("path")])]),e._v(" and an HTTP "),s("em",[s("strong",[e._v("method")])]),e._v(". "),s("code",[e._v("GET /token/{id}")])])]),e._v(" "),s("h4",{attrs:{id:"operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operations"}},[e._v("#")]),e._v(" Operations")]),e._v(" "),s("p",[e._v("In the examples below, "),s("code",[e._v("GET")]),e._v(" refers to an "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP request method"),s("OutboundLink")],1),e._v(". This implies that you could have another API operation that can be specified using a different method but the same path.")]),e._v(" "),s("blockquote",[s("p",[e._v("path: /data")]),e._v(" "),s("p",[e._v("method: GET")])]),e._v(" "),s("blockquote",[s("p",[e._v("path: /data")]),e._v(" "),s("p",[e._v("method: POST")])]),e._v(" "),s("p",[e._v("Therefore, a path is not enough to specify an API operation by itself, you must also provide a method. If a new path is needed then it must start a new object in paths with its own methods. Currently only the GET and POST methods are supported by Airnode.")]),e._v(" "),s("p",[e._v("With regards to the "),s("RouterLink",{attrs:{to:"/airnode/v0.4/reference/templates/ois-json.html"}},[e._v("OIS template")]),e._v(", the name of the element (denoted as "),s("code",[e._v("{FILL_PATH}")]),e._v(") should be replaced with the path (e.g., "),s("code",[e._v("/data")]),e._v("). Similarly, "),s("code",[e._v("{FILL_METHOD}")]),e._v(" should be replaced with the method of the operation you want to integrate (e.g., "),s("code",[e._v("get")]),e._v("). The method must be lowercase.")],1),e._v(" "),s("p",[e._v("The following example illustrates three operations, "),s("code",[e._v("GET /data")]),e._v(", "),s("code",[e._v("POST /data")]),e._v(", "),s("code",[e._v("GET /tokens")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"paths"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"/data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// path    {FILL_PATH}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"get"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// method  {FILL_METHOD}")]),e._v("\n      ...      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// parameters")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"post"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// method  {FILL_METHOD}")]),e._v("\n      ...      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// parameters")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"/tokens"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// path    {FILL_PATH}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"get"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// method  {FILL_METHOD}")]),e._v("\n      ...      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// parameters")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])]),s("h4",{attrs:{id:"parameters-operation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-operation"}},[e._v("#")]),e._v(" Parameters (operation)")]),e._v(" "),s("p",[e._v("After specifying the path and method of an API operation, the final step is to specify its parameters. Each parameter is an object in the "),s("code",[e._v("apiSpecifications.paths.{PATH}.{METHOD}.parameters")]),e._v(" array, with the fields "),s("code",[e._v("in")]),e._v(" and "),s("code",[e._v("name")]),e._v(". "),s("code",[e._v("in")]),e._v(" tells where the parameter goes in the HTTP request and "),s("code",[e._v("name")]),e._v(" tells the name that the parameter value will be sent under. Currently Airnode supports the following parameter types for use with "),s("code",[e._v("in")]),e._v(".")]),e._v(" "),s("ul",[s("li",[e._v("query")]),e._v(" "),s("li",[e._v("header")]),e._v(" "),s("li",[e._v("path")]),e._v(" "),s("li",[e._v("cookie")])]),e._v(" "),s("p",[e._v("When integrating a POST method, define the body parameters with "),s("code",[e._v("in: query")]),e._v(". Airnode will convert all "),s("code",[e._v("query")]),e._v(" types into the "),s("code",[e._v("requestBody")]),e._v(". Note that only the non-nested application/json content-type is supported.")]),e._v(" "),s("p",[e._v("It is not necessary to specify all API operation parameters, but only the ones the on-chain requester will need to be able to provide (see Airnode endpoint "),s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/api-integration.html#parameters"}},[e._v("parameters")]),e._v("), and the ones that you want to hard-code a value for (see Airnode endpoint "),s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/api-integration.html#fixedoperationparameters"}},[e._v("fixed operation parameters")]),e._v(").")],1),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"paths"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"/data/{id}"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"get"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"parameters"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"path"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"id"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"header"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Accept"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("p",[s("em",[e._v("Example: Get a token")])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("GET /token/{id}")]),e._v(" returns a token using the token's "),s("code",[e._v("id")]),e._v(" which is a "),s("code",[e._v("path")]),e._v(" parameter.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Method")]),e._v(" "),s("th",[e._v("Path")]),e._v(" "),s("th",[e._v("in")]),e._v(" "),s("th",[e._v("name")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("GET")]),e._v(" "),s("td",[e._v("/token/{id}")]),e._v(" "),s("td",[e._v("path")]),e._v(" "),s("td",[e._v("id")])])])]),e._v(" "),s("p",[s("em",[e._v("Example: Create a token")])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("POST /token")]),e._v(" operation accepts three parameters. The name and description of the token are placed in the type "),s("code",[e._v("query")]),e._v(" and will be moved by Airnode to the requestBody upon calling the API operation. The third is a "),s("code",[e._v("header")]),e._v(" parameter that describes the Content-Type of the request such as "),s("code",[e._v("application/json")]),e._v(" or "),s("code",[e._v("application/x-www-form-urlencoded")]),e._v(".")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Method")]),e._v(" "),s("th",[e._v("Path")]),e._v(" "),s("th",[e._v("in")]),e._v(" "),s("th",[e._v("name")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("POST")]),e._v(" "),s("td",[e._v("/token")]),e._v(" "),s("td",[e._v("query")]),e._v(" "),s("td",[e._v("name")])]),e._v(" "),s("tr",[s("td"),e._v(" "),s("td"),e._v(" "),s("td",[e._v("query")]),e._v(" "),s("td",[e._v("description")])]),e._v(" "),s("tr",[s("td"),e._v(" "),s("td"),e._v(" "),s("td",[e._v("header")]),e._v(" "),s("td",[e._v("Accept")])])])]),e._v(" "),s("p",[s("em",[e._v("Example: Get all tokens")])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("GET /tokens")]),e._v(" returns a list of all tokens. The list count can be limited using the `limit' parameter which the API operation considers as optional since it will not return an error if omitted.")]),e._v(" "),s("blockquote",[s("p",[s("code",[e._v("GET /tokens")]),e._v(" returns all tokens.")]),e._v(" "),s("p",[s("code",[e._v("GET /tokens?limit=10")]),e._v(" returns the first ten tokens.")])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Method")]),e._v(" "),s("th",[e._v("Path")]),e._v(" "),s("th",[e._v("in")]),e._v(" "),s("th",[e._v("name")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("GET")]),e._v(" "),s("td",[e._v("/tokens")]),e._v(" "),s("td",[e._v("query")]),e._v(" "),s("td",[e._v("limit")])])])]),e._v(" "),s("h2",{attrs:{id:"step-3-specifying-airnode-endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-specifying-airnode-endpoints"}},[e._v("#")]),e._v(" Step 3: Specifying Airnode Endpoints")]),e._v(" "),s("p",[e._v("An Airnode endpoint is a service that Airnode exposes to on-chain requesters. It maps to an API operation, but the nature of this mapping is customizable. It is the integrator's job to define what this service is.")]),e._v(" "),s("p",[e._v("For example, if your API operation returns an asset price given its ticker (e.g., "),s("code",[e._v("BTC")]),e._v("), you can specify the endpoint such that the requester provides the ticker as a parameter. The resulting endpoint would be a general one that returns prices for any kind of asset. On the other hand, you can hardcode "),s("code",[e._v("BTC")]),e._v(" as the asset whose price will be returned (using "),s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/api-integration.html#fixedoperationparameters"}},[e._v("fixed operation parameters")]),e._v("), which would make your endpoint a specific one that only returns the BTC price.")],1),e._v(" "),s("p",[e._v("The recommended endpoint definition pattern is to create an Airnode endpoint for each API operation, and allow the requesters to provide all operation parameters themselves. This results in optimal flexibility, and essentially allows the requesters to use the entire API functionality on-chain. Normally, oracle integrations strive to hard-code as many API parameters as possible because passing these parameters on-chain results in a gas cost overhead. However, the Airnode protocol uses "),s("RouterLink",{attrs:{to:"/airnode/v0.4/concepts/template.html"}},[e._v("templates")]),e._v(" (not to be confused with the OIS template used for this guide), which allow requesters to specify a large number of endpoint parameters at no additional gas cost.")],1),e._v(" "),s("p",[e._v("Note that there are some cases where you may not want to map endpoints to API operations one-to-one. For example, an API operation can have a "),s("code",[e._v("header")]),e._v(" parameter, "),s("code",[e._v("Accept")]),e._v(", that can take the values "),s("code",[e._v("application/json")]),e._v(" or "),s("code",[e._v("applicatino/xml")]),e._v(" to determine how to format the data that the API will respond to the call. Airnode expects responses to be in JSON format, and thus hard-coding this parameter as "),s("code",[e._v("JSON")]),e._v(" would be more suitable than letting the requester decide, as there is only one valid choice. Again, the integrator's job is to be aware of these subtleties and use judgement.")]),e._v(" "),s("p",[e._v("After this brief detour, let us get back to filling in our OIS template.")]),e._v(" "),s("h3",{attrs:{id:"endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[e._v("#")]),e._v(" Endpoints")]),e._v(" "),s("p",[e._v("The field "),s("code",[e._v("endpoints")]),e._v(" is an array, with each row representing an Airnode endpoint. The first field you need to fill in is "),s("code",[e._v("name")]),e._v(". Make sure that it is descriptive and unique from other endpoint names. If you are integrating API operations to Airnode endpoints one-to-one, using the API operation path as the endpoint name is a decent choice (i.e., "),s("code",[e._v("/token")]),e._v("). Note that you would also add the method to this name if there were multiple operations with different methods for a single path (i.e., "),s("code",[e._v("GET/token")]),e._v(").")]),e._v(" "),s("p",[e._v("The next step is to fill in "),s("code",[e._v("operation")]),e._v(" object. Here, you need to enter the "),s("code",[e._v("path")]),e._v(" and "),s("code",[e._v("method")]),e._v(" of an API operation you have defined in "),s("code",[e._v("apiSpecifications.paths")]),e._v(", resulting in the Airnode endpoint calling the now linked API operation.")]),e._v(" "),s("h4",{attrs:{id:"fixedoperationparameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fixedoperationparameters"}},[e._v("#")]),e._v(" fixedOperationParameters")]),e._v(" "),s("p",[e._v("It is not uncommon to hard-code API parameters (recall the "),s("code",[e._v("Accept")]),e._v(" operation parameter in the above example). Such hard-coded parameters are called "),s("code",[e._v("fixedOperationParameters")]),e._v(".")]),e._v(" "),s("p",[e._v("In the OIS template there is a fixed operation parameter under "),s("code",[e._v("endpoints[n].fixedOperationParameters")]),e._v(", and it refers to the first API operation parameter. This means that whenever the Airnode receives a request for this endpoint, the respective API call will be made with that API operation parameter set to\n"),s("code",{staticStyle:{"overflow-wrap":"break-word"}},[e._v("endpoints[n].fixedOperationParameters[n].value")]),e._v(". The requester does not supply a value for "),s("code",[e._v("fixedOperationParameters")]),e._v(".")]),e._v(" "),s("p",[e._v("An Airnode endpoint can have multiple "),s("code",[e._v("fixedOperationParameters")]),e._v(". An API operation parameter cannot be in both "),s("code",[e._v("endpoints[n].fixedOperationParameters")]),e._v(" and "),s("code",[e._v("endpoints[n].parameters")]),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"reservedparameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reservedparameters"}},[e._v("#")]),e._v(" reservedParameters")]),e._v(" "),s("p",[e._v('The requester can provide some parameters that are not mapped to API operation parameters. These parameters are called "reserved parameters", and their names start with an underscore. See the '),s("RouterLink",{attrs:{to:"/ois/v1.0.0/ois.html#_5-4-reservedparameters"}},[e._v("related OIS docs")]),e._v(" for more information.")],1),e._v(" "),s("p",[e._v("The current list of reserved parameters are "),s("code",[e._v("_type")]),e._v(", "),s("code",[e._v("_path")]),e._v(" and "),s("code",[e._v("_times")]),e._v(". See "),s("RouterLink",{attrs:{to:"/ois/v1.0.0/reserved-parameters.html"}},[e._v("Reserved Parameters")]),e._v(" in the OIS document set to understand what each of these parameters are for. In most cases, all three should be defined as reserved parameters with no fixed/default values, as doing so provides the requester with the most flexibility.")],1),e._v(" "),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" parameters")]),e._v(" "),s("p",[e._v("Airnode endpoint parameters map to API operation parameters that the requester is allowed to provide values for. It refers to an API operation through its field "),s("code",[e._v("operationParameter")]),e._v(". You can also provide "),s("code",[e._v("default")]),e._v(" values for endpoint parameters, though this is not recommended in most cases.")]),e._v(" "),s("p",[e._v("Endpoint parameters have a "),s("code",[e._v("name")]),e._v(" field, which does not have to be the same as the API operation parameter that they map to. As a separate note, an Airnode endpoint can have multiple parameters.")]),e._v(" "),s("h2",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),s("p",[e._v("The API operations and Airnode endpoints are now specified. Each Airnode endpoint maps to an API operation, and each Airnode endpoint parameter or fixedOperationParameter maps to an API operation parameter. The resulting OIS includes no user-specific information, which means that you can share it for others to easily provide the same services (for example, to set up a third-party oracle network).")]),e._v(" "),s("p",[e._v("Note that there was some subjectivity while defining the Airnode endpoints. This means that two different OISes can exist for the same exact API, differing based on how the integrators designed the interface that the requester will use. However, in most cases, one would simply map API operations to Airnode endpoints directly, and let the requester provide all API operation parameters through the Airnode endpoint parameters.")]),e._v(" "),s("p",[e._v("Now that you have an OIS object, the next step is "),s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/configuring-airnode.html"}},[e._v("Configuring Airnode")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);