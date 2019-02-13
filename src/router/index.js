import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Author from '@/components/Author'
import Components from '@/components/Components'
import Contact from '@/components/Contact'
import Imprint from '@/components/Imprint'

Vue.use(Router)

export default new Router({
  // base: '/demos/mh-portfolio-vuejs-and-gsap-template/', // --> IF WEBAPP IN SUBFOLDER THEN path/to/subfolder
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/author',
      name: 'Author',
      component: Author
    },
    {
      path: '/components',
      name: 'Components',
      component: Components
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/imprint',
      name: 'Imprint',
      component: Imprint
    }
  ]
})
