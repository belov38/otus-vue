<template>
  <div>
    <app-book-form @confirm="onConfirm">
      <template #header>
        <h1 class="display-1 my-5">Добавить новую книгу</h1>
      </template>
    </app-book-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppBookForm from '@/components/AppBookForm.vue';

export default {
  components: { AppBookForm },
  methods: {
    ...mapActions('books', ['createBook']),
    onConfirm(formData) {
      this.createBook(formData);
    },
  },
};
</script>
