import { v4 as uuidv4 } from 'uuid';

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
  },
  actions: {
    createAuthor(context, payload) {
      context.commit('ADD_AUTHOR', payload);
    },
    deleteAuthor(context, authorId) {
      context.commit('DELETE_AUTHOR', authorId);
    },
  },
};
