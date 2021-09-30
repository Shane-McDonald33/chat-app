const app = require('express')();


const http = require('http')
.createServer(app)

const PORT = process.env.PORT || 3000;
const io = require('socket.io')(http);
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

http.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});

io.on('connection', (socket) => {
    console.log('New Client Connected');
    socket.emit('connection', null);
})














