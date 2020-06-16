import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  head.link.push ({
    rel: 'stylesheet preload',
    as: 'style',
    href: 'https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Rubik:wght@300;400;500&display=swap'
  })
}
