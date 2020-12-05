import TitleBar from "./components/TitleBar";
import NavBar from "./components/NavBar";
import MsgWindow from "./components/MessageWindow";
import Bottom from "./components/Bottom";
import { makeStyles } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

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

  //ComponentDidMount equivalent
  useEffect(() => {
    socket.on("init", (msg) => {
      //Get last 10 messages from DB
      //reverse to get the latest timestamp
      var msgReversed = msg.reverse();
      setChat(() => {
        return [...msgReversed];
      });
    });

    //Broadcasted messages from other users
    socket.on("push", (msg) => {
      setChat((prevChat) => {
        return [...prevChat, msg];
      });
    });
  }, []);

  //Handle new message from Bottom.jsx
  function messageHandler(inputText) {
    //Send a new message to the server
    socket.emit("newMessage", {
      user: inputText.username,
      content: inputText.content,
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
        <NavBar />
        <MsgWindow id="chatWindow" chat={chat} />
      </div>
      <div className={classes.bottomBox}>
        <Bottom addMessage={messageHandler} />
      </div>
    </div>
  );
}

export default App;
