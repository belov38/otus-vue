<template>
  <div>
    <slot name="header">
      <h1 class="display-1 my-5">Автор</h1>
    </slot>
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
      <v-btn
        @click="onCancel"
      >Отмена</v-btn>
      <v-btn
        @click="onOK"
        color="primary"
      >OK
      </v-btn>
    </div>
  </div>
</template>
<script>
import AppBirthdayPicker from '@/components/AppBirthdayPicker.vue';
import AppGenderPicker from '@/components/AppGenderPicker.vue';

export default {
  name: 'app-author-form',
  props: {
    initValue: {
      type: Object,
      default() {
        return {
          name: '',
          dob: '',
          gender: '',
          residence: '',
        };
      },
    },
  },
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
  mounted() {
    this.formData.name = this.initValue.name;
    this.formData.dob = this.initValue.dob;
    this.formData.gender = this.initValue.gender;
    this.formData.residence = this.initValue.residence;
  },
  methods: {
    onOK() {
      this.$emit('confirm', this.formData);
    },
    onCancel() {
      this.$emit('cancel');
    },
  },
};
</script>
