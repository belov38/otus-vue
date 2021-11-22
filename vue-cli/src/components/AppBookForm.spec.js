import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { cloneDeep } from 'lodash';
import AppBookForm from '@/components/AppBookForm.vue';
import authorsStore from '@/store/modules/authors.store';
import booksStore from '@/store/modules/books.store';

Vue.use(Vuetify);

describe('AppBookForm.vue', () => {
  let vuetify;
  let store;
  let authorData;
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    vuetify = new Vuetify();
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

  it('mount a vue component with initial blank fields', () => {
    const wrapper = shallowMount(AppBookForm, {
      localVue,
      vuetify,
    });
    expect(wrapper)
      .toBeTruthy();
    expect(wrapper.vm.formData.title)
      .toBe('');
    expect(wrapper.vm.formData.author)
      .toBe('');
    expect(wrapper.vm.formData.isbn)
      .toBe('');
    expect(wrapper.vm.formData.tags)
      .toBe('');
    expect(wrapper.vm.formData.price)
      .toBe('');
    expect(wrapper.vm.formData.category)
      .toBe('');
    expect(wrapper.vm.formData.description)
      .toBe('');
  });

  it('Emit \'cancel\' event when button \'cancel\' clicked', () => {
    const wrapper = mount(AppBookForm, {
      localVue,
      vuetify,
      store,
    });

    const btn = wrapper.find('[data-test=cancel]');
    btn.trigger('click');
    expect(wrapper.emitted().cancel)
      .toBeTruthy();
  });

  it('Emit \'confirm\' event when button \'ok\' clicked', () => {
    const wrapper = mount(AppBookForm, {
      localVue,
      vuetify,
      store,
    });

    const btn = wrapper.find('[data-test=ok]');
    btn.trigger('click');
    expect(wrapper.emitted().confirm)
      .toBeTruthy();
  });

  it('Generate random data', () => {
    const wrapper = mount(AppBookForm, {
      store,
      localVue,
      vuetify,
    });
    store.state.authors.authors.push(authorData);

    const btn = wrapper.find('[data-test=generate]');
    btn.trigger('click');
    expect(wrapper.vm.formData.title)
      .not
      .toEqual('');
    expect(wrapper.vm.formData.description)
      .not
      .toEqual('');
    expect(wrapper.vm.formData.author)
      .not
      .toEqual('');
  });
});
