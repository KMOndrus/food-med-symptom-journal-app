import React from 'react';
import { JournalButtonsComponent } from './JournalButtons';
import Button from '@material-ui/core/Button';
import { mount } from 'enzyme';

const props = {
  classes: {},
  buttonText: 'Sample Text',
};

describe('JournalButtons', () => {
  it('displays the button text sent in with props', () => {
    const wrapper = mount(<JournalButtonsComponent { ...props } />);

    expect((wrapper.find(Button)).text()).toEqual(props.buttonText);
  });
});
