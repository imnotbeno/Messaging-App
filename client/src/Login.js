import TextField from "@material-ui/core/TextField";
import { React, useState } from "react";
//import { useHistory } from "react-router-dom";

function Login(props) {
  const [newUser, setNewUser] = useState("");
  //const [login, setLogin] = useState(false);

 //const history = useHistory();

  function inputHandler(event) {
    var inputText = event.target.value;
    setNewUser(inputText);
  }

  function handleNewLogin(event) {
    event.preventDefault();
    if (newUser) {
      props.addNewUser(newUser);
     //history.push("/");
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
