<template>
    <Layout>
        <ImagelessHero heading="Useful Answers.">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
        </ImagelessHero>
        
    </Layout>
</template>

<script>
import ImagelessHero from '~/components/hero-components/ImagelessHero.vue'

export default {
   components: {
       ImagelessHero
   },   
   metaInfo() {
        return {
            title: 'Frequently Asked Questions',
            titleTemplate: '%s | Helping Hands',
            meta: [
                {
                    name: 'description',
                    content: 'This is the FAQ page.'
                }
            ],
            link: [
                {
                    rel: 'canonical',
                    href: 'https://gridsome-helpinghands.netlify.app/frequently-asked/'
                }
            ]
        }
    }
}
</script>

<style scoped>
   #container {
       max-width: 720px;
       margin: 0 auto;
   }
</style>