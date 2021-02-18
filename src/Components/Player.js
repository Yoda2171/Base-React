import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function Player() {
  const { actions, store } = useContext(Context)

  const [input, setInput] = useState()

  function cambio(e) {
    setInput(e.target.value);
  }
 
  

  return (
    <div className="container">
      <div className="card-body">
        <div className="row">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button className="input-group-text bg-success text-white" onClick={() => actions.search(input)} id="inputGroup-sizing-default"><i className="fas fa-search"></i></button>
            </div>
            <input type="text" className="form-control" onChange={cambio} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>
        </div>

        {
          !!store.tracks &&
          store.tracks.map((track, i) => {
            return (
              <>
                <div class="list-group">
                  <button type="button" class="list-group-item list-group-item-action bg-dark text-white">{track.name}</button>
                </div>
              </>
            )
          })
        }

        <div className="list-group text-center bg-dark">
          <div className="btn-group btn-group-lg " role="group" aria-label="Basic example">
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

      </div>
    </div>
  );
}

export default Player;
