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
      <RoomChat />
      {/* {
        !!store.userdb &&
        store.userdb.map((friends, i) => {
          return (
            <>
              <div key={i} class="row">
                <div class="col-4">
                  <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="{#id}" role="tab" aria-controls="home">{friends.name}</a>
                  </div>
                </div>
                <div class="col-8">
                  <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="{id}" role="tabpanel" aria-labelledby="list-home-list">{friends.name}</div>
                  </div>
                </div>
              </div>
            </>
          )
        })
      } */}

    </>
  );
}

export default Chat;
