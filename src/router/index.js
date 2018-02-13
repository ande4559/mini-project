import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/FrontPage'
import ContactUs from '@/components/ContactUs'
import Category from '@/components/Category'
import ProductDetail from '@/components/ProductDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage
    },
    {
      path: '/contact',
      name: 'Contact-us',
      component: ContactUs
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
