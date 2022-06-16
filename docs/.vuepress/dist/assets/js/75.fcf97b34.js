(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{550:function(e,t,a){e.exports=a.p+"assets/img/summary-airnode-2-parts.a68ad3ff.png"},852:function(e,t,a){"use strict";a.r(t);var n=a(9),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("TitleSpan",[e._v("Introduction")]),e._v(" "),n("h1",{attrs:{id:"frontmatter-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),n("VersionWarning"),e._v(" "),n("TocHeader"),e._v(" "),n("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),n("p",[e._v('Airnode is a serverless oracle node implemented with a "set and forget"\nphilosophy. Airnode is composed of two parts: the off-chain '),n("strong",[e._v("Airnode")]),e._v(' (a.k.a.\n"the node") deployed as self-hosted or cloud provider functions (e.g., AWS or\nGCP) and the on-chain '),n("strong",[e._v("protocol contract")]),e._v(" AirnodeRrp.sol.")]),e._v(" "),n("blockquote",[n("p",[n("img",{attrs:{src:a(550),alt:"2-parts"}}),e._v(" "),n("br"),n("br")]),e._v(" "),n("p",{staticClass:"diagram-line",staticStyle:{color:"gray"}},[e._v('Airnode consists of two parts: \nthe off-chain Airnode (a.k.a. "the node"), usually deployed as a set of cloud provider \nfunctions (e.g., AWS or GCP), and the on-chain protocol contract  AirnodeRrp.sol.')])]),e._v(" "),n("p",[e._v("At its core, "),n("strong",[e._v("Airnode")]),e._v(" lets API providers easily run their own "),n("em",[e._v("oracle nodes")]),e._v(".\nThat way, they can provide data to any on-chain "),n("em",[e._v("decentralized app")]),e._v(" (dApp)\nthat's interested in their services, all without an intermediary.")]),e._v(" "),n("p",[e._v("At the heart of this mechanism sits "),n("strong",[e._v("Airnode")]),e._v(", an open-source oracle node.\nIt's designed to be easily deployed by any API provider with almost no\nmaintenance. Airnode lets dApp developers write "),n("em",[e._v("smart contracts")]),e._v(" that interact\nwith the on-chain data of API providers.")]),e._v(" "),n("p",[e._v("Airnode is designed with mechanisms that eliminate both on-chain and off-chain\nconcerns of API providers. The set-and-forget framework of Airnode is all about\nits ease of implementation.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("If you want to learn more about the Airnode experience, read Section 4 of the\n"),n("a",{attrs:{href:"/api3-whitepaper-v1.0.2.pdf#Airnode:%20A%20Node%20Designed%20for%20First-Party%20Oracles",target:"_api3-whitepaper"}},[e._v("API3 Whitepaper")]),e._v(", "),n("em",[e._v("Airnode: A Node Designed for\nFirst-Party Oracles")]),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"designed-for-first-party-oracles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#designed-for-first-party-oracles"}},[e._v("#")]),e._v(" Designed for First-Party Oracles")]),e._v(" "),n("p",[e._v("First-party oracles are integral to the API3 solution. This means that each API\nis served by an oracle that is operated by the owner of an API instead of a\nthird party.")]),e._v(" "),n("p",[e._v("This document discusses the benefits of using first-party oracles, the reasons\nwhy it is not feasible for API providers to operate their own oracles with the\nsolutions that are currently available, and how to solve this problem with\nAirnode.")]),e._v(" "),n("h2",{attrs:{id:"benefits-of-disintermediation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-disintermediation"}},[e._v("#")]),e._v(" Benefits of Disintermediation")]),e._v(" "),n("p",[e._v("First-party oracles are a simple solution to the problem of using\nintermediaries. In principle, these are oracles operated by the API providers\nthemselves, who would sign responses with their private keys at the protocol\nlevel of the smart contract platform. This approach is the best proof that the\ndata is not tampered with. Moreover, first-party oracles are private by default\nsince a third party cannot observe the raw data from the API being processed,\nwhich expands the range of use cases where they can be used natively.")]),e._v(" "),n("p",[e._v("A data feed composed of first-party oracles would be more cost-efficient\ncompared to one employing middlemen since one needs to pay them both for their\nservices and to de-incentivize attacks of the data feed (referred to as the\nmiddleman tax). In addition, such data feed will need fewer oracles as it\nwouldn't need over-redundant decentralization at the oracle level to protect\nagainst third-party attacks. Assuming that each API is typically served by at\nleast two third-party oracles, we conservatively estimate that data feeds\npowered by first-party oracles would be at least 50% more efficient in terms of\ngas costs.")]),e._v(" "),n("p",[e._v("First-party oracles also provide much needed transparency in terms of the data\nsource and the degree of decentralization. Given that each API provider operates\nan oracle (which can be seen on-chain), the number of oracles serving a data\nfeed will accurately represent the extent to which it is decentralized. This is\nbecause there is a one-to-one mapping between the oracle and the data source.\nFurthermore, API providers would publish their on-chain identities through\noff-chain channels, which would allow users to verify whose data they are\nconsuming at a given time.")]),e._v(" "),n("p",[e._v("Finally, having API providers operate oracles helps to tackle legal issues as\nAPI services no longer need to be licensed to a third party and API providers\nreceive the entire revenue. Furthermore, this solves the rent-seeking\nthird-party oracle problem and allows for the funds to be redirected to the\ngroup that is doing the heavy lifting, i. e. the API providers. Incentivizing\nAPI providers aligns their financial interests with the ones of the API3\necosystem, resulting in a strong mutual bond between the two.")]),e._v(" "),n("h2",{attrs:{id:"off-chain-data-signing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#off-chain-data-signing"}},[e._v("#")]),e._v(" Off-Chain Data Signing")]),e._v(" "),n("p",[e._v("There is a hybrid solution that still depends on third-party oracles, yet does\nnot let them tamper with the data. In this scheme, the API providers sign their\ndata with their private key off-chain and serve it over a regular API endpoint.\nThird-party oracles call this endpoint to get the signed data and post it to the\nchain. The authenticity of the data — i.e. no tampering by third-party oracles —\ncan then be verified on-chain using the public key of the API provider.")]),e._v(" "),n("p",[e._v("Although this eliminates the risk of data tampering at the oracle level, this\nsolution is essentially a half-measure. By depending on third-party oracles, it\ncontinues suffering from the ecosystem issues caused by this and, additionally,\nit requires API modifications to implement off-chain signing. This results in a\nseverely limited API selection even compared to the regular third-party\noracle-based solutions, and restricts the growth potential of the solution's\necosystem to the application-scale.")]),e._v(" "),n("h2",{attrs:{id:"barriers-to-api-providers-operating-oracles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#barriers-to-api-providers-operating-oracles"}},[e._v("#")]),e._v(" Barriers to API Providers Operating Oracles")]),e._v(" "),n("p",[e._v("In its previous efforts, API3 communicated with API providers extensively and\nobserved the following barriers to oracle onboarding and operation:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Traditional API providers are typically not more familiar with blockchain\ntechnologies than the general public. This applies even for the ones that\ncurate cryptocurrency market data—as their main operation is collecting data\nfrom exchange APIs, processing them, and serving the result through their own\nAPIs—which does not require any blockchain-specific know-how. Therefore, they\ntypically cannot readily operate an oracle node with in-house resources.")])]),e._v(" "),n("li",[n("p",[e._v("There is no job market for oracle node operators. Even if some API providers\nwere to obtain the specific know-how needed by hiring the few node operators\nthat are available, this would not be a scalable solution.")])]),e._v(" "),n("li",[n("p",[e._v("Operating an oracle node consumes a lot of resources in the form of\nperson-hours and infrastructure costs. Unless one is guaranteed significant\nsubsidies or future profits, operating an oracle node is financially\ninfeasible.")])]),e._v(" "),n("li",[n("p",[e._v("Operating an oracle node requires the API providers to transact with\ncryptocurrencies. Specifically, they must pay for gas costs in the native\ncurrency (e.g., ETH) and receive payments in one or more cryptocurrencies.\nThis disqualifies the vast majority of API providers for compliance-related,\nlegal and accounting reasons. In addition, any scheme that requires API\nproviders to stake funds is categorically rejected for similar reasons\nrelated to financia risks.")])])]),e._v(" "),n("h2",{attrs:{id:"airnode-features"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#airnode-features"}},[e._v("#")]),e._v(" Airnode Features")]),e._v(" "),n("p",[e._v("Airnode is a fully-serverless oracle node that is designed specifically for API\nproviders to operate their own oracles. It addresses many of the issues API\nproviders face in relation to oracle nodes:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v('It does not require any specific know-how to operate. In fact, it is\ndifficult to even speak of any operation as Airnode is designed around the\n"set and forget" principle.')])]),e._v(" "),n("li",[n("p",[e._v("It does not require any day-to-day maintenance such as updating the operating\nsystem or monitoring the node for uptime thanks to existing fully managed\nserverless technology. It is designed to be stateless, which makes it\nextremely resilient against any problems that can cause permanent downtime\nand require an operator intervention.")])]),e._v(" "),n("li",[n("p",[e._v("It is built on services priced on-demand, meaning that the node operators are\ncharged only by the usage of their node. This allows API providers to run an\noracle for free and start paying only after they start generating revenue.")])]),e._v(" "),n("li",[n("p",[e._v("It does not require the node operators to handle cryptocurrency at all. Its\nprotocol is designed in a way that the requester covers all gas costs.")])])]),e._v(" "),n("p",[e._v("One way to see Airnode is as a lightweight wrapper around a Web API that allows\nit to communicate with smart contract platforms with no overhead or payment\ntoken friction. In terms of the involvement required from an API provider, using\nAirnode can be likened to using an API gateway that makes an API accessible over\nthe Web, rather than operating a blockchain node as a side-business. The intent\nis for Airnode to become as ubiquitous and mundane for APIs as using an API\ngateway, which will make a vast variety of first-party oracles available to\nAPI3.")]),e._v(" "),n("p",[e._v("API providers invest significant resources to build infrastructure that has high\navailability rates. It is important for the oracle node implementation not to\ncontain individual points of failure that might cause downtime. Existing\nsolutions using third-party oracles depend on over-redundancy at the oracle\nlevel to cover for this, which results in excessive costs. API3 envisions each\nAPI to only be served by its first-party oracle, which means the redundancy has\nto be implemented at the level of the individual Airnode. The fact that the node\nis fully serverless facilitates this across different availability zones of a\nsingle cloud provider, or even across multiple cloud providers. Apart from that,\nit will be possible to containerize Airnode and operate it on-premises. However,\nusing the serverless version will be recommended for almost all use cases.")]),e._v(" "),n("p",[e._v("Airnode is developed by the founding members of API3 and is now open-sourced.\nThe software is feature-complete for current protocols, and further development\nwill be funded by API3 in the form of grants.")]),e._v(" "),n("h2",{attrs:{id:"airnode-protocol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#airnode-protocol"}},[e._v("#")]),e._v(" Airnode Protocol")]),e._v(" "),n("p",[e._v("Preferring the better-specified API connectivity problem over the oracle\nproblem, API3 believes that an oracle node should be designed to interface APIs\nwith smart contract platforms very well, rather than as a sandbox that can\npurportedly be used for any imaginable purpose. Based on this philosophy, the\nAirnode protocol is designed to follow the self-emergent patterns used by APIs\nto achieve as transparent and frictionless of an API–smart contract platform\ninterface as possible.")]),e._v(" "),n("p",[e._v("The first and the most commonly used API style follows the request–response\npattern, where the user makes a request with parameters and the API responds as\nsoon as possible. This is the first pattern that Airnode supports since it is\neasy to standardize and integrate with existing APIs that follow the same\npattern. An example use case of this scheme would be requesting the result of a\nspecific match to be delivered, which can be used to resolve the respective\nprediction market. In addition, Airnode is planned to support the\npublish–subscribe pattern, where the user requests the oracle to call back a\nspecific method when parametrized conditions are met. For example, a\ndecentralized exchange may request the oracle to trigger a liquidation event for\na user in a leveraged position when ETH price drops below a particular price.\nEither of these patterns can be used to implement the live data feeds that DeFi\napplications use today, but they can also support a much larger variety of use\ncases in the form of dAPIs.")]),e._v(" "),n("p",[e._v("The Airnode protocol is designed in such a way that the request contract's\nsponsor assumes all gas costs, including even the request fulfillment (response)\ntransactions. This is achieved by each Airnode having a separate wallet for each\nsponsor, similar to how cryptocurrency exchanges automatically designate wallets\nto which the users will deposit funds. The sponsor funds this wallet with the\nnative currency (e.g. ETH) either in a lump sum or through per-request\nmicrotransactions. The funds in this wallet are used to fulfill all of the\nfollowing requests made by the sponsor. This scheme has significant advantages:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The volatility in gas costs and payment token prices (e.g., LINK) makes it\nvirtually impossible for oracles to set profitable yet competitive prices.\nCalculating prices dynamically on-chain requires multiple data feeds and adds\na significant gas overhead per-request. With the Airnode protocol, the API\nproviders do not have to concern themselves with gas costs, and can use\npricing schemes such as $0.1 per call or $100 per month, which is similar to\ntypical API pricing models.")])]),e._v(" "),n("li",[n("p",[e._v("It is not reasonable to expect API providers to be able to convert fiat into\ncryptocurrency and fund their node wallets as a part of their day-to-day\noperations. In this scheme, the node operator never has to think about their\nnode wallet balance.")])]),e._v(" "),n("li",[n("p",[e._v("As seen in an attack performed on an Airnode competitor's data feeds, oracle\nnodes that use a common wallet to fulfill requests are susceptible to\nattackers spamming requests to drain their wallets. The solution to this is\nfor the node operators to maintain a whitelist of trusted addresses that they\nwill accept requests from. In addition to the difficulty of determining which\ncontracts are supposed to be trusted in this context, this renders any kind of\npublic listing service practically infeasible. This is a critical issue, as it\nstops the little independent ecosystem growth there is dead in its tracks.\nAirnode is not susceptible to this type of an attack, as a sponsor's\ndesignated wallet is only used to fulfill requests from the said sponsor, and\ncannot be drained by others.")])]),e._v(" "),n("li",[n("p",[e._v("Traditional oracle nodes have to fulfill all requests with very high gas\nprices, as they cannot tolerate their transaction queue being blocked by a\nsingle transaction made with a low gas price. With the Airnode protocol, this\nis no longer a concern, as each sponsor will have a separate transaction\nqueue. Then, sponsors whose requests are not time-critical would be able to\nprovide the fulfillment gas price as a request parameter and enjoy service at\na much lower gas cost. This scheme can be expected to synergize with EIP-1559.")])])]),e._v(" "),n("p",[e._v("Finally, let us briefly mention how the Airnode protocol approaches\nmonetization. It is common for a project-specific token to be worked into the\ncore of the protocol in an attempt to ensure that the said token is needed.\nHowever, this induces an enormous gas price overhead, severely restricts\nalternative monetization options and creates overall friction. For these\nreasons, the Airnode protocol purposefully avoids using such a token. Instead,\nthe node operator is allowed to associate custom authorizer contracts with their\noracle endpoints, which essentially decide if a requester should be responded to\nbased on any criteria that can be implemented on-chain. The authorizer contracts\ncan be used to enforce whitelists, blacklists, monthly subscription payments or\nper-call fees. This scheme is both very flexible and is implemented in a way\nthat does not add any gas cost overheads. Although dAPI monetization is a\ncompletely independent matter, the flexibility that Airnode provides will carry\nover, say, it will be possible to implement a dAPI where the users assume all\ngas costs, which is not possible with the existing oracle solutions.")]),e._v(" "),n("h2",{attrs:{id:"api-integrations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api-integrations"}},[e._v("#")]),e._v(" API Integrations")]),e._v(" "),n("p",[e._v("When it comes to integrating APIs to oracles, we face a chicken-and-egg problem.\nIf there is no existing demand for an API in an oracle ecosystem, nobody has the\nincentive to integrate it. If the API is not available because it's missing an\nintegration, nobody is going to develop applications that could create the\ndemand.")]),e._v(" "),n("p",[e._v("To reach its full potential, API3 will need hundreds, if not thousands, of first\nparty oracles, so that it can easily set up new dAPIs or recompose existing\nones. This can only be achieved if APIs can be integrated to Airnode in an even\nmore scalable way. To this end, an improved version of the proprietary\nintegration tools will be open sourced for Airnode. Borrowing from the\n"),n("a",{attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenAPI Specification format"),n("OutboundLink")],1),e._v(",\nOracle Integration Specifications (OIS) define the operations of an API, the\nendpoints of an oracle, and a way of mapping them to each other. Airnode users\nwill be able to serve an API over their oracle simply by providing its OIS to\ntheir node. Integrations made in this standardized format will be very easy to\ncollect, version and distribute.")]),e._v(" "),n("p",[e._v("OIS is a JSON file, primarily designed to describe the integration\nspecifications for Airnode to use. This means that it does not aim to be\nhuman-readable first and creating it manually to specify an integration would be\ndifficult. This problem will be solved by ChainAPI (a product from API3\ncurrently in development), an integration platform that will allow users to\ngenerate OIS for their APIs through an easy-to-use graphical interface. This\nwill be accompanied by other quality-of-life improvements for Airnode users,\nincluding a node dashboard and a marketplace to list their endpoints. As a\nresult, API3 will have a wide selection of first-party oracles to compose dAPIs\nfrom and ecosystem growth will no longer be bottlenecked by integration\ncapacity.")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);