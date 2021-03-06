<template>
    <Layout>
        <SubPageHero heading="Useful Answers." :hasoverlay="false">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
        </SubPageHero>
        
    </Layout>
</template>

<script>
import SubPageHero from '~/components/SubPageHero.vue'

export default {
    components: {
        SubPageHero
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