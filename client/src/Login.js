import TextField from "@material-ui/core/TextField";
import { React, useState } from "react";

function Login(props) {
  const [newUser, setNewUser] = useState("");

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
    <div>
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
