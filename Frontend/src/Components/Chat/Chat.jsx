import React from 'react'
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import "./chat.css"

const socket = io("http://localhost:8080")


const Chat = () => {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])


    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(message.trim() != ""){
            let newMessage ={
                body: message,
                from: "Yo"
            }
            
            setMessages([...messages, newMessage])
            socket.emit("message", message)
            
            setMessage("")
        }
        else{
            console.error("No se puede enviar un mensaje vacio")
        }
    }


    useEffect(() => {
        socket.on( "messageServer", reciveMessage )
        
        return () =>{
            socket.off( "messageServer", reciveMessage )
        } 
    }, [])


    const reciveMessage = (message) =>{
        setMessages((state) => [...state, message])
    }



    return (
        <div className='containerChat'>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Escribir mensaje' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button>Enviar</button>
            </form>
            
            <ul>
            {messages.map((message, id) => (
                <li key={id}>
                {message.from}: {message.body}
                </li>
            ))}
            </ul>
        </div>
    )
}


export default Chat