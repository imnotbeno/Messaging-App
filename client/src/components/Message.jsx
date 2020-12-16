import { React } from "react";
import Paper from "@material-ui/core/Paper";
//import CssBaseline from "@material-ui/core/CssBaseline";
//import List from "@material-ui/core/List";
//import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  
  messagePaper: {
    flexGrow: 1,
  },
  message: {
    padding: 15,
  },
  spacing: {
    marginBottom: 10,
  },
  space: {
    marginTop: 20,
    marginBottom: 20,
  },
}));

function Message(props) {
  
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.messagePaper}>
        <div className={classes.message}>
          <Typography>{props.username}</Typography>
          <Divider className={classes.spacing} />
          {props.content}
        </div>
      </Paper>
      <div className={classes.space}/>
    </div>
  );
}

export default Message;
