<template>
    <Layout>
        <div>
            <CitiesHero />

            <section>
                <div class="container">
                    <div class="centered-title">
                        <div class="small-uppercase">
                            Available Cities
                        </div>
                        <h2 class="heading">Find an organization in a place near you.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                    <div class="cities-list">
                        <ul>
                            <li v-for="city in $page.cities.edges" :key="city.id">
                                <g-link class="city-link" :to="city.node.path">
                                    <div id="city-item">
                                        <div class="city-block-image">
                                            <g-image :src="city.node.image"></g-image>
                                            <div class="city-image-border"></div>
                                        </div>
                                        <div class="city-block-text">
                                            <div class="block-title">{{ city.node.title }}</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                                            <div class="header-cta">View Organisations</div>
                                            <g-image class="dots-box" src="~/assets/images/dark-dots.svg"></g-image>
                                        </div>                                        
                                    </div>
                                </g-link>
                            </li>
                        </ul>
                    </div>                    
                </div>
            </section>

                       
            
            <StartVolunteering />
        </div>
    </Layout>
</template>

<page-query>
query Cities {
    cities : allCities (sortBy: "title", order: ASC) {
        edges {
            node {
                title
                id
                path
                image
            }
        }
    }
}
</page-query>

<script>
import StartVolunteering from '~/components/StartVolunteering.vue'
import CitiesHero from '~/components/hero-components/CitiesHero.vue'

    export default {
        components: {
            StartVolunteering,
            CitiesHero
        },
        metaInfo() {
            return {
                title: 'Cities',
                titleTemplate: '%s | Helping Hands',
                meta: [
                    {
                        name: 'description',
                        content: 'This is the Cities page.',
                    }
                ],
                link: [
                    {
                        rel: 'canonical',
                        href: 'https://gridsome-helpinghands.netlify.app/cities/'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    section {
       overflow: hidden;
       padding: 90px 0;
       background-color: #fff; 
    }

    .container {
        position: relative;
        max-width: 940px;
        margin: 0 auto;
    }

    .centered-title {
        max-width: 520px;
        margin-bottom: 50px;
        text-align: center;
        margin: 0 auto;
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

    .small-uppercase {
        font-family: Karla, sans-serif;
        color: #a899aa;
        font-size: 12px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .centered-title p {
        margin-top: 20px;
        font-size: 19px;
        line-height: 29px;
        color: #333;
    }

    .cities-list ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .cities-list ul li {
        padding-top: 40px;
        display: block;
        position: relative;
    }

    .cities-list ul li img {
        width: 100%;
        height: 100%;
    }

    .header-cta {
        padding: 12px 25px;
        margin-top: 3px;
        background-color: #34df81;
        text-align: center;
        color: #fff;
        font-weight: 400;
        font-family: 'Karla', sans-serif;
        display: inline-block;
        text-decoration: none;
        box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.11);
        -webkit-transition: color 200ms ease, background-color 200ms ease, box-shadow 200ms ease, -webkit-filter 200ms ease;
        transition: color 200ms ease, background-color 200ms ease, box-shadow 200ms ease, -webkit-filter 200ms ease;
        transition: color 200ms ease, background-color 200ms ease, box-shadow 200ms ease, filter 200ms ease;
        transition: color 200ms ease, background-color 200ms ease, box-shadow 200ms ease, filter 200ms ease, -webkit-filter 200ms ease;
    }

    .header-cta:hover {
        text-decoration: none;
        box-shadow: 0 8px 10px -3px rgba(0, 0, 0, 0.16), inset 0 -2px 0 0 rgba(0, 0, 0, 0.11);
        -webkit-filter: brightness(105%);
        filter: brightness(105%);
        color: #fff;
    }

    .city-link {
        text-decoration: none;
    }

    #city-item {
        position: relative;
        padding: 30px 0;
    }

    .city-block-text {
        position: relative;
        z-index: 10;
        overflow: hidden;
        width: 40%;
        background-color: #fff;
        padding: 45px;
        box-shadow: 21px 21px 60px -10px rgb(0 0 0 / 30%);
        font-size: 17px;
        line-height: 26px;
    }

    .city-block-image {
        position: absolute;
        width: 80%;
        top: 0%;
        left: auto;
        right: 0%;
        bottom: auto;
        height: 100%;
        box-shadow: 7px 7px 50px -20px rgb(0 0 0 / 30%);
        transition: filter 200ms ease, -webkit-filter 200ms ease;
    }

    .city-block-image:hover {
        -webkit-filter: brightness(90%);
        filter: brightness(90%);
    }

    .city-image-border {
        position: absolute;
        top: 0%;
        width: 5px;
        height: 100%;
        background-color: #38ac8d;
    }

    .block-title {
        position: relative;
        z-index: 10;
        margin-bottom: 20px;
        font-family: Rubik, sans-serif;
        font-size: 29px;
        line-height: 30px;
        font-weight: 400;
        color: #45164b;
    }

    .city-block-text p {
        color: #070707;
    }

    .dots-box {
        position: absolute;
        left: auto;
        top: auto;
        right: -160px;
        bottom: -47%;
        opacity: 0.06;
        z-index: -1;
    }

    @media all and (max-width: 991px) {
        .header-cta {
            margin-top: 0;
            margin-left: 0;
            padding-right: 20px;
            padding-left: 20px;
            font-size: 16px;
            line-height: 26px;
        }

        .container {
            max-width: 728px;
        }

        .city-block-text {
            padding: 30px;
        }

        .city-block-text p {
            font-size: 16px;
            line-height: 25px;
        }
    }

    @media all and (max-width: 767px) {
        #city-item {
            padding: 0;
        }
        
        .city-block-image {
            position: relative;
            width: 100%;
            height: 230px;
            object-fit: cover;
        }

        .cities-list ul li img {
            object-fit: cover;
        }

        .city-block-text {
            width: 100%;
            box-shadow: 14px 14px 60px -10px rgb(0 0 0 / 10%);
        }

        .dots-box {
            width: 80% !important;
            bottom: 0;
            opacity: 0.04;
        }
    }
</style>