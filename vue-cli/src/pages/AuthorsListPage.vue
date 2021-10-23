<template>
  <div>
  <h1>Список авторов</h1>
    <v-btn @click="newAuthor">Добавить автора</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    newAuthor() {
      this.$router.push({ name: 'AuthorAdd' });
    },
  },
};
</script>

<style scoped>

</style>
