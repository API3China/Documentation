<!--
This component places document sets in the header of the sidebar. 

NOTE: When this component is MOUNTED (as it is mounted from a landing page click),
it will always default to the startPath in config.json.
-->

<template>
  <div class="landing-container">
    <li>
      <router-link :to="latestVersion">
        <img src="/img/01-Airnode-State=Active@2x.png" />
        Airnode</router-link
      >
      <p>
        第一方无服务器预言机节点，解决了Web3 API的连接问题。
      </p>
    </li>
    <li>
      <router-link :to="latestBeaconVersion">
        <img src="/img/Beacons-active.png" />
        Beacons</router-link
      >
      <p>
        第一方Web3数据源，为透明、可靠和具备成本效益的dAPIs、dApps等助力。
      </p>
    </li>
    <li>
      <router-link :to="latestOisVersion">
        <img src="/img/ois-active.png" />
        OIS</router-link
      >
      <p>
        预言机集成规范--将Airnode端点与API链接操作。
      </p>
    </li>
    <li>
      <router-link to="/dao-members/">
        <img src="/img/02-DAO-State=Active@2x-1.png" />
        DAO 成员</router-link
      >
      <p>API3 DAO的结构、功能和资源。</p>
    </li>
    <li>
      <router-link to="/api3/">
        <img src="/img/03-API3-State=Active@2x-2.png" />
        API3 预览</router-link
      >
      <p>了解更多关于该项目及其使命的资源。</p>
    </li>
  </div>
</template>

<script>
import {
  latestVersion,
  latestBeaconVersion,
  latestOisVersion,
} from '../config.js';

export default {
  name: 'document-set-buttons',
  data: () => ({
    latestVersion: latestVersion,
    latestBeaconVersion: latestBeaconVersion,
    latestOisVersion: latestOisVersion,
  }),
};
</script>

<style scoped>
.landing-container {
  display: flex;
  list-style: none;
  flex-flow: row wrap;
  justify-content: space-between;
}
.landing-container img {
  display: block;
  opacity: 0.7;
  margin: 0.5rem auto;
  height: 56px;
}
.landing-container li {
  flex-basis: 160px;
  flex-grow: 1;
  padding: 1rem;
  text-align: center;
}
.landing-container a {
  font-size: 1.2rem;
}
.landing-container a:hover {
  text-decoration: underline;
}
</style>
