import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function Player() {
  const {actions} = useContext(Context)
  const [input, setInput] = useState("")

  function cambio(e) {
    setInput(e.target.value);
    console.log(input)
  }  


  return (
    <>
      <div className="card-header rounded-pill ">
        <div className="row">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button className="input-group-text bg-success text-white" onClick={() => actions.search(input)} id="inputGroup-sizing-default"><i className="fas fa-search"></i></button>
            </div>
            <input type="text" className="form-control" onChange={cambio} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>
        </div>
      </div>

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
