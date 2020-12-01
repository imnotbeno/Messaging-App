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
}));

function App(props) {
  const [message, setMessage] = useState({
    chat: [],
    content: "",
    name: "",
  });

  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket id:" + socket.id);
    });
  }, []);

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
