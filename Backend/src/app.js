import path from "path"
import  __dirname  from "./utils.js"
import express from "express"
import { Server } from "socket.io"
import mongoose from "mongoose";



const port = 8080;
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "/public")));


//Server http
const httpServer = app.listen(port, ()=> console.log("Listen Server in port: ", port));


//Connect to MongoDB
mongoose.connect("mongodb+srv://Facundo:Metalero120@cluster0.t1j2dqk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", (error) =>{
    if(error){
        console.log("Cannot conect to data base: ", error)
        process.exit()
    }
})


//Routes
app.use("/api/users", router);




//Server Socket.io
const socketServer = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

socketServer.on("connection", socket =>{
    console.log("New client connected")

    socket.on("message", body =>{
        socket.broadcast.emit("messageServer", {
            body,
            from: socket.id.slice(4)
        })
    })
})