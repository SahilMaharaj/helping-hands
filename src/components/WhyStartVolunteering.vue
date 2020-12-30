<template>
    <div class="section">
        <div class="container">
            <div class="column-left">
                <div class="title-wrapper">
                    <div class="small-uppercase">Make a Difference</div>
                    <h2 class="heading">Why Start Volunteering?</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae.</p>
            </div>
            <div class="column-right">
                <div :class="theme">
                    <div class="checklist-item" :class="borderTheme">
                        <ul>
                            <li>
                                <div class="check-text">
                                    <strong>Do good</strong> for others and the community
                                </div>
                                <div class="check-icon">
                                    <g-image width="20" src="~/assets/images/checkmark-circle.svg"></g-image>
                                </div>
                            </li>
                            <li>
                                <div class="check-text">
                                    Volunteering <strong>increases self-confidence</strong>
                                </div>
                                <div class="check-icon">
                                    <g-image width="20" src="~/assets/images/checkmark-circle.svg"></g-image>
                                </div>
                            </li>
                            <li>
                                <div class="check-text">
                                    <strong>Make a difference</strong> to the lives of others
                                </div>
                                <div class="check-icon">
                                    <g-image width="20" src="~/assets/images/checkmark-circle.svg"></g-image>
                                </div>
                            </li>
                            <li>
                                <div class="check-text">
                                    <strong>Feel valued</strong> and part of the team
                                </div>
                                <div class="check-icon">
                                    <g-image width="20" src="~/assets/images/checkmark-circle.svg"></g-image>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="checklist-cta">
                        <div class="interested">
                            Interested?
                        </div>
                        <div class="cta-btn">
                            <g-link to="/cities/" class="cta-btn">Get Started <g-image width="15" src="~/assets/images/cta-btn-arrow.svg"></g-image></g-link>
                        </div>
                    </div>
                </div>
            </div>    

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            theme: String,
            borderTheme: String
        }
    }
</script>

<style scoped>
/*----- DARK THEME BLOCK -----*/
    .dark-checklist-block {
        padding: 50px;
        box-shadow: 14px 14px 50px -20px rgba(0, 0, 0, 0.1);
        background-color: #45164b;
        color: #fff;
    }

    .dark-checklist-item ul li{
        border-bottom-color: hsla(0, 0%, 100%, 0.1) !important;
    }
/*----------------------------*/    
    .section {
        overflow: hidden;
        padding: 90px 0;
    }

    .container {
        max-width: 940px;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }

    .title-wrapper {
        margin-bottom: 30px;
    }

    .column-left, .column-right {
        flex: 1;
    }

    .column-left p {
        width: 410px;
        margin-bottom: 0;
        color: #333;
        line-height: 26px;
    }

    .small-uppercase {
        font-family: Karla, sans-serif;
        color: #a899aa;
        font-size: 12px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .heading {
        margin-top: 10px;
        margin-bottom: 0px;
        font-family: Rubik, sans-serif;
        color: #45164b;
        font-size: 50px;
        line-height: 54px;
        font-weight: 400;
    }

    .column-left {
        padding-right: 60px;
    }

    .light-checklist-block {
        padding: 50px;
        background-color: #fff;
        box-shadow: 14px 14px 50px -20px rgba(0, 0, 0, 0.1);
        color: #000;
    }

     .checklist-item {
        font-size: 17px;
    }

    .checklist-item ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .checklist-item ul li {
        display: flex;
        padding: 23px 0;
        border-bottom: 1px solid #ebebeb;
    }

    .check-icon {
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }

    .check-text {
        flex: 11;
    }

    .checklist-cta {
        display: flex;
        margin-top: 30px;
        align-items: center;
    }

    .interested {
        flex: 1;
    }

    .interested {
        font-size: 23px;
        font-weight: 700;
    }

    .cta-btn {
        display: flex;
        justify-content: flex-end;
    }

    .cta-btn a {
        cursor: pointer;
        text-decoration: none;
        align-items: center;
        font-family: Karla, sans-serif;
        background-color: #34df81;
        border: none;
        border-radius: 0;
        color: #fff;
        font-size: 16px;
        padding: 12px 15px 12px 35px;
        box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.11);
        -webkit-transition: color 200ms ease, background-color 200ms ease, box-shadow 200ms ease, -webkit-filter 200ms ease;
        transition: color 200ms ease, background-color 200ms ease, box-shadow 200ms ease, -webkit-filter 200ms ease;
        transition: color 200ms ease, background-color 200ms ease, box-shadow 200ms ease, filter 200ms ease;
        transition: color 200ms ease, background-color 200ms ease, box-shadow 200ms ease, filter 200ms ease, -webkit-filter 200ms ease;
    }

    .cta-btn img {
        margin-left: 20px;
    }
/*----- MEDIA QUERIES -----*/
    @media all and (max-width : 991px) {
        .section {
            padding: 80px 50px;
        }

        .container {
            max-width: 728px;
        }

        .column-left {
            padding-right: 40px;
        }

        .heading {
            font-size: 43px;
            line-height: 50px;
        }

        .light-checklist-block {
            padding: 25px;
        }

        .column-left p {
            width: 100%;
        }

        .cta-btn a {
            padding: 12px 15px 12px 18px;
        }

        .cta-btn img {
            margin-left: 12px;
        }

        .interested {
            font-size: 18px;
        }
    }
    @media all and (max-width : 767px) {
        .container {
            flex-direction: column;
        }

        .section {
            padding: 0;
        }

        .light-checklist-block {
            padding: 30px;
            box-shadow: 7px 7px 60px -20px rgba(0, 0, 0, 0.1);
        }

        .column-left {
            padding: 40px 30px;
        }

        .column-right {
            width: 100%;
        }
    }
</style>