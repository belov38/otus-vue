import { mount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { cloneDeep } from 'lodash';
import VueRouter from 'vue-router';
import authorsStore from '@/store/modules/authors.store';
import booksStore from '@/store/modules/books.store';
import AuthorAddPage from '@/pages/AuthorAddPage.vue';
import routes from '@/router/routes';

Vue.use(Vuetify);

describe('AuthorAddPage.vue', () => {
  let vuetify;
  let store;
  let router;
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    vuetify = new Vuetify();
    router = new VueRouter({ routes });
    store = new Vuex.Store(cloneDeep({
      modules: {
        authors: authorsStore,
        books: booksStore,
      },
    }));
  });

  it('Mount a page component', () => {
    const wrapper = mount(AuthorAddPage, {
      localVue,
      vuetify,
      store,
    });

    expect(wrapper)
      .toBeTruthy();
  });

  it('Click CANCEL button DOES NOT dispatch createAuthor() action and routes back to Author List', () => {
    const wrapper = mount(AuthorAddPage, {
      localVue,
      vuetify,
      store,
      router,
    });
    const push = jest.spyOn(wrapper.vm.$router, 'push');
    const dispatch = jest.spyOn(wrapper.vm.$store, 'dispatch');
    const btn = wrapper.find('[data-test=cancel]');
    btn.trigger('click');
    expect(dispatch).not.toHaveBeenCalled();
    expect(push).toHaveBeenCalledWith({ name: 'AuthorsList' });
  });

  it('Click OK button DOES dispatch createAuthor() action and routes back to Author List', () => {
    const wrapper = mount(AuthorAddPage, {
      localVue,
      vuetify,
      store,
      router,
    });
    const push = jest.spyOn(wrapper.vm.$router, 'push');
    const dispatch = jest.spyOn(wrapper.vm.$store, 'dispatch');
    const btn = wrapper.find('[data-test=ok]');
    btn.trigger('click');
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith('authors/createAuthor', expect.any(Object));
    expect(push).toHaveBeenCalledWith({ name: 'AuthorsList' });
  });
});
