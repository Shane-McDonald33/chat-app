const app = require('express')();


const http = require('http')
.createServer(app)

const PORT = process.env.PORT || 3000
const io = require('socket.io')(http)

http.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});

io.on('connection', (socket) => {
    console.log('New Client Connected')
})














