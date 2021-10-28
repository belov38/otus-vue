<template>
  <div class="mt-10">
    <h1 class="display-1">Книги автора</h1>
    <app-book-table :books="books" />
  </div>
</template>

<script>
import AppBookTable from '@/components/AppBookTable.vue';

export default {
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  components: {
    AppBookTable,
  },
};
</script>

<style scoped>

</style>
