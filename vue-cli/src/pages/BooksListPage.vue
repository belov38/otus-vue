<template>
  <div>
    <h1>Список книг</h1>
    <v-text-field
      placeholder="Поиск по автору или названию"
      prepend-inner-icon="mdi-magnify"
      v-model.trim="searchString"
      clearable
    />

    <v-btn @click="addBook">Добавить книгу</v-btn>
    <app-book-table :books="filteredBooks"/>
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
      if (this.searchString) {
        return this.books.filter((b) => b.title.includes(this.searchString)
          || b.author.includes(this.searchString));
      }
      return this.books;
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
