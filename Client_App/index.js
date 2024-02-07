import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js"
const socket = io('http://localhost:4000');
const submitButton = document.getElementById('send');
const inputMessageField = document.getElementById('message');
const userNameField = document.getElementById('username');

  submitButton.onclick = () =>{

        const inputMessage =  inputMessageField.value;
        socket.emit("message", inputMessage, (response) => {

           console.log('Server Response',response); 
           userNameField.innerText = response;
      
         });

  }