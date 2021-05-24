<template>
  <div class="container">
    <div class="row mt-5">
      <div class="d-flex flex-row-reverse my-3">
        <button class="btn btn-primary" @click="toggleForm">
          {{ isFormShown ? 'Close Form' : 'Add New Movie' }}
        </button>
        <div class="btn-group me-2">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Sort By
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#" @click.prevent="setSort('title')">Title</a>
            </li>
            <li>
              <a class="dropdown-item" href="#" @click.prevent="setSort('year')">Year</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <FormAddMovie v-if="isFormShown" @postMovie="postMovie"></FormAddMovie>
    <div v-if="!isFormShown" class="row row-cols-1 row-cols-md-4 g-4">
      <Movie v-for="movie in moviesSorted" :key="movie.id" :movie="movie"></Movie>
    </div>
  </div>
</template>

<script>
import FormAddMovie from './FormAddMovie.vue';
import Movie from './Movie.vue';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:3000';

export default {
  name: 'App',
  components: { FormAddMovie, Movie },
  data() {
    return {
      message: 'test',
      movies: [],
      sort: 'title',
      isFormShown: false,
    };
  },
  computed: {
    moviesSorted() {
      return this.movies.sort((a, b) => (a[this.sort] < b[this.sort] ? -1 : 1));
    },
  },
  methods: {
    setSort(val) {
      this.sort = val;
    },
    toggleForm() {
      this.isFormShown = !this.isFormShown;
    },
    postMovie(movie) {
      Axios({
        method: 'POST',
        url: '/movies',
        headers: { 'Content-Type': 'application/json' },
        data: movie,
      })
        .then((data) => {
          this.toggleForm();
          this.reloadMovies();
        })
        .catch((err) => alert(err));
    },
    reloadMovies() {
      Axios({
        method: 'GET',
        url: '/movies',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(({ data: movies }) => (this.movies = movies))
        .catch((err) => alert(err));
    },
  },
  created() {
    this.reloadMovies();
  },
};
</script>

<style></style>
