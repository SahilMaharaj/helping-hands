<template>
    <div>
        <div class="image-section">
            <div class="banner-content">
                <div class="banner-content-wrapper">
                    <div class="small-uppercase">
                        Make a Difference
                    </div>
                    <h2>Why Start Volunteering?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <g-link class="banner-btn" to="/information/">Learn More</g-link>
                </div>
            </div>
            <div class="image-overlay"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .image-section {
        background-image: url('~@/assets/images/woman-giving-a-high-five.jpg');
        position: relative;
        background-position: 50% 50%;
        background-size: cover;
        height: 600px;
    }

    .image-overlay {
        background-color: rgba(0, 0, 0, 0.35);
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .banner-content {
        position: absolute;
        width: 100%;
        height: 100%;
        color: #fff;
        z-index: 10;
        display: flex;
        flex-direction: column;
        font-size: 24px;
        font-weight: bold;
        justify-content: center;
        align-items: center;
    }

    .banner-content-wrapper {
        max-width: 600px;
        text-align: center;
    }

    .small-uppercase {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 400;
    }

    .banner-content h2 {
        margin-top: 10px;
        margin-bottom: 0;
        font-weight: 400;
        line-height: 54px;
        font-size: 50px;
    }

    .banner-content p {
        margin-top: 20px;
        font-size: 19px;
        line-height: 29px;
        font-weight: 400;
    }

    .banner-btn {
        margin-top: 20px;
        border: 2px solid #fff;
        background-color: transparent;
        color: #fff;
        font-weight: 400;
        display: inline-block;
        padding: 10px 25px 11px;
        font-size: 16px;
        text-decoration: none;
        box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.11);
        -webkit-transition: color 200ms ease, background-color 200ms ease, box-shadow 200ms ease, -webkit-filter 200ms ease;
        transition: color 200ms ease, background-color 200ms ease, box-shadow 200ms ease, -webkit-filter 200ms ease;
        transition: color 200ms ease, background-color 200ms ease, box-shadow 200ms ease, filter 200ms ease;
        transition: color 200ms ease, background-color 200ms ease, box-shadow 200ms ease, filter 200ms ease, -webkit-filter 200ms ease;
    }

    .banner-btn:hover {
        background-color: #fff;
        color: #000;
    }
    /*----- MEDIA QUERIES -----*/
    @media all and (max-width : 991px) {
        .banner-content h2 {
            font-size: 43px;
        }
    }

    @media all and (max-width : 767px) {
        .banner-content-wrapper {
            max-width: 400px;
            padding: 20px;
        }
    }

    @media all and (max-width : 479px) {
        .image-section {
            height: 445px;
        }
        
        .banner-content h2 {
            font-size: 40px;
            line-height: 43px;
        }

        .image-overlay {
            background-color: rgba(0, 0, 0, 0.6);
        }
    }
</style>