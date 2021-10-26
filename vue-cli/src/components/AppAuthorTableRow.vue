<template>
  <tr>
    <td>{{ item.name }}</td>
    <td>{{ item.residence }}</td>
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
      <span v-else>
      <v-btn small plain @click="onEditAuthor">
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
    onDelete() {
      this.$emit('delete', this.item.authorId);
    },
    onEditAuthor() {
      this.$router.push({
        name: 'AuthorEdit',
        params: { id: this.item.authorId },
      });
    },
  },
};
</script>

<style scoped>
.actions {
  width: 300px;
}
</style>
