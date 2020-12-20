require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");
const mongoose = require("mongoose");
const Message = require("./message");

const PORT = process.env.PORT || 5000;

//"mongodb://localhost:27017/messagesDB"
mongoose
  .connect(process.env.MONGO_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database successfully connected!"))
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "..", "client", "build")));

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

  //add new users
  socket.on("newUsr", (newUser) => {
    socket.broadcast.emit("connUser", newUser);
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

    //Notify all users about new message
    socket.broadcast.emit("push", msg);
  });
});

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
