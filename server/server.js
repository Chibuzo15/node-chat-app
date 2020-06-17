const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000

const publicPath = path.join(__dirname + '/../public')

const app = express()
const server = http.createServer(app)
const io = socketIO(server);

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New user connected')

    // socket.emit('newEmail', {
    //     from: 'mike@example.com',
    //     text: 'Hey, whats up',
    //     createAt: 123
    // });

    socket.emit('newMessage', {
            from: 'Andrew',
            text: 'Hey, how you dey ',
            createAt: 123
        });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail)
    // });

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage)
    })

    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })
});

server.listen(port, () => console.log(`App is up on ${port}`))