<script>
import axios from "axios";
export default {
    name: "singleProjectApp",
    data(){
        return{
            project : null,
        };
    },

    created(){
        axios
        .get(`http://127.0.0.1:8000/api/project/${this.$route.params.slug}`)
        .then ((response) =>{
            this.project = response.data;
        })
    }
}

</script>

<template>
  <div v-if="project">
    <!-- <img :src="project.image_url" :alt="project.title" /> -->
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
  </div>
</template>


<style>
</style>