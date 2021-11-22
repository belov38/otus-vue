import { mount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import AppAuthorForm from '@/components/AppAuthorForm.vue';

Vue.use(Vuetify);

describe('AppAuthorForm.vue', () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('mount a vue component with initial blank fields', () => {
    const wrapper = mount(AppAuthorForm, {
      localVue,
      vuetify,
    });
    expect(wrapper)
      .toBeTruthy();
    expect(wrapper.vm.formData.name)
      .toBe('');
    expect(wrapper.vm.formData.dob)
      .toBe('');
    expect(wrapper.vm.formData.gender)
      .toBe('');
    expect(wrapper.vm.formData.residence)
      .toBe('');
  });

  it('Set initial value', () => {
    const INIT_VALUE = {
      name: 'FAKE_NAME',
      dob: '01-01-2000',
      gender: 'FAKE_GENDER',
      residence: 'FAKE_RESIDENCE',
    };

    const wrapper = mount(AppAuthorForm, {
      localVue,
      vuetify,
      propsData: { initValue: INIT_VALUE },
    });

    expect(wrapper.find('[data-test=name]').element.value)
      .toBe(INIT_VALUE.name);
    expect(wrapper.vm.formData.dob)
      .toBe(INIT_VALUE.dob);
    expect(wrapper.vm.formData.gender)
      .toBe(INIT_VALUE.gender);
    expect(wrapper.find('[data-test=residence]').element.value)
      .toBe(INIT_VALUE.residence);
  });

  it("Emit 'cancel' event when button 'cancel' clicked", () => {
    const wrapper = mount(AppAuthorForm, {
      localVue,
      vuetify,
    });

    const btn = wrapper.find('[data-test=cancel]');
    btn.trigger('click');
    expect(wrapper.emitted().cancel).toBeTruthy();
  });

  it("Emit 'confirm' event when button 'OK' clicked", () => {
    const wrapper = mount(AppAuthorForm, {
      localVue,
      vuetify,
    });
    const btn = wrapper.find('[data-test=ok]');
    btn.trigger('click');
    expect(wrapper.emitted().confirm).toBeTruthy();
  });

  it('Generate new random data', () => {
    const wrapper = mount(AppAuthorForm, {
      localVue,
      vuetify,
    });
    const btn = wrapper.find('[data-test=generate]');
    btn.trigger('click');
    console.log(wrapper.vm.formData.name);
    expect(wrapper.vm.formData.name).not.toEqual('');
    expect(wrapper.vm.formData.gender).not.toEqual('');
    expect(wrapper.vm.formData.residence).not.toEqual('');
  });
});
