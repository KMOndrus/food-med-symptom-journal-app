import React from 'react';
import AddEntryButtonsComponent from '../Components/AddEntryButtonsComponent';
import ViewJournalComponent from '../Components/ViewJournalComponent';
import AddJournalEntryComponent from '../Components/AddJournalEntryComponent';


const JournalContainer = () => {
  return (
    <React.Fragment>
      <AddEntryButtonsComponent />
      <ViewJournalComponent />
      <AddJournalEntryComponent />
    </React.Fragment>
  );
};

export default JournalContainer;
