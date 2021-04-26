<template>
    <footer>
        <div class="footer-wrapper">
            <div class="footer-tagline">
                <p>Get in touch. <a href="#">Call +1 20 330 22</a> or <a href="#">email volunteer@hh.com</a> anytime.</p>
            </div>
            <div class="footer-cols">
                <div class="col-1">
                    <h4>About Us</h4>
                    <p><g-link to="/about-us/">Our Organisation</g-link></p>
                    <p><g-link to="/information/">How We Work</g-link></p>
                </div>
                <div class="col-2">
                    <h4>Start Now</h4>
                    <p><g-link to="/cities/">Find Organisations</g-link></p>
                    <p><g-link to="/stories/">Read Stories</g-link></p>
                </div>
                <div class="col-3">
                    <h4>Legal</h4>
                    <p><a href="#">Template Licensing</a></p>
                    <p><a href="#">Privacy Policy</a></p>
                </div>
                <div class="col-4">
                    <g-image class="footer-logo" width="200" height="25" src="~/assets/images/helping-hands-logo-white.svg"></g-image>
                </div>
            </div>
            <div class="copyright">
                Built by <a target="_blank" title="Sahil Maharaj LinkedIn Profile" href="https://www.linkedin.com/in/sahil-maharaj/">Sahil Maharaj</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        background-color: #45164b;
        color: #fff;
        padding: 90px 0;
    }
    
    .footer-wrapper {
        max-width: 940px;
        margin: 0 auto;
    }

    .footer-tagline p {
        margin: 0;
    }

    .footer-tagline {
        margin-bottom: 60px;
        padding-bottom: 50px;
        border-bottom: 1px solid #582e5d;
        font-family: 'Rubik', sans-serif;
        font-size: 21px;
        font-weight: 300;
    }

    .footer-tagline a {
        font-weight: 400;
        color: #fff;
    }

    .footer-cols {
        display: flex;
        font-family: 'Karla', sans-serif;
    }

    .footer-cols h4 {
        margin-top: 0;
        margin-bottom: 12px;
        font-size: 19px;
        font-weight: 700;
    }

    .footer-cols div p {
        margin: 0;
    }

    .footer-cols div a {
        color: hsla(0, 0%, 100%, 0.6);
        text-decoration: none;
    }

    .footer-cols div a:hover {
        color: hsla(0, 0%, 100%, 0.8);
    }

    .col-1, .col-2, .col-3 {
        flex: 1;
    }

    .col-2 {
        padding: 0 10px;
    }

    .col-4 {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .footer-logo {
        opacity: .2;
    }

    .footer-logo:hover {
        opacity: 1;
    }

    .copyright {
        font-family: 'Karla', sans-serif;
        margin-top: 40px;
        opacity: 0.5;
        font-size: 13px;
        font-weight: 400;
    }

    .copyright a {
        color: #b98bbe;
    }

    .copyright a:hover {
        color: #fff;
    }
/*----- MEDIA QUERIES -----*/
    @media all and (max-width : 991px) {
        footer {
            padding: 0;
        }
        
        .footer-wrapper {
            padding: 80px 50px;
        }
    }

    @media all and (max-width : 767px) {
        .footer-wrapper {
            padding: 50px 30px;
        }

        .footer-tagline {
            padding-bottom: 30px;
            margin-bottom: 0;
        }
        
        .footer-cols {
            flex-direction: column;
        }

        .footer-cols div {
            margin-top: 35px;
        }

        .col-2 {
            padding: 0;
        }

        .col-4 {
            align-items: flex-start;
        }

        .copyright {
            font-size: 11px;
        }
    }
</style>