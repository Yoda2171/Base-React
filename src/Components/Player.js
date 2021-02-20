import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function Player() {
  const { actions, store } = useContext(Context)

  const [input, setInput] = useState()

  function cambio(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <Fragment>

        
          <li className="nav-item ">
          <div className="input-group">
            <div className="input-group-prepend">
              <button className="input-group-text bg-success text-white" data-toggle="modal" data-target="#Player" id="inputGroup-sizing-default"  onClick={() => actions.search(input)}><i className="fas fa-search"></i></button>
            </div>
            <input type="text" className="form-control" onChange={cambio} onKeyUp={(e) => {
              if (e.keyCode === 13) {
                actions.search(input);
              }
            }} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Busca tu artista favorito"/>
          </div>
        
        
        
          {/* <button type="button" className="btn btn-dark " data-toggle="modal" data-target="#Player">Buscar artista </button> */}
        </li>



        <div className="modal fade" id="Player" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">


                <div className="card-body text-center">
                  {/* <div className="row">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <button className="input-group-text bg-success text-white" onClick={() => actions.search(input)} id="inputGroup-sizing-default"><i className="fas fa-search"></i></button>
                      </div>
                      <input type="text" className="form-control" onChange={cambio} onKeyUp={(e) => {
                        if (e.keyCode === 13) {
                          actions.search(input);
                        }
                      }} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Busca tu artista favorito" />
                    </div>
                  </div> */}

                  {
                    !!store.tracks &&
                    store.tracks.map((album, i) => {
                      let urlID = `https://open.spotify.com/embed/album/${album.id}`
                      return (
                        <>
                          <iframe key={i} src={urlID} className="mb-3" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </>
                      )
                    })
                  }
                </div>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                
              </div>
            </div>
          </div>
        </div>


      </Fragment>
    </>
  );
}

export default Player;
