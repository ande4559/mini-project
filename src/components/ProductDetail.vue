<template id="">

  <div class="productPage">
    <section class="productPage--banner">
      <div class="banner--topBar">

      </div>
      <div class="banner-picture">
        <h1>50% OFF SUMMER COLLECTION</h1>

      </div>


    </section>

    <section class="product--wrapper">
      <div class="product--slider">

      </div>
      <div class="info">


      <div class="dropdown">

        <select class="dropdown--selector">
          <option class="dropdown--option"  v-for="(color, index) in product.color" :value="color">{{color}}</option>
        </select>
        <select class="dropdown--selector">

          <option class="dropdown--option" v-for="(size, index) in product.size" :value="size">{{size}}</option>

        </select>

      </div>


      <div class="description">
        <main>
          <input class="inputFans"  id="tab1" type="radio" name="tabs" checked>
          <label class="labelFans" for="tab1">description</label>

          <input class="inputFans" id="tab2" type="radio" name="tabs">
          <label class="labelFans" for="tab2">Brand</label>

          <input class="inputFans" id="tab3" type="radio" name="tabs">
          <label class="labelFans" for="tab3">Info</label>

          <section id="description">
            <p>{{product.description}}</p>

          </section>

          <section id="brand">
            <p>{{product.description}}</p>

          </section>

          <section id="info">
            <p>{{product.description}}</p>

          </section>

        </main>
      </div>


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


    },

  }


}





</script>
