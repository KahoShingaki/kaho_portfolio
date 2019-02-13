<template>
<div>



  <div class="components-common-holder fade-component">

    <div>
      <b-alert show>Default Alert</b-alert>

      <b-alert variant="success" show>Success Alert</b-alert>

      <b-alert variant="danger" dismissible :show="showDismissibleAlert" @dismissed="showDismissibleAlert=false">
        Dismissible Alert!
      </b-alert>

      <b-alert :show="dismissCountDown" dismissible variant="warning" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
        <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
        <b-progress variant="warning" :max="dismissSecs" :value="dismissCountDown" height="4px">
        </b-progress>
      </b-alert>

      <b-btn @click="showAlert" variant="info" class="m-1">
        Show alert with count-down timer
      </b-btn>
      <b-btn @click="showDismissibleAlert=true" variant="info" class="m-1">
        Show dismissible alert ({{showDismissibleAlert?'visible':'hidden'}})
      </b-btn>
    </div>

    <div>
      <h2>Example heading <b-badge>New</b-badge>
      </h2>
    </div>

    <!-- badges.vue -->

    <div>
      <b-breadcrumb :items="items" />
    </div>

    <div>
      <b-button variant="danger">I am a Button</b-button>
      <b-button variant="primary" href="#">I am a Link</b-button>
    </div>

    <!-- button-2.vue -->

    <!-- button-1.vue -->
    <div>
      <b-button-group>
        <b-button variant="success">Success</b-button>
        <b-button variant="info">Info</b-button>
        <b-button variant="warning">Warning</b-button>
        <b-button variant="primary">Primary</b-button>
        <b-button variant="danger">Danger</b-button>
        <b-button variant="link">Link</b-button>
      </b-button-group>
    </div>

    <!-- button-group-1.vue -->

    <div>
      <b-button-group>
        <b-dropdown right text="Menu">
          <b-dropdown-item href="/">Home</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="/author">Author</b-dropdown-item>
          <b-dropdown-item href="/components">Components</b-dropdown-item>
          <b-dropdown-item href="/contact">Contact</b-dropdown-item>
        </b-dropdown>
      </b-button-group>
    </div>

    <!-- button-group-4.vue -->

    <div>
      <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <b-button-group class="mx-1">
          <b-btn>&laquo;</b-btn>
          <b-btn>&lsaquo;</b-btn>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-btn>Edit</b-btn>
          <b-btn>Undo</b-btn>
          <b-btn>Redo</b-btn>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-btn>&rsaquo;</b-btn>
          <b-btn>&raquo;</b-btn>
        </b-button-group>
      </b-button-toolbar>
    </div>

    <!-- button-toolbar-1.vue -->

    <div>
      <b-card title="INU" img-src="https://www.wannya365.jp/img/articles/256_6f9b4256-6ad5-46c5-8a9b-13a7d692341b_1.jpg/800x602" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
        <p class="card-text">
          Shivainu is the most cutest dogs in the world.
        </p>
        <b-button href="/" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>

    <div>

        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="4000"
                    img-width="1024"
                    img-height="480"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
        >

          <!-- Text slides with image -->
          <b-carousel-slide caption="First slide"
                            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
          </b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                 src="https://picsum.photos/1024/480/?image=55" alt="image slot">
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
              ut lacus vel interdum.
            </p>
          </b-carousel-slide>

        </b-carousel>



      </div>
    <!-- card-1.vue -->

    <div>
      <b-btn v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-btn>
      <b-collapse id="collapse1" class="mt-2">
        <b-card>
          <p class="card-text">Collapse contents Here</p>
          <b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>
          <b-collapse id=collapse1_inner class="mt-2">
            <b-card>Hello!</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>

<!-- collapse-1.vue -->

    <div>
