<template>
  <tr>
    <td>{{ item.title }}</td>
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
      <v-btn
        @click="delConfirmed=true"
        v-else
        small
        plain>
        <v-icon>
          mdi-delete
        </v-icon>
      </v-btn>
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
