import React from 'react';
import { JournalButtonsComponent } from './JournalButtons';
import Button from '@material-ui/core/Button';
import { createShallow, createMount } from '@material-ui/core/test-utils';

describe('JournalButtons', () => {
  it('displays the button text sent in with props', () => {
    const wrapper = createMount(<JournalButtonsComponent />);

    expect((wrapper.dive().find(Button)).text()).toEqual("Add");
  });
});
