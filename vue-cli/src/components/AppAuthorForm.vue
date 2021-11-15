<template>
  <div>
    <slot name="header">
      <h1 class="display-1 my-5">Автор</h1>
    </slot>
    <v-btn @click="generateRandom">
      Придумать
    </v-btn>
    <v-text-field
      prepend-icon="mdi-form-textbox"
      v-model="formData.name"
      label="ФИО"/>
    <AppBirthdayPicker v-model="formData.dob"/>
    <AppGenderPicker v-model="formData.gender"/>
    <v-text-field
      prepend-icon="mdi-earth"
      v-model="formData.residence"
      label="Страна проживания"
    />
    <div class="d-flex justify-space-between">
      <v-btn @click="onCancel">
        Отмена
      </v-btn>
      <v-btn
        @click="onOK"
        color="primary"
      >OK
      </v-btn>
    </div>
  </div>
</template>
<script>
import faker from 'faker';
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
  created() {
    Object.assign(this.formData, this.initValue);
  },
  methods: {
    onOK() {
      this.$emit('confirm', this.formData);
    },
    onCancel() {
      this.$emit('cancel');
    },
    generateRandom() {
      this.formData.name = faker.name.findName();
      this.formData.residence = faker.address.country();
      this.$set(this.formData, 'gender', 'Мужской');
      const genders = ['Мужской', 'Женский', 'не указан'];
      this.formData.gender = genders[Math.floor(Math.random() * 3)];
    },
  },
};
</script>
