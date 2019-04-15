import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = () => ({
  button: {
    padding: 10
  }
});

const JournalButtons = (props) => {
  const { classes } = props;
  return (
    <Button
      variant="contained"
      className={classes.button}
    >
      Button
    </Button>
  )
};

JournalButtons.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export { JournalButtons }
export default withStyles(styles)(JournalButtons);
