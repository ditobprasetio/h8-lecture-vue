const vue = new Vue({
  el: '#app',
  data: {
    message: 'test',
    todos: [
      { id: 1, title: 'A' },
      { id: 2, title: 'B' },
      { id: 3, title: 'C' },
    ],
    x: 'test',
    xDisabled: true,
  },
  computed: {
    todosMax2: function () {
      console.log('todosMax2 processed');
      return this.todos.filter((todo) => todo.id <= 2);
    },
  },
  watch: {
    x: function (current, prev) {
      console.log(current, 'sebelumnya: ', prev);
      // * bagus untuk validasi form, handle page, etc
      // * conditional berdasarkan state
      if (current.length < 10) this.xDisabled = true;
      else this.xDisabled = false;
    },
  },
  methods: {
    getTodosMax2: function () {
      console.log('getTodosMax2 processed');
      return this.todos.filter((todo) => todo.id <= 2);
    },
  },
  beforeCreate() {
    console.log('beforeCreate');
    console.log(this.message, '<<< message');
    // ! belum bisa akses state
    // ! belum bisa akses element yang dirender oleh vue
  },
  created() {
    console.log('created');
    console.log(this.message, '<<< message');
    console.log(this.$el);
    console.log(document.getElementById('A'), '<<< ID A');
    // * cek localStorage / sessionStorage
    // * ambil data init ke server
    // ! belum bisa akses element yang dirender oleh vue
  },
  // beforeMount() {
  //   console.log('beforeMount');
  // },
  mounted() {
    console.log('mounted');
    this.message = 'oke';
    console.log(this.$el);
    console.log(document.getElementById('A'), '<<< ID A');
    // * sudah bisa akses element yang dirender oleh vue
  },
  // beforeUpdate() {
  //   console.log('beforeUpdate');
  // },
  // updated() {
  //   console.log('updated');
  // },
  // beforeDestroy() {
  //   console.log('beforeDestroy');
  // },
  // destroyed() {
  //   console.log('destroyed');
  // },
});
