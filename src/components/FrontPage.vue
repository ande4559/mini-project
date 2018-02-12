<template>

  <div class="root-element">
    <section class="frontPage--Banner">
      <div class="frontPage--Banner__sliderbox">
        <h1 class="frontPage--Banner__headline">Big Summer Sale</h1>
        <a class="frontPage--Banner__callToAction" href="#"> Learn more about great deals</a>
      </div>
      <div class="frontPage--Banner__sliderbox">
        <h1 class="frontPage--Banner__headline">Big Summer Sale</h1>
        <a class="frontPage--Banner__callToAction" href="#"> Learn more about great deals</a>
      </div>
      <div class="frontPage--Banner__sliderbox">
        <h1 class="frontPage--Banner__headline">Big Summer Sale</h1>
        <a class="frontPage--Banner__callToAction" href="#"> Learn more about great deals</a>
      </div>
      <div class="frontPage--Banner__sliderbox">
        <h1 class="frontPage--Banner__headline">Big Summer Sale</h1>
        <a class="frontPage--Bannere__callToAction" href="#"> Learn more about great deals</a>
      </div>


    </section>

    <section class="frontPage--sectionTwo">
      <div class="frontPage--sectionTwo__box1">

        <a href="/" class="frontPage--sectionTwo__callToAction"> Mens Lookbook</a>

      </div>

      <article class="frontPage--subscribe">

        <h2 class="frontPage--subscribe__headline"> Get our Newsletter</h2>
        <p class="frontPage--subscribe__description"> Join our maillist to get special discounts </p>

        <form class="frontPage--subscribe__form">
            <input class="frontPage--subscribe__textField" type="text" placeholder="Enter your email" required>
            <button class="frontPage--subscribe__button" type="submit">Subscribe</button>
        </form>

      </article>

      <div class="frontPage--sectionTwo__box1">

        <a href="/" class="frontPage--sectionTwo__callToAction"> Womens Lookbook</a>

      </div>

    </section>

    <section class="frontPage--topBrands">

      <h3 class="frontPage--topBrands__headline"> Top Brands </h3>


      <div class="frontPage--topBrands__slider">

        <img class="frontPage--topBrands__sliderItem" src="" alt="">
        <img class="frontPage--topBrands__sliderItem" src="" alt="">
        <img class="frontPage--topBrands__sliderItem" src="" alt="">
        <img class="frontPage--topBrands__sliderItem" src="" alt="">
        <img class="frontPage--topBrands__sliderItem" src="" alt="">
        <img class="frontPage--topBrands__sliderItem" src="" alt="">
        <img class="frontPage--topBrands__sliderItem" src="" alt="">
        <img class="frontPage--topBrands__sliderItem" src="" alt="">

      </div>

    </section>

    <section class="frontPage--offerSection">
      <img class="frontPage--offerSection__imgOne" src="" alt="">
      <img src="frontPage--offerSection__imgTwo" alt="">
      <img src="frontPage--offerSection__imgThree" alt="">

    </section>

    <section class="frontPage--featured">
      <div class="Product--box">

        <figure>
          <img class="product--image" src="" alt="">
          <figcaption class="product--imageCaption"></figcaption>

        </figure>
      <p class="product--price"> 35$ </p>

      <button class="product--addToBasket"> <p> add to bag </p> </button>




      </div>

    </section>


  </div>

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
