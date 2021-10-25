<template>
  <div>
    <h1 class="display-1 my-5">Добавить автора</h1>
    <v-text-field
      v-model="formData.name"
      label="ФИО"/>
    <v-text-field
      v-model="formData.dob"
      label="Дата рождения"
    />
    <v-text-field
      v-model="formData.gender"
      label="Пол"
    />
    <v-text-field
      v-model="formData.residence"
      label="Страна проживания"
    />
    <div class="d-flex justify-space-between">
      <v-btn>Отмена</v-btn>
      <v-btn
        @click="onClickCreate"
        color="primary"
      >Добавить</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      formData: {
        name: '',
        dob: '',
        gender: '',
        residence: '',
      },
    };
  },
  methods: {
    ...mapActions('authors', ['createAuthor']),
    onClickCreate() {
      this.createAuthor(this.formData);
    },
  },
};
</script>

<style scoped>

</style>
