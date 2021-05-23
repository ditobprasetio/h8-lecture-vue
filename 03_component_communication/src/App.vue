<template>
  <div>
    <h1>{{ title }}</h1>
    <Student
      v-for="student in students"
      :key="student.id"
      :std="student"
      @deleteStd="deleteStudent"
    ></Student>
  </div>
</template>

<script>
import Student from './Student';

export default {
  name: 'App',
  components: { Student },
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
