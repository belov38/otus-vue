import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import books from './modules/books.store';
import authors from './modules/authors.store';

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: { books, authors },
  plugins: [vuexLocal.plugin],
});
