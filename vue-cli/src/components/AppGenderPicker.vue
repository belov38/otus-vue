<template>
  <v-select
    :items="items"
    label="Пол"
    @change="onChange"
    v-model="gender"
    prepend-icon="mdi-gender-male-female"
  ></v-select>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      gender: '',
      items: ['Мужской', 'Женский', 'не указан'],
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue) {
        this.gender = newValue;
      },
    },
  },
  methods: {
    onChange() {
      this.$emit('input', this.gender);
    },
  },
};
</script>

<style scoped>

</style>
