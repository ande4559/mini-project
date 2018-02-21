<template id="category">

  <div class="category--wrapper">
    <section class="category--header">
      <img src="/static/images/Collection/HeaderImageDark.jpg" alt="">
      <div class="category--header__text">
        <h1 class="category-headline">most wanted <strong> NEW COLLECTION </strong></h1>

        <router-link class="category--cta" to="/"><p> BROWSE COLLECTION </p></router-link>

      </div>


    </section>

    <section class="category--allProducts">



      <div class="foobar">

      <p>New collection (1-32 of 58)</p>
      <p>sort by &#9660;</p>
      <p>features &#9660;</p>
      <p>size &#9660;</p>
      <p>colour &#9660;</p>
      <p>price &#9660;</p>

      </div>

      <ul>
        <li v-for="product in products" v-bind:key="product.id">


          <div class="product--elementWrapper">
            <article class="product--box">
              <div class="product-wrapper">

                <div class="product--image">
                  <img :src="product.src" alt="">
                  <span class="product--saleText"><p class="product--saleText__item"> SALE </p></span>
                  <div class="product--hoverPopUp">
                    <span class="iconWrapper"> <router-link :to="'/product/' + product.id"><img class="product--hoverIcon" src="/static/images/Homepage/QuickViewLogo.png" alt=""></router-link></span>
                    <span class="iconWrapper"><a href=""><img class="product--hoverIcon"src="/static/images/Homepage/SaveLogo.png" alt=""></a></span>
                  </div>
                </div>

              </div>
              <p class="product--description">{{product.title}} </p>
              <div class="product--info">
                <p class="product--info__price"> ${{product.price}} </p>
                <button class="product--info__addToBasket">
                    <img class="blackBag" src="/static/images/icons/black-cart.png" alt="">
                   <img class="whiteBag" src="/static/images/Header/Shopping bag symbol.png" alt="">
                   ADD TO BAG
               </button>
              </div>
            </article>
          </div>





        </li>

        </ul>

    </section>

    <section class="category--subscribe">
      <form class="category-form" >

        <input class="category--subscribe__textField" type="text" placeholder="YOUR EMAIL" required>
        <button class="category--subscribe__button" type="submit"><p>SUBSCRIBE TO OUR NEWSLETTER</p></button>

      </form>
    </section>

  </div>

</template>

<script type="text/javascript">
import axios from 'axios';

export default {
  name: 'Category',
  data: function() {
    return {
      products: ''
    }
  },
  created: function() {
    this.getProducts();
  },
  methods: {
    getProducts: function(){
      axios
        .get("/static/products.json")
        .then(response => {
          this.products = response.data;
          console.log(response.data);
        });
    },
    sortByPrice: function(event) {


      axios
        .get("/static/products.json")
        .then(response => {
          this.products = response.data.sort(function(a, b){
   return product.price(a) - product.price(b);
});

        });

    },

  }
}

</script>

<style lang="scss" scoped>

li{
  list-style: none;

}


</style>
