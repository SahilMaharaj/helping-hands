<template>
  <div>
    <Header />
    <div class="layout">
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
  margin:0;
  padding:0;
  line-height: 1.5;
}

*, *::before, *::after {
  box-sizing: border-box;
}

.layout {
  max-width: 940px;
  margin: 0 auto;
  width: 100%;
}
</style>
