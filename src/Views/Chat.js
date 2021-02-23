  import React, { useContext, useEffect } from "react";
  import { Link, useHistory } from "react-router-dom";
  import Player from "../Components/Player";
import RoomChat from "../Components/RoomChat";
  import { Context } from "../store/appContext";

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
              <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">friend</a>
              <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">friend</a>
              <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">friend</a>
              <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">friend</a>
            </div>
          </div>
          <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><RoomChat/></div>
              <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><RoomChat/></div>
              <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><RoomChat/></div>
              <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><RoomChat/></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Chat;
