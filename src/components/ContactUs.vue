<template id="">
  <div class="contact">
    <section class="contact--header">
      <img src="contact--header__bannerImg" alt="">
      <h1 class="contact--header__headline"> CONTACT US </h1>


    </section>
    <section class="contact--form">

    </section>
    <section class="contact--info">

    </section>
    <section class="contact--picture">
      <img src="" alt="">

    </section>
    <h1>Contact us</h1>
    <p>Email us at: {{email}} </p>
  </div>

</template>

<script type="text/javascript">
export default {
  name: 'contact-us',
  data: function() {
    return {
      companyName: "",
      companyPhone: "",

      email: 'anders957@hotmail.com'
    }
  }
}

</script>

<style lang="scss" scoped>


</style>
