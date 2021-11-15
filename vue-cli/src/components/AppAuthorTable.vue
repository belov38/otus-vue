<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">
          ФИО
        </th>
        <th class="text-left">
          Страна
        </th>
        <th>
          -
        </th>
      </tr>
      </thead>
      <tbody>
      <AppAuthorTableRow
        v-for="item in authors"
        :key="item.authorId"
        :item="item"
        @delete="deleteAuthor"
      />
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import { mapActions } from 'vuex';
import AppAuthorTableRow from '@/components/AppAuthorTableRow.vue';

export default {
  components: { AppAuthorTableRow },
  props: {
    authors: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions('authors', ['deleteAuthor']),
  },
};
</script>

<style scoped>

</style>
