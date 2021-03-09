import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import { Context } from "../store/appContext";

function CardFeed(props) {


  const { store, actions } = useContext(Context);

  let profileID = `/profile/${props.id}` //COLOCAR EL ID DE LA BASE DE DATOS DE NOSOTROS 

  return (
    <>
      {/* <div className="row p-2">
        <div className="col-md d-flex justify-content-center">
          <div className="card w-50">
            <div className="card-header bg-success">
              <div className="row">
                <div className="col-md ">
                  <div className="photoprofile col-md-6">
                    <Link to={profileID}> <img className="text-white" id="feedAvatar" src={props.photo} /></Link>
                  </div>
                </div>
                <div className="col-md mt-4">
                  <div><Link className="text-white" to={profileID}><h5>{props.name}</h5></Link></div>
                </div>
              </div>
            </div>
            <div className="card-body text-center">
                  <img className="card-img-top" id="feedimage" src={props.image} alt="image"/>
            </div>
            <div className="card-footer mt-5">
              {props.commentary}
            </div>
          </div>
        </div>
      </div> */}

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
            <button className="btn " type="submit"><i className="far fa-heart"></i> </button>
            <span className="mt-2 ml-2">23 likes</span>
          </div>


          <div class="input-group mt-3">
            <div class="input-group-prepend col-2">
              <img class="input-group rounded-pill img-fluid" src={!!store.profile && store.profile.images[0].url} id="basic-addon1"></img>
            </div>
            <input type="text" class="form-control m-auto" placeholder="Escribe un comentario" aria-label="Username" aria-describedby="basic-addon1" />
          </div>

          
          {/* <div className="row">
            <img className="rounded-pill w-25" src={props.photo} />
            <input type="text" className="form-control mr-auto" aria-label="Username" aria-describedby="basic-addon1" placeholder="Escribe un comentario..." />
          </div> */}

        </div>
      </div>


    </>
  )
}

export default CardFeed;
