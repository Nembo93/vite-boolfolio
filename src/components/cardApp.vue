<script>
export default {
  name: "cardApp",
  props: {
    data: Object,
  },

  methods: {
    truncateText(text) {
      return text.substring(0, 250) + "...";
    },
  },
};
</script>

<template>

  <div class="my-card">
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text">
        {{ truncateText(data.description) }}
      </p>
      <router-link :to="{ name: 'single-project', params: { slug: data.slug} }" class="btn btn-primary">Leggi di più</router-link>
    </div>
  </div>

</template>

<style>
</style>