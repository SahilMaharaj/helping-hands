<template>
    <Layout class="page-layout">
        <div id="main-container">
            <h1>Stories</h1>

            <button type="button" class="btn" @click="showModal">
                Open Modal!
            </button>

            <Modal v-show="isModalVisible" @close="closeModal"/>   
            
        </div>
        <StartVolunteering />
    </Layout>
</template>

<script>
import StartVolunteering from '~/components/StartVolunteering.vue'
import Modal from '~/components/Modal.vue'

export default {
    components: {
         StartVolunteering,
         Modal
    },
    data() {
        return {
            isModalVisible: false
        }
    },
    methods: {
        showModal() {
            this.isModalVisible = true
        },
        closeModal() {
            this.isModalVisible = false
        }
    }
}
</script>

<style scoped>
    
    
</style>