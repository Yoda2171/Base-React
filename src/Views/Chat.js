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
    if (store.profile === null) history.push("/login");
  }, []);

  return (
    <>
      <>
        <div class="row">
          <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
              {!!store.followingDB &&
                store.followingDB.length > 0 ? 
                store.followingDB.map((value, i) => {
                  let href = `#${value.personId}`;
                  return (
                    <h4
                      key={i}
                      class="list-group-item list-group-item-action"
                      id="list-profile-list"
                      data-toggle="list"
                      href={href}
                      role="tab"
                      aria-controls="profile"
                    >
                      <img
                        src={value.photo}
                        id="friendAvatar"
                        className="mr-4"
                      />{" "}
                      {value.friends}
                    </h4>
                  );
                }) : (
                  <h1>No hay amigos aún...</h1>
                  )
              }
            </div>
          </div>
          <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
              {!!store.followingDB &&
                store.followingDB.map((value, i) => {
                  return (
                    <>
                      <div
                        key={i}
                        class="tab-pane fade"
                        id={value.personId}
                        role="tabpanel"
                        aria-labelledby="list-profile-list"
                      >
                        <RoomChat username={value.friends} />
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Chat;
