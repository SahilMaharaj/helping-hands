<template>
    <Layout>
        <div>
            <SubPageHero />





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
import SubPageHero from '~/components/SubPageHero.vue'

    export default {
        components: {
            StartVolunteering,
            SubPageHero
        }
    }
</script>

<style scoped>

</style>