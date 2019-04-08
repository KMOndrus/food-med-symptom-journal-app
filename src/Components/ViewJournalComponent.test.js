import React from 'react';
import ViewJournalComponent from './ViewJournalComponent';
import { shallow } from 'enzyme';

describe('JournalContainer', () => {
  it('renders without crashing', () => {
    shallow(<ViewJournalComponent />)
  });
});
