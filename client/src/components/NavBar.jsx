import { React, useState } from "react";
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
import AddBoxIcon from "@material-ui/icons/AddBox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
  addRoom: {
    display: "flex",
  },
  addRoomLabel: {
    fontSize: 14,
    textAlign: "center",
  },
}));

function NavBar(props) {
  var userList = props.users;
  const classes = useStyles();

  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState([]);
  const [name, setName] = useState("");

  function confirmName(event) {
    event.preventDefault();
    setRooms(() => {
      return [...name];
    });
    setRoomName([]);
  }

  function nameRoom(event) {
    event.preventDefault();
    var value = event.target.value;
    console.log(value);
    setName(value);
  }

  function createNewRoom() {
    setRoomName(() => {
      return [
        <form onSubmit={confirmName} className={classes.addRoom}>
          <TextField
            onChange={nameRoom}
            label="Enter Room Name"
            variant="outlined"
            InputLabelProps={{
              classes: {
                root: classes.addRoomLabel,
                focused: "false",
              },
            }}
          />
          <Button>+</Button>
        </form>,
      ];
    });
  }

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
            <ListItem button>
              <ListItemText primary="General" />
            </ListItem>
            {rooms.map((room, index) => (
              <ListItem button key={index}>
                <ListItemText>{room}</ListItemText>
              </ListItem>
            ))}
            {roomName.map((room, index) => (
              <ListItem button key={index}>
                <ListItemText>{room}</ListItemText>
              </ListItem>
            ))}
            <ListItem button onClick={createNewRoom}>
              <AddBoxIcon />
              <ListItemText primary="Create New Room" />
            </ListItem>
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
            {userList.map((user) => (
              <ListItem button key={user}>
                <Avatar>{user}</Avatar>
                <ListItemText className={classes.names}>{user}</ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default NavBar;
