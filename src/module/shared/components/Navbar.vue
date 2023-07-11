<template>
    <div>
<!--         <router-link :to="{name: 'home'}">Pokemon List</router-link>    
        <router-link :to="{name: 'pokemon-id', params: {id: 12}}">Pokemon por id</router-link>    
        <router-link :to="{name: 'about'}">About</router-link> -->
        <custom-link
            v-for="link in links"
            :key="link.to"
            :link="link"
         />
    </div>    
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    
    data(){ 
        return {
            links: [
                {to: 'pokemon-home', name: 'Pokemons'},
                {to: 'pokemon-id', name: 'Pokemon Id', id:151},
                {to: 'pokemon-about', name: 'About'},

                {to: 'dbz-characters', name: 'Personajes'},
                {to: 'dbz-about', name: 'DBZ-About'},

                {to: 'https://google.com', name: 'Google'},
            ]
        }
    },
    
    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>

        CustomLink
<style scoped>

div {
    padding: 0 300px;
}

div a {
    font-weight: bold;
    /* color: #2c3e50; */
    margin: 0 10px;
}

/* a.router-link-exact-active {
    color: #42b983;
} */

</style>