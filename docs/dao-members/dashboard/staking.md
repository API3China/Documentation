---
title: 质押代币
---

# {{$frontmatter.title}}

<TocHeader /> <TOC class="table-of-contents" :include-level="[2]" />

在[DAO池](.../introduction/dao-pool.md)中押注API3代币使你 有资格获得奖励和治理权。

## 开始

1. 访问 [DAO 控制面板](https://api3.eth.link/)
2. 从左上角的导航栏中点击选择 **Staking** 。
3. 继续到 [Staking Overview](staking.md#staking-overview) 页面并 连接到您的钱包。

::: tip 视频

访问 [Videos](videos.md) 页面以便更快地熟悉DAO控制面板。

:::

<TocHeader /> <TOC class="table-of-contents" :include-level="[2,3]" />

<!-------------------------->

## 质押概述

本节对与DAO有关的问题作了简短的和高度的概述。 要 访问并参与DAO，您需要连接一个 web3 钱包，例如 MetaMask。 如果您没有，请先创建一个。

:::: tabs

::: tab 阅读 & 学习

点击右上角的 **Connect Wallet** 按钮连接您的钱包。 从弹出窗口中选择你的钱包。 请确保您是连接到您所使用的主网钱包。

> 一旦连接，您可以看到 DAO控制面板显示的质押和奖励状态。 点击下面的图片查看控制面板。
> 
> <p align="left"><br/>
> <img src="../assets/dashboard/dashboard.png"/>
> </p>
左边是年收益百分比，即一年的投资回报 。 然后下面是目前的通货膨胀率。 奖励基于达到质押目标的百分比每周更新 ， 百分比是根据 质押的代币数量除以质押目标量计算得来的。

页面底部有两个部分， **Balance and Staking**（账户余额和质押）。 在balance（账户余额）框中您可以存入和提取代币，而在staking（质押）框中 您可以质押和解除质押代币。

:::

::: tab 观看 & 学习

<Video src="https://www.youtube.com/embed/Cz7Ov5ibBo0">

:::

::::

<!-------------------------->

## 存入和提取代币

在质押代币之前，您必须将它们存入DAO池。 这样做，将把代币从你的钱包转移到DAO池，DAO池由它的智能合约控制。 存入的代币如果是可以提取状态（WITHDRAWABLE），则可以随时从 DAO 池中提取 到您的钱包中。

:::: tabs

::: tab 阅读 & 学习

#### 存入

1. 点击**_Deposit_**  按钮

   > 如果这是您的第一笔存入代币操作，您需要先授权 DAO 池智能 合约。 依次按照步骤 #2 和步骤 #3操作。 否则跳到步骤4。
2. (首次存入者) 输入要存入的代币数量，然后点击 **_Approve_** 按钮。
3. 输入要存入的代币数量，然后点击 **_Deposit_** 按钮。

   > 请注意，存入的代币没有被质押。 他们不会让您获得奖励或 给予您治理权利。

---

#### 提币

您只能提取未质押的代币。 可以提取的最大额是 显示为WITHARAWABLE状态。

1. 点击**_Withdraw_**  按钮
2. 输入要提取的代币数量(或选择 **Max** )，然后点击 **_Withdraw_** 按钮。 > 提取的代币已返回您的钱包。

:::

::: tab 观看 & 学习

<Video src="https://www.youtube.com/embed/PdSE-SiUx3M">

:::

::::

<!-------------------------->

## 质押 & 赚取奖励

当你质押了您存入的代币时，您将被赋予创建和 投票提案的权利。 此外，您将获得奖励。 奖励是每隔 7天更新一次，与您在 DAO 池中质押的代币数量成比例(占DAO 池的百分比)。

:::: tabs

::: tab 阅读 & 学习

1. 点击**_Stake_**  按钮

   > 可质押的代币数量取决于存入代币的数量， 也是以可提取状态（ WITHDRAWABLE）显示在**Balance** 框中。
2. 输入要质押的代币数量(或选择 **Max** )，然后点击 **_Stake_** 按钮。

DAO使用一个自适应的奖励机制来激励质押。 奖励是 每七天更新一次，与您的 所质押的代币数量成正比。 当池中资金不足时，奖励会增加以激励质押；当池中资金充足时，奖励会减少以减少新的质押。 您可以根据已达到目标质押量的百分比查看 当前资金状况，这个 百分比是根据质押的代币数量除以质押目标量计算得来的。

:::

::: tab 观看 & 学习

<Video src="https://www.youtube.com/embed/DQMsgQvkg7k">

:::

::::

## 解除质押和索取

解除代币质押和索取奖励。 为了激励履行治理责任 并保护DAO的长期利益，奖励将被锁定一年。  你可以在任何时候解除你的代币质押，但你只能在一年的锁定期结束后才能索取奖励。 请注意，解除质押将取消您最近的 周奖励付款。 为了保护DAO不受垃圾提案的影响，解除质押需要有七天的等待期。

:::: tabs

::: tab 阅读 & 学习

1. 点击**_Initiate Unstake_**  按钮
2. 输入要解除质押的代币数量(或选择 **Max** )，然后点击 **_Initiate Unstake_** 按钮。
3. 点击 弹出窗口中的 **Initiate Unstake** 按钮来确认交易。

:::

::: tab 观看 & 学习

<Video src="https://www.youtube.com/embed/__zhi8N2erI">

:::

::::

::: warning 七天等待期

为了保护DAO不受垃圾提案的影响，解除质押需要有七天的等待期。

:::
