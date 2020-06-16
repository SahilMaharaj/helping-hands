<template>
  <div>
  <Layout>
    <h1>Hello, world!</h1>
    
    <InformationBanner />
  </Layout>
  </div>
</template>

<script>
import InformationBanner from '~/components/InformationBanner.vue'

export default {
  components: {
    InformationBanner
  },
  metaInfo: {
    title: 'Helping Hands',
    titleTemplate: '%s | Gridsome'
  }
}
</script>

<style scoped>


</style>
