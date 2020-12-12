import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

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

  const classes = useStyles();
  const [inputText, setInput] = useState({
    user: "",
    content: "",
  });

  //Handle the text input and add the username to message object
  function inputHandler(event) {
    var value = event.target.value;
    setInput({
      user: props.username,
      content: value,
    });
  }

  //Handle on submit event
  function clickHandler(event) {
    event.preventDefault();
    if (inputText.content) {
      props.addMessage(inputText);
      setInput({
        user: "",
        content: "",
      });
    }
  }

  return (
    <form className="inputFooter" onSubmit={clickHandler}>
      <div className={classes.bottom}>
        <TextField
          id="outlined-basic"
          label="Input Message"
          variant="outlined"
          fullWidth={true}
          autoComplete="off"
          onChange={inputHandler}
          value={inputText.content}
        />
        <Button
          variant="contained"
          color="default"
          type="submit"
          className={classes.button}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </form>
  );
}

export default Bottom;
