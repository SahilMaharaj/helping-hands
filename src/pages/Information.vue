<template>
    <Layout>
        <InformationHero />

        <div>
            
            <h1>Information</h1>

            <button id="button" @click="toggler">What is the date?</button>

            <div v-if="isToggled">The date is <strong>{{ getDate }}</strong>.</div>

        </div>
        <StartVolunteering />
    </Layout>
</template>

<script>
import StartVolunteering from '~/components/StartVolunteering.vue'
import InformationHero from '~/components/hero-components/InformationHero.vue'

    export default {
        components: {
            StartVolunteering,
            InformationHero
        },
        metaInfo() {
            return {
                title: 'Information',
                titleTemplate: '%s | Helping Hands',
                meta: [
                    {
                        name: 'description',
                        content: 'This is the Information page.'
                    }
                ],
                link: [
                    {
                        rel: 'canonical',
                        href: 'https://gridsome-helpinghands.netlify.app/information/'
                    }
                ]
            }
        },
        data() {
            return {
                isToggled: false
            }            
        },
        methods: {
            toggler() {
                this.isToggled = !this.isToggled
            }
        },
        computed: {
            getDate() {
                const d = new Date();
                const month = d.getMonth() + 1
                const showDate = d.getDate() + "/" + month + "/" + d.getFullYear();
                return showDate;
            }            
        },
       
                
    }
</script>

<style scoped>
#button {
    margin-bottom: 20px;
    cursor: pointer; 
}

</style>