import TitleBar from "./components/TitleBar";
import NavBar from "./components/NavBar";
import MsgWindow from "./components/MessageWindow";
import Bottom from "./components/Bottom";
import { makeStyles } from "@material-ui/core";
import { React, useState } from "react";
import io from "socket.io-client";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function App(props) {
  const [message, setMessage] = useState({
    chat: [],
    content: "",
    name: "",
  });

  // 
  const socket = io("http://localhost:3000/");

  socket.on("connect", () => {
    console.log("socket id:"+ socket.id);
  });

  function messageHandler(inputText) {
    setMessage((prevMessage) => {
      return [...prevMessage, inputText];
    });
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TitleBar />
      <NavBar />
      <MsgWindow message={message} />
      <Bottom addMessage={messageHandler} />
    </div>
  );
}

export default App;
