import { v4 as uuidv4 } from 'uuid';

export default {
  namespaced: true,
  state: {
    books: [],
  },
  mutations: {
    ADD_BOOK(state, {
      title, author, isbn, tags, price, category, description,
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
  },
  actions: {
    createBook(context, bookData) {
      context.commit('ADD_BOOK', bookData);
    },
    deleteBook(context, bookId) {
      context.commit('DELETE_BOOK', bookId);
    },
  },
};
