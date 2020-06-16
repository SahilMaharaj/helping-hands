<template>
  <div>
    <Header />
    <div>
      <slot/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body {
  font-family: 'Karla', sans-serif;
  font-weight: 400;
  margin:0;
  padding:0;
  line-height: 1.5;
}

h1, h2, h3 {
  font-family: Rubik, sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
}
</style>
