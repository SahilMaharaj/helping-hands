<template>
    <div id="start-volunteering">
        <div class="vol-wrapper">
            <h2>Start Volunteering close to your home.</h2>
            <input class="search-field" type="text" placeholder="Find Locations & Organisations...">
            <div class="quick-links">
                <div class="help-col">
                    How can we help you?
                </div>
                <div class="links-col">
                    <ul>
                        <li><g-image width="14" src='~/assets/images/right-arrow.svg'></g-image> <g-link to="/cities/">Find a City close to your home</g-link></li>
                        <li><g-image width="14" src='~/assets/images/right-arrow.svg'></g-image> <g-link to="/stories/">Read Stories from others</g-link></li>
                        <li><g-image width="14" src='~/assets/images/right-arrow.svg'></g-image> <g-link to="/frequently-asked/">Frequently Asked Questions</g-link></li>
                        <li><g-image width="14" src='~/assets/images/right-arrow.svg'></g-image> <g-link to="/about-us/">About our organisation</g-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #start-volunteering {
        background-color: #efe9f0;
        padding: 90px 0;
    }
    
    .vol-wrapper {
        max-width: 940px;
        margin: 0 auto;
    }
    
    .vol-wrapper h2 {
        font-family: 'Rubik', sans-serif;
        margin-top: 0px;
        margin-bottom: 0px;
        text-align: center;
        color: #45164b;
        font-size: 33px;
        font-weight: 400;
    }

    .search-field {
        width: 460px;
        height: 60px;
        margin-bottom: 0px;
        font-family: 'Karla', sans-serif;
        padding-left: 40px;
        border: 0px solid #000;
        border-radius: 60px;
        color: #000;
        font-size: 18px;
        margin: 0 auto;
        margin-top: 40px;
        display: block;
    }

    .search-field:focus {
        outline: transparent;
        box-shadow: 0 0 3pt 1px #34df81;
    }

    .quick-links {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-top: 40px;
        max-width: 460px;
    }

    .help-col {
        flex: 1;
        color: #45164b;
        font-size: 28px;
        line-height: 39px;
        font-weight: 700;
        margin-right: 30px;
    }

    .links-col {
        flex: 1.3;
        font-size: 15px;
    }

    .links-col ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .links-col ul li {
        margin-bottom: 9px;
    }

    .links-col ul li a {
        text-decoration: none;
        color: #45164b;
    }

    .links-col ul li a:hover {
        color: #ff4043;
    }

    .links-col ul li img {
        margin-right: 14px;
    }
/*----- MEDIA QUERIES -----*/
@media all and (max-width : 767px) {
    #start-volunteering {
        padding: 30px 0;
    }

    .vol-wrapper {
        padding: 0 30px;
    }

    .vol-wrapper h2 {
        font-size: 28px;
        line-height: 33px;
    }

    .search-field {
        width: 100%;
        height: 50px;
        text-align: center;
        padding: 0;
        font-size: 14px;
    }

    .quick-links {
        flex-direction: column;
    }

    .help-col {
        font-size: 19px;
        margin-bottom: 20px;
    }
}


</style>