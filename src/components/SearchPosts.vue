<template>
    <div>
        <form> 
            <input 
            id="search" 
            v-model="searchTerm" 
            type="search"
            name="searchText"
            required="required"
            placeholder="Find a Locations & Organisations...">
            <button id="search-btn" @click.stop.prevent="submit()">
                <g-image width="25" src="~/assets/images/magnifying-glass.svg"></g-image> 
            </button>
            
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchTerm: this.$route.query.q || '',
            }
        },
        methods: {
            submit() {
                const searchTerm = this.searchTerm
                if (searchTerm.length > 1) 
                    return this.$router.push("/search/?q=" + this.searchTerm);
            }
    }
}
</script>

<style>
    #search {
        height: 60px;
        font-family: 'Karla', sans-serif;
        width: 100%;
        padding-left: 40px;
        border: 0px solid #000;
        border-radius: 60px;
        color: #000;
        font-size: 18px;
    }

    #search:focus {
        outline: transparent;
        box-shadow: 0 0 3pt 1px #34df81;
    }

    form {
        position: relative;
    }

    #search-btn {
        position: absolute;
        cursor: pointer;
        border: none;
        left: auto;
        top: 0%;
        right: 0%;
        bottom: auto;
        width: 80px;
        height: 100%;
        background-color: transparent;
    }
/*----- MEDIA QUERIES -----*/
 @media all and (max-width : 767px) {
     #search {
         font-size: 14px;
         text-align: center;
         padding: 0;
     }
 }

@media all and (max-width : 479px) {
    #search {
      font-size: 16px;
    }

    #search-btn {
      width: 60px;
    }
}

</style>