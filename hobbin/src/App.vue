<template>
  <div id="app">
    <underbar></underbar>
    <router-view></router-view>
  </div>
</template>

<script>

import underbar from '@/components/underbar';

export default {
  name: 'app',
  components : {
    underbar
  }
}
</script>
    
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
