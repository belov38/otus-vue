<template>
  <div>
    <h1>Список книг</h1>
    <v-text-field
      placeholder="Поиск по автору или названию"
      prepend-inner-icon="mdi-magnify"
      v-model.trim="searchString"
      clearable
    />

    <v-btn @click="addBook" data-test="add-book">Добавить книгу</v-btn>
    <AppBookTable :books="filteredBooks"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppBookTable from '@/components/AppBookTable.vue';

export default {
  components: { AppBookTable },
  data() {
    return {
      searchString: '',
    };
  },
  computed: {
    ...mapState('books', ['books']),
    filteredBooks() {
      if (!this.searchString) {
        return this.books;
      }
      const lowerCaseBooks = this.books.map((b) => ({
        bookId: b.bookId,
        title: b.title.toLowerCase(),
        author: b.author.toLowerCase(),
      }));
      const booksIds = lowerCaseBooks.filter((b) => b.title.includes(this.searchString)
        || b.author.includes(this.searchString));

      const result = [];
      booksIds.forEach((filteredBook) => {
        result.push(this.books.filter((b) => b.bookId === filteredBook.bookId)[0]);
      });
      return result;
    },
  },
  methods: {
    addBook() {
      this.$router.push({
        name: 'BookAdd',
      });
    },
  },
};
</script>
