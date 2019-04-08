import React from 'react';
import AddJournalEntryComponent from './AddJournalEntryComponent';
import { shallow } from 'enzyme';

describe('JournalContainer', () => {
  it('renders without crashing', () => {
    shallow(<AddJournalEntryComponent />)
  });
});
