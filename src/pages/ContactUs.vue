<template>
    <Layout>
        <div>
            <h1>Contact Us</h1>
        </div>
        <StartVolunteering />
    </Layout>
</template>

<script>
import StartVolunteering from '~/components/StartVolunteering.vue'

    export default {
        components: {
            StartVolunteering
        },
        metaInfo() {
            return {
                title: 'Contact Us',
                titleTemplate: '%s | Helping Hands',
                meta: [
                    {
                        name: 'description',
                        content: 'This is the Contact Us page.'
                    }
                ],
                link: [
                    {
                        rel: 'canonical',
                        href: 'https://gridsome-helpinghands.netlify.app/contact-us/'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>