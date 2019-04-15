import React from 'react';
import Grid from '@material-ui/core/Grid';
import JournalButtons from '../GenericComponents/JournalButtons';

const AddEntryButtonsComponent = () => {
  return (
    <Grid
      container
      id="journal-entry-button-container"
      justify="center"
      spacing={24}
    >
      <JournalButtons id='add-food-button' buttonText="Add Food Entry" />
      <JournalButtons id='add-medication-button' buttonText="Add Medication Entry" />
      <JournalButtons id='add-symptom-button' buttonText="Add Symptom Entry" />
    </Grid>
  );
};

export default AddEntryButtonsComponent;
