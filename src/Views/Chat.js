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
      <div class="row">
        <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
            {
              !!store.userdb &&
              store.userdb.map((value, i) => {

                let href = `#${value.user_id}`;
                
                return (
                  <a key={i} class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href={href} role="tab" aria-controls="profile">{value.name}</a>
                )
              })
            }
          </div>
        </div>
        <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
            {
              !!store.userdb &&
              store.userdb.map((value, i) => {
                return (
                  <>
                    <div key={i} class="tab-pane fade" id={value.user_id} role="tabpanel" aria-labelledby="list-profile-list"><RoomChat username={value.name} /></div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>

    </>
  );
}

export default Chat;
