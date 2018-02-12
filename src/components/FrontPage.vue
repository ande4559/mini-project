<template>

  <header class="frontPage">
    <div class="fronPage__sliderbox">
      <h1 class="frontPage__headline">Big Summer Sale</h1>
      <a class="frontPage__callToAction" href="#"> Learn more about great deals</a>
    </div>

  </header>
</template>

<script>
export default {
  name: 'FrontPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
