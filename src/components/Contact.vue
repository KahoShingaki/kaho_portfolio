<template>
  <div>

    <div class="contact-holder fade-component">

      <!-- headline START -->
      <h1>Every. Question.</h1>
      <!-- headline END -->

      <!-- content START -->
      <div class="contact-form">
      <h3 class="section-title">お問い合わせ</h3>

        <form :class="[ 'mx-auto' , { 'was-validated' : !isFormValid } ]"  id="mainForm">
        <p>メールアドレス（必須）</p>
        <input type="email" v-model.trim="mail" class="form-control" id="mailInput" name="mail">
        <p>{{mail}}</p>

        <p>お問い合わせ内容（必須）</p>
        <textarea v-model="message"></textarea>
        <pre>{{message}}</pre>

        <p>※必須項目は必ずご入力ください</p>

        <input id="submit" type="button" name="submit" value="作成" v-on:click="submit" class="btn btn-primary btn-block" :disabled=isNoInput>
        </form>


      </div>


      <!-- content END -->

      <h2 class="divider-line fade-component"><span>email</span></h2>

       <!-- social START -->
      <div class="social">
        <ul>
          <li>
            <a href="mailto:kahoshingaki@gmail.com.website" target="_blank">
              <div class="logo-bg-holder">
                <div class="logo-bg social-circle"></div>
              </div>
              <span>kahoshingaki@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- social END -->

    </div>

  </div>
</template>

<script>

  // gsap
  import { TweenMax } from "gsap"
  // scrollmagic
  import ScrollMagic from "scrollmagic"
  // jquery
  import $ from "jquery";

  export default {
    name: 'Contact',
    data () {
      return {

      }
    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<script>
export default {
  data () {
    return {
      isFormValid: true
    }
  },
  methods: {
    submit: function () {
      const formho = document.getElementById('mainForm')

      if (!formho.checkValidity()) {
        this.isFormValid = false
      } else {
        this.isFormValid = true
      }

      const mailgun = require('mailgun.js')
      const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_APIKEY})
      mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: "Excited User <kahoshingaki@gmail.com>",
        to: [this.mail],
        subject: '送信を受け付けました。',
        text: this.message,
        html: "<h1>Testing some Mailgun awesomness!</h1>"
      })
      .then(msg => console.log(msg)) // logs response data
      .catch(err => console.log(err)); // logs any error

      alert(this.mail + this.message)
    }
  }
}


