<template>
  <div id="app">
    <img src="./assets/Robot[LOGO].jpg" style="width: 550px;height: 300px; position: absolute; left: -150px">
    <img src="./assets/gopomelo.png" style="width: 50%; height: 50%; padding-top: 50px;">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
