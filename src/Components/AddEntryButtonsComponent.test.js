import React from 'react';
import AddEntryButtonsComponent from './AddEntryButtonsComponent';
import { shallow } from 'enzyme';

describe('JournalContainer', () => {
  it('renders without crashing', () => {
    shallow(<AddEntryButtonsComponent />)
  });
});
