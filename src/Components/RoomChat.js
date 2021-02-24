import React, { useContext, useEffect, useState } from 'react'
import { io } from "socket.io-client";
import socketIOClient from "socket.io-client";
import { Context } from '../store/appContext';

function RoomChat(props) {
    const { store, actions } = useContext(Context)


    const [mensaje, setMensaje] = useState("")


    const [envio, setEnvio] = useState({})
    

    const socket = io("http://localhost:5000/");
    socket.on("connect", () => {
        socket.emit("connected", "CONECTADO FRONT")
    })

    const handleMessage = (e) => {

        if (e.keyCode === 13) {
            console.log(e.target.value)

            let datos = {
                message: e.target.value,
                username: store.profile.display_name
            }
            setEnvio(datos)
            socket.send(datos)
            e.target.value = ""

        }

        socket.on("response", msg => {
            console.log(msg)
            setMensaje(msg)

        })
    }



    return (
        <>
            <div className="col-md-6">
                <div className="card w-100 h-75 ">
                    <div className="card-body bg-success">
                        <h5 className="card-title text-white"><i className="fas fa-camera"></i> {props.username}</h5>

                        <p className="card-text text-white bubble">
                            <strong>{envio.username} :</strong>  {envio.message}

                        </p>

                        <p className="card-text text-white bubble">

                            
                            <strong>{mensaje.username} :</strong>  {mensaje.message}
                        </p>


                        {/* {
                            mensaje.map((value, i) => 
                                    <>
                                        <p key={i} className="card-text text-white bubble">
                                            <strong>{value.username} :</strong>  {value.message}
                                        </p>
                                    </>
                                )
                            
                        } */}

                    </div>
                    <div className="card-footer bg-dark">
                        <div className="input-group ">
                            <input type="text" className="form-control" placeholder="Envia un mensaje" onKeyUp={handleMessage} />
                            <div className="input-group-append">
                                <button className="btn btn-outline-dark bg-success text-white" type="button" onClick={handleMessage}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RoomChat
