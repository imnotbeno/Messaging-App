import App from "./App";
import Login from "./Login";
import { React, useState } from "react";

function Chat() {
  const [userList, setNewUserList] = useState([]);

  function addUser(newUser) {
    if (newUser) {
      setNewUserList((prevNewUsers) => {
        return [...prevNewUsers, newUser];
      });
    }
  }

  return (
    <div>
      {(userList.length > 0) ? <App newUser={userList} /> : <Login addNewUser={addUser} />}
    </div>
  );
}

export default Chat;
