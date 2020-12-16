import { React, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Message from "./Message";

const useStyles = makeStyles((theme) => ({
  messages: {    
    padding: theme.spacing(3),
    marginBottom: 50,
  },
}));

function MsgWindow(props) {
  
  const classes = useStyles();

  //Complete chat
  var messageList = props.chat;
  console.log(messageList);

  //Logic to scroll to bottom
  const messagesEndRef = useRef(null);

  function scrollToBottom() {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(scrollToBottom, [messageList]);
  
  return (
    <div>
      <main className="messages">
        <CssBaseline />
        <Toolbar />
        {messageList.map((message, index) => (
          <Message
            key={index}
            id={index}
            content={message.content}
            username={message.user}
          />
        ))}
      </main>
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MsgWindow;
