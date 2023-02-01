<script>

import axios from "axios";
import cardApp from "./cardApp.vue";
export default {
  name: "mainApp",
  components: {
    cardApp,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
      this.projects = response.data;
    });
  },

};


</script>

<template>
    <div>
        <h2>Main</h2>
        <div class="col-md-4" v-for="project in projects">
          <cardApp :data="project" />
        </div>
    </div>

</template>

<style>

</style>
