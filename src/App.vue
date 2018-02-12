<template>
  <div class="main" id="app">

    <VueHeader> </VueHeader>
    <nav>
      <router-link to="/"> home </router-link>
      <router-link to="/contact"> contact </router-link>
      <router-link to="/category"> category </router-link>
      <router-link to="/product"> product </router-link>
    </nav>
    <router-view/>

    <VueFooter> </VueFooter>

  </div>
</template>

<script>

import VueFooter from '@/components/VueFooter'
import VueHeader from '@/components/VueHeader'
export default {
  name: 'App',
  components: {
    'VueFooter': VueFooter,
    'VueHeader': VueHeader,

  }
}
</script>

<style lang='scss'>
 @import './assets/styles/base';




#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
