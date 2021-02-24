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

<<<<<<< HEAD
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
=======
  let href = `#${!!store.otherProfile && store.otherProfile.user_id}`

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
>>>>>>> 0c7d67a479de930ebfd850abca527675b5404ae4

    </>
  );
}

export default Chat;
