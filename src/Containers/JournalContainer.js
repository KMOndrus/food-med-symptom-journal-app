import React from 'react';
import AddEntryButtonsComponent from "../Components/AddEntryButtonsComponent";
import ViewJournalComponent from "../Components/ViewJournalComponent";
import AddJournalEntryComponent from "../Components/AddJournalEntryComponent";

const JournalContainer = () => {
  return (
    <div>
      <h3>
        This is the Journal Container
      </h3>
      <AddEntryButtonsComponent />
      <ViewJournalComponent />
      <AddJournalEntryComponent />
    </div>
  );
};

export default JournalContainer;
