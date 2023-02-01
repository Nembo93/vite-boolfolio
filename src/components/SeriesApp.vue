<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next'
export default{
    name : "SeriesApp",
    props:{
        info: Object,
    },
    components:{
        CountryFlag,
    },
    data (){
        return{
            store
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
    <div class="series_box">
        <div class="series_img">
            <img :src="`https://image.tmdb.org/t/p/w185` + info.poster_path" class="poster_series_image" alt="">
            <div class="series_card">
                <h3>{{info.name}}</h3>
                <h4>{{info.original_name}}</h4>
                <h5>{{info.original_language}}</h5>
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
/* .serie_img{
    width: auto;
} */
/* .series_card{
    width: 185px;
    height: 300px;
    text-align: center;
    padding: 10px;
    background-color: red;
    border: 2px solid black;
} */

.series_box{
    max-width: 185px;
    margin: 30px;
}
.series_img{
    width: 185px;
    position: relative;
}
.series_card{
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
.series_img:hover .series_card{
    display: block;
    filter: brightness(50%);
}
.poster_series_image{
    display: block;
}

.series_img h3, h4, h5, h6{
    margin-bottom: 20px;
}
</style>