<template>
    <Layout>
        <div>
            <CitiesHero />
            <h1>Cities Page</h1>            
            <ul>
                <li v-for="city in $page.cities.edges" :key="city.id">
                   <g-link :to="city.node.path">{{ city.node.title }}</g-link>
                </li>
            </ul>
            <StartVolunteering />
        </div>
    </Layout>
</template>

<page-query>
query Cities {
    cities : allCities {
        edges {
            node {
                title
                id
                path
            }
        }
    }
}
</page-query>

<script>
import StartVolunteering from '~/components/StartVolunteering.vue'
import CitiesHero from '~/components/hero-components/CitiesHero.vue'

    export default {
        components: {
            StartVolunteering,
            CitiesHero
        },
        metaInfo() {
            return {
                title: 'Cities',
                titleTemplate: '%s | Helping Hands',
                meta: [
                    {
                        name: 'description',
                        content: 'This is the Cities page.',
                    }
                ],
                link: [
                    {
                        rel: 'canonical',
                        href: 'https://gridsome-helpinghands.netlify.app/cities/'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>