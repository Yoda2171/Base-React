import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Socket } from "socket.io-client";
import Player from "../Components/Player";
import RoomChat from "../Components/RoomChat";
import { Context } from "../store/appContext";
import Friends from "./Friends";
import { io } from "socket.io-client";

function Chat(props) {
  
  const { store, actions } = useContext(Context);

  const history = useHistory();


  useEffect(() => {
    if (store.profile === null) history.push('/login');
  }, []);



  return (
    <>
     
      
    </>
  );
}

export default Chat;
