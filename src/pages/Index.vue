<template>
  <div>
  <Layout>
    <div id="home-search-banner">
      <div class="search-banner-text">
        <div class="search-text-wrapper">
          <div class="search-text-positioning">
            <h1>Make a difference. Start volunteering close to home.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristiques</p>
            <SearchPosts class="search-input" />
          </div>
        </div>
      </div>
        <g-image class="search-banner" src="~/assets/images/parents-kid-bike-ride.jpg"></g-image>
        <div class="image-overlay"></div>
        <g-image class="white-dots" src="~/assets/images/white-dots.svg"></g-image>
    </div>
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

    <WhyStartVolunteering theme="light-checklist-block"/>
    
    <InformationBanner />
    <section id="how-it-works">
      <TextImageOverlay 
      imageUrl="group-on-stairs.jpg"
      textOne="Varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor."
      textTwo="Viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae."
      textThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
      >
      </TextImageOverlay>
    </section>
    <StoriesBanner />
    <StartVolunteering />
    <Faqs />

    
    <br>
  </Layout>
  </div>
</template>

<script>
import SearchPosts from '~/components/SearchPosts.vue'
import WhyStartVolunteering from '~/components/WhyStartVolunteering.vue'
import InformationBanner from '~/components/InformationBanner.vue'
import StoriesBanner from '~/components/StoriesBanner.vue'
import StartVolunteering from '~/components/StartVolunteering.vue'
import Faqs from '~/components/Faqs.vue'
import TextImageOverlay from '~/components/TextImageOverlay.vue'

export default {
  components: {
    SearchPosts,
    WhyStartVolunteering,
    InformationBanner,
    StoriesBanner,
    StartVolunteering,
    Faqs,
    TextImageOverlay
  },
  metaInfo: {
    title: 'Helping Hands',
    titleTemplate: '%s | Gridsome',
    link: [
      {
        rel: 'preload',
        as: 'image',
        href: '/assets/static/parents-kid-bike-ride.jpg'
      }
   ]
  },
  
}
</script>

<style scoped>
  #home-search-banner {
    position: relative;
    overflow: hidden;
    height: 80vh;
  }
  
  .search-banner {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    position: absolute;
  }

  .search-banner-text {
    position: absolute;
    z-index: 10;
    width: 100%;
    color: #fff;
    height: 100%;
  }

  .white-dots {
    position: absolute;
    width: 900px;
    height: 900px;
    opacity: 0.25;
    left: auto;
    top: auto;
    right: -20%;
    bottom: -58%;
  }

  .search-text-wrapper  {
    max-width: 940px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    align-items: center;
  }

  .search-text-positioning {
    max-width: 540px;
  }

  .search-text-positioning h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: Rubik, sans-serif;
    font-size: 55px;
    line-height: 62px;
    font-weight: 500;
  }

  .search-text-positioning p {
    margin-top: 30px;
    margin-bottom: 0px;
    font-size: 20px;
    line-height: 33px;
  }

  .search-input {
    margin-top: 50px;
    margin-bottom: 0;
  }
  
  .image-overlay {
        background-color: rgba(0, 0, 0, 0.25);
        position: absolute;
        width: 100%;
        height: 100%;
    }

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

  #how-it-works {
    padding: 90px 0;
  }
/*----- MEDIA QUERIES -----*/
  @media all and (max-width : 991px) {
    .search-text-positioning {
      padding-left: 40px;
      max-width: 560px;
    }

    .white-dots {
      width: auto;
      height: 530px;
      opacity: 0.2;
    }
  }


  @media all and (max-width : 767px) {
    .pop-cities {
      flex-direction: column;
      padding: 40px 30px;
    }

    .white-dots {
      right: -40%;
      bottom: -70%;
      opacity: 0.1;
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

    .search-text-positioning {
      max-width: 430px;
      margin: 0 auto;
      padding: 0 20px;
      text-align: center;
    }

    .search-text-positioning h1 {
      font-size: 40px;
      line-height: 45px;
    }

    .search-input {
      margin-top: 30px;
    }
  }

  @media all and (max-width : 479px) {
    .search-text-positioning h1 {
      font-size: 30px;
      line-height: 33px;
    }

    .search-text-positioning p {
      margin-top: 15px;
      font-size: 19px;
      line-height: 28px;
    }
  }
</style>
