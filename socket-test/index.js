/**
 * Socket io is used to send data from server to client
 * npm install socket.io --save
 * node index.js
 * open http://localhost:3000 in two browsers and enjoy the chat
 * Reference : https://socket.io/get-started/chat/
 */

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/node_modules/socket.io-client/dist'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
})