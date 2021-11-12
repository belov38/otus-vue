<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-btn text to="/books">Книги</v-btn>
        <v-btn text to="/authors">Авторы</v-btn>
      </div>

    </v-app-bar>

    <v-main>
      <v-row justify="center" class="mt-4">
        <v-col cols="8">
          <router-view/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
