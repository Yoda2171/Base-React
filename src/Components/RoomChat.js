import React, { useContext, useState } from 'react'
import { io } from "socket.io-client";
import socketIOClient from "socket.io-client";
import { Context } from '../store/appContext';

function RoomChat() {
    const { store, actions } = useContext(Context)
    const [mensaje, setMensaje] = useState("")

    const socket = io("http://localhost:5000/");
    socket.on("connect", () => {
        socket.emit("connected", "CONECTADO FRONT")
    },[])
    
    const handleMessage = (e) => {

        if (e.keyCode === 13) {
            console.log(e.target.value)

            let datos = {
                message: e.target.value,
                username: store.profile.display_name 
            }

            socket.send(datos)
            e.target.value = ""
        }

        socket.on("response", msg => {
            console.log(msg)
            setMensaje(msg)

        })
    }

    let arrayMensajes = [];



    return (
        <>
            <div className="col-md-6">
                <div className="card w-100 h-75 bg-success">
                    <div className="card-body">
                        <h5 className="card-title text-white"><i className="fas fa-camera"></i> Friends</h5>
                        

                        
                        
                        <p className="card-text text-white bubble">
                            <strong></strong>
                        </p>



                        {/* {
                            !!mensaje &&
                            mensaje.length.map((msg, i) => {
                                return (
                                    <p key={i} className="card-text text-white bubble">
                                        <strong>{msg.message}</strong>
                                    </p>
                                )
                            })
                        } */}





                    </div>


                    <input type="text" placeholder="Type something..." className="card-footer bg-white rounded msgBox" onKeyUp={handleMessage} />
                </div>
            </div>

        </>
    )
}

export default RoomChat
