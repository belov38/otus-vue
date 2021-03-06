import { v4 as uuidv4 } from 'uuid';
import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    authors: [],
  },
  mutations: {
    ADD_AUTHOR(state, {
      name, dob, gender, residence,
    }) {
      const authorsData = {
        authorId: uuidv4(),
        name,
        dob,
        gender,
        residence,
      };
      state.authors.push(authorsData);
    },
    DELETE_AUTHOR(state, authorId) {
      state.authors = state.authors.filter((i) => i.authorId !== authorId);
    },
    UPDATE_AUTHOR(state, {
      authorId, name, dob, gender, residence,
    }) {
      const index = state.authors.findIndex((a) => a.authorId === authorId);
      Vue.set(state.authors, index, {
        authorId, name, dob, gender, residence,
      });
    },
  },
  actions: {
    createAuthor(context, payload) {
      context.commit('ADD_AUTHOR', payload);
    },
    deleteAuthor(context, authorId) {
      context.commit('DELETE_AUTHOR', authorId);
    },
    updateAuthor(context, payload) {
      context.commit('UPDATE_AUTHOR', payload);
    },
  },
  getters: {
    getAuthorById: (state) => (authorId) => state.authors.find((i) => i.authorId === authorId),
    getBooksByAuthorName: (state, getters, rootState) => (authorName) => rootState
      .books.books.filter((b) => b.author === authorName),
  },
};
