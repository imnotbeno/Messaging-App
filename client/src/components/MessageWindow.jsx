import React from "react";
import { makeStyles } from "@material-ui/core";
import Bottom from "./Bottom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    margin: 10,
    display:"flex",
  },
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
        <Paper  className={classes.root}>
          <div>
            <List>
              <ListItem>Blablabla</ListItem>
            </List>
          </div>
        </Paper>
        <Paper  className={classes.root}>
          <div>
            <List>
              <ListItem>{props.message}</ListItem>
            </List>
          </div>
        </Paper>
      </main>
    </div>
  );
}

export default MsgWindow;
