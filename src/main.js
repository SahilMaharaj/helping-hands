import DefaultLayout from '~/layouts/Default.vue'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function (Vue, { router, head, isClient }) {
  NProgress.configure({showSpinner: false});
  router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})
  router.afterEach((to, from) => {
    NProgress.done()
})
  Vue.component('Layout', DefaultLayout)
  head.link.push ({
    rel: 'stylesheet preload',
    as: 'style',
    href: 'https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Rubik:wght@300;400;500&display=swap'
  })
}
