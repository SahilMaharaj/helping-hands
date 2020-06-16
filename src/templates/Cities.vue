<template>
    <Layout>
        <div>
            <h1>{{ $page.cities.title }}</h1>
            <p>{{ $page.cities.desc }}</p>
            <VueRemarkContent />
        </div>
    </Layout>
</template>

<page-query>
query Cities ($path: String!) {
  cities: cities (path: $path) {
    title
    desc
    path
  }
}
</page-query>


<script>
    export default {
        
    }
</script>

<style>
 
</style>