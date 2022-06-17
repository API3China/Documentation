(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{780:function(a,s,t){"use strict";t.r(s);var e=t(15),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[a._v("#")]),a._v(" "+a._s(a.$frontmatter.title))]),a._v(" "),t("VersionWarning"),a._v(" "),t("TocHeader"),a._v(" "),t("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),a._v(" "),t("h1",{attrs:{id:"airnode-validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#airnode-validator"}},[a._v("#")]),a._v(" "),t("code",[a._v("@airnode/validator")])]),a._v(" "),t("p",[a._v("Specification files used by Airnode can be checked with "),t("a",{attrs:{href:"https://www.npmjs.com/package/@api3/airnode-validator",target:"_blank",rel:"noopener noreferrer"}},[a._v("validator package"),t("OutboundLink")],1),a._v(" to ensure the specification is in correct format.")]),a._v(" "),t("h2",{attrs:{id:"cli-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli-commands"}},[a._v("#")]),a._v(" CLI commands")]),a._v(" "),t("p",[a._v("After installation validator can be run with following command:")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("api3-validator --template"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"[template]"')]),a._v(" --specs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"[specsFile]"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Templates are case-insensitive, valid templates are: "),t("code",[a._v("config")]),a._v(", "),t("code",[a._v("OIS")]),a._v(", "),t("code",[a._v("apiSpecifications")]),a._v("/"),t("code",[a._v("apiSpecs")]),a._v(" and "),t("code",[a._v("endpoints")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("api3-validator --template"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"config"')]),a._v(" --specs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"exampleSpecs/config.specs.json"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Validator will automatically validate the latest available version of provided template, in case a specific version should be used in validation, it can be appended to template argument:")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("api3-validator --template"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"config@1.0.0"')]),a._v(" --specs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"exampleSpecs/config.specs.json"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sdk"}},[a._v("#")]),a._v(" SDK")]),a._v(" "),t("p",[a._v("Validator package also exports helpful functions for validation.")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" validator "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'@api3/airnode-validator'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  validator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("validateWithTemplate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'exampleSpecs/config.specs.json'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'config'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h2",{attrs:{id:"output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[a._v("#")]),a._v(" Output")]),a._v(" "),t("p",[a._v("Above mentioned commands will return json in following format:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n  valid: boolean,\n  messages: { level: "error" | "warning", message: string }[]\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[t("code",[a._v("valid")]),a._v(" is set to "),t("code",[a._v("true")]),a._v(" in case there are no errors, however there can be still warnings in the "),t("code",[a._v("messages")]),a._v(".")]),a._v(" "),t("h1",{attrs:{id:"airnode-convertor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#airnode-convertor"}},[a._v("#")]),a._v(" "),t("code",[a._v("@airnode/convertor")])]),a._v(" "),t("p",[a._v("Built-in validator extension capable of conversions between various specifications.")]),a._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("p",[a._v("Convertor CLI commands and SDK work the same way as validator and can be invoked with the "),t("code",[a._v("api3-convertor")]),a._v(" command:")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("api3-convertor --from"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"OAS"')]),a._v(" --to"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"OIS"')]),a._v(" --specs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"exampleSpecs/OAS.specs.json"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Specification formats are case-insensitive, currently available conversions are from "),t("code",[a._v("OAS")]),a._v(" to "),t("code",[a._v("OIS")]),a._v(" or from "),t("code",[a._v("OIS")]),a._v(" to "),t("code",[a._v("config")]),a._v(". Version of the format can be provided as in "),t("code",[a._v("api3-validator")]),a._v(" command:")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("api3-convertor --from"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"OIS@pre-alpha"')]),a._v(" --to"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"config@pre-alpha"')]),a._v(" --specs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"exampleSpecs/ois.specs.json"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"output-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-2"}},[a._v("#")]),a._v(" Output")]),a._v(" "),t("p",[a._v("On top of validator output, convertor provides an "),t("code",[a._v("output")]),a._v(" object, which contains the converted specification:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n  valid: boolean,\n  messages: { level: "error" | "warning", message: string }[],\n  output: object\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("Alternatively command can be ran with argument "),t("code",[a._v("--specs-only")]),a._v(", which will return only the converted specification.")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);