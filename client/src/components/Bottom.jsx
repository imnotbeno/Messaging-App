import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  bottom: {
    display: "flex",
  },
  button: {
    boxShadow: "none",
  },
}));

function Bottom() {

  const classes = useStyles();

  return (
    <footer className={classes.bottom}>
      <TextField
        id="outlined-basic"
        label="Input Message"
        variant="outlined"
        fullWidth={true}
      />
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </footer>
  );
}

export default Bottom;
