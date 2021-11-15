<template>
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
        <th>
          -
        </th>
      </tr>
      </thead>
      <tbody>
      <AppBookTableRow
        v-for="item in books"
        :key="item.bookId"
        :item="item"
        @delete="deleteBook"
      />
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import { mapActions } from 'vuex';
import AppBookTableRow from '@/components/AppBookTableRow.vue';

export default {
  components: { AppBookTableRow },
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions('books', ['deleteBook']),
  },
};
</script>

<style scoped>

</style>
