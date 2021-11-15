import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { cloneDeep } from 'lodash';
import booksStore from '@/store/modules/books.store';
import authorsStore from '@/store/modules/authors.store';

describe('authors.store.js', () => {
  let store;
  let authorData;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(cloneDeep({
      modules: {
        authors: authorsStore,
        books: booksStore,
      },
    }));
    authorData = {
      authorId: 'FAKE_AUTHOR_ID',
      name: 'FAKE_NAME',
    };
  });

  it('Init empty store', () => {
    expect(store.state.authors.authors)
      .toHaveLength(0);
  });

  it('Action createAuthor', () => {
    store.dispatch('authors/createAuthor', authorData);
    expect(store.state.authors.authors).toHaveLength(1);
  });

  it('Each author must have unique authorId', () => {
    store.dispatch('authors/createAuthor', authorData);
    store.dispatch('authors/createAuthor', authorData);
    expect(store.state.authors.authors[0].authorId)
      .not.toBe(store.state.authors.authors[1].authorId);
  });

  it('Action deleteAuthor', () => {
    store.state.authors.authors.push(authorData);
    store.dispatch('authors/deleteAuthor', 'FAKE_AUTHOR_ID');
    expect(store.state.authors.authors).toHaveLength(0);
  });

  it('Action updateAuthor', () => {
    const newAuthorData = {
      authorId: 'FAKE_AUTHOR_ID',
      name: 'NEW_NAME',
    };

    store.state.authors.authors.push(authorData);
    store.dispatch('authors/updateAuthor', newAuthorData);
    expect(store.state.authors.authors[0]).toHaveProperty('name', 'NEW_NAME');
  });

  it('Getter getAuthorById', () => {
    store.state.authors.authors.push(authorData);

    const author = store.getters['authors/getAuthorById']('FAKE_AUTHOR_ID');
    expect(author.authorId).toBe('FAKE_AUTHOR_ID');
  });

  it('Get all books written by the author', () => {
    const bookData = {
      bookId: 'FAKE_BOOK_ID',
      title: 'FAKE_TITLE',
      author: 'FAKE_NAME',
    };
    store.state.authors.authors.push(authorData);
    store.state.books.books.push(bookData);
    const books = store.getters['authors/getBooksByAuthorName']('FAKE_NAME');
    expect(books).toHaveLength(1);
    expect(books[0].author).toBe('FAKE_NAME');
  });
});

describe('books.store.js', () => {
  let store;
  let bookData;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(cloneDeep({
      modules: {
        authors: authorsStore,
        books: booksStore,
      },
    }));
    bookData = {
      bookId: 'FAKE_BOOK_ID',
      title: 'FAKE_TITLE',
    };
  });

  it('Init store with 0 books', () => {
    expect(store.state.books.books)
      .toHaveLength(0);
  });

  it('Action createBook', () => {
    store.dispatch('books/createBook', bookData);
    expect(store.state.books.books).toHaveLength(1);
  });

  it('Action deleteBook', () => {
    store.state.books.books.push(bookData);
    store.dispatch('books/deleteBook', 'FAKE_BOOK_ID');
    expect(store.state.books.books).toHaveLength(0);
  });

  it('Action updateBooks', () => {
    const newBookData = {
      bookId: 'FAKE_BOOK_ID',
      title: 'NEW_TITLE',
    };

    store.state.books.books.push(bookData);
    store.dispatch('books/updateBook', newBookData);
    expect(store.state.books.books[0]).toHaveProperty('title', 'NEW_TITLE');
  });

  it('Getter getBookById', () => {
    store.state.books.books.push(bookData);

    const book = store.getters['books/getBookById']('FAKE_BOOK_ID');
    expect(book.bookId).toBe('FAKE_BOOK_ID');
  });

  it('Each book must have unique bookId', () => {
    store.dispatch('books/createBook', bookData);
    store.dispatch('books/createBook', bookData);
    expect(store.state.books.books[0].bookId).not.toBe(store.state.books.books[1].bookId);
  });
});
