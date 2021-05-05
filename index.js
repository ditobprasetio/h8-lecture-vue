const app = new Vue({
  el: '#app',
  data: {
    todo: {
      title: '',
      description: '',
    },
    todos: [],
  },
  methods: {
    listTodo() {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/todos',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(({ data }) => {
          this.todos = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    postTodo() {
      this.todos.push({
        title: this.todo.title,
        description: this.todo.description,
      });
      this.todo.title = '';
      this.todo.description = '';
    },
    deleteTodo(id) {
      axios({
        method: 'DELETE',
        url: 'http://localhost:3000/todos/' + id,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(() => {
          this.listTodo();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
