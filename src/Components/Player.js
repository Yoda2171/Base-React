import React from "react";
import { Link } from "react-router-dom";

function Player() {
  return (
    <>
      <div className="list-group playergeneral">
        <Link
          to="#"
          className="list-group-item list-group-item-action bg-dark text-white"
        >
          Limp Bizkit - Rollin'
        </Link>
        <Link
          to="#"
          className="list-group-item list-group-item-action bg-dark text-white"
        >
          Beatles - Hey Jude
        </Link>
        <Link
          to="#"
          className="list-group-item list-group-item-action bg-dark text-white"
        >
          Heart - Barracuda
        </Link>
        <Link
          to="#"
          className="list-group-item list-group-item-action bg-dark text-white"
        >
          Bob Marley - Redemption Song
        </Link>
        <Link
          to="#"
          className="list-group-item list-group-item-action bg-dark text-white"
        >
          Eminem - The Way I Am
        </Link>
        <div className="btn-group" role="group" aria-label="buttons">
          <button type="button" className="btn btn-dark text-success">
          <h4><i className="fas fa-backward mt-2"></i></h4>
          </button>
          <button type="button" className="btn btn-dark text-success">
          <h4><i className="fas fa-play-circle mt-2"></i></h4>
          </button>
          <button type="button" className="btn btn-dark text-success">
          <h4><i className="fas fa-forward mt-2"></i></h4>
          </button>
        </div>
      </div>
    </>
  );
}

export default Player;
