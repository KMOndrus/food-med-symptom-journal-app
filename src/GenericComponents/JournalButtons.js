import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = () => ({
  button: {
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  }
});

const JournalButtonsComponent = (props) => {
  const { classes } = props;
  return (
    <Button
      variant="contained"
      className={classes.button}
    >
      { props.buttonText }
    </Button>
  )
};

JournalButtonsComponent.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  buttonText: PropTypes.string.isRequired,
};

export { JournalButtonsComponent };
export default withStyles(styles)(JournalButtonsComponent);
