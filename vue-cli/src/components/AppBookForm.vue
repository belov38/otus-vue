<template>
  <div>
    <slot name="header">
      <h1 class="display-1 my-5">Книга</h1>
    </slot>
    <v-text-field
      prepend-icon="mdi-book-open-blank-variant"
      v-model="formData.title"
      label="Название книги"
    />
    <app-author-input
      v-model="formData.author"
    />
    <v-text-field
      prepend-icon="mdi-barcode"
      v-model="formData.isbn"
      label="ISBN"
    />
    <v-text-field
      prepend-icon="mdi-tag-multiple-outline"
      v-model="formData.tags"
      label="Теги"
    />
    <v-text-field
      prepend-icon="mdi-cash"
      v-model.number="formData.price"
      label="Цена"
    />
    <v-text-field
      prepend-icon="mdi-shape"
      v-model="formData.category"
      label="Категория"
    />
    <v-textarea
      prepend-icon="mdi-card-text"
      v-model="formData.description"
      label="Краткое описание"
    />
    <div class="d-flex justify-space-between">
      <v-btn
      @click="onCancel">
        Отмена</v-btn>
      <v-btn
        @click="onOK"
        color="primary"
      >OK
      </v-btn>
    </div>
  </div>
</template>
<script>
import AppAuthorInput from '@/components/AppAuthorInput.vue';

export default {
  name: 'app-book-form',
  components: {
    AppAuthorInput,
  },
  props: {
    initValue: {
      type: Object,
      default() {
        return {
          title: '',
          author: '',
          isbn: '',
          tags: '',
          price: '',
          category: '',
          description: '',
        };
      },
    },
  },
  data() {
    return {
      formData: {
        title: '',
        author: '',
        isbn: '',
        tags: '',
        price: '',
        category: '',
        description: '',
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
  },
};
</script>
