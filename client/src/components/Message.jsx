import { React } from "react";
import Paper from "@material-ui/core/Paper";
//import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


function Message(props) {
  return (
    <Paper>
      <div>
        <List>
          <ListItem>{props.text}</ListItem>
        </List>
      </div>
    </Paper>
  );
}

export default Message;
