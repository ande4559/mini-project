<template id="">
  <header id="scroll" class="header">

    <span class="header--logoWrapper">
        <router-link to="/"> <img class="header--logoImage" src="/static/images/Header/CLASSY.png" alt=""> </router-link>
    </span>

    <nav  class="header--navigation">

      <router-link  class="header--navigation__item" to="#"> <img src="/static/images/Header/Login symbol.png" alt=""> LOGIN </router-link>
      <router-link  class="header--navigation__item" to="#"> <img src="/static/images/Header/Shopping bag symbol.png" alt=""> ITEMS </router-link>
      <router-link class="header--navigation__item" to="#"> <img src="/static/images/Header/Mag glass symbol.png" alt="">  </router-link>
      <a class="header--navigation__hamburger" @click.prevent='hamburgerMenu($event)' href="#"> <p class="icon2">&#10005;</p> <img class="icon" src="/static/images/Header/Burger menu icon.png" alt="">  </a>
    </nav>

    <div class="fullscreenMenu">

      <router-link to="/"><img class="header--logoImage" src="/static/images/Header/CLASSY.png" alt=""></router-link>

      <ul class="menu">
        <li class="menu--item">  <router-link class="header--navigation__item" to="/category"> ALL PRODUCTS  </router-link></li>
        <li class="menu--item">  <router-link class="header--navigation__item" to="/contact"> CONTACT US  </router-link></li>
        <li class="menu--item">  <router-link class="header--navigation__item" to="#"> ABOUT US  </router-link></li>
        <li class="menu--item">  <router-link class="header--navigation__item" to="#"> CONTACT US  </router-link></li>
      </ul>






    </div>
  </header>

</template>

<script type="text/javascript">
export default {
  name: 'VueHeader',
  data: function() {
    return {
      msg: 'HelloWorld'
    }
  },
  methods: {
    hamburgerMenu: function(el) {
      console.log(el);
          let menu = el.path[1];
          if(menu.classList.contains('hamburger--active')) {
            menu.classList.remove("hamburger--active");
            document.querySelector(".icon").classList.remove("icon--active");
            document.querySelector(".icon2").classList.remove("icon--active");
            document.querySelector(".fullscreenMenu").classList.remove("menu--active");
          }else{
            document.querySelector(".fullscreenMenu").className += ' menu--active';
            document.querySelector(".icon").className += ' icon--active';
              document.querySelector(".icon2").className += ' icon--active';
            menu.className += " hamburger--active";
          }
        },
      },
  }

window.onscroll = function() {
    var nav = document.getElementById('scroll');
    if ( window.pageYOffset > 500) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}

</script>

<style lang="scss" scoped>


</style>
