import TitleBar from "./components/TitleBar";
import NavBar from "./components/NavBar";
import MsgWindow from "./components/MessageWindow";
import Bottom from "./components/Bottom";
import { makeStyles } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import io from "socket.io-client";
import Login from "./Login";

const socket = io("http://localhost:5000", {
  withCredentials: true,
  extraHeaders: {
    "custom-header": "login",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  bottomBox: {
    flexDirection: "column",
    jusitfyContent: "flex-end",
  },
}));

function App(props) {
  const [chat, setChat] = useState([]);
  // const [messages, setMesssages] = useState({
  //   user: "",
  //   content: "",
  // });
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    socket.on("init", (msg) => {
      var msgReverse = msg.reverse();
      setChat(() => {
        return [...msgReverse];
      });
    });

    socket.on("push", (msg) => {
      setChat((prevChat) => {
        return [...prevChat, msg];
      });
    });
  }, []);

  //Handle new username from Login.js
  function addUser(newUser) {
    if (newUser) {
      setUser(newUser);
    }
  }

  //Handle new message from Bottom.jsx
  function messageHandler(inputText) {
    //Set new message with user and content
    // setMesssages({
    //   user: user,
    //   content: inputText,
    // });

    console.log(inputText);

    //Send a new message to the server
    socket.emit("newMessage", {
      user: inputText.user,
      content: inputText.content,
    });

    //Set the whole chat
    setChat((prevChat) => {
      return [...prevChat, inputText];
    });
  }


  const classes = useStyles();
  return (
    <div>
      {user ? (
        <div>
          <div className={classes.root}>
            <TitleBar />
            <NavBar users={userList} />
            <MsgWindow id="chatWindow" chat={chat} username={user} />
          </div>
          <div className={classes.bottomBox}>
            <Bottom addMessage={messageHandler} username={user}/>
          </div>
        </div>
      ) : (
        <div>
          <Login addNewUser={addUser} />
        </div>
      )}
    </div>
  );
}

export default App;
