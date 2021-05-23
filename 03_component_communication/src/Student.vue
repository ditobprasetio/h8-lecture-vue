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
  props: ['std'],
  data() {
    return {
      title: 'Student.vue',
    };
  },
  methods: {
    rm() {
      this.$emit('deleteStd', this.std.id);
    },
  },
};
</script>

<style></style>
