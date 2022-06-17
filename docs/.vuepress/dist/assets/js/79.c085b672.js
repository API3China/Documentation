(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{541:function(e,t,a){e.exports=a.p+"assets/img/concepts-airnode-auth.9bc6950c.png"},865:function(e,t,a){"use strict";a.r(t);var s=a(15),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("TitleSpan",[e._v("Concepts and Definitions")]),e._v(" "),s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),s("VersionWarning"),e._v(" "),s("TocHeader"),e._v(" "),s("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),s("p",[e._v("API providers can instruct Airnode to authenticate requests to their endpoints. This is done by setting up a security scheme in the config.json file for their Airnode. Airnode supports three methods of authentication from the OpenAPI specification.")]),e._v(" "),s("blockquote",[s("p",[s("img",{attrs:{src:a(541),alt:"airnode-auth"}})])]),e._v(" "),s("p",[s("a",{attrs:{href:"https://swagger.io/docs/specification/authentication/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAS OpenAPI Specification"),s("OutboundLink")],1),e._v(" uses the term "),s("strong",[e._v("security scheme")]),e._v(" for authentication and authorization schemes. Airnode only uses standard OAS defined authentication schemes to identify itself to API endpoints. Airnode supports two types of authentication, "),s("code",[e._v("http")]),e._v(" and "),s("code",[e._v("apiKey")]),e._v(".")]),e._v(" "),s("ul",[s("li",[e._v("HTTP authentication schemes (using the "),s("code",[e._v("Authorization")]),e._v(" header) supported by Airnode:\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://swagger.io/docs/specification/authentication/basic-authentication/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Basic"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://swagger.io/docs/specification/authentication/bearer-authentication/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bearer"),s("OutboundLink")],1)])])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://swagger.io/docs/specification/authentication/api-keys/",target:"_blank",rel:"noopener noreferrer"}},[e._v("API key"),s("OutboundLink")],1),e._v(" in the request header, cookie in header or query string")])]),e._v(" "),s("p",[e._v("How Airnode sends the authentication data is explained in the sections "),s("strong",[e._v("Basic, Bearer and API Key")]),e._v(" below.")]),e._v(" "),s("h2",{attrs:{id:"basic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[e._v("#")]),e._v(" Basic")]),e._v(" "),s("p",[e._v("Basic authentication is a simple authentication scheme built into the HTTP protocol. The Authorization request header contains the Base64-encoded username and password, separated by a colon. When handling the request, the server decodes the login details and checks if the user can access the requested content.")]),e._v(" "),s("p",[e._v("The header field is in the form of "),s("code",[e._v("Authorization: Basic <credentials>")]),e._v(" where "),s("code",[e._v("credentials")]),e._v(" is the Base64 encoding of a username and password joined by a single colon ("),s("code",[e._v("airnode:airnode-password")]),e._v(").")]),e._v(" "),s("p",[s("code",[e._v("Authorization: Basic <credentials>")])]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Authorization: Basic YW5kZXJzb25AZ21haWwuY29tOjEyM215cGFzc3dvcmQ="')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n -X GET https://mydao.com?token"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("API3\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"bearer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bearer"}},[e._v("#")]),e._v(" Bearer")]),e._v(" "),s("p",[e._v("Bearer authentication (also called token authentication) is an HTTP authentication scheme that involves security tokens called bearer tokens. The API provider supplies a token used by Airnode to authenticate itself to API endpoints.")]),e._v(" "),s("p",[e._v("The header field is in the form of "),s("code",[e._v("Authorization: Bearer <token>")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Authorization: Bearer RZ8Y65TG"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -X GET https://mydao.com?token"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("API3\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"api-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-key"}},[e._v("#")]),e._v(" API Key")]),e._v(" "),s("p",[e._v("Some APIs use an "),s("code",[e._v("apiKey")]),e._v(" for authentication. The API provider supplies an "),s("code",[e._v("apiKey")]),e._v(" used by Airnode to authenticate itself to API endpoints. Airnode can send the "),s("code",[e._v("apiKey")]),e._v(" three ways.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# In the query string.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -X GET https://mydao.com?api_key"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("abcdef12345"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("token")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("API3\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# In the request header.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"X-API-KEY: abcdef12345"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -X GET https://mydao.com?token"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("API3\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# As a cookie in the request header.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Cookie: X-API-KEY:abcdef12345"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -X GET https://mydao.com?token"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("API3\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);