<template>

  <div class="root-element">
    <slick ref="slick" :options="slickOptions" class="frontPage--Banner">
      <div class="frontPage--Banner__sliderbox">
        <a class="frontPage--Banner__callToAction" href="#"> Learn more about great deals</a>
      </div>


  </slick>

    <section class="frontPage--sectionTwo">
      <div class="frontPage--sectionTwo__box1">

        <a href="/" class="frontPage--sectionTwo__callToAction"> <strong>MEN'S</strong> Lookbook</a>

      </div>

      <article class="frontPage--subscribe">

        <form class="frontPage--subscribe__form">
            <span class="subscribe__iconSpan"><img class="subscribe__mailIcon"src="static/images/Homepage/MailIcon.png" alt="MailIcon Classy"></span>
            <h2 class="frontPage--subscribe__headline"> Get our Newsletter</h2>
            <p class="frontPage--subscribe__description"> Join our maillist to get special discounts </p>
            <input class="frontPage--subscribe__textField" type="text" placeholder="ENTER YOUR EMAIL" required>
            <button class="frontPage--subscribe__button" type="submit">SUBSCRIBE</button>
        </form>

      </article>

      <div class="frontPage--sectionTwo__box2">

        <a href="/" class="frontPage--sectionTwo__callToAction"><strong> WOMEN'S</strong> Lookbook</a>

      </div>

    </section>

    <section class="frontPage--topBrands">

      <h3 class="frontPage--topBrands__headline"> Top Brands </h3>


      <div class="frontPage--topBrands__slider">

        <img class="frontPage--topBrands__sliderItem" src="/static/images/Homepage/MonkiTrans.png" alt="">
        <img class="frontPage--topBrands__sliderItem" src="/static/images/Homepage/MissGuidedTrans.png" alt="">
        <img class="frontPage--topBrands__sliderItem" src="/static/images/Homepage/MichaelKorsTrans.png" alt="">
        <img class="frontPage--topBrands__sliderItem" src="/static/images/Homepage/Pull&BearTrans.png" alt="">
        <img class="frontPage--topBrands__sliderItem" src="/static/images/Homepage/MangoTrans.png" alt="">


      </div>

    </section>

    <section class="frontPage--offerSection">
      <div class="frontPage--offerSection__wrapper">


        <img class="frontPage--offerSection__imgOne" src="/static/images/Homepage/MustHaveForHerFull.jpg" alt="">




          <img class="frontPage--offerSection__imgTwo" src="/static/images/Homepage/75PercentOffFull.jpg" alt="">

          <img class="frontPage--offerSection__imgThree" src="/static/images/Homepage/NewSummerStyleFull.jpg" alt="">



      </div>



    </section>

    <section class="frontPage--featured">

    <div class="frontPage--featured__wrapper">

      <div class="frontPage--featured__headlines">
        <a href="#" v-on:click="newArrivals()" @click.prevent='click'> <h3 class="frontPage--featured__headlineItem"> NEW ARRIVALS</h3> </a>
        <a href="# " v-on:click="getTopSeller()" @click.prevent='click'> <h3 class="frontPage--featured__headlineItem"> TOP SELLERS</h3> </a>
        <a href="# " v-on:click="getFeatured()" @click.prevent='click'> <h3 class="frontPage--featured__headlineItem"> FEATURED</h3> </a>
      </div>
<div class="columnDiv">


  <div class="foobar">

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
</div>


    </div>

    </section>




    <section class="frontPage--summerOffer">
      <div class="frontPage--summerOffer__wrapper">

        <p class="frontPage--summerOffer__text">ALL SUMMERS</p>

          <div class="frontPage--summerOffer__circle">
            <p class="frontPage--summerOffer__25percent"><strong> GET </strong> 25% <strong> OFF </strong></p>
          </div>

        <p class="frontPage--summerOffer__text">COLLECTION</p>

      </div>

    </section>

    <section class="frontPage--quotes">
      <article class="frontPage--quotes__box">
        <img class="frontPage--quotes__avatar" src="/static/images/Homepage/avatar.png">
        <h1 class="frontPage--quotes__name"> Jane Smith</h1>
        <p class="frontPage--quotes__text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
           there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
           a large language ocean</p>

      </article>

    </section>




  </div>

</template>

<script>
import axios from 'axios';
import Slick from 'vue-slick';
export default {


  name: 'FrontPage',
  data () {
    return {
      products: '',
      slickOptions:{
                slidesToShow: 3,
                // Any other options that can be got from plugin documentation
            },
    }
  },
  created: function() {
    this.newArrivals();
  },
  methods:{
    getFeatured: function(event) {
      axios
        .get("/static/products.json")
        .then(response => {
          this.products = response.data.filter(product => product.featured == true).slice(0,4);

        });

    },
    newArrivals: function(event) {


      axios
        .get("/static/products.json")
        .then(response => {
          this.products = response.data.filter(product => product.date == "25-01-2017").slice(0,4);

        });

    },
    getTopSeller: function(event) {


      axios
        .get("/static/products.json")
        .then(response => {
          this.products = response.data.filter(product => product.topseller == true).slice(0,4);

        });

    },
    next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
    },
  }




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
