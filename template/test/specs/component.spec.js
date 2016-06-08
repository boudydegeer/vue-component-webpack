import Vue from 'vue';
import MyComponent from '../../src/Component.vue';

describe('Component.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><my-component></my-component></div>',
      components: { 
      	'my-component': MyComponent
      }
    }).$mount()
    expect(vm.$el.querySelector('.{{name}} h1').textContent).to.contain('Hello World {{name}}!')
  })
})