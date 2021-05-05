
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
    postTodo() {
      this.todos.push({
        title: this.todo.title,
        description: this.todo.description
      });
      this.todo.title = '';
      this.todo.description = '';
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    }
  },
});