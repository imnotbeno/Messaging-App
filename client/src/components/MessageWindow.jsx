import { React } from "react";
import { makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Message from "./Message";

const useStyles = makeStyles((theme) => ({
  messages: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function MsgWindow(props) {
  const classes = useStyles();

  //Messages from bottom and passed through App.js
  var messageList = props.chat;
  console.log(messageList);

  return (
    <div>
      <main className={classes.messages}>
        <CssBaseline />
        <Toolbar />
        {messageList.map((message, index) => (
          <Message
            key={index}
            id={index}
            content={message.content}
            username={message.username}
          />
        ))}
      </main>
    </div>
  );
}

export default MsgWindow;
