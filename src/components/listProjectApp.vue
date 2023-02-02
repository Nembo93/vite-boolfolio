<script>

import axios from "axios";
import cardApp from "./cardApp.vue";
export default {
  name: "listProjectApp",
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
    <div class="main-app-card-container">
      <div class="main-app-card-box" v-for="project in projects">
        <cardApp :data="project" />
      </div>
    </div>
</template>

<style>
.main-app-card-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}
.main-app-card-box{
  width: calc((100% / 5) - 30px);
  border: 2px solid black;
  margin-bottom: 20px;
}
</style>