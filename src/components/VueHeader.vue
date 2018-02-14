<template id="">
  <div class="">

    <nav>
      <router-link to="/"> home </router-link>
      <router-link to="/contact"> contact </router-link>
      <router-link to="/category"> category </router-link>
      <router-link to="/product"> product </router-link>
    </nav>

  </div>

</template>

<script type="text/javascript">
export default {
  name: 'VueHeader',
  data: function() {
    return {
      msg: 'HelloWorld'
    }
  }
}

</script>

<style lang="scss" scoped>


</style>
