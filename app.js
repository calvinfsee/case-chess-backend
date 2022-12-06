const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const socketLogic = require('./socketLogic.js');

const app = express();
const PORT = 3000;

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
  origin: "http://localhost:5173",
  methods: ["GET", "POST"]
}});

io.on('connection', client => {
  socketLogic.initializeGame(io, client)
})

server.listen(3000);