<template>
    <Layout>
        <div>
            <h1>Cities</h1>
            
            <ul>
                <li v-for="city in $page.cities.edges" :key="city.id">
                    {{ city.node.title }}
                </li>
            </ul>

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
            }
        }
    }
}
</page-query>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>