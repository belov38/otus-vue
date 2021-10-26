import { v4 as uuidv4 } from 'uuid';
import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    books: [],
  },
  mutations: {
    ADD_BOOK(state, {
      title,
      author,
      isbn,
      tags,
      price,
      category,
      description,
    }) {
      const bookData = {
        bookId: uuidv4(),
        title,
        author,
        isbn,
        tags,
        price,
        category,
        description,
      };
      state.books.push(bookData);
    },
    DELETE_BOOK(state, bookId) {
      state.books = state.books.filter((i) => i.bookId !== bookId);
    },
    UPDATE_BOOK(state, {
      bookId, title, author, isbn, tags, price, category, description,
    }) {
      const index = state.books.findIndex((b) => b.bookId === bookId);
      Vue.set(state.books, index, {
        title, author, isbn, tags, price, category, description,
      });
    },
  },
  actions: {
    createBook(context, bookData) {
      context.commit('ADD_BOOK', bookData);
    },
    deleteBook(context, bookId) {
      context.commit('DELETE_BOOK', bookId);
    },
    updateBook(context, payload) {
      context.commit('UPDATE_BOOK', payload);
    },
  },
  getters: {
    getBookById: (state) => (bookId) => state.books.find((i) => i.bookId === bookId),
  },
};
