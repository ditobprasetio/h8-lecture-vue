<template>
  <div class="col">
    <div class="card h-100">
      <img
        :src="this.movie.image"
        class="card-img-top"
        alt="dummy"
        style="object-fit:cover;"
      />
      <div class="card-body">
        <h5 class="card-title">{{ this.movie.title }}</h5>
        <p class="card-text">
          {{ this.movie.year }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['movie'],
};
</script>

<style></style>
