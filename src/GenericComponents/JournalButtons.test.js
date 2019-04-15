import React from 'react';
import {JournalButtons} from './JournalButtons';
import { shallow } from 'enzyme';

describe('JournalButtons', () => {
  it('displays the button text sent in with props', () => {
    const wrapper = shallow(<JournalButtons />);

    expect((wrapper.find('.button')).text()).toEqual("Add");
  });
});
