<template>
  <div>
    <app-author-form :init-value="authorData" @confirm="onConfirm">
      <template #header>
        <h1 class="display-1 my-5">Информация об авторе</h1>
      </template>
    </app-author-form>
  </div>
</template>

<script>
import AppAuthorForm from '@/components/AppAuthorForm.vue';

export default {
  components: {
    AppAuthorForm,
  },
  data() {
    return {
      authorData: {
        name: '',
        dob: '',
        gender: '',
        residence: '',
      },
    };
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler(value) {
        Object.assign(this.authorData, this.$store.getters['authors/getAuthorById'](value));
      },
    },
  },
  methods: {
    onConfirm(formData) {
      const payload = {
        ...formData,
        authorId: this.$route.params.id,
      };
      this.$store.dispatch('authors/updateAuthor', payload);
    },
  },
};
</script>

<style scoped>

</style>
