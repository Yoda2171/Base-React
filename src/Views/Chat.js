import React from "react";
import Player from "../Components/Player";

function Chat() {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <Player />
          <div class="list-group ml-4">
            <a href="#" class="list-group-item list-group-item-action">
              Friend 1
            </a>

            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item"
            >
              Friend 2
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item"
            >
              Friend 3
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item"
            >
              Friend 4
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item"
            >
              Friend 5
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item"
            >
              Friend 6
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
