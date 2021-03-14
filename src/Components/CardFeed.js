import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import { Context } from "../store/appContext";

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
            <button className="far fa-heart btn" type="button" onClick={() => {actions.likesPost(id)}}></button>
                <span className="mt-1">{props.likes}</span>
          </div>


          <div className="input-group mt-3">
            <div className="input-group-prepend col-2">
              <img className="input-group rounded-pill img-fluid" src={!!store.profile && store.profile.images[0].url} id="basic-addon1"></img>
            </div>

            <div class="input-group mb-1" style={{"width":"335px"}}>
              <input type="text" className="form-control m-auto" placeholder="Escribe un comentario" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={props.onChange}/>
              <div className="input-group-append">
                <button className= "btn fa fa-comment btn-outline-dark" id="button-addon2" type="button" aria-hidden="true" onClick={props.onClick}></button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default CardFeed;
