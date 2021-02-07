<template>
  <Layout>
    <h1>About us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>

    <input type="number" v-model="age" placeholder="Please enter your age" />
    <button id="agebutton" @click="verify">Enter your age</button>
    <div v-if="isVerified">{{ validAge }}</div>
    

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
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