<!-- Using modifiers -->
      <b-btn v-b-toggle.collapse2 class="m-1">Toggle Collapse</b-btn>

      <!-- element to collapse -->
      <b-collapse id="collapse2">
        <b-card>
          I am collapsable content!
        </b-card>
      </b-collapse>
      <!-- collapse-2.vue -->
    </div>

    <div>
      <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
        <b-dropdown-item href="/">Home</b-dropdown-item>
        <b-dropdown-item href="/author">Author</b-dropdown-item>
        <b-dropdown-item href="/contact">Contact</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item href="/components">Components</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
    </div>
    <!-- dropdown.vue -->

    <div>
      <b-dropdown id="ddown-dropup" dropup text="Drop-Up" variant="info" class="m-2">
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item href="#">Something else here</b-dropdown-item>
      </b-dropdown>
    </div>

    <!-- dropdown-dropup.vue -->

    <!-- headline START
      <h1>Every. Project.<br>Matters.</h1>
      　　headline END

      content START
      <div class="content">
        <p>Topping tart marshmallow. Muffin icing bear claw ice cream marzipan caramels. Sweet apple pie cotton candy gummies. Brownie icing marzipan.</p>

        <p>Oat cake gingerbread tootsie roll ice cream dragée gummies biscuit pudding fruitcake. Lollipop jelly-o pudding lollipop lemon drops jelly-o lemon drops fruitcake jelly. Dessert sweet roll croissant oat cake muffin carrot cake lemon drops muffin dessert. Sweet dessert ice cream croissant pudding.</p>
      </div>
  　　content END -->

  </div>

  <h2 class="divider-line fade-component"><span>MORE</span></h2>

  <div class="components-holder fade-component">

    <div class="work" data-image="#D22C22" @mouseenter="over($event)" @mouseleave="leave($event)" :key="0">
      <img class="logo" src="/static/coidea-logo-work.png" alt="MH - Web Designer & Developer - components - COIDEA" />
      <div class="logo-bg-holder">
        <div class="logo-bg work-oval-big rotating-fast" style="background-color: #FFF !important"></div>
        <div class="logo-bg work-oval-small rotating-slow" style="background-color: #FFF !important"></div>
        <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
      </div>
      <div class="content">
        <p><strong>FAVORITE #01</strong><br>Client</p>
        <p><strong>DEVELOPMENT</strong><br>SCSS - VUE.JS - WORDPRESS</p>
        <p><strong>ENDPOINT</strong><br>WEB & iOS - ANDROID</p>
        <p><strong>LIVE WEB</strong><br><a href="https://coidea.website" target="_blank">VISIT</a></p>
        <p class="copyright"><span>@ lorem media</span></p>
      </div>
    </div>

    <div class="work" data-image="#777777" @mouseenter="over($event)" @mouseleave="leave($event)" :key="1">
      <img class="logo" src="/static/coidea-logo-work.png" alt="MH - Web Designer & Developer - components - COIDEA" />
      <div class="logo-bg-holder">
        <div class="logo-bg work-oval-big rotating-fast" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-oval-small rotating-slow" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-circle" style="background-color: #FFFFFF !important"></div>
      </div>
      <div class="content">
        <p><strong>FAVORITE #02</strong><br>Client</p>
        <p><strong>DEVELOPMENT</strong><br>SCSS - GSAP - PIMCORE</p>
        <p><strong>ENDPOINT</strong><br>WEB</p>
        <p class="copyright"><span>@ lorem media</span></p>
      </div>
    </div>

    <div class="work" data-image="#178ED3" @mouseenter="over($event)" @mouseleave="leave($event)" :key="2">
      <img class="logo" src="/static/coidea-logo-work.png" alt="MH - Web Designer & Developer - components - COIDEA" />
      <div class="logo-bg-holder">
        <div class="logo-bg work-oval-big rotating-fast" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-oval-small rotating-slow" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-circle" style="background-color: #FFFFFF !important"></div>
      </div>
      <div class="content">
        <p><strong>FAVORITE #03</strong><br>Client</p>
        <p><strong>DEVELOPMENT</strong><br>SCSS - GSAP - WORDPRESS</p>
        <p><strong>ENDPOINT</strong><br>WEB</p>
        <p><strong>LIVE</strong><br><a href="https://coidea.website" target="_blank">VISIT</a></p>
        <p class="copyright"><span>@ lorem media</span></p>
      </div>
    </div>

    <div class="work" data-image="#ED7102" @mouseenter="over($event)" @mouseleave="leave($event)" :key="3">
      <img class="logo" src="/static/coidea-logo-work.png" alt="MH - Web Designer & Developer - components - COIDEA" />
      <div class="logo-bg-holder">
        <div class="logo-bg work-oval-big rotating-fast" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-oval-small rotating-slow" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-circle" style="background-color: #FFFFFF !important"></div>
      </div>
      <div class="content">
        <p><strong>FAVORITE #04</strong><br>Client</p>
        <p><strong>DEVELOPMENT</strong><br>SCSS - GSAP - WOOCOMMERCE</p>
        <p><strong>ENDPOINT</strong><br>WEB</p>
        <p><strong>LIVE</strong><br><a href="https://coidea.website" target="_blank">COMING SOON</a></p>
        <p class="copyright"><span>@ lorem media</span></p>
      </div>
    </div>

    <div class="work" data-image="#7ac3db" @mouseenter="over($event)" @mouseleave="leave($event)" :key="4">
      <img class="logo" src="/static/coidea-logo-work.png" alt="MH - Web Designer & Developer - components - COIDEA" />
      <div class="logo-bg-holder">
        <div class="logo-bg work-oval-big rotating-fast" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-oval-small rotating-slow" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-circle" style="background-color: #FFFFFF !important"></div>
      </div>
      <div class="content">
        <p><strong>FAVORITE #05</strong><br>Client</p>
        <p><strong>DEVELOPMENT</strong><br>SCSS - VUE.JS - WORDPRESS</p>
        <p><strong>ENDPOINT</strong><br>WEB & iOS - ANDROID</p>
        <p><strong>LIVE WEB</strong><br><a href="https://coidea.website" target="_blank">COMING SOON</a></p>
        <p class="copyright"><span>@ lorem media</span></p>
      </div>
    </div>

    <div class="work" data-image="#62bbc1" @mouseenter="over($event)" @mouseleave="leave($event)" :key="5">
      <img class="logo" src="/static/coidea-logo-work.png" alt="MH - Web Designer & Developer - components - COIDEA" />
      <div class="logo-bg-holder">
        <div class="logo-bg work-oval-big rotating-fast" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-oval-small rotating-slow" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-circle" style="background-color: #FFFFFF !important"></div>
      </div>
      <div class="content">
        <p><strong>FAVORITE #06</strong><br>Client</p>
        <p><strong>DEVELOPMENT</strong><br>SCSS - VUE.JS - THREE.JS</p>
        <p><strong>ENDPOINT</strong><br>WEB & iOS - ANDROID</p>
        <p><strong>LIVE</strong><br><a href="https://coidea.website" target="_blank">COMING SOON</a></p>
        <p class="copyright"><span>@ lorem media</span></p>
      </div>
    </div>

    <div class="work" data-image="#9c9d9e" @mouseenter="over($event)" @mouseleave="leave($event)" :key="6">
      <img class="logo" src="/static/coidea-logo-work.png" alt="MH - Web Designer & Developer - components - COIDEA" />
      <div class="logo-bg-holder">
        <div class="logo-bg work-oval-big rotating-fast" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-oval-small rotating-slow" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-circle" style="background-color: #FFFFFF !important"></div>
      </div>
      <div class="content">
        <p><strong>FAVORITE #07</strong><br>Client</p>
        <p><strong>DEVELOPMENT</strong><br>SCSS - ANGULAR - IONIC</p>
        <p><strong>ENDPOINT</strong><br>iOS</p>
        <p class="copyright"><span>@ lorem media</span></p>
      </div>
    </div>

    <div class="work" data-image="#027d2d" @mouseenter="over($event)" @mouseleave="leave($event)" :key="7">
      <img class="logo" src="/static/coidea-logo-work.png" alt="MH - Web Designer & Developer - components - COIDEA" />
      <div class="logo-bg-holder">
        <div class="logo-bg work-oval-big rotating-fast" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-oval-small rotating-slow" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-circle" style="background-color: #FFFFFF !important"></div>
      </div>
      <div class="content">
        <p><strong>FAVORITE #08</strong><br>Client</p>
        <p><strong>DEVELOPMENT</strong><br>CSS3 - JQUERY - WORDPRESS</p>
        <p><strong>ENDPOINT</strong><br>WEB</p>
        <p><strong>LIVE</strong><br><a href="https://coidea.website" target="_blank">VISIT</a></p>
        <p class="copyright"><span>@ lorem media</span></p>
      </div>
    </div>

    <div class="work" data-image="#f2c849" @mouseenter="over($event)" @mouseleave="leave($event)" :key="8">
      <img class="logo" src="/static/coidea-logo-work.png" alt="MH - Web Designer & Developer - components - COIDEA" />
      <div class="logo-bg-holder">
        <div class="logo-bg work-oval-big rotating-fast" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-oval-small rotating-slow" style="background-color: #FFFFFF !important"></div>
        <div class="logo-bg work-circle" style="background-color: #FFFFFF !important"></div>
      </div>
      <div class="content">
        <p><strong>FAVORITE #09</strong><br>Client</p>
        <p><strong>DEVELOPMENT</strong><br>CSS3 - JQUERY - WORDPRESS</p>
        <p><strong>ENDPOINT</strong><br>WEB</p>
        <p><strong>LIVE</strong><br><a href="https://coidea.website" target="_blank">VISIT</a> & <a href="https://coidea.website" target="_blank">VISIT</a></p>
        <p class="copyright"><span>@ lorem media</span></p>
      </div>
    </div>

  </div>

