<template>
    <div>
        <div class="hero">
            <div class="banner-copy">
                <div class="hero-text">
                    <div class="hero-text-wrapper">
                        <h1>Stories from other Volunteers.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.</p>
                    </div>                    
                </div>
                <g-image class="dots-overlay" src="~/assets/images/white-dots.svg"></g-image>
                <div class="hero-overlay"></div> 
                <g-image class="hero-image" src="~/assets/images/colleagues.jpg"></g-image>  
                             
            </div>                
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .hero {
        position: relative;
        overflow: hidden;
        background-color: #45164b;
    }

    .banner-copy {
        position: relative;
        width: 100%;
        height: 408px;
    }

    .hero-image {
        z-index: -1;
    }
    
    .hero img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .hero-text {
        position: absolute;
        color: #fff;
        z-index: 5;
    }

    .dots-overlay {
        position: absolute;
        left: auto;
        top: auto;
        right: -20%;
        opacity: 0.25;
        max-width: 900px;
        display: block;
        z-index: 9;
    }

    .hero-overlay {
        background-color: rgba(0, 0, 0, 0.25);
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .hero-text {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .hero-text-wrapper {
        max-width: 540px;
        text-align: center;
    }

    .hero-text h1 {
        font-family: Rubik, sans-serif;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 55px;
        line-height: 62px;
        font-weight: 500;
    }

    .hero-text p {
        margin-top: 30px;
        margin-bottom: 0px;
        font-size: 20px;
        line-height: 33px;
    }

@media all and (max-width: 991px) {
    .dots-overlay {
       max-width: 530px;
       height: 530px !important;
       opacity: 0.2;
       bottom: -58%;
       object-fit: fill !important;
    }
}

@media all and (max-width: 767px) {
    .hero-text-wrapper {
        max-width: 430px;
    }
    
    .hero-text h1 {
        font-size: 40px;
        line-height: 45px;
    }

    .hero-text p {
        margin-top: 20px;
        font-size: 20px;
        line-height: 33px;
    }
}

@media all and (max-width: 479px) {
    .banner-copy {
        height: 300px;
    }

    .dots-overlay {
        opacity: 0.1;
        right: -144px;
        bottom: -70%;
    }
    
    .hero-text-wrapper {
        max-width: 300px;
    }
    
    .hero-text h1 {
        font-size: 28px;
        line-height: 33px;
    }

    .hero-text p {
        font-size: 19px;
        line-height: 28px;
    }
}
</style>