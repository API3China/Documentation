---
title: Developing a Client Contract
---

# {{$frontmatter.title}}

<TocHeader />
<TOC class="table-of-contents" :include-level="[2,3]" />

<!-- markdown-link-check-disable -->

A [client](../../../../reference/protocols/request-response/client.md) is a contract that makes requests to [providers](../../../../reference/protocols/request-response/provider.md) using the [Airnode.sol](../../../reference/protocols/request-response/general-structure.md#airnoderrp-sol) contract that implements the protocol.
A client is [endorsed](../../../../reference/protocols/request-response/endorsement.md) by a [requester](../../../../reference/protocols/request-response/requester.md), which means that it can specify its request to be fulfilled by the respective requester's [designated wallet](../../../../reference/protocols/request-response/designated-wallet.md).

The Airnode protocol is designed to be flexible, and is meant to serve a variety of use cases.
The first step a requester needs to take is to develop and deploy such a client contract.

## Endorsing your contract

Assuming you have already [created a requester](creating-a-requester.md), you should endorse the client contract so that it can make requests.
You can use [`@api3/airnode-admin`](https://github.com/api3dao/airnode/tree/pre-alpha/packages/admin#endorse-client) to endorse client contracts.
Endorsing a client contract means it can make requests that will be fulfilled by the designated wallet associated with your requester record.
You can use [`@api3/airnode-admin`](https://github.com/api3dao/airnode/tree/pre-alpha/packages/admin#derive-designated-wallet) to derive your designated wallet and fund it so that the provider you have made requests to can fulfill your requests.

<!-- markdown-link-check-enable -->
