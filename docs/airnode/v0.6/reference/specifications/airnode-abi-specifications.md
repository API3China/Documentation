---
title: Airnode ABI 规范
---

<TitleSpan>技术规格：</TitleSpan>

# {{$frontmatter.title}}

<VersionWarning/>

<TocHeader /> <TOC class="table-of-contents" :include-level="[2,4]" />

[合约应用二进制接口（ABI）](https://docs.soliditylang.org/en/v0.6.12/abi-spec.html)用于编码不同类型的数据，同时与Ethereum合约交互。 因此，Solidity和相应模块，如[web3.js](https://web3js.readthedocs.io/)和 [ethers.js](https://docs.ethers.io/) ，都将ABI的编码-解码功能视为一流的组成部分。 这使得使用合约ABI对API调用参数进行编码，成为一个非常有吸引力的选择。

尽管使用合约ABI对API调用参数进行编码有很多好处，但它不能直接用于这个目的。 引自[Solidity文档](https://docs.soliditylang.org/en/v0.6.12/abi-spec.html)：

> 编码不是自我描述的，因此需要解码程序。

这意味着，当传递API调用参数（`bytes`类型）时，还需要传递这些参数的类型列表，这很麻烦，而且不清楚这些类型如何编码。 作为一个解决方案，Airnode使用_Airnode ABI 规范_，这是合约ABI规范的一个扩展，包括一个保持模式的头部。

## 头部

Airnode ABI规范头部的类型是`bytes32`，作为模式（即描述API调用参数的类型）。 头部是以 UTF-8编码的，以便于使用。 下面是一个示例：

```
"1BSasbiuBa"
```

第一个字符， `1`, 表示编码版本。 后面的每个字符代表一个 API 调用参数的类型。

### 类型编码

类型以 UTF-8 字符编码，具体如下：

```
B: bytes
b: bytes32
S: string
s: string32
a: address
u: uint256
i: int256
f: bool
```

注意，动态大小的类型用大写字母表示， 静态大小的类型用小写字母表示。 另外需要注意的是，`s`代表`string32`，但这是一个人为设定的类型，它不是[solidity 类型](https://docs.soliditylang.org/en/latest/types.html)的一部分。 这种类型代之以 `bytes32`在链上表示的。 原因在 [string32 详情](airnode-abi-specifications.md#string32) 中进行了详细解释。

## 编码格式

Airnode ABI 规格有以下编码格式(有点 类似于 [SDS](https://github.com/antirez/sds))：

```
[------------------------][-----------------------------------------]
bytes32类型头部      API 调用参数名–值配对
```

请注意，每个API调用参数之前都有类型 `字节32` 的名称。

## 编码示例

要编码以下API调用参数

```json
{
  "MyFirstBytes": "0x1234",
  "MyString": "1234",
  "MyFirstAddress": "0x0000000000000000000000000000000000001234",
  "MyString32": "1234",
  "MyBytes32": "0x68656c6c6f000000000000000000000000000000000000000000000000000000",
  "MyInt256": "-1234",
  "MyUint256": "1234",
  "MySecondBytes": "0x5678",
  "MySecondAddress": "0x0000000000000000000000000000000000005678"
}
```

您需要在请求者合约中这样做：

```solidity
bytes memory parameters = abi.encode(
    bytes32("1BSasbiuBa"),
    bytes32("MyFirstBytes"), bytes(hex"1234"),
    bytes32("MyString"), "1234",
    bytes32("MyFirstAddress"), 0x0000000000000000000000000000000000001234,
    bytes32("MyString32"), bytes32("1234"),
    bytes32("MyBytes32"), 0x68656c6c6f000000000000000000000000000000000000000000000000000000,
    bytes32("MyInt256"), -1234,
    bytes32("MyUint256"), 1234,
    bytes32("MySecondBytes"), bytes(hex"5678"),
    bytes32("MySecondAddress"), 0x0000000000000000000000000000000000005678
);
```

请注意，您不需要为合约添加外部库， `abi.encode()` 在gas使用方面费用相当低廉(与备选编码方法相比)。

## 解码示例

如果你知道编码参数的模式，然后就可以在链上对其解码。 例如，如果模式是 `(bytes,string)`格式的:

```solidity
(
    bytes32 header,
    bytes32 name1, bytes memory value1,
    bytes32 name2, string memory value2
) = abi.decode(parameters, (bytes32,bytes32,bytes,bytes32,string));
```

请注意，这种操作不考虑头部，而是将模式硬编码到代码中。 也可以在链上解析标题并进行相应的解码，但这 会变得更加复杂。

## 详情

### `string32`

参数是`string32`类型的（在ABI规范模式头中被编码为`s`），意味着该参数是UTF-8编码的文本。 例如，如果参数是

```
0x68656c6c6f000000000000000000000000000000000000000000000000000000
```

Airnode 将会解码为

```
"hello"
```

并将其反馈到API，这是用户在大多数情况下想要做的。 如果参数没有编码文本，这会成为一个问题，例如有这样一个哈希值：

```
0x1fd36c61981313c0c155d33ffac0325bd7c00d21d52442981bb13d2fa13e8f71
```

如果此哈希值编码为 `string32` 类型，Airnode 会将其解码为：

```
ÓlaÀÁUÓ?úÀ2[×À
!Õ$B±=/¡>q
```

这可能不是用户想要的东西。 对于这些情况，用户应该使用 [`bytes32`](airnode-abi-specifications.md#bytes32) 类型代替。

### `bytes32`

要对链上的`bytes32`哈希进行编码，请使用ABI头部模式中由`b`表示`bytes32`类型。

```solidity
bytes memory parameters = abi.encode(
    bytes32("1b"),
    bytes32("MyBytes32"), 0x68656c6c6f000000000000000000000000000000000000000000000000000000,
);
```

当被Airnode解码时，该值将是哈希值本身：

```
"0x1fd36c61981313c0c155d33ffac0325bd7c00d21d52442981bb13d2fa13e8f71"
```

如果您想要在链上存储32个字节的字符串值，请使用 [`string32`](airnode-abi-specifications.md#string32) 类型代替。

### `bool`

`bool`类型，使用ABI规范模式编码为字母`f`，可以用来编码一个布尔值。 标题符号是 `f`, 因为 字符 `b` 已经为字节编码保留了。 所以我们选择了字母 `f` ，因为布尔值通常被用来表示“布尔标志”。

### 隐藏类型

`array` 和`tuple`被省略，因为它们不适合用作API 参数。 `uint8-uint128`, `int8-int128`, `bytes1-bytes31` 被省略，因为它们被ABI 编码器填充到32字节(意味着用户应该把它们简单的排序到32字节版本)。

### 大小限制

头部最多可以编码31个参数（还有1个字节用于对编码版本进行编码）。 这远远超过实际需要的程度，因此， 为了避免一种更复杂的解决办法，是可以容忍的。

### 填充

使用[严格的编码模式](https://docs.soliditylang.org/en/v0.6.12/abi-spec.html#strict-encoding-mode)，以便你以后可以解码这些值。 这意味着每个参数都将用零填充，使其完成32字节。 虽然这种填充增加了gas成本，但ABI 编码/解码函数是廉价的，足以得到平衡。 此外，协议中使用的 [模板](../../concepts/template.md)模式允许引用这些编码参数，而不需要在请求中明确传递这些参数，这使得在大多数情况下，填充不会引起的相应的成本增加。

## `@api3/airnode-abi`

使用 [airnode-abi](../packages/airnode-abi.md) 软件包编码和解码参数。

```js
import { encode } from '@api3/airnode-abi';
import { decode } from '@api3/airnode-abi';

const parameters = [
  { type: 'string32', name: 'from', value: 'ETH' },
  { type: 'uint256', name: 'amount', value: '100000' },
];
const encodedData = encode(parameters);
const decoded = decode(encodedData);

console.log('ENCODED:', encodedData);
console.log('\nDECODED:', decoded);
```

如何用 Airnode ABI 在链外编码和解码，请参阅软件包 doc [airnode-abi](../packages/airnode-abi.md)了解更多信息。 同时也可以查看[示例](https://github.com/api3dao/airnode/tree/v0.5/packages/airnode-examples)中的软件包。

- [request-utils.ts](https://github.com/api3dao/airnode/blob/v0.5/packages/airnode-examples/integrations/coingecko/request-utils.ts#L8)
