<template>
  <form>
    <div class="mb-3">
      <label for="imageUrl" class="form-label">Image Url</label>
      <textarea v-model="movie.imageUrl" id="imageUrl" class="form-control" rows="3" placeholder="Movie Image URL"></textarea>
    </div>
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input v-model="movie.title" type="text" class="form-control" id="title" placeholder="Movie Title" />
    </div>
    <div class="mb-3">
      <label for="year" class="form-label">Year</label>
      <input v-model="movie.year" type="number" class="form-control" id="year" placeholder="Movie Year" />
    </div>
    <button @click.prevent="postMovie" type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'FormAddMovie',
  data() {
    return {
      movie: {
        imageUrl: '',
        title: '',
        year: 2020,
      },
    };
  },
  methods: {
    postMovie() {
      this.$emit('postMovie', this.movie);
    },
  },
};
</script>

<style></style>
