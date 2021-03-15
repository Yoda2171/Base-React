import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import { Context } from "../store/appContext";
import Comments from "./Comments";

function CardFeed(props) {


  const { store, actions } = useContext(Context);

  let profileID = `/profile/${props.user_id}` //COLOCAR EL ID DE LA BASE DE DATOS DE NOSOTROS 
  let id = props.id;

  return (
    <>
      <div className="card w-50 ml-auto mr-auto mb-4 mt-4">
        <div className="card-header border-0">
          {/* <h5 className="card-title">Card title<span className="card-text"><small className="text-muted float-right">Last updated 3 mins ago</small></span></h5> */}
          <div className="row">
            <div className="col-md ">
              <div className="photoprofile col-md-6">
                <Link to={profileID}> <img className="text-white" id="feedAvatar" src={props.photo} /></Link>
              </div>
            </div>
            <div className="col-md mt-4">
              <div><Link className="text-dark" to={profileID}><h5>{props.name}</h5></Link></div>
            </div>
          </div>
        </div>
        <p className="card-text ml-4 mt-2">{props.commentary}</p>
        <img src={props.image}
          className="card-img-top" alt="..." />
        <div className="card-footer">
          <div className="row">
            <i className="far fa-heart btn btn-check" type="button" id="like" onClick={() => {actions.likesPost(id)}}></i>
                <span className="mt-1">{props.likes}</span>
          </div>


          <div className="input-group mt-3">
            <div className="input-group-prepend col-2">
              <img className="input-group rounded-pill img-fluid" src={!!store.profile && store.profile.images[0].url} id="basic-addon1"></img>
            </div>

            <div className="input-group mb-3" style={{"width":"25em"}}>
              <input type="text" className="form-control" placeholder="Escribe un comentario" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={props.onChange}/>
              <div className="input-group-append">
                <button className="btn btn-outline-dark fa fa-comment border-secondary" type="button" id="button-addon2" onClick={props.onClick}></button>
              </div>
            </div>
          </div>
          <div className="row mb-2 mt-2">
            <div className="col-md col-sm">
            <p>
              <a className="btn float-right mb-3" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Comentarios...
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div >
                <ul>
                  {
                    !!store.commentsPost &&
                    store.commentsPost.map((value, i) => {
                      if (value.post_id == id) {
                        return(
                          <Comments imgComments={value.photo} nameComments={value.name} comments={value.commentary}/>
                        )
                      }
                    })
                  }
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default CardFeed;
