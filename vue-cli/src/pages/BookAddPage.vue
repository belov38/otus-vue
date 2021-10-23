<template>
  <div>
    <h1 class="display-1 my-5">Добавить новую книгу</h1>
    <v-text-field label="Название книги"/>
    <v-text-field label="Автор"/>
    <v-text-field label="ISBN"/>
    <v-text-field label="Теги"/>
    <v-text-field label="Цена"/>
    <v-text-field label="Категория"/>
    <v-textarea label="Краткое описание"/>
    <div class="d-flex justify-space-between">
      <v-btn>Отмена</v-btn>
      <v-btn color="primary">Добавить</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookAddPage',
};
</script>

<style scoped>

</style>
