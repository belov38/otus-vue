<template>
  <div>
    <h1 class="display-1 my-5">Добавить новую книгу</h1>
    <v-text-field
      v-model="formData.title"
      label="Название книги"
    />
    <v-text-field
      v-model="formData.author"
      label="Автор"
    />
    <v-text-field
      v-model="formData.isbn"
      label="ISBN"
    />
    <v-text-field
      v-model="formData.tags"
      label="Теги"
    />
    <v-text-field
      v-model.number="formData.price"
      label="Цена"
    />
    <v-text-field
      v-model="formData.category"
      label="Категория"
    />
    <v-textarea
      v-model="formData.description"
      label="Краткое описание"
    />
    <div class="d-flex justify-space-between">
      <v-btn>Отмена</v-btn>
      <v-btn
        @click="onClickCreate"
        color="primary"
      >Создать</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      formData: {
        title: '',
        author: '',
        isbn: '',
        tags: [],
        price: '',
        category: '',
        description: '',
      },
    };
  },
  methods: {
    ...mapActions('books', ['createBook']),
    onClickCreate() {
      this.createBook(this.formData);
    },
  },
};
</script>

<style scoped>

</style>
