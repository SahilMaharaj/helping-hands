<template>
  <div>
  <Layout>
    <div id="home-search-banner">
      <div class="search-banner-text">
        <div class="search-text-wrapper">
          <div class="search-text-positioning">
            <h1>Make a difference. Start volunteering close to home.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristiques.</p>
            <SearchPosts class="search-input" />
          </div>
        </div>
      </div>
        <g-image class="search-banner" :src="image"></g-image>
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
      <div class="how-it-works-cont">
        <div class="title-wrapper">
          <div class="small-uppercase">Need More Information?</div>
          <h2 class="heading">How it Works.</h2>
        </div>
        <g-image class="bg-shape" src="~/assets/images/curvy-bkg-shape.svg"></g-image>
        <g-image class="bg-shape-dots" src="~/assets/images/dark-dots.svg"></g-image>
      </div>
      <TextImageOverlay 
      imageUrl="group-on-stairs.jpg"
      textOne="Varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor."
      textTwo="Viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae."
      textThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.">
      </TextImageOverlay>
    </section>
    <section id="single-story">
      <div class="story-wrapper">
        <div class="story-image">
          <g-link class="story-link" to="/stories/">
            <g-image src="~/assets/images/ferdinand-dupiere.jpg"></g-image>
            <div class="overlay-block">
              <div class="quote-and-team">
                <div class="quote-overlay">"It is a very rewarding experience."</div>
                  <div class="team-title-wrapper">
                  <div class="team-line"></div>
                  <div class="team-title">Ferdinand Dupiere, Oakland</div>
                </div>
              </div>
              
            </div>
          </g-link>          
        </div>
        <div class="story-caption">
          <div class="story-title-wrapper">
            <div class="small-uppercase">Make A Difference</div>
            <div class="heading">Why Start Volunteering?</div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae.</p>
        </div>
        <g-image class="bg-shape-dots" src="~/assets/images/dark-dots.svg"></g-image>
      </div>
      
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
import HeroImage from '~/assets/images/parents-kid-bike-ride.jpg'

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
  data() {
    return {
      image: HeroImage
    } 
  },
  metaInfo() {
    return {
      title: 'Helping Hands',
      titleTemplate: '%s | Gridsome',
      meta: [
        {
          name: 'description',
          content: 'This is my helping hands description'
        }
      ],
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: this.image
        }
      ]
    }
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
    overflow: hidden;
  }

  .how-it-works-cont {
    max-width: 940px;
    position: relative;
    margin: 0 auto;
  }

  .title-wrapper {
    margin-bottom: 50px;
  }

  .small-uppercase {
    font-family: Karla, sans-serif;
    color: #a899aa;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .heading {
    margin-top: 13px;
    margin-bottom: 0px;
    font-family: Rubik, sans-serif;
    color: #45164b;
    font-size: 50px;
    line-height: 54px;
    font-weight: 400;
  }

  .bg-shape {
    position: absolute;
    left: auto;
    right: -2%;
    top: 15%;
    bottom: auto; 
    height: 900px;
    opacity: 0.07;
    width: 100%;
    z-index: -1;
    }

  .bg-shape-dots {
    position: absolute;
    width: auto;
    height: 400px;
    left: auto;
    top: -10%;
    right: -15%;
    bottom: auto;
    z-index: -1;
    opacity: 0.04;
    }

    #single-story {
      position: relative;
      padding: 90px 0 90px 0;
      background-color: transparent;
      margin-top: -90px;
      z-index: -1;
      overflow: hidden;
    }

    .story-wrapper {
      display: flex;
      max-width: 940px;
      margin: 0 auto;
      position: relative;
      align-items: center;
    }

    .story-image {
      padding: 0 10px;
      position: relative;
    }

    .story-caption {
      padding: 0 10px 0 50px;
    }

    .story-image, .story-caption {
      width: 50%;
    }

    .story-image img {
      object-fit: cover;
      width: 100%;
      height: 460px;
      display: block;
    }

     .story-link {
      position: relative;
      display: block;
      text-decoration: none;
     
    }

    .story-title-wrapper {
      margin-bottom: 30px;
    }

    .overlay-block {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      box-shadow: 21px 21px 80px -20px rgba(0, 0, 0, 0.3);
      -webkit-transition: background-color 200ms ease;
      transition: background-color 200ms ease;
      color: #fff;
      top: 0;
      left: 0;
    }

    .quote-and-team {
      position: absolute;
      left: 40px;
      top: auto;
      right: auto;
      bottom: 40px;
    }

    .quote-overlay {
      color: #fff;
      max-width: 260px;
      font-size: 35px;
      line-height: 47px;
      position: absolute;
      top: auto;
      right: auto;
      bottom: 40px;
      margin-bottom: 20px;
    } 

    .team-title-wrapper {
      display: flex;
      align-items: center;
      color: #8c3396;
    }

    .team-line {
      width: 20px;
      height: 1px;
      margin-right: 10px;
      background-color: #8c3396;
    }


/* Once you reach a smaller screen size add more padding to the how it works section and then use the padding and margin-top on the single story section to adjust spacing */

   
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

    #how-it-works {
      padding: 80px 50px 200px 50px;
    }

    .how-it-works-cont {
      max-width: 728px;
    }

    .heading {
      font-size: 43px;
      line-height: 50px;
    }

    #single-story {
      padding: 80px 50px;
      margin-top: -160px;
    }

    .story-wrapper {
      max-width: 728px;
    }

    .story-caption {
      padding: 0 10px 0 40px;
    }

    .team-title {
      font-size: 14px;
    }

    .story-caption p {
      margin-bottom: 0;
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

    .bg-shape {
      display: none;
    }

    .bg-shape-dots {
      height: 280px;
    }

    #how-it-works {
      padding: 0;
    }

    .title-wrapper {
      margin-bottom: 0px;
      padding: 50px 30px;
    }

    #single-story {
      margin-top: 0;
      padding: 0;
    }

    .story-wrapper {
      flex-direction: column;
      max-width: 100%;
    }

    .story-image {
      width: 100%;
      padding: 0;
    }

    .story-caption {
      width: 100%;
      padding: 40px 30px;
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
