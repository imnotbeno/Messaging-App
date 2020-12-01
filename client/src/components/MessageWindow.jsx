import React from "react";
import { makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
//import Message from "./Message";

const useStyles = makeStyles((theme) => ({
  messages: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function MsgWindow(props) {
  const classes = useStyles();

//  var messageList = props.message;

  return (
    <div>
      <main className={classes.messages}>
        <CssBaseline />
        <Toolbar />
        {/* {messageList.map((message, index) => (
          <Message 
          key={index}
          id={index}
          text={message} 
          />
        ))} */}
      </main>
    </div>
  );
}

export default MsgWindow;
