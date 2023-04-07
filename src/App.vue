<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-04 17:16:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-06 17:15:41
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <LoadingA title="PingkBtn" @myClick="(...arg) => { btnClick(...arg) }"></LoadingA>
  <LoadingB></LoadingB>
  <a-button>Add</a-button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

// import LoadingA from '../packages/LoadingA/src/main.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // LoadingA
  },
  methods: {
    btnClick(...arg) {
      console.log("btnClick", arg);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
