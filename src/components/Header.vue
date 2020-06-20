<template>
    <div class="header-wrapper">
        <div class="navigation">
            <header>
                <div class="logo">
                    <g-link to="/"> 
                        <g-image width="200" src="~/assets/images/helping-hands-logo.svg"></g-image>
                    </g-link>
                </div>
                <input type="checkbox" id="nav-toggle" class="nav-toggle" />
                    <nav>
                        <ul class="menu">
                            <li><g-link to="/cities/">Cities</g-link></li>
                            <li><g-link to="/stories/">Stories</g-link></li>
                            <li><g-link to="/information/">Information</g-link></li>
                            <li><g-link to="/about-us/">About Us</g-link></li>
                            <div class="border-seperator">
                                <ul class="bordered-items">
                                    <li><g-link to="/faq/">FAQ</g-link></li>
                                    <li class="last-item"><g-link to="/contact-us/">Contact Us</g-link></li>
                                </ul>
                            </div>
                        </ul>
                    </nav>
                <label for="nav-toggle" class="nav-toggle-label">
                    <span>&#9776;</span>
                </label>
                <div class="header-cta-btn">
                    <g-link class="header-cta" to="/cities/">Get Started</g-link>
                </div>
            </header>
        </div>
    </div>
</template>

<style scoped>
/*----- DESKTOP -----*/
.header-wrapper {
    position: sticky;
    top: 0;
    z-index: 99;
}
.logo a {
    cursor: pointer;
}

.logo a img {
    margin-top: 15px;
}
    
.navigation {
    padding: 30px 0;
    background-color: #fff;
    width: 100%;
    z-index: 9999;
    border-bottom: 1px solid #f8f9fd;
}
header {
    max-width: 940px;
    margin:0 auto;
    display: flex;
    align-items: center;
}
.hamburger {
    margin: 0;
    order: 3;
    display: none;
}
.nav-toggle {
    display: none;
}
.nav-toggle-label {
    margin-left: 20px;
    display: none;
    border-left: 1px solid #ebebeb;
    padding: 12px 21px;
    cursor: pointer;
}
.nav-toggle-label span {
    font-weight: bold;
    color: #45164b;
    font-size: 24px;
}
.nav-toggle:checked ~ nav {
    transform: scale(1, 1);
}
.nav-toggle:checked ~ .nav-toggle-label {
    background-color: #45164b;
}
.nav-toggle:checked ~ .nav-toggle-label span {
    color: #fff;
}
nav {
    flex: 1;
}
.menu {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
}
.menu li a {
    color: #222222;
    transition: opacity 200ms ease;
    font-family: 'Karla', sans-serif;
    margin-left: 30px;
    padding: 1px 0px 0px;
    font-size: 15px;
    font-weight: 400;
    text-transform: none;
    text-decoration: none;
    cursor: pointer;
}

.menu li a.active--exact.active {
    color: #45164b;
    border-bottom: 1px solid #45164b;
    padding-bottom: 4px;
}

.menu li a:hover {
    color: #ff4043;
    opacity: 1;
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 1px solid #45164b;
}

.border-seperator ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
}

.border-seperator {
    display: flex;
    border-left: 1px solid #ddd;
    margin-left: 30px;
    padding-left: 5px;
}

.header-cta {
    padding: 12px 25px;
    margin-top: 3px;
    margin-left: 20px;
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
/*----- MEDIA QUERIES -----*/
@media all and (max-width : 991px) {
    header {
        height: 100%;
    }

    .header-cta {
        margin-top: 0;
        margin-left: 0;
        padding-right: 20px;
        padding-left: 20px;
        font-size: 14px;
        line-height: 16px;
    }

    .menu {
        background: #45164b;
        padding: 30px;
    }
    
    .menu li a {
        opacity: 0;
        font-size: 17px;
        color: #fff;
        padding-top: 6px;
        margin-left: 0;
        padding-bottom: 6px;
        display: block;
        border-bottom: 1px solid #582e5d;
        line-height: 35px;
        transition: border 200ms ease;
    }

    .menu li a.active--exact.active {
        color: #ff4043;
        border-bottom: 1px solid #582e5d;
        padding-bottom: 4px;
    }

    .menu li a.active--exact.active:hover {
        border-bottom: 1px solid #45164b;
    }

    .menu li a:hover {
        color: #ff4043;
        border-bottom: 1px solid #45164b;
        padding: 6px 0;
    }

    .bordered-items {
        width: 100%;
    }

    .border-seperator ul {
        flex-direction: column;
    }

    .last-item a {
        border-bottom: none !important;
    }

    .border-seperator {
        border-left: none;
        margin-left: 0;
        padding-left: 0;
    }
    .nav-toggle:checked ~ nav .menu li a {
        opacity: 1;
    }
    .menu li a:hover {
        opacity: 1 !important;
    }
    .logo {
        flex: 1;
    }

    .logo a img {
        height: 22px;
        margin-left: 20px;
    }

    .navigation {
        padding: 0;
        height: 60px;
    }

    .nav-toggle-label {
        display: block;
        order: 3;
    }

    nav {
        position: absolute;
        text-align: left;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #fff;
        z-index: 9999;
        box-shadow: 0 50px 80px -30px rgba(53, 52, 72, 0.2);
        transform: scale(1, 0);
        transform-origin: top;
        transition: transform 400ms ease 0s;
    }
    .menu {
        flex-direction: column;
    }
}

@media all and (max-width : 479px) {
    .logo a img {
        width: 104px;
        height: 13px;
        margin-left: 10px;
    }
}

@media all and (max-width : 319px) {
    .header-cta-btn {
        display: none;
    }
}
</style>