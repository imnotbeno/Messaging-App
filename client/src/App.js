import TitleBar from "./components/TitleBar";
import NavBar from "./components/NavBar";
import MsgWindow from "./components/MessageWindow";
import Bottom from "./components/Bottom";
import { makeStyles } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000", {
  withCredentials: true,
  extraHeaders: {
    "custom-header": "login"
  }
});

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
  const [chat, setChat] = useState([]);
  const [userList, setUserList] = useState([]);

  console.log(props.newUser);

  useEffect(() => {
 
    socket.on("init", (msg) => {
      var msgReverse = msg.reverse();
      setChat(() => {
        return [...msgReverse];
      });
      console.log("Hello from app.js/init");
    });

    socket.on("push", (msg) => {
      setChat((prevChat) => {
        return [...prevChat, msg];
      });
      console.log("Hello from app.js/push");
    });
  }, []);

  //Handle new message from Bottom.jsx
  function messageHandler(inputText) {
    //Send a new message to the server
    socket.emit("newMessage", {
      user: props.newUser,
      content: inputText,
    });

    setChat((prevChat) => {
      return [...prevChat, inputText];
    });
  }

  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <TitleBar />
        <NavBar users={userList} />
        <MsgWindow id="chatWindow" chat={chat} username={props.newUser} />
      </div>
      <div className={classes.bottomBox}>
        <Bottom addMessage={messageHandler} />
      </div>
    </div>
  );
}

export default App;
