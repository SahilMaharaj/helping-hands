<template>
    <Layout>
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

    export default {
        components: {
            StartVolunteering
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
                const showDate = d.getDate() + "/" + d.getMonth() + 1 + "/" + d.getFullYear();
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