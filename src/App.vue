<template>
  <div class="main" id="app">

    <VueHeader> </VueHeader>
    <router-view/>

    <VueFooter> </VueFooter>

  </div>
</template>

<script>

import VueFooter from '@/components/VueFooter'
import VueHeader from '@/components/VueHeader'
import MyPanel from '@/components/MyPanel'
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';


export default {
  name: 'App',
  components: {
    'VueFooter': VueFooter,
    'VueHeader': VueHeader,
    'my-panel': MyPanel,

  }
}
</script>

<style lang='scss'>
 @import './assets/styles/base';

</style>
