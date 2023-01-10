const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
// const cors = require('cors');
// socket.io 
const { Server } = require("socket.io");
const io = new Server(server);

// const corsOptions = {
//     origin: '*',
//     credentials: true,
//     methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
//   };
  
//   app.use('*', cors(corsOptions));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

io.on('connection', (socket) => {
    socket.on('video', (msg) => {
        console.log('video name: ' + msg);
        io.emit('video', msg);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



server.listen(3333, () => {
    console.log('listening on *:3333');
});


