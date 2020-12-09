import App from "./App";
import Login from "./Login";
import { React, useState } from "react";

function Chat() {
  const [user, setUser] = useState("");

  function addUser(newUser) {
    if (newUser) {
      setUser(newUser)
    }
  }

  //Fix message history 
  //Your components do not mount properly



  return (
    <div>
      {user ? <App newUser={user} /> : <Login addNewUser={addUser} />}
    </div>
  );
}

export default Chat;
