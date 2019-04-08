import React from 'react';
import DateAndTimeSelectComponent from './DateAndTimeSelectComponent';
import { shallow } from 'enzyme';

describe('JournalContainer', () => {
  it('renders without crashing', () => {
    shallow(<DateAndTimeSelectComponent />)
  });
});
