<template>
  <Layout>
    <ImagelessHero heading="We are together.">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
    </ImagelessHero>
  <section>
    <div class="container">
      <div class="centered-title">
        <div class="small-uppercase">
          In short about us.
        </div>
        <h2 class="heading">We love what we do.</h2>
        <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus.</p>
      </div>
    </div>
  </section>

    <div class="masonry-items">
      <div class="image-container">
        <g-image class="team-comms" src="~/assets/images/team-communication.jpg"></g-image>
        <g-image class="video-call" src="~/assets/images/team-video-call.jpg"></g-image>
      </div>
      <div class="image-text">
        <g-image class="camera-crew" src="~/assets/images/camera-crew-discussion.jpg"></g-image>

        <div class="content-block">
          <p class="quote">"We love to give other people the oppurtunity to grow"</p>
          <p class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          <g-image class="dark-dots" src="~/assets/images/dark-dots.svg"></g-image>
        </div>

      </div>
    </div>
  
    <div class="meet-our-team">
      <div class="container">
        <div class="centered-title">
          <div class="small-uppercase">
            Real People
          </div>
          <h2 class="heading">Meet our team.</h2>
          <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et.</p>
        </div>
      
      <div class="team-roster">
        <ul>
          <li v-for="team in $page.teams.edges" :key="team.id">
            <g-link :to="team.node.path">
              <div class="image-roll">
                <div class="role">{{ team.node.role }}</div>
                <g-image class="team-image" :src="team.node.image"></g-image>
              </div>      
              <div class="team-title">
                - {{ team.node.title }}
              </div>
            </g-link>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
    
  
  <InformationBanner />
  </Layout>
</template>

<page-query>
query TeamMembers {
  teams: allTeam (sortBy: "title", order: ASC) {
    edges {
      node {
        title
        role
        image
        path
      }
    }
  }
}
</page-query>


<script>
import ImagelessHero from '~/components/hero-components/ImagelessHero.vue'
import InformationBanner from '~/components/InformationBanner.vue'

export default {
  components: {
    ImagelessHero,
    InformationBanner
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
}
</script>

<style scoped>
  section {
       overflow: hidden;
       padding: 90px 0;
       background-color: #fff; 
       max-width: 940px;
       margin: 0 auto;
       position: relative;
  }

  .container {
        position: relative;
        max-width: 940px;
  }

  .centered-title {
        max-width: 600px;
        text-align: center;
        margin: 0 auto;
  }

  .meet-our-team .container .centered-title {
        margin-bottom: 80px;
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

  .centered-title p {
        margin-top: 20px;
        font-size: 19px;
        line-height: 29px;
        color: #333;
  }

  .masonry-items {
    max-width: 1200px;
    margin: auto;
    display: flex;
    margin-bottom: 60px;
  }

  .image-container, .image-text {
    flex: 1;
    padding: 0 20px;
  }

  .masonry-items img {
    width: 100%;
    margin-bottom: 40px;
    display: block;
  }

  .team-comms {
    height: 300px;
    object-fit: cover;
    border-left: 5px solid #38ac8d;
  }

  .video-call {
    height: 420px;
    object-fit: cover;
    border-left: 5px solid #8c3396;
  }

  .camera-crew {
    height: 370px;
    object-fit: cover;
    border-left: 5px solid #ff4043;
  }  

  .content-block {
    position: relative;
    overflow: hidden;
    padding: 56px;
    background-color: #e4f5f0;
    border-left: 5px solid #38ac8d;
  }

  .quote {
    margin-top: 0;
    margin-bottom: 20px;
    color: #45164b;
    font-size: 32px;
    line-height: 37px;
  }

  .caption {
    color: #333;
    font-size: 16px;
    line-height: 26px;
    margin: 0;
  }

  .dark-dots {
    position: absolute;
    left: auto;
    top: auto;
    right: -50%;
    bottom: -130%;
    height: 500px;
    opacity: 0.04;
  }

  .meet-our-team {
    padding-bottom: 90px;
    position: relative;
  }

  .meet-our-team .container {
     margin: 0 auto;
  }

  .team-roster ul {
    padding: 0;
    margin: 0;
  }

  .team-roster ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
  }

  .team-roster ul li {
    padding-left: 10px;
    padding-right: 10px;
    flex: 1;
  }

  .team-roster ul li a {
    text-decoration: none;
  }

  .team-image {
    width: 100%;
  }

  .image-roll {
    position: relative;
    -webkit-transition: -webkit-transform 200ms ease;
    transition: -webkit-transform 200ms ease;
    transition: transform 200ms ease;
    transition: transform 200ms ease, -webkit-transform 200ms ease;
  }

  .image-roll:hover {
    -webkit-transform: scale(1.01);
    -ms-transform: scale(1.01);
    transform: scale(1.01);
    -webkit-filter: brightness(90%);
    filter: brightness(90%);
  }

  .image-roll:hover > .role {
    color: #ff4043;
  }

  .role {
    position: absolute;
    left: auto;
    top: 5%;
    right: 0%;
    bottom: auto;
    display: inline-block;
    padding-right: 10px;
    padding-left: 10px;
    background-color: #fff;
    font-size: 13px;
    line-height: 25px;
    color: #333;
  }

  .team-title {
    margin-top: 20px;
    color: #8c3396;
  }

  .bg-shape {
    position: absolute;
    opacity: 0.07;
    width: 851px;
    left: 26%;
    top: auto;
    right: auto;
    bottom: -50%;
    z-index: -1;
  }

  @media all and (max-width: 991px) {
    .heading {
      font-size: 43px;
      line-height: 50px;
    }

    .masonry-items {
      padding: 0 50px;
    }

    .masonry-items img {
      margin-bottom: 20px;
    }

    .image-container, .image-text {
      padding: 0 10px;
    }

    .team-comms {
      height: 230px;
      object-fit: cover;
    }

    .video-call {
      height: 360px;
      object-fit: cover;
    }

    .camera-crew {
      height: 250px;
      object-fit: cover;
    }

    .content-block {
      padding: 30px 35px;
    }
  }

  @media all and (max-width: 767px) {
    .team-roster ul li {
      flex: 50%;
    }
    
    .team-image {
      height: 250px;
      object-fit: cover;
    }

    .team-title {
      margin: 0;
      padding: 30px;
      font-size: 14px;
      text-align: center;
    }

    .masonry-items {
      flex-direction: column;
      padding: 0;
    }

    .masonry-items img {
      margin-bottom: 10px;
    }

    .image-container, .image-text {
      padding: 0;
    }
  }

  @media all and (max-width: 479px) {
    .container {
      max-width: 450px;
      padding-left: 20px;
      padding-right: 20px;
    }

    .meet-our-team .container {
      padding-left: 5px;
      padding-right: 5px;
    }
    
    .heading {
      font-size: 40px;
      line-height: 43px;
    }

    .centered-title p {
      font-size: 18px;
      line-height: 28px;
    }

    .team-comms, .video-call, .camera-crew {
      height: 170px;
      object-fit: cover;
    }

    .team-image {
      height: 200px;
      object-fit: cover;
    }

    .team-title {
      padding: 20px 0;
      font-size: 12px
    }

    .team-roster ul li {
      padding-left: 5px;
      padding-right: 5px;
    }

    .role {
      top: 3%;
      font-size: 8px;
      line-height: 20px;
    }

    section {
      padding-top: 50px;
    }
  }


  
</style>
