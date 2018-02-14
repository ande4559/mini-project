<template>

  <div class="root-element">
    <section class="frontPage--Banner">
      <div class="frontPage--Banner__sliderbox">
        <a class="frontPage--Banner__callToAction" href="#"> Learn more about great deals</a>
      </div>


  </section>

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

        <div class="frontPage--offerSection_sectionOne">
        <img class="frontPage--offerSection__imgOne" src="/static/images/Homepage/MustHaveForHerFull.jpg" alt="">
      </div>

        <div class="frontPage--offerSection_sectionTwo">

          <img class="frontPage--offerSection__imgTwo" src="/static/images/Homepage/75PercentOffFull.jpg" alt="">

          <img class="frontPage--offerSection__imgThree" src="/static/images/Homepage/NewSummerStyleFull.jpg" alt="">

        </div>

      </div>



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
