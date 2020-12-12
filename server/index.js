const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["custom-header"],
    credentials: true
  },
});
const path = require("path");
const mongoose = require("mongoose");
const Message = require("./message");

mongoose.connect("mongodb://localhost:27017/messagesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static(path.join(__dirname, "..", "client")));

io.on("connection", (socket) => {
  console.log("a user has connected!");
  //Get the last 10 messages from database
  Message.find()
    .sort({ createdAt: -1 })
    .limit(10)
    .exec((err, messages) => {
      if (err) {
        console.log(err);
      } else {
        // Send last 10 messages from database to user.
        socket.emit("init", messages);
      }
    });

  // Listening to connected users for new messages
  socket.on("newMessage", (msg) => {
    // Create new message and store it in the db
    const message = new Message({
      user: msg.user,
      content: msg.content,
    });

    message.save((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Message successfully saved");
      }
    });

    socket.broadcast.emit("connect", msg.user);
    //Notify all users about new message
    socket.broadcast.emit("push", msg);
  });
});

http.listen(5000, () => {
  console.log("Server running on port 5000");
});
