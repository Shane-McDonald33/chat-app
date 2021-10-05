const app = require('express')();
const socket = require('socket.io');
const color = require('colors');
const cors = require('cors');
const { getCurrentUser, userDisconnect, joinUser } = require('./users');

app.use(express());

const PORT = 8000;

app.use(cors());

let server = app.listen
(PORT, console.log(`Server connected on the port ${(PORT)}`
.green
)
);

const io = socket(server);

io.on('connection', (socket) => {
    socket.on('joinroom', ({ username, roomname}) => {
        const p_user = joinUser(socket.id, username, roomname);
        console.log(socket.id, '=id');
        socket.join(p_user.room);
        socket.emit('message', {
            userId: p_user.id,
            username: p_user.username,
            text: `Welcome ${p_user.username}`
        });
        socket.broadcast.to(p_user.room).emit('message', {
            userId: p_user.id,
            username: p_user.username,
            text: `${p_user.username} has joined the chat`
        });
    });

    // sending message
    socket.on('chat', (text) => {
        const p_user = getCurrentUser(socket.id);
        io.to(p_user.room).emit('mesasge', {
            userId: p_user.id,
            username: p_user.username,
            text: text
        })
    });

    //when user exits
    socket.on('disconnect', () => {
        const p_user = userDisconnect(socket.id);
        if(p_user) {
            io.to(p_user.room).emit('message', {
                userId: p_user.id,
                username: p_user.username,
                text: `${p_user.username} has left the chat.`
            })
        }
    })
});














