<template id="">

  <div class="productPage">
    <section class="productPage--banner">
      <div class="banner--topBar">

      </div>
      <div class="banner-picture">
        <h1>50% OFF SUMMER COLLECTION</h1>

      </div>


    </section>




    <h2>{{product.title}}</h2>

  </div>




</template>

<script type="text/javascript">
import axios from 'axios';

export default {
  name: 'product-detail',
  data: function() {
    return{
      product: ''
    }
  },
  created: function() {
    let id = this.$route.params.id;
    this.getProductById(id);
  },
  watch: {
    '$route.params.id': function (id) {
      this.getProductById(id)
    }
  },
  methods: {
    getProductById: function(id){
      axios
        .get("/static/products.json")
        .then(response => {
          this.product = response.data.filter(product => product.id == id)[0];
        })
        .catch(error =>
          {console.log(error);
        }
      )


    }
  }


}

</script>
