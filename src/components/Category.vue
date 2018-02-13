<template id="">
  <div class="">
    <h1>Product list</h1>
    <ul>
      <li v-for="product in products" v-bind:key="product.id">

      <router-link :to="'/product/' + product.id"> 
        <h1>{{product.title}}</h1>
        <p>{{product.price}}</p>

      </router-link>

      </li>

    </ul>

  </div>

</template>

<script type="text/javascript">
import axios from 'axios';

export default {
  name: 'Category',
  data: function() {
    return {
      products: []
    }
  },
  created: function() {
    this.getProducts()

  },
  methods: {
    getProducts: function(){
      axios
        .get("/static/products.json")
        .then(response => { this.products = response.data; })
    }
  }

}

</script>

<style lang="scss" scoped>

li{
  list-style: none;

}


</style>
