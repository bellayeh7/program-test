<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to="Home" tag="button">首页</router-link>
    <router-link to="About" tag="button">关于</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active {
  color: #f00;
}
</style>
