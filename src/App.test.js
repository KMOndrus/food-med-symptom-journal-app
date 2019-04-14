import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  });

  it('renders an app bar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#journal-app-bar')).toHaveLength(1);
  });
});

