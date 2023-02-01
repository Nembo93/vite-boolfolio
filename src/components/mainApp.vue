<script>
import { store } from "../store.js";
import FilmApp from "./FilmApp.vue";
import SeriesApp from "./SeriesApp.vue"
export default {
    name: "mainApp",
    components:{
        FilmApp,
        SeriesApp
    },
    data (){
        return{
            store,
        };
    },
    
};
</script>

<template>
    <div>
        <h2>Film</h2>
        <div class="container">
            <FilmApp v-for="character in store.characters"
            :info="character"/>
        </div>
        <h2>Serie TV</h2>
        <div class="container">
            <SeriesApp v-for="serie in store.series"
            :info="serie"/>
        </div>
    </div>

    
</template>

<style>
.container{
    margin: auto;
    background-color: gray;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
}
.series_container{
    margin: auto;
    background-color: yellow;
}
h2{
    margin-left: 50px;
}
</style>
