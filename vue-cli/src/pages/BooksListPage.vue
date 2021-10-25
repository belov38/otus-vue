<template>
  <div>
    <h1>Список книг</h1>
    <v-btn @click="addBook">Добавить книгу</v-btn>
    <app-book-table :books="books"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppBookTable from '@/components/AppBookTable.vue';

export default {
  components: { AppBookTable },
  computed: {
    ...mapState('books', ['books']),
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
