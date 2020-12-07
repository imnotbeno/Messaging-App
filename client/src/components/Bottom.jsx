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
    username: "",
    content: "",
  });

  function inputHandler(event) {
    var value = event.target.value;
    setInput((prev) => {
      return {
        username: prev.username,
        content: value,
      };
    });
  }

  function clickHandler(event) {
    event.preventDefault();
    if (inputText.content) {
      props.addMessage(inputText);
      setInput((prev) => {
        return {
          username: prev.username,
          content: "",
        };
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
