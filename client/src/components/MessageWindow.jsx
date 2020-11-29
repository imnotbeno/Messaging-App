import React from "react";
import { makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  msgWindow: {

  },  
  messages: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function MsgWindow() {
  const classes = useStyles();

  return (
    <div className={classes.msgWindow}>
      <main className={classes.messages}>
        <CssBaseline />
        <Toolbar />
        <Typography paragraph>
            BLABLAB
        </Typography>
        <Typography paragraph>
          KEBABEBABWEABEABEA
        </Typography>
      </main>
    </div>
  );
}

export default MsgWindow;
