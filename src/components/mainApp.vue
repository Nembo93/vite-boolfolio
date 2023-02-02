<script>
import listProjectApp from "./listProjectApp.vue";
import singleProjectApp from "../pages/singleProjectApp.vue";

export default {
  name: "mainApp",
  components: {
    listProjectApp,
    singleProjectApp,
  },

};

</script>

<template>
  <!-- <listProjectApp /> -->
  <router-view></router-view>
</template>

<style>

</style>
