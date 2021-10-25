<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label="Дата рождения"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      no-title
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        @click="menu = false"
      >
        Отмена
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="onConfirm"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    date: null,
    menu: false,
  }),
  mounted() {
    this.date = this.value;
  },
  methods: {
    onConfirm() {
      this.$refs.menu.save(this.date);
      this.$emit('input', this.date);
    },
  },
};
</script>

<style scoped>

</style>
