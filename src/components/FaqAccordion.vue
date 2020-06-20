<template>
    <div>
        <div :class="'accordion ' + [active ? 'active' : '']">
            <div class="acc-question" @click="toggle">
                {{ question }}
            </div>
            <div class="acc-answer">
                <p><slot></slot></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            question: String
        },
        data () {
            return {
                active: false
            }
        },
        methods: {
            toggle () {
                this.active = !this.active
            }
        }
    }
</script>

<style scoped>
    .accordion {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    .acc-question {
        display: flex;
        align-items: center;
        color: #45164b;
        font-size: 18px;
        font-weight: 500;
        padding: 15px 0;
        background: none;
        border: none;
        cursor: pointer;
        font-family: 'Rubik', sans-serif;
    }
    
    .acc-answer {
        color: #333;
        font-family: 'Karla', sans-serif;
        font-size: 16px;
        line-height: 26px;
        overflow: hidden;
        transition: .3s ease all;
    }

    .acc-answer p {
        margin-top: 0;
        margin-bottom: 20px;
    }

    .accordion.active .acc-answer{
        max-height: 12em;
    }

    .accordion .acc-answer {
        max-height: 0;
    }

    @media all and (max-width : 767px) {
        .accordion.active .acc-answer{
            max-height: 24em;
    }
    }
</style>