</div>
</template>

<script>
// gsap
import {
  TweenMax
} from "gsap"
// scrollmagic
import ScrollMagic from "scrollmagic"
// jquery
import $ from "jquery";

export default {
  name: 'components',
  data() {
    return {
      controller: new ScrollMagic.Controller(),
      timeline: new TimelineMax({
        paused: true
      }),
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,

      items: [{
        text: 'Home',
        href: '/'
      }, {
        text: 'Components',
        active: true
      }]
    }
  },
  mounted() {

  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    animateWork: function(thisEvent, action) {
      console.log(thisEvent);
      // common
      // init variables
      this.timeline.set(thisEvent.querySelector('.work-circle'), {
        autoAlpha: 0,
        scale: 0,
        z: 0.01
      });
      this.timeline.set(thisEvent.querySelector('.work-oval-small'), {
        autoAlpha: 0,
        scale: 0,
        z: 0.01
      });
      this.timeline.set(thisEvent.querySelector('.work-oval-big'), {
        autoAlpha: 0,
        scale: 0,
        z: 0.01
      });
      // animate
      this.timeline.fromTo(thisEvent.querySelector('.work-circle'), 1.25, {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: "50% 50%"
      }, {
        force3D: true,
        autoAlpha: 1,
        scale: 1,
        transformOrigin: "50% 50%",
        ease: Back.easeOut.config(1.25)
      })
      this.timeline.fromTo(thisEvent.querySelector('.work-oval-small'), 1.25, {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: "50% 50%"
      }, {
        force3D: true,
        autoAlpha: .25,
        scale: 1,
        transformOrigin: "50% 50%",
        ease: Back.easeOut.config(1.25)
      }, '-=0.75')
      this.timeline.fromTo(thisEvent.querySelector('.work-oval-big'), 1.25, {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: "50% 50%"
      }, {
        force3D: true,
        autoAlpha: .45,
        scale: 1,
        transformOrigin: "50% 50%",
        ease: Back.easeOut.config(1.25)
      }, '-=0.75')
      this.timeline.to(thisEvent.querySelector('.work-oval-big'), 0, {
        className: "+=rotating-fast",
        ease: Expo.easeOut
      }, '+=0.35')
      this.timeline.to(thisEvent.querySelector('.work-oval-small'), 0, {
        className: "+=rotating-slow",
        ease: Expo.easeOut
      }, '+=0.35')

      if (action === 'play') {
        this.timeline.play();
      }

      if (action === 'reverse') {
        this.timeline.reverse();
      }

    },
    over: function(event) {
      let dataImage = event.target.dataset.image;
      $('body').attr('style', 'background-color: ' + dataImage)
      // this.animateWork(event.target, 'play');

    },
    leave: function(event) {
      $('body').attr('style', 'background-color: #FFFFFF')
      // this.animateWork(event.target, 'reverse');

    }
  }
}
</script>


