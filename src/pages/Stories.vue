<template>
    <Layout class="page-layout">
        <SubPageHero heading="Stories from other Volunteers." image="colleagues.jpg" :hasimg="true">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.
        </SubPageHero>
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
import SubPageHero from '~/components/SubPageHero.vue'
import Modal from '~/components/Modal.vue'

export default {
    components: {
         StartVolunteering,
         SubPageHero,
         Modal
    },
    metaInfo() {
        return {
            title: 'Stories',
            titleTemplate: '%s | Helping Hands',
            meta: [
                {
                    name: 'description',
                    content: 'This is the Stories page.'
                }
            ],
            link: [
                {
                    rel: 'canonical',
                    href: 'https://gridsome-helpinghands.netlify.app/stories/'
                }
            ]
        }
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