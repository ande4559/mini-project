<template>

  <div class="root-element">
    <section class="frontPage--Banner">
      <div class="frontPage--Banner__sliderbox">
        <a class="frontPage--Banner__callToAction" href="#"> Learn more about great deals</a>
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

    <section class="frontPage--summerOffer">
      <div class="frontPage--summerOffer__wrapper">

        <h3 class="frontPage--summerOffer__text">Summer</h3>

          <div class="frontPage--summerOffer__circle">
            <h3 class="frontPage--summerOffer__25percent"></h3>
          </div>

        <h3 class="frontPage--summerOffer__text">collection</h3>

      </div>

    </section>

    <section class="frontPage--quotes">
      <article class="frontPage--quotes__box">
        <img class="frontPage--quotes__avatar" src="">
        <h1 class="frontPage--quotes__name"> Jane Smith</h1>
        <p class="frontPage--quotes__text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
           there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
           a large language ocean</p>

      </article>

    </section>

    <section class="frontPage--social__">
      <h3 class="frontPage--social__"> Get us on</h3>
      <div class="frontPage--social__iconWrapper">

              <a href="#"> <img src="" alt=""> </a>
              <a href="#"> <img src="" alt=""> </a>
              <a href="#"> <img src="" alt=""> </a>
              <a href="#"> <img src="" alt=""> </a>
              <a href="#"> <img src="" alt=""> </a>
              <a href="#"> <img src="" alt=""> </a>

      </div>
      <img>

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

</style>