<style lang="scss" scoped>
// mixins - media query
@mixin maxquery($width, $ratio: false) {
    @if $ratio {
        @media only screen and (max-width: $width) and (min--moz-device-pixel-ratio: $ratio), only screen and (max-width: $width) and (-webkit-min-device-pixel-ratio: $ratio), only screen and (max-width: $width) and (min-device-pixel-ratio: $ratio) {
            @content;
        }
    } @else {
        @media only screen and (max-width: $width) {
            @content;
        }
    }
}
// infos
.components-common-holder {
    .content {
        position: relative;
        display: block;
        overflow: hidden;
        width: 100%;
        width: calc(100vw - 120px);
        max-width: 760px;
        padding-bottom: 20px;
        padding-left: 60px;
        @include maxquery(640px) {
            width: calc(100% - 32px);
            padding-left: 0;
            padding-right: 0;
        }
    }
}
// components
.components-holder {
    position: relative;
    display: table;
    overflow: hidden;
    .work {
        position: relative;
        display: table;
        overflow: visible;
        width: 31.3333%;
        width: calc(33.3333% - 32px);
        height: auto;
        min-height: 400px;
        padding: 16px;
        float: left;
        @include maxquery(992px) {
            width: 48.3333%;
            width: calc(50% - 32px);
        }
        @include maxquery(768px) {
            width: 98%;
            width: calc(100% - 32px);
        }
        .content {
            position: absolute;
            display: block;
            width: 100%;
            height: auto;
            font-size: 14px;
            padding: 0;
            margin: 0;
            line-height: 18px;
            top: 50%;
            left: -16px;
            transform: translate(0%,-50%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.45s cubic-bezier(1.0, 0.5, 0.8, 1.0);
            p {
                font-size: 16px;
                line-height: 20px;
                padding: 0;
                margin: 0;
                padding-bottom: 16px;
                span {
                    font-size: 10px;
                }
                &.copyright {
                    line-height: 14px;
                }
            }
            a {
                color: #363636;
                text-decoration: none;
            }
        }
        img {
            &.logo {
                max-height: 60%;
                max-width: 60%;
                width: auto;
                height: auto;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                z-index: -1;
                transition: all 0.45s cubic-bezier(1.0, 0.5, 0.8, 1.0);
                opacity: 1;
                visibility: visible;
            }
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
                top: 50%;
                left: 50%;
                box-shadow: 0 0 36px rgba(0,0,0,0.15), 0 0 36px rgba(0,0,0,0.05);
                transition: all 0.45s cubic-bezier(1.0, 0.5, 0.8, 1.0);
                &.work-oval-big {
                    width: 400px;
                    height: 360px;
                    background: #a5d6a7;
                    transform: translate(-50%, -50%);
                    z-index: -3;
                    opacity: 0;
                    visibility: hidden;
                }
                &.work-oval-small {
                    width: 300px;
                    height: 340px;
                    background: #a5d6a7;
                    transform: translate(-50%, -50%);
                    z-index: -2;
                    opacity: 0;
                    visibility: hidden;
                }
                &.work-circle {
                    width: 260px;
                    height: 260px;
                    background: #a5d6a7;
                    transform: translate(-50%, -50%);
                    z-index: -1;
                    opacity: 0;
                    visibility: hidden;
                }
            }
        }
        &:hover {
            .content {
                left: 0;
                opacity: 1;
                visibility: visible;
            }
            img {
                &.logo {
                    opacity: 0;
                    visibility: hidden;
                }
            }
            .logo-bg-holder {
                .logo-bg {
                    &.work-oval-big {
                        transform: scale(1) translate(-50%, -50%);
                        opacity: 0.25;
                        visibility: visible;
                    }
                    &.work-oval-small {
                        transform: scale(1) translate(-50%, -50%);
                        opacity: 0.45;
                        visibility: visible;
                    }
                    &.work-circle {
                        transform: scale(1) translate(-50%, -50%);
                        opacity: 1;
                        visibility: visible;
                    }
                }
            }
        }
    }
}
/* Safari and Chrome */
@-webkit-keyframes rotating {
    from {
        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        -o-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        -webkit-transform: translate(-50%, -50%) rotate(360deg);
        -o-transform: translate(-50%, -50%) rotate(360deg);
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
@keyframes rotating {
    from {
        -ms-transform: translate(-50%, -50%) rotate(0deg);
        -moz-transform: translate(-50%, -50%) rotate(0deg);
        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        -o-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        -ms-transform: translate(-50%, -50%) rotate(360deg);
        -moz-transform: translate(-50%, -50%) rotate(360deg);
        -webkit-transform: translate(-50%, -50%) rotate(360deg);
        -o-transform: translate(-50%, -50%) rotate(360deg);
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
.rotating-fast {
    -webkit-animation: rotating 12s linear infinite;
    -moz-animation: rotating 12s linear infinite;
    -ms-animation: rotating 12s linear infinite;
    -o-animation: rotating 12s linear infinite;
    animation: rotating 12s linear infinite;
}
/* Safari and Chrome */
@-webkit-keyframes rotating-inverse {
    from {
        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        -o-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        -webkit-transform: translate(-50%, -50%) rotate(-360deg);
        -o-transform: translate(-50%, -50%) rotate(-360deg);
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}
@keyframes rotating-inverse {
    from {
        -ms-transform: translate(-50%, -50%) rotate(0deg);
        -moz-transform: translate(-50%, -50%) rotate(0deg);
        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        -o-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        -ms-transform: translate(-50%, -50%) rotate(-360deg);
        -moz-transform: translate(-50%, -50%) rotate(-360deg);
        -webkit-transform: translate(-50%, -50%) rotate(-360deg);
        -o-transform: translate(-50%, -50%) rotate(-360deg);
        transform: translate(-50%, -50%) rotate(-360deg);
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
