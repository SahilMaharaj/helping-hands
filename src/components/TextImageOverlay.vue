<template>
    <div class="main-container">
        <div id="image-container">
            <div class="text-overlay-content">
                <div class="text-overlay-wrapper">
                    <div class="text-boxes">
                        {{ textOne }}
                    </div>
                    <div class="text-boxes">
                        {{ textTwo }}
                    </div>
                    <div class="text-boxes">
                        {{ textThree }}
                    </div>
                </div>
            </div>

            <g-image :src="require(`~/assets/images/${imageUrl}`)"></g-image>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            imageUrl: String,
            textOne: String,
            textTwo: String,
            textThree: String
        }
    }
</script>

<style scoped>
    .main-container {
        padding: 0 50px 90px 50px;
    }
    
    #image-container {
        max-width: 1100px;
        margin: 0 auto;
        position: relative;
        height: 600px;
    }
    
    #image-container img {
        width: 100%;
        height: 600px;
        object-fit: cover;
        position: absolute;
    }

    .text-overlay-content {
        z-index: 10;
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .text-overlay-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: flex-end;
        justify-content: center;
        padding: 40px 40px 40px 0;
    }

    .text-boxes {
        background-color: #fff;
        width: 45%;
        margin: 15px 0;
        padding: 30px 30px 30px 40px;
        box-shadow: 21px 21px 50px -20px rgba(0, 0, 0, 0.3);
        font-size: 18px;
        line-height: 26px;
    }

    .text-boxes:nth-of-type(1) {
        border-left: 5px solid #34df81;
    }

    .text-boxes:nth-of-type(2) {
        border-left: 5px solid #38ac8d;
    }

    .text-boxes:nth-of-type(3) {
        border-left: 5px solid #8c3396;
    }
    
    /*----- MEDIA QUERIES -----*/
    @media all and (max-width : 991px) {
        #image-container img, #image-container {
            height: 556px;
        }

        .text-boxes {
            font-size: 17px;
            line-height: 22px;
            padding: 20px 20px 20px 30px;
            margin: 15px 0;
        }

        .main-container {
            padding: 0;
        }
    }

    @media all and (max-width : 767px) {
        #image-container img {
            display: none;
        }

        #image-container {
            height: auto;
        }

        .main-container {
            padding: 30px;
            background-color: #e4f5f0;
        }

        .text-boxes {
            width: 100%;
            box-shadow: 21px 21px 50px -20px rgba(0, 0, 0, 0.2);
        }

        .text-overlay-wrapper {
            padding: 0;
            align-items: flex-start;
        }

        .text-overlay-content {
            position: relative;
        }
    }
</style>