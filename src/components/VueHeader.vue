<template id="">
  <header id="scroll" class="header">

    <span class="header--logoWrapper">
        <router-link to="/"> <img class="header--logoImage" src="/static/images/Header/CLASSY.png" alt=""> </router-link>
    </span>

    <nav  class="header--navigation">

      <router-link  class="header--navigation__item" to="#"> <img src="/static/images/Header/Login symbol.png" alt=""> LOGIN </router-link>
      <router-link  class="header--navigation__item" to="#"> <img src="/static/images/Header/Shopping bag symbol.png" alt=""> ITEMS </router-link>
      <router-link class="header--navigation__item" to="#"> <img src="/static/images/Header/Mag glass symbol.png" alt="">  </router-link>
      <router-link class="header--navigation__item" to="#"> <img src="/static/images/Header/Burger menu icon.png" alt="">  </router-link>
    </nav>

  </header>

</template>

<script type="text/javascript">
export default {
  name: 'VueHeader',
  data: function() {
    return {
      msg: 'HelloWorld'
    }
  }
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
