<template>
  <div>
    <h1 class="display-1 my-5">Добавить автора</h1>
    <v-text-field label="ФИО"/>
    <v-text-field label="Дата рождения"/>
    <v-text-field label="Пол"/>
    <v-text-field label="Страна проживания"/>
    <v-text-field label="Библиография"/>
    <div class="d-flex justify-space-between">
      <v-btn>Отмена</v-btn>
      <v-btn color="primary">Добавить</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorAddPage',
};
</script>

<style scoped>

</style>
