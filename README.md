Semuanya bisa dilihat di [Vue Guide](https://vuejs.org/v2/guide/)

Install:
- Browser extension: Vue dev tools
- VSCode extension: Vetur
- JSON Server `npm i -g json-server`

How to embed vue:
```
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
```

Directives:
- Vue
- variable interpolation
- v-if
- v-else-if
- v-else
- v-if vs v-show => check your dom
- v-for
- v-model vs v-bind => check your state
- v-on:click
- v-on:click.prevent
- v-on:submit.prevent

Additional:
- v-model.trim
- v-model.number


JSON Server

```
json-server todos.json -p 3000

GET    /todos
GET    /todos/{id}
POST   /todos
PUT    /todos/{id}
PATCH  /todos/{id}
DELETE /todos/{id}
```

How to embed Axios:
```
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
[Axios Manual](https://github.com/axios/axios#installing)