<template>
  <div>
    <h1>Список книг</h1>
    <v-btn @click="addBook">Добавить книгу</v-btn>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Название книги
          </th>
          <th class="text-left">
            Автор
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="item in booksList"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BooksListPage',
  computed: {
    ...mapState('books', ['booksList']),
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

<style scoped>

</style>
