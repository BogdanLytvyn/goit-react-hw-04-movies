import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: 120,
    marginTop: 30,
    fontSize: 12,
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<KeyboardBackspaceIcon />}
      >
        Back
      </Button>
    </div>
  );
}
