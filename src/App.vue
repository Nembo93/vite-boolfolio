<script>
import {store} from "./store.js";

import headerApp from "./components/headerApp.vue";
import mainApp from "./components/mainApp.vue";

export default{
  components: {
    headerApp,
    mainApp
    },

    data (){
      return{
        store,
      };

  },

};
</script>

<template>
  <headerApp />
  <mainApp />
</template>

<style>

</style>
