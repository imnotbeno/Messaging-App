import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

//CSS Styling
const useStyles = makeStyles((theme) => ({
  bottom: {
    display: "flex",
    backgroundColor: "white",
  },
  button: {
    boxShadow: "none",
  },
}));

function Bottom(props) {
  //classNames
  const classes = useStyles();

  //Handlers
  const [inputText, setInput] = useState({
    username: "Niko",
    message: "",
  });

  function inputHandler(event) {
    var value = event.target.value;
    setInput((prev) => {
      return {
        username: prev.username,
        message: value,
      };
    });
  }

  function clickHandler() {
    props.addMessage(inputText);
    setInput((prev) => {
      return {
        username: prev.username,
        message: "",
      };
    });
  }

  return (
    <footer>
      <div  className={classes.bottom}>
        <TextField
          id="outlined-basic"
          label="Input Message"
          variant="outlined"
          fullWidth={true}
          onChange={inputHandler}
          value={inputText.content}
        />
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          endIcon={<SendIcon />}
          onClick={clickHandler}
        >
          Send
        </Button>
      </div>
    </footer>
  );
}

export default Bottom;
