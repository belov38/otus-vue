<template>
  <div>
    <app-book-form
      @confirm="onConfirm"
      :init-value="bookData"
    >
      <template #header>
        <h1 class="display-1 my-5">Информация о книге</h1>
      </template>
    </app-book-form>
  </div>
</template>

<script>
import AppBookForm from '@/components/AppBookForm.vue';

export default {
  name: 'BookEditPage',
  components: {
    AppBookForm,
  },
  data() {
    return {
      bookData: {
        title: '',
        author: '',
        isbn: '',
        tags: '',
        price: '',
        category: '',
        description: '',
      },
    };
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler(value) {
        Object.assign(this.bookData, this.$store.getters['books/getBookById'](value));
      },
    },
  },
  methods: {
    onConfirm(formData) {
      const payload = {
        ...formData,
        bookId: this.$route.params.id,
      };
      this.$store.dispatch('books/updateBook', payload);
    },
  },
};
</script>

<style scoped>

</style>
