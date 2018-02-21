<template id="">
  <div class="contact" itemscope itemtype="http://schema.org/ContactPoint">
    <section class="contact--header">
      <img class="contact--header__bannerImg" src="/static/images/Product/BigDiscountsImg.jpg" alt="">
      <h1 class="contact--header__headline"> CONTACT US </h1>


    </section>
    <section class="contact--introText">
      <h2 class="contact--introText__headline"> Feel Free To Contact Us</h2>

    </section>

    <section class="contact--info">
      <div class="contact--info__info">

        <h1 class="contact--info__headline">CONTACT US </h1>
        <div class="contact--info__phone">
          <p class="contact--info__phone--item1"> Company Phone1: </p>
          <p class="contact--info__phone--item2"> Company Phone2: </p>
          <p itemprop="telephone" class="contact--info__phone--item3"> {{companyPhone}} </p>
          <p itemprop="telephone" class="contact--info__phone--item4"> {{companyPhone2}} </p>
          <p  class="contact--info__phone--item5"> Company Email: </p>
          <p itemprop="email" class="contact--info__phone--item6"> {{companyEmail}} </p>
          <p class="contact--info__phone--item7"> CVR: </p>
          <p class="contact--info__phone--item8"> {{companyCVR}} </p>



        </div>


      </div>
      <div class="contact--info__form">
                <form @submit.prevent="validateBeforeSubmit" itemscope itemtype="http://schema.org/Message">
                  <h2 class="contact--info__headline">WRITE US A MESSAGE</h2>
            <div class="contact--info__formitem1">

                <p class="control has-icon has-icon-right">
                    <input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
                    <i v-show="errors.has('email')" class="fa fa-warning"></i>
                    <span v-show="errors.has('email')" class="errorMsg">{{ errors.first('email') }}</span>
                </p>
            </div>
            <div class="contact--info__formitem2">

                <p class="control has-icon has-icon-right">
                    <input itemprop="sender" name="first_name" v-model="first_name" v-validate.initial="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('first_name') }" type="text" placeholder="First Name">
                    <i v-show="errors.has('first_name')" class="fa fa-warning"></i>
                    <span v-show="errors.has('first_name')" class="errorMsg">{{ errors.first('first_name') }}</span>
                </p>
            </div>
            <div class="contact--info__formitem3">

                <p class="control has-icon has-icon-right">
                    <input itemprop="sender" name="last_name" v-model="last_name" v-validate.initial="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('last_name') }" type="text" placeholder="Last Name">
                    <i v-show="errors.has('last_name')" class="fa fa-warning"></i>
                    <span v-show="errors.has('last_name')" class="errorMsg">{{ errors.first('last_name') }}</span>
                </p>
            </div>
            <div class="contact--info__formitem4">

                <p class="control has-icon has-icon-right">
                    <input name="phone" v-model="phone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Phone">
                    <i v-show="errors.has('phone')" class="fa fa-warning"></i>
                    <span v-show="errors.has('phone')" class="errorMsg">{{ errors.first('phone') }}</span>
                </p>
            </div>
            <div class="contact--info__formitem5">

                <p class="">
                    <textarea itemprop="comment" name="textarea" placeholder="Write your text here" rows="8" cols="80"></textarea>
                </p>
            </div>

            <div class="contact--info__formitem6">
                <p class="control">
                    <button class="button is-primary" type="submit">Submit</button>
                </p>
            </div>
        </form>
      </div>

      <div class="contact--info__picture1">
        <img src="/static/images/Product/AdeliaDressCut1.jpg" alt="">

      </div>
      <div class="contact--info__picture2">
        <img src="/static/images/Product/AdeliaDressCut2.jpg" alt="">

      </div>


    </section>
    <section class="contact--picture">
      <img src="" alt="">

    </section>

  </div>

</template>

<script type="text/javascript">
import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);


export default {

  name: 'contact-us',
  data: function() {
    return {
      companyName: "",
      companyPhone: "+45 12 34 56 78",
      companyPhone2: "+45 12 34 56 78",
      companyEmail: "suport@email.com",
      companyCVR: "1234567688",

      email: '',
      first_name: '',
      last_name: '',
      phone: ''
    }
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('From Submitted!');
          return;
        }

        alert('Correct them errors!');
      });
    }
  }
}

</script>

<style lang="scss" scoped>


</style>
