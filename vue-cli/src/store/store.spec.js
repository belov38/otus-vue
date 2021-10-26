import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { cloneDeep } from 'lodash';
import booksStore from '@/store/modules/books.store';

describe('books.store.js', () => {
  let store;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(cloneDeep({
      modules: { books: booksStore },
    }));
  });

  it('Init store with 0 books', () => {
    expect(store.state.books.books)
      .toHaveLength(0);
  });

  it('Action createBook', () => {
    const bookData = {
      bookId: 'FAKE_BOOK_ID',
    };
    store.dispatch('books/createBook', bookData);
    expect(store.state.books.books).toHaveLength(1);
  });

  it('Action deleteBook', () => {
    const fakeBookId = 'FAKE_BOOK_ID';
    const bookData = {
      bookId: fakeBookId,
    };

    store.state.books.books.push(bookData);
    store.dispatch('books/deleteBook', fakeBookId);
    expect(store.state.books.books).toHaveLength(0);
  });

  it('Action updateBooks', () => {
    const oldBookData = {
      bookId: 'FAKE_BOOK_ID',
      title: 'OLD_TITLE',
    };

    const newBookData = {
      bookId: 'FAKE_BOOK_ID',
      title: 'NEW_TITLE',
    };

    store.state.books.books.push(oldBookData);
    store.dispatch('books/updateBook', newBookData);
    expect(store.state.books.books[0]).toHaveProperty('title', 'NEW_TITLE');
  });

  it('Getter getBookById', () => {
    const bookData = {
      bookId: 'FAKE_BOOK_ID',
    };
    store.state.books.books.push(bookData);

    const book = store.getters['books/getBookById']('FAKE_BOOK_ID');
    expect(book.bookId).toBe('FAKE_BOOK_ID');
  });
});
