<template>
  <div>
    <app-author-form :init-value="authorData" @confirm="onConfirm" @cancel="onCancel">
      <template #header>
        <h1 class="display-1 my-5">Информация об авторе</h1>
      </template>
    </app-author-form>
    <app-authors-books-list :books="authorsBooks"/>
  </div>
</template>

<script>
import AppAuthorForm from '@/components/AppAuthorForm.vue';
import AppAuthorsBooksList from '@/components/AppAuthorsBooksList.vue';

export default {
  components: {
    AppAuthorForm,
    AppAuthorsBooksList,
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
  computed: {
    authorsBooks() {
      return this.$store.getters['authors/getBooksByAuthorName'](this.authorData.name);
    },
  },
  methods: {
    onConfirm(formData) {
      const payload = {
        ...formData,
        authorId: this.$route.params.id,
      };
      this.$store.dispatch('authors/updateAuthor', payload);
      this.$router.push({ name: 'AuthorsList' });
    },
    onCancel() {
      this.$router.push({ name: 'AuthorsList' });
    },
  },
};
</script>

<style scoped>

</style>
