import { shallowMount, createLocalVue } from '@vue/test-utils';
import home from "@/views/Home.vue";
import BootstrapVue from 'bootstrap-vue'
// import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localvalue = createLocalVue()
localvalue.use(VueRouter)

const router = new VueRouter()

localvalue.use(BootstrapVue)


describe("Home", () => {
    test("if button is clicked form will be visible", () => {
      const wrapper = shallowMount(home);
      // wrapper.setData({ showtechForm: true });
      wrapper.find("button.btn").trigger('click');
      expect(wrapper.vm.showtechForm).toBe(true)
    });

    test("Finding path on the particular web technology grid", () => {
      const wrapper = shallowMount(home, {localvalue, router})
      // wrapper.findAll("h3").at(0).trigger('click');
      const btn = wrapper.findAll('.tech-txt router-link').at(0)
      // const btn1 = wrapper.findAll('.tech-txt router-link').at(1)
      expect(btn.attributes("to")).toBe('/webdevelopment')
      // expect(btn1.attributes("to")).toBe('/java')
    });

    test("Clicking on the particular web technology grid", () => {
      const wrapper = shallowMount(home, {localvalue, router})
      wrapper.findAll(".tech-txt router-link").at(0).trigger('click');
      // const btn = wrapper.findAll('.tech-txt router-link').at(0)
      // const btn1 = wrapper.findAll('.tech-txt router-link').at(1)
      expect(wrapper.vm.router.path).to.equal('/webdevelopment')
      // expect(btn1.attributes("to")).toBe('/java')
    });

    test("Finding path on the particular java technology grid", () => {
      const wrapper = shallowMount(home, {localvalue, router})
      // wrapper.findAll("h3").at(0).trigger('click');
      // const btn = wrapper.findAll('.tech-txt router-link').at(0)
      const btn1 = wrapper.findAll('.tech-txt router-link').at(1)
      // expect(btn.attributes("to")).toBe('/webdevelopment')
      expect(btn1.attributes("to")).toBe('/java')
    });

    // test('form is visible', () => {
    //   expect(wrapper.find('b-form').isVisible()).toBe(true)
    // });
  });