</script>
<style lang="scss" scoped>
  // mixins - media query
  @mixin maxquery($width, $ratio: false) {
    @if $ratio {
        @media
            only screen and (max-width: $width) and  (min--moz-device-pixel-ratio: $ratio),
            only screen and (max-width: $width) and  (-webkit-min-device-pixel-ratio: $ratio),
            only screen and (max-width: $width) and  (min-device-pixel-ratio: $ratio) {
            @content;
        }
    } @else {
        @media only screen and (max-width: $width) {
            @content;
        }
    }
  }
  .contact-holder {
    // social
    .social {
      ul {
        position: relative;
        overflow: hidden;
        list-style-type: none;
        text-align: center;
        float: none;
        padding: 0;
        width: 100%;
        li {
          position: relative;
          display: inline-block;
          float: none;
          width: 114px;
          height: 114px;
          text-align: center;
          margin: 16px 1.5rem;
          @include maxquery( 640px ) {
            width: 100%;
            margin: 16px 0;
          }
          a {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            opacity: 1;
            transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
            img {
              position: absolute;
              display: block;
              top: 50%;
              transform: translateY(-50%);
            }
            &:hover {
              opacity: 1;
            }
            span {
              position: absolute;
              display: block;
              width: auto;
              height: auto;
              top: 50%; left: 50%;
              transform: translate( -50%, -50% );
              font-size: 36px;
              line-height: 114px;
              text-align: center;
              font-family: 'Cardo', serif;
            }
            .logo-bg-holder {
              position: absolute;
              display: block;
              width: 100%;
              height: 100%;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: -1;
              .logo-bg {
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                -moz-border-radius: 50%;
                -webkit-border-radius: 50%;
                border-radius: 50%;
                top: 50%; left: 50%;
                box-shadow: 0 0 36px rgba(0,0,0,0.15), 0 0 36px rgba(0,0,0,0.005);
                transition: all 0.45s cubic-bezier(1.0, 0.5, 0.8, 1.0);
                &.social-oval-big {
                  width: 54px;
                  height: 62px;
                  background: #a5d6a7;
                  transform: translate( -50%, -50% );
                  z-index: -3;
                  opacity: .25;
                }
                &.social-oval-small {
                  width: 72px;
                  height: 64px;
                  background: #a5d6a7;
                  transform: translate( -50%, -50% );
                  z-index: -2;
                  opacity: .45;
                }
                &.social-circle {
                  width: 94px;
                  height: 94px;
                  background: #a5d6a7;
                  transform: translate( -50%, -50% );
                  z-index: -1;
                }
              }
            }
          }
          &:nth-child(1) {
            width: 72px;
          }
          &:nth-child(3) {
            width: 92px;
          }
        }
      }
    }
    .content {
      position: relative;
      display: block;
      overflow: hidden;
      width: 100%;
      width: calc( 100vw - 120px );
      max-width: 760px;
      padding-bottom: 20px;
      padding-left: 60px;
      @include maxquery( 640px ) {
        width: calc( 100% - 32px );
        padding-left: 0px;
        padding-right: 0px;
      }
    }
  }
  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: translate( -50%, -50% ) rotate(0deg);
      -o-transform: translate( -50%, -50% ) rotate(0deg);
      transform: translate( -50%, -50% ) rotate(0deg);
    }
    to {
      -webkit-transform: translate( -50%, -50% ) rotate(360deg);
      -o-transform: translate( -50%, -50% ) rotate(360deg);
      transform: translate( -50%, -50% ) rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: translate( -50%, -50% ) rotate(0deg);
      -moz-transform: translate( -50%, -50% ) rotate(0deg);
      -webkit-transform: translate( -50%, -50% ) rotate(0deg);
      -o-transform: translate( -50%, -50% ) rotate(0deg);
      transform: translate( -50%, -50% ) rotate(0deg);
    }
    to {
      -ms-transform: translate( -50%, -50% ) rotate(360deg);
      -moz-transform: translate( -50%, -50% ) rotate(360deg);
      -webkit-transform: translate( -50%, -50% ) rotate(360deg);
      -o-transform: translate( -50%, -50% ) rotate(360deg);
      transform: translate( -50%, -50% ) rotate(360deg);
    }
  }
  .rotating-fast {
    -webkit-animation: rotating 12s linear infinite;
    -moz-animation: rotating 12s linear infinite;
    -ms-animation: rotating 12s linear infinite;
    -o-animation: rotating 12s linear infinite;
    animation: rotating 12s linear infinite;
  }
  @-webkit-keyframes rotating-inverse /* Safari and Chrome */ {
    from {
      -webkit-transform: translate( -50%, -50% ) rotate(0deg);
      -o-transform: translate( -50%, -50% ) rotate(0deg);
      transform: translate( -50%, -50% ) rotate(0deg);
    }
    to {
      -webkit-transform: translate( -50%, -50% ) rotate(-360deg);
      -o-transform: translate( -50%, -50% ) rotate(-360deg);
      transform: translate( -50%, -50% ) rotate(-360deg);
    }
  }
  @keyframes rotating-inverse {
    from {
      -ms-transform: translate( -50%, -50% ) rotate(0deg);
      -moz-transform: translate( -50%, -50% ) rotate(0deg);
      -webkit-transform: translate( -50%, -50% ) rotate(0deg);
      -o-transform: translate( -50%, -50% ) rotate(0deg);
      transform: translate( -50%, -50% ) rotate(0deg);
    }
    to {
      -ms-transform: translate( -50%, -50% ) rotate(-360deg);
      -moz-transform: translate( -50%, -50% ) rotate(-360deg);
      -webkit-transform: translate( -50%, -50% ) rotate(-360deg);
      -o-transform: translate( -50%, -50% ) rotate(-360deg);
      transform: translate( -50%, -50% ) rotate(-360deg);
    }
  }
  .rotating-slow {
    -webkit-animation: rotating-inverse 16s linear infinite;
    -moz-animation: rotating-inverse 16s linear infinite;
    -ms-animation: rotating-inverse 16s linear infinite;
    -o-animation: rotating-inverse 16s linear infinite;
    animation: rotating-inverse 16s linear infinite;
  }
</style>
