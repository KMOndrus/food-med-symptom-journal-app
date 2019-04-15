import React from 'react';
import JournalContainer from './JournalContainer';
import AddEntryButtonsComponent from '../Components/AddEntryButtonsComponent';
import ViewJournalComponent from '../Components/ViewJournalComponent';
import AddJournalEntryComponent from '../Components/AddJournalEntryComponent';
import { shallow } from 'enzyme';

describe('JournalContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<JournalContainer />)
  });

  it('contains the AddEntryButtonsComponent', () => {
   expect(wrapper.find(AddEntryButtonsComponent)).toHaveLength(1);
  });

  it('contains the ViewJournalComponent', () => {
    expect(wrapper.find(ViewJournalComponent)).toHaveLength(1);
  });

  it('contains the AddJournalEntryComponent', () => {
    expect(wrapper.find(AddJournalEntryComponent)).toHaveLength(1);
  });
});
