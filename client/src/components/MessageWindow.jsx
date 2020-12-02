import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
//import Message from "./Message";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const useStyles = makeStyles((theme) => ({
  messages: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function MsgWindow(props) {
  const classes = useStyles();

  //Messages from bottom and passed through App.js
  var messageList = props.message;
  console.log(messageList);

  // const [chat, setChat] = useState({
  //   chat: [],
  //   user: "",
  //   content: "",
  // });

  //Send a new message to the server
  socket.emit("newMessage", {
    user: messageList.user,
    content: messageList.content,
  });

  // setChat((prev) => {
  //   return{
  //     chat: [...prev.chat, {
  //       user: messageList.user,
  //       content: messageList.user,
  //     }],
  //     content:"",
  //   };
  // });

  //console.log(chat);

  return (
    <div>
      <main className={classes.messages}>
        <CssBaseline />
        <Toolbar />
        {/* {messageList.map((message, index) => (
          <Message key={index} id={index} text={message} />
        ))} */}
      </main>
    </div>
  );
}

export default MsgWindow;
