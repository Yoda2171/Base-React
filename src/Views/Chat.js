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

let users = store.userdb;

  return (
    <>
      {
        users.map((friends, i) => {
          actions.getFollowId(friends.user_id);
          console.log(store.followId[0])
          if(store.followId[0] === true) {
           /*  return (
                <div key={i} className="row">
                  <div className="col-4">
                    <div className="list-group" id="list-tab" role="tablist">
                      <a className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href={'#'+friends.user_id} role="tab" aria-controls="home">{friends.name}</a>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id={friends.user_id} role="tabpanel" aria-labelledby="list-home-list"><RoomChat/></div>
                    </div>
                  </div>
                </div> )*/
                actions.postFollowing();
            
          }
          else{
            console.log("Este usuario no es tu amigo")
          }
        })
      }

    </>
  );
}

export default Chat;
