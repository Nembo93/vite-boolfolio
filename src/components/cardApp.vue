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
      <a href="#" class="btn btn-primary">Leggi di più</a>
    </div>
  </div>

</template>

<style>
</style>