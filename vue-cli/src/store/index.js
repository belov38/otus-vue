import Vue from 'vue';
import Vuex from 'vuex';
import books from './modules/books.strore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { books },
});
