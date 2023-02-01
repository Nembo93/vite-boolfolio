<script>
// File importati in headerApp.vue
import { store } from "../store.js";
import axios from "axios";
// Esportazione del file headerApp
export default{
    name: "headerApp",
    data(){
        return{
            store,
            characters:[],
            series:[]
        };
    },

    // Funzione bottone search
    methods:{

    prova: function(){
        console.log(store.searchText)

        axios
            .get('https://api.themoviedb.org/3/search/tv', {
                params: {
                    api_key: "071cb57202acff2ed1f9abd198110e68",
                    query: store.searchText,
                    language: "it-IT",
                },
            })
            .then((response) => {
            this.store.series = response.data.results;
            console.log(store.series)
            console.log(response)
            })

        axios
            .get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: "071cb57202acff2ed1f9abd198110e68",
                    query: store.searchText,
                    language: "it-IT",
                },
            })
            .then((response) => {
            this.store.characters = response.data.results;
            console.log(store.characters)
            console.log(response)
            })

        }
    },
    
};
</script>

<template>
    <header>
        <div>
            <h1>BOOLFLIX</h1>
        </div>

        <div>
            <input type="text" placeholder="Film/Serie TV" v-model="store.searchText">
            <button @click="prova">Cerca</button>
        </div>
    </header>
</template>

<style>
header{
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h1{
    color: red;
}
</style>