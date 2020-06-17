var socket = io();

socket.on('connect', function () {
    console.log('connected to server')

    // socket.emit('createEmail', {
    //     to: 'chris@urvan.com',
    //     text: 'Hey, This is chris'
    // });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server')
})

// socket.on('newEmail', function (email) {
//     console.log('New email', email);
// })

socket.on('newMessage', function (email) {
    console.log('New Message', email);
})

socket.emit('createMessage', {
    from: "Chibuzo",
    text: "Send me Money"
})
