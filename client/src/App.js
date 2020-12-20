import TitleBar from "./components/TitleBar";
import NavBar from "./components/NavBar";
import MsgWindow from "./components/MessageWindow";
import Bottom from "./components/Bottom";
import { makeStyles } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import io from "socket.io-client";
import Login from "./Login";

const socket = io("");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  bottomBox: {
    flexDirection: "column",
    jusitfyContent: "flex-end",
  },
}));

function App(props) {

  const classes = useStyles();
  const [chat, setChat] = useState([]);
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState("");

  //ComponentDidMount equivalent
  useEffect(() => {

    //Get message history from server on 
    //connection (last 10 messages only)
    socket.on("init", (msg) => {
      var msgReverse = msg.reverse();
      setChat(() => {
        return [...msgReverse];
      });
    });

    //Display messages broadcasted from
    //from other users
    socket.on("push", (msg) => {
      setChat((prevChat) => {
        return [...prevChat, msg];
      });
    });

    socket.on("connUser", (user) => {
      console.log(user);
      setUserList((prevUsers) => {
        return [...prevUsers, user];
      })
    });

  }, []);

  //Handle new username from Login.js
  function addUser(newUser) {
    if (newUser) {
      socket.emit("newUsr", newUser);
      setUser(newUser);
      setUserList((prevUsers) => {
        return  [newUser];
      });
    }
  }

  //Handle new message from Bottom.jsx
  function messageHandler(inputText) {

    //Send a new message to the server
    socket.emit("newMessage", {
      user: inputText.user,
      content: inputText.content,
    });

    //Set the whole chat
    setChat((prevChat) => {
      return [...prevChat, inputText];
    });
  }

  return (
    <div>
      {user ? (
        <div>
          <div className={classes.root}>
            <TitleBar />
            <NavBar users={userList} />
            <MsgWindow id="chatWindow" chat={chat} username={user} />
          </div>
          <div className={classes.bottomBox}>
            <Bottom addMessage={messageHandler} username={user}/>
          </div>
        </div>
      ) : (
        <div>
          <Login addNewUser={addUser} />
        </div>
      )}
    </div>
  );
}

export default App;
