<template>
  <div>
    <h1 class="display-1 my-5">Добавить автора</h1>
    <v-text-field
      prepend-icon="mdi-form-textbox"
      v-model="formData.name"
      label="ФИО"/>
    <app-birthday-picker v-model="formData.dob"/>
    <app-gender-picker v-model="formData.gender"/>
    <v-text-field
      prepend-icon="mdi-earth"
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
import AppBirthdayPicker from '@/components/AppBirthdayPicker.vue';
import AppGenderPicker from '@/components/AppGenderPicker.vue';

export default {
  components: {
    AppBirthdayPicker,
    AppGenderPicker,
  },
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
