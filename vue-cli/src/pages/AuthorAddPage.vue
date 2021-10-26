<template>
  <div>
    <app-author-form @confirm="onConfirm" @cancel="onCancel">
      <template #header>
        <h1 class="display-1 my-5">Добавить нового автора</h1>
      </template>
    </app-author-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppAuthorForm from '@/components/AppAuthorForm.vue';

export default {
  components: {
    AppAuthorForm,
  },
  methods: {
    ...mapActions('authors', ['createAuthor']),
    onConfirm(formData) {
      this.createAuthor(formData);
      this.$router.push({ name: 'AuthorsList' });
    },
    onCancel() {
      this.$router.push({ name: 'AuthorsList' });
    },
  },
};
</script>
