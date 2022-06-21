const express = require("express"); //Access
const socket = require("socket.io");

const app = express(); //Initialsed and server ready 


app.use(express.static("public")); // display my index.html file 

let port = process.env.PORT || 3000;
let server= app.listen(port,() => {

    console.log("Listening to port " + port);
})

let io = socket(server);

io.on("connection",(socket)=>{
    console.log("Made socket connection");
    
    //recieved data
    socket.on("beginPath",(data)=>{
        //trasnfer data to all workstations
        io.sockets.emit("beginPath",data);
    })

    socket.on("drawStroke",(data)=>{
        //trasnfer data to all workstations
        io.sockets.emit("drawStroke",data);
    })

    socket.on("redoUndo",(data)=>{
        //trasnfer data to all workstations
        io.sockets.emit("redoUndo",data);
    })
})