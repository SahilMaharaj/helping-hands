<template>
  <Layout>
    <ImagelessHero heading="We are together.">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
    </ImagelessHero>

    <h1>About us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>

    <input type="number" v-model="age" placeholder="Please enter your age" />
    <button id="agebutton" @click="verify">Enter your age</button>
    <div v-if="isVerified">{{ validAge }}</div>
    

  </Layout>
</template>

<script>
import ImagelessHero from '~/components/hero-components/ImagelessHero.vue'

export default {
  components: {
    ImagelessHero
  },
  metaInfo: {
    title: 'About us',
    titleTemplate: '%s | Helping Hands',
    meta: [
      {
        name: 'description',
        content: 'This is the About Us page.'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://gridsome-helpinghands.netlify.app/about-us/'
      }
    ]
  },
  data() {
    return {
      age: "",
      isVerified: false,
    }
  },
  methods: {
    verify() {
      if (this.age.length === 0) {
        this.isVerified = false;
      } else if (this.age.length > 0) {
        this.isVerified = true;
      }
    }
  },
  computed: {
    validAge() {
      if (this.age.length === 0) {
        return this.isVerified = false;
      } else if (this.age < 18) {
        return "Too young to vote.";
      } else {
        return "Old enough to vote.";
      }
    }
  }
}
</script>

<style scoped>
  #agebutton {
    cursor: pointer;
    margin-left: 10px;
  }
</style>
