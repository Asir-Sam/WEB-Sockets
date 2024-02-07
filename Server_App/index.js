const socket = require('socket.io')(4000,{

        cors :{ orgin:["https://localhost:5500","https://192.168.1.7:5500"] }

});

socket.on('connection', soc => {

    console.log('socket ID', soc.id);

    soc.on('message', (message, callback) => {

        console.log(message);
        callback('Received message from server'+message);
        
    });

});
