
var app = require('express')();

var http = require('http').createServer(app);

var io = require('socket.io')(http,
{

        cors: {
            origin: "*",
            // methods: ["GET", "POST"]
          }
}
    );
io.on('connection',(socket) =>{
    console.log('connection')

    socket.on('sendToServer', (message) =>{
        console.log(message)
        // io.emit('sendToClient',message)
        socket.broadcast.emit('sendToClient',message)
    })
    socket.on("disconnect", (socket) =>{
          console.log('disconnected')
    })
})


// var Redis = require('ioredis');
// var redis = new Redis();
// redis.subscribe('test-channel', function (err, count) {
// });
// redis.on('message', function (channel, message) {
//     console.log('Message Recieved: ' + message);
//     message = JSON.parse(message);
//     io.emit(channel + ':' + message.event, message.data);
// });



http.listen(3000,  () => {
    console.log('Listening on Port 3000');
});

