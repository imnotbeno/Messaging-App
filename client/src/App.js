import TitleBar from "./components/TitleBar";
import NavBar from "./components/NavBar";
import MsgWindow from "./components/MessageWindow";
import Bottom from "./components/Bottom";
import { makeStyles } from "@material-ui/core";
import { React, useState, useEffect } from "react";
//import io from "socket.io-client";

//const socket = io("http://localhost:5000");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  bottomBox: {
    flexDirection: "column",
    jusitfyContent: "flex-end",
  },
  main: {
    // backgroundColor: "#1F1B24",
    backgroundColor: "#322f3d",
  },
}));

function App(props) {
  const [chat, setChat] = useState([]);

  //ComponentDidMount equivalent
  // useEffect(() => {
  //   socket.on("init", (msg) => {
  //     //Get last 10 messages from DB
  //     //reverse to get the latest timestamp
  //     var msgReversed = msg.reverse();
  //     setMessage(() => {
  //       return {
  //         chat: [...msgReversed],
  //         user: "",
  //         content: "",
  //       };
  //     });
  //   });

  //   socket.on("push", (msg) => {
  //     setMessage((prev) => {
  //       return {
  //         chat: [...prev.chat, msg],
  //       }
  //     });
  //   });

  // }, []);

  //Handle new message from Bottom.jsx
  function messageHandler(inputText) {
    //Send a new message to the server
    // socket.emit("newMessage", {
    //   user: inputText.user,
    //   content: inputText.content,
    // });

    setChat((prevChat) => {
      return [...prevChat, inputText];
    });
  }

  // function scrollToBottom(){
  //   const chatWindow = document.getElementById("chatWindow");
  //   chatWindow.scrollTop = chatWindow.scrollHeight;
  // }

  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <TitleBar />
        <NavBar />
        <MsgWindow chat={chat} />
      </div>
      <div className={classes.bottomBox}>
        <Bottom addMessage={messageHandler} />
      </div>
    </div>
  );
}

export default App;
