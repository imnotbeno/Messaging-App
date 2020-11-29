import React from "react";
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

  return (
    <div>
      <main className={classes.messages}>
        <CssBaseline />
        <Toolbar />
        <Message text={props.message}/>
      </main>
    </div>
  );
}

export default MsgWindow;
