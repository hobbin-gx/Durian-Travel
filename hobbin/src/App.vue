<template>
  <div id="app">
    <underbar></underbar>
    <login v-model='isShow'></login>
    <router-view></router-view>
  </div>
</template>

<script>

import underbar from '@/components/underbar';
import login from '@/components/login';

export default {
  name: 'app',

  props : ['value'],

  data (){
    return {
      isShow : false
    }
  },

  components : {
    underbar,
    login
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
