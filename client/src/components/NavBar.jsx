import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

var drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default,
  },
  drawerContainer: {
    overflow: "auto",
  },
  names: {
    marginLeft: 10,
    padding: 5,
  },
  navBarTitle: {
    padding: 10,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className="nav-bar">
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <Typography
          className={classes.navBarTitle}
          variant="h6"
          align="center"
          noWrap
        >
          Channels
        </Typography>
        <Divider />
        <div className={classes.drawerContainer}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Typography
            className={classes.navBarTitle}
            variant="h6"
            align="center"
            noWrap
          >
            Users
          </Typography>
          <Divider />
          <List>
            {["Niko Bec", "Michael Schuhmacher", "Emily Blunt"].map(
              (text, index) => (
                <ListItem button key={text}>
                  <Avatar>{text}</Avatar>
                  <ListItemText className={classes.names}>{text}</ListItemText>
                </ListItem>
              )
            )}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default NavBar;
