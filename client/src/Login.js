import TextField from "@material-ui/core/TextField";
import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  login: {
    marginTop: "20%",
    marginLeft: "40%",
    color: "white",
  },
  userInput: {
    color: "white",
  },
}));

function Login(props) {
  const [newUser, setNewUser] = useState("");
  const classes = useStyles();

  function inputHandler(event) {
    var inputText = event.target.value;
    setNewUser(inputText);
  }

  function handleNewLogin(event) {
    event.preventDefault();
    if (newUser) {
      props.addNewUser(newUser);
    }
    setNewUser("");
  }

  return (
    <div className={classes.login}>
      <h1> What should we call you? </h1>
      <form onSubmit={handleNewLogin}>
        <TextField
          id="standard-basic"
          label="Input Username"
          autoComplete="off"
          onChange={inputHandler}
          value={newUser}
        />
      </form>
    </div>
  );
}

export default Login;
