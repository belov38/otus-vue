<template>
  <div>
    <AppBookForm @confirm="onConfirm" @cancel="onCancel">
      <template #header>
        <h1 class="display-1 my-5">Добавить новую книгу</h1>
      </template>
    </AppBookForm>
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
      this.$router.push({ name: 'BooksList' });
    },
    onCancel() {
      this.$router.push({ name: 'BooksList' });
    },
  },
};
</script>
