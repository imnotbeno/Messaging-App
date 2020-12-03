import { React, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Message from "./Message";
// import io from "socket.io-client";

// const socket = io("http://localhost:5000");

const useStyles = makeStyles((theme) => ({
  messages: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function MsgWindow(props) {
  const classes = useStyles();

  //Messages from bottom and passed through App.js
  var messageList = props.message.chat;
  console.log(messageList);

  return (
    <div>
      <main className={classes.messages}>
        <CssBaseline />
        <Toolbar />
        {/* <Message content="Hello"/> */}
        {messageList.map((message, index) => (
          <Message key={index} id={index} content={message.content} />
        ))}
      </main>
    </div>
  );
}

export default MsgWindow;
