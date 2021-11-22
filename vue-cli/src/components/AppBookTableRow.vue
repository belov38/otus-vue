<template>
  <tr>
    <td data-test="table-row">{{ item.title }}</td>
    <td>{{ item.author }}</td>
    <td class="actions">
      <span class="d-flex"
            v-if="delConfirmed">
        <v-btn @click="delConfirmed=false">
          ОТМЕНА
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          @click="onDelete"
          color="warning">
          УДАЛИТЬ
        </v-btn>
      </span>
      <span
        v-else
      >
            <v-btn small plain @click="onEditBook">
            <v-icon>mdi-pen</v-icon>
        </v-btn>
        <v-btn
          @click="delConfirmed=true"
          small
          plain>
        <v-icon>
          mdi-delete
        </v-icon>
      </v-btn>
      </span>

    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      delConfirmed: false,
    };
  },
  methods: {
    onEditBook() {
      this.$router.push({
        name: 'BookEdit',
        params: { id: this.item.bookId },
      });
    },
    onDelete() {
      this.$emit('delete', this.item.bookId);
    },
  },
};
</script>

<style scoped>
.actions {
  width: 300px;
}
</style>
