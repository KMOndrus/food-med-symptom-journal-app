import React from 'react';
import JournalContainer from './JournalContainer';
import { shallow } from 'enzyme';

describe('JournalContainer', () => {
  it('renders without crashing', () => {
    shallow(<JournalContainer />)
  });
});
