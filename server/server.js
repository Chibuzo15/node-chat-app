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

    socket.on('createMessage', (message) => {
        console.log('createMessage', message)

        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createAt: new Date().getTime()
        })
    })

    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })
});

server.listen(port, () => console.log(`App is up on ${port}`))