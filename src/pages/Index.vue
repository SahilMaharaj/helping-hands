<template>
  <div>
  <Layout>
    <h1>Banner with search</h1>
    <div class="pop-cities">
      <div class="pop-cities-tagline">
        Most Popular Cities:        
      </div>
      <ul>
        <li><g-link to="/cities/oakland/">Oakland</g-link></li>
        <li><g-link to="/cities/riverside/">Riverside</g-link></li>
        <li><g-link to="/cities/san-bernardino/">San Bernadino</g-link></li>
        <li><g-link to="/cities/san-diego/">San Diego</g-link></li>
        <li><g-link to="/cities/san-francisco/">San Francisco</g-link></li>
      </ul> 
    </div>





    <InformationBanner />
  </Layout>
  </div>
</template>

<script>
import InformationBanner from '~/components/InformationBanner.vue'

export default {
  components: {
    InformationBanner
  },
  metaInfo: {
    title: 'Helping Hands',
    titleTemplate: '%s | Gridsome'
  }
}
</script>

<style scoped>
  .pop-cities {
    padding: 60px 0;
    background-color: #45164b;
    color: #fff;
    text-align: center;
  }

  .pop-cities {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pop-cities-tagline {
    margin-right: 10px;
    font-weight: 700;
  }

  .pop-cities ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }

  .pop-cities ul li {
    padding: 0 15px;
  }

  .pop-cities ul li a {
    text-decoration: none;
    color: hsla(0, 0%, 100%, 0.7);
    border-bottom: 1px solid transparent;
    font-size: 16px;
    -webkit-transition: border 200ms ease;
    transition: border 200ms ease;
  }

  .pop-cities ul li a:hover {
    color: #fff;
    border-bottom-color: #fff;
  }

  @media all and (max-width : 767px) {
    .pop-cities {
      flex-direction: column;
      padding: 40px 30px;
    }

     .pop-cities-tagline {
       margin-right: 0;
       margin-bottom: 10px;
     }
    
    .pop-cities ul {
      flex-direction: column;
    }

    .pop-cities ul li {
      padding-top: 10px;
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>
