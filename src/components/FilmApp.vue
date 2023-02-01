<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next'
export default{
    name: "FilmApp",
    props: {
        info: Object,
    },
    components:{
        CountryFlag,
    },
    methods: {
        getFlag (lang){
            if (lang=="en"){
                return "gb"
            }
        }
    },
    data() {
        return {
            store,
        };
    },
    computed: {
        vote() {
            return Math.ceil(this.info.vote_average / 2);
        },
    },
    
}

    
</script>

<template>
    <div class="film_box">
        <div class="film_img">
                <img :src="`https://image.tmdb.org/t/p/w185` + info.poster_path" alt="" class="poster_image">
                <div class="film_card">
                    <h3>{{info.title}}</h3>
                    <h4>{{info.original_title}}</h4>
                    <h5>{{info.original_language}}</h5>
                    <country-flag :country="getFlag(info.original_language)" size="normal"/>
                    <h6>{{vote}}</h6>
                    <div>
                        <span v-for="n in vote"><i class="fa-solid fa-star"></i></span>
                        <span v-for="n in (5 - vote)"><i class="fa-regular fa-star"></i></span>
                    </div>
                </div>
        </div>
          
    </div>      
</template>

<style>
.film_box{
    max-width: 185px;
    margin: 30px;
}
.film_img{
    width: 185px;
    position: relative;
}
.film_card{
    width: 185px;
    height: 278px;
    text-align: center;
    padding: 10px;
    background-color: black;
    color: white;
    border: 2px solid black;
    position: absolute;
    bottom: 0%;
    display: none;
}
.film_img:hover .film_card{
    display: block;
    /* filter: brightness(50%); */
}
.poster_image{
    display: block;
}

.film_img h3, h4, h5, h6{
    margin-bottom: 20px;
}
</style>