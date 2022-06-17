(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{1089:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("TitleSpan",[t._v("函数")]),t._v(" "),a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),a("VersionWarning"),t._v(" "),a("TocHeader"),t._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),t._v(" "),a("p",[t._v("对于链上智能合约，函数"),a("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/requesters/RrpBeaconServer.sol#L363-L383",target:"_blank",rel:"noopener noreferrer"}},[t._v("beaconIdToReaderToWhitelistStatus()"),a("OutboundLink")],1),t._v("返回"),a("code",[t._v("reader")]),t._v("和"),a("code",[t._v("beaconId")]),t._v("参数详细的白名单状态。")]),t._v(" "),a("p",[t._v("::: 提示  获取白名单")]),t._v(" "),a("p",[t._v("请联系"),a("a",{attrs:{href:"https://api3dao.typeform.com/to/O1Uvxc8m",target:"_blank",rel:"noopener noreferrer"}},[t._v("API3 Business Development API Team"),a("OutboundLink")],1),t._v("（API3业务开发API团队）了解Beacon白名单。")]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("h2",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SPDX-License-Identifier: MIT")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("solidity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token version number"}},[t._v("0.8.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@api3/airnode-protocol/contracts/rrp/requesters/interfaces/IRrpBeaconServer.sol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mySmartContract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myReadableDetails")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" _beaconId\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _beaconContractAddress\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" expirationTimestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint192")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" indefiniteWhitelistCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Calling the BeaconServer for detailed whitelist status")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// where "this" is the contract address of this contract (myReadableDetails).')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("expirationTimestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" indefiniteWhitelistCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RrpBeaconServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_beaconContractAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beaconIdToReaderToWhitelistStatus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        _beaconId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("h2",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("p",[a("code",[t._v("beaconIdToReaderToWhitelistStatus(bytes32 beaconId, address reader)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("bytes32 beaconId")]),t._v(" -  beacon的ID。")]),t._v(" "),a("li",[a("code",[t._v("address reader")]),t._v(" - 获取白名单详细信息的地址。")])]),t._v(" "),a("h2",{attrs:{id:"返回"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回"}},[t._v("#")]),t._v(" 返回")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("uint64 private expirationTimestamp")]),t._v(" - T读取器白名单过期的时间戳。")]),t._v(" "),a("li",[a("code",[t._v("uint192 indefiniteWhitelistCount")]),t._v(" - reader因beaconId而被无限期列入白名单的次数。 阅读器白名单管理帐号或是具有"),a("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/6d902da259ec3084c8f4764cadc74e270e5c7162/packages/airnode-protocol/contracts/whitelist/WhitelistRoles.sol#L32-L33",target:"_blank",rel:"noopener noreferrer"}},[a("span",{staticStyle:{"overflow-wrap":"break-word"}},[t._v("INDEFINITE_WHITELISTER_ROLE_DESCRIPTION")]),a("OutboundLink")],1),t._v("角色的任何其他的帐号无限期地列入白名单。 每次授权账户将读取器无限期地列入白名单时，记录的次数都会增加。 当读取器的白名单状态被撤销时，计数将递减。 这意味着只要计数（"),a("code",[t._v("indefiniteWhitelistCount")]),t._v("）大于0，读取器会无限期地被列入白名单。")])]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("address")]),t._v("尚未被列入白名单时，此函数返回：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("expirationTimestamp   uint64 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nindefiniteWhitelistCount   uint192 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);