import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

function NavBar() {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["NB", "LR", "TK"].map((text, index) => (
          <ListItem className="user-avatar" display="flex">
            <IconButton>
              <Avatar>{text}</Avatar>
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default NavBar;
