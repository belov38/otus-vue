<template>
  <v-combobox
    prepend-icon="mdi-account"
    label="Автор"
    :items="authors"
    @change="onChange"
    v-model="currentValue"
  />
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
      currentValue: '',
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue) {
        this.currentValue = newValue;
      },
    },
  },
  computed: {
    authors() {
      return this.$store.state.authors.authors.map((i) => i.name);
    },
  },
  methods: {
    onChange() {
      this.$emit('input', this.currentValue);
    },
  },
};
</script>

<style scoped>

</style>
