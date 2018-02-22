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


      <div class="product--slider" itemscope itemtype="http://schema.org/Product">


        <div class="product--slider__bigSlider">
            <slick class="slider-for" ref="slick" :options="slickBig">
              <img  itemprop="image":src="product.src" alt="">
          <img itemprop="image" v-for="(item, index) in product.pictures" v-bind:key="product.pictures" :src="item">


            </slick>
        </div>



        <div class="product--slider__smallSlider" itemscope itemtype="http://schema.org/Product">
          <slick class="slider-nav" ref="slick" :options="slickSmall">


            <img itemprop="image" :src="product.src" alt="">

          <img  itemprop="image" v-for="(item, index) in product.pictures" v-bind:key="product.pictures" :src="item">


          </slick>
        </div>


      </div>


        <div class="info">

                <h1 itemprop="name" class="info--headline"> {{product.title}}</h1>

                  <p itemprop="offer" class="info--priceAndeText"> ${{product.price}} <img src="/static/images/Product/ShippingLogo.png" alt=""> Free Shipping Worldwide</p>




              <form class="dropdown-container">

                <v-select itemprop="color" class="dropdown1" v-model="selected" :placeholder="product.color[0]" :options="product.color"></v-select>

                <v-select itemprop="weight" class="dropdown2" v-model="selected" :placeholder="product.size[0]" :options="product.size"></v-select>
                <a class="button" href="#"> <img src="/static/images/Product/SizeGuideLogo.png"> Size guide</a>


              </form>

            <div class="buttons">
              <a class="addToBag" href="#"> <img class="icon1" src="/static/images/icons/cart.svg" alt="">ADD TO BAG</a>
              <a class="saveForlater" href="#"> SAVE FOR LATER</a>
              <a class="share" href="#"> <img src="/static/images/Product/ShareProductLogo.png" alt=""> Share this product </a>

            </div>


              <div class="description" itemscope itemtype="http://schema.org/Product">
                <main>
                  <input class="inputFans"  id="tab1" type="radio" name="tabs" checked>
                  <label class="labelFans" for="tab1">description</label>

                  <input class="inputFans" id="tab2" type="radio" name="tabs">
                  <label class="labelFans" for="tab2">Brand</label>

                  <input class="inputFans" id="tab3" type="radio" name="tabs">
                  <label class="labelFans" for="tab3">Info</label>

                  <section id="description">
                    <p itemprop="description">{{product.description}}</p>

                  </section>

                  <section id="brand">
                    <p itemprop="brand">{{product.brand}}</p>

                  </section>

                  <section id="info">
                    <p itemprop="manufacturer">{{product.info}}</p>

                  </section>

                </main>
              </div>


      </div>
    </section>

    <section class="moreInfo">
      <div class="moreInfo__picture1">
        <img src="/static/images/Product/AdeliaDressCut1.jpg" alt="">

      </div>
      <div class="moreInfo__bodyText1">
        <div class="moreInfo__contentWrapper">
          <h2 class="moreInfo__headline">Extraordinay design</h2>
          <p class="moreInfo__text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <div class="iconWrapper">
            <figure>
              <span class="imageWrapper">  <img class="moreInfo__icon" src="/static/images/Product/ElegantStyleButterfly.png" alt=""></span>
              <figcaption>elegant style</figcaption>
            </figure>
            <figure>
              <span class="imageWrapper">  <img class="moreInfo__icon" src="/static/images/Product/ElegantStylegGlasses.png" alt=""></span>
              <figcaption>elegant style</figcaption>
            </figure>
            <figure>
              <span class="imageWrapper"><img class="moreInfo__icon" src="/static/images/Product/ElegantStyleHanger.png" alt=""></span>
              <figcaption>elegant style</figcaption>
            </figure>


          </div>
          <a class="moreInfo_readMore" href="#"><p>READ MORE</p></a>

        </div>

      </div>
      <div class="moreInfo__picture2">
          <img src="/static/images/Product/AdeliaDressCut2.jpg" alt="">
      </div>
      <div class="moreInfo__bodyText2">

        <div class="moreInfo__contentWrapper">
          <h2 class="moreInfo__headline">Extraordinay design</h2>
          <p class="moreInfo__text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <div class="iconWrapper">
            <figure>
              <span class="imageWrapper">  <img class="moreInfo__icon" src="/static/images/Product/ElegantStyleButterfly.png" alt=""></span>
              <figcaption>elegant style</figcaption>
            </figure>
            <figure>
              <span class="imageWrapper">  <img class="moreInfo__icon" src="/static/images/Product/ElegantStylegGlasses.png" alt=""></span>
              <figcaption>elegant style</figcaption>
            </figure>
            <figure>
              <span class="imageWrapper"><img class="moreInfo__icon" src="/static/images/Product/ElegantStyleHanger.png" alt=""></span>
              <figcaption>elegant style</figcaption>
            </figure>


          </div>
          <a class="moreInfo_readMore" href="#"><p>READ MORE</p></a>

        </div>

      </div>

    </section>

    <section class="sharpenYourLook">
      <h2 class="sharpenYourLook__headline">Sharpen Your Look</h2>
      <p class="sharpenYourLook_bodyText">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

    </section>




    <section class="bigDiscounts">
      <h3 class="bigDiscounts__headline">BIG DISCOUNTS</h3>
    </section>

  </div>




</template>

<script type="text/javascript">
import axios from 'axios';
import vSelect from 'vue-select';
import Slick from 'vue-slick';


export default {
  name: 'product-detail',
  components: { vSelect, Slick },
  data: function() {
    return{
      product: '',
      slickSmall: {
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        vertical: true,
        asNavFor: '.slider-for',
        arrows: true
      },
      slickBig: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        asNavFor: '.slider-nav',
        arrows: true
      }
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
        .catch(error => {
          console.log(error);
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

  }


}





</script>

<style lang="scss">
  .slick-arrow {
    position: absolute;
    z-index: 1000;
    top: 50% !important;
    transform: translateY(-50%);

    &.slick-next {
      right: 69px;
      top: 0px;
    }
    &.slick-prev {
      left: 20px;
      top: 0px;
    }
  }
  .slider-nav{
    .slick-current{
      -webkit-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
      box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
    }
    .slick-list{
      padding: 0px !important;
      margin-top: 10px;

    }
  }

</style>
