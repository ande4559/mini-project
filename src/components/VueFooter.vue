<template id="">
  <section class="footerAndSocial">

    <section class="frontPage--social">

      <h3 class="frontPage--social__headline"> Get us on </h3>
      <div class="frontPage--social__iconWrapper">


              <a href="#"> <img src="/static/images/SoMe/facebook.svg" alt=""> </a>
              <a href="#"> <img src="/static/images/SoMe/google.svg" alt=""> </a>
              <a href="#"> <img src="/static/images/SoMe/pinterest.svg" alt=""> </a>
              <a href="#"> <img src="/static/images/SoMe/tumblr.svg" alt=""> </a>
              <a href="#"> <img src="/static/images/SoMe/twitter.svg" alt=""> </a>
              <a href="#"> <img src="/static/images/SoMe/youtube.svg" alt=""> </a>

      </div>
      <img>

    </section>
    <div class="footer">


          <div class="footer--wrapper">



            <article class="footer--sectionOne">

              <h4 class="footer--headline">QUESTIONS? </h4>

              <router-link class="footer--link" to="#">Help </router-link>
              <router-link class="footer--link" to="#">Track order </router-link>
              <router-link class="footer--link" to="#">Returns </router-link>

            </article>


            <article class="footer--sectionTwo">
              <h4 class="footer--headline" >WHERE TO BUY?</h4>

              <router-link class="footer--link" to="#">Store locator </router-link>
              <router-link class="footer--link" to="#">Wishlist </router-link>
              <router-link class="footer--link" to="#">Gift card </router-link>

            </article>


            <article class="footer--sectionThree">
              <h4 class="footer--headline" >ABOUT US</h4>

              <router-link class="footer--link" to="#">Our stores </router-link>
              <router-link class="footer--link" to="#"> Career</router-link>
              <router-link class="footer--link" to="#"> Affilliates </router-link>


            </article>


            <article class="footer--sectionFour">
                <img src="/static/images/Homepage/Creditcards.png" alt="">



            </article>

            <article class="footer--sectionFive">


              <figure>
                <router-link to="/"> <img class="footer--logoImage" src="/static/images/Header/CLASSY.png" alt=""> </router-link>
                <figcaption class="footer-logofigcaption">Ecommerce PSDtheme</figcaption>

              </figure>



            </article>

          </div>

    </div>



  </section>



</template>

<script type="text/javascript">
export default {
  name: 'VueFooter',
  data: function() {
    return {
      msg: 'copyright my ass'
    }
  }
}

</script>

<style lang="scss" scoped>


</style>
