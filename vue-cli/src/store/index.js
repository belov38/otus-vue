import Vue from 'vue';
import Vuex from 'vuex';
import books from './modules/books.store';
import authors from './modules/authors.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { books, authors },
});
