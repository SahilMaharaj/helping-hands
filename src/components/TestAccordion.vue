<template>
    <div>
        
        <button id="accordion" :class="[isActive ? 'active' : '']" @click="toggle">
            <div>{{ question }}</div><span class="symbol">+</span> 
        </button>
            <div class="panel">
                <p><slot></slot></p>
            </div>
      
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            toggle() {
                this.isActive = !this.isActive;
            }
        },        
        props: {
            question: String
        }
    }
</script>

<style scoped>
     #accordion {
         cursor: pointer;
         width: 100%;
         text-align: left;
         border: none;
         background-color: #45164b;
         color: #fff; 
         font-family: inherit;
         font-size: 18px;
         padding: 20px;
         outline: none;
         display: flex;
         align-items: center;
    }

    #accordion > div {
        flex: 1;
    }

    .symbol {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-family: inherit;
        font-size: 26px;
        transition: 0.3s;
        margin-top: -5px;
    }

    #accordion.active ~ .panel {
        max-height: 12em;
        transition: 0.4s ease;
    }

    #accordion.active > .symbol {
        transform: rotate(45deg);
    }

    #accordion ~ .panel {
        max-height: 0;
        overflow: hidden;
        transition: 0.3s;
    }

    .panel {
        margin-bottom: 20px;
        background-color: #f5f5f5;
    }

    .panel p {
        margin: 0;
        padding: 20px;
        border-left: 2px solid #45164b;
        border-right: 2px solid #45164b;
        border-bottom: 2px solid #45164b;
    }
</style>