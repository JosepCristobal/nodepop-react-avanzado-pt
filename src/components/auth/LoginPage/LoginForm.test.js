import React from 'react';
//Método del test elegido shallow
import { shallow } from 'enzyme';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const props = {
    isLoading: false,
    onSubmit: jest.fn(),
  };

  const render = () => shallow(<LoginForm {...props} />);

  test('should render', () => {
    const wrapper = render();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('form').props().className).toBe('loginForm');
  });

  test('snapshot testing', () => {
    const wrapper = render();
    expect(wrapper).toMatchSnapshot();
  });

  test('snapshot testing with is loading', () => {
    const wrapper = render();
    wrapper.setProps({ isLoading: true });
    expect(wrapper).toMatchSnapshot();
  });

  test('should submit credentials', () => {
    const credentials = { email: 'pepe', password: 'pepepass', check: false };
    const wrapper = render();

    const usernameField = wrapper.find('.loginForm-field').at(0);
    usernameField
      .props()
      .onChange({ target: { name: 'email', value: credentials.email } });
    
    const passwordField = wrapper.find('.loginForm-field').at(1);
    passwordField
      .props()
      .onChange({ target: { name: 'password', value: credentials.password } });

    const form = wrapper.find('.loginForm');
    form.simulate('submit', { preventDefault: () => {} });

    expect(wrapper.find('.loginForm-submit').props().disabled).toBe(false);
    expect(props.onSubmit).toHaveBeenCalledWith(credentials);
  });
});
