import App from "./App";
import Login from "./Login";
import { React, useState } from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";

function Chat() {
  const [user, setUser] = useState("");

  function addUser(newUser) {
    if (newUser) {
      setUser(newUser);
    }
  }

  return (
    // <Router>
    //   <Route
    //     path="/"
    //     exact
    //     component={() => {
    //       return <App newUser={user} />;
    //     }}
    //   />
    //   <Route
    //     path="/login"
    //     exact
    //     component={() => {
    //       return <Login addNewUser={addUser}  />;
    //     }}
    //   />
    // </Router>
    <div>{user ? <App newUser={user} /> : <Login addNewUser={addUser} />}</div>
  );
}

export default Chat;
