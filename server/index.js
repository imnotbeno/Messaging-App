const express = require('express');
const { Socket } = require('socket.io');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get("/", (req,res) => {
    res.send("Hello World!");
});


io.on('connection', socket => {

});

http.listen(3000, () => {
    console.log("Server running on port 3000");
});