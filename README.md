## Vue Component

[Referensi](https://vuejs.org/v2/guide/components.html)

```sh
touch index.html index.js
```

```txt
.
├── index.html
└── index.js
```

_index.html_

```html
<div id="app">
  <!-- your code here -->
</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
<script src="./index.js"></script>
```

_index.js_

```js
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0,
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
});

new Vue({
  el: '#app',
});
```

Setelah membuat component, kamu bisa memanggilnya berkali kali

_index.html_

```html
<div id="app">
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>
```

## Single File Component

[Referensi](https://wahyudiputra.com/blog/build-vue-app-with-parcel/)

```
npm init -y
npm i vue

touch index.html
mkdir src
cd src
touch App.vue main.js
```

```txt
.
├── index.html
├── index.js
├── package.json
├── package-lock.json
└── src
    └── App.vue
```

_index.html_

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./src/main.js"></script>
  </body>
</html>
```

_index.js_

```js
import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
```

_App.vue_

```vue
<template>
  <div>
    <h1>Vue Single File Component x</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Vue is easy!',
    };
  },
};
</script>

<style></style>
```

```sh
npm i -g parcel-bundler
```

Add `.cache` & `dist` to .gitignore

## Component Communication

```sh
mkdir src
touch touch index.html index.js src/App.vue src/Student.vue
```

```txt
.
├── index.html
├── index.js
├── package.json
├── package-lock.json
└── src
    ├── App.vue
    └── Student.vue
```

_index.html_

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./index.js"></script>
  </body>
</html>
```

_index.js_

```js
import Vue from 'vue';
import App from './src/App.vue';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
```

_Student.vue_

```vue
<template>
  <div style="padding: 5px;">
    <table border="1px">
      <tr>
        <td>ID</td>
        <td>{{ std.id }}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{{ std.name }}</td>
      </tr>
      <tr>
        <td>Score</td>
        <td>{{ std.score }}</td>
      </tr>
      <tr>
        <td>Action</td>
        <!-- <td><button @click="$emit('deleteStd', std.id)">delete</button></td> -->
        <td>
          <button @click="rm">delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Student',
  props: ['std'], // register props
  data() {
    return {
      title: 'Student.vue',
    };
  },
  methods: {
    rm() {
      // akses fn yang dipass ke child dengan emit
      // semua argument yang ingin di pass ke fn diinput ke argument $emit posisi ke-2
      this.$emit('deleteStd', this.std.id);
    },
  },
};
</script>

<style></style>
```

_App.vue_

```vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- harus ada :key -->
    <!-- passing props dengan bind (:bind) -->
    <!-- passing fn dengan event (@event) -->
    <Student
      v-for="student in students"
      :key="student.id"
      :std="student"
      @deleteStd="deleteStudent"
    ></Student>
  </div>
</template>

<script>
import Student from './Student'; // import Student component

export default {
  name: 'App',
  components: { Student }, // register Student component key:value
  data() {
    return {
      title: 'App.vue',
      students: [
        { id: 1, name: 'Alpha', score: 90 },
        { id: 2, name: 'Bravo', score: 75 },
        { id: 3, name: 'Charlie', score: 50 },
      ],
    };
  },
  methods: {
    deleteStudent(id) {
      this.students = this.students.filter((student) => student.id !== id);
    },
  },
};
</script>

<style></style>
```
