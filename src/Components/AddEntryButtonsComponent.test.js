import React from 'react';
import AddEntryButtonsComponent from './AddEntryButtonsComponent';
import { shallow } from 'enzyme';

describe('JournalContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddEntryButtonsComponent />)
  });
  it('renders without crashing', () => {
    shallow(<AddEntryButtonsComponent />)
  });

  it('contains the journal entry button container', () => {
   expect(wrapper.find('#journal-entry-button-container')).toHaveLength(1);
  });

  it('contains a button to add a food entry', () => {
    expect(wrapper.find('#add-food-button')).toHaveLength(1);
  });

  it('contains a button to add a medication entry', () => {
    expect(wrapper.find('#add-medication-button')).toHaveLength(1);
  });

  it('contains a button to add a symptom entry', () => {
    expect(wrapper.find('#add-symptom-button')).toHaveLength(1);
  });
});
