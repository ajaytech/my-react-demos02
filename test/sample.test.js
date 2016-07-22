import React from 'react';
import { shallow, mount } from 'enzyme';
import Hello from '../src/client/js/components/HelloWorld';


describe('home page tests', function() {

  it('should add numbers', function() {
   expect(2 + 2).toBe(4);
  });

  it('should test hello world component', function() {
    const wrapper = mount(<Hello name='John' />)
    expect(wrapper.props().name).toEqual('John')
  });

  it('should say hello John', function() {
    const wrapper = mount(<Hello name='John' />)
    expect(wrapper.text()).toEqual('Hello John')
  });

  it('should say hello world', function() {
    const wrapper = mount(<Hello />)
    expect(wrapper.text()).toEqual('Hello World')
  });

});



