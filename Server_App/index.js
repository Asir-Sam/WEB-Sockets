const socket = require('socket.io')(4000);

socket.on('connection', soc => {

    console.log('socket ID', soc.id);

    soc.on('message', (message) => {

        console.log(message);

    })

});