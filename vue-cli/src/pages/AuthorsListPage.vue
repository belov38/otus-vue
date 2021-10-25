<template>
  <div>
    <h1>Список авторов</h1>
    <v-btn @click="newAuthor">Добавить автора</v-btn>
    <app-author-table :authors="authors" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppAuthorTable from '@/components/AppAuthorTable.vue';

export default {
  components: {
    AppAuthorTable,
  },
  computed: {
    ...mapState('authors', ['authors']),
  },
  methods: {
    newAuthor() {
      this.$router.push({ name: 'AuthorAdd' });
    },
  },
};
</script>

<style scoped>

</style>
