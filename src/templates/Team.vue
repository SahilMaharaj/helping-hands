<template>
    <Layout>
        <div>
            <h1>{{ $page.teams.title }}</h1>
            <p>{{$page.teams.role}}</p>
        </div>
    </Layout>
</template>

<page-query>
query TeamMembers ($path: String!) {
  teams: team (path: $path) {
    title
    role
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