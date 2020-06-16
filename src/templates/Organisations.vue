<template>
    <Layout>
        <div>
            <h1>{{ $page.organisations.title }}</h1>
            <VueRemarkContent />
        </div>
    </Layout>
</template>

<page-query>
query Organisations ($path: String!) {
  organisations: organisations (path: $path) {
    title
    desc
    path
  }
}
</page-query>

<style>

</style>