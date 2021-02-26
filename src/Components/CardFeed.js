import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import { Context } from "../store/appContext";

function CardFeed(props) {
  const { store, actions } = useContext(Context);

  let profileID = `/profile/${props.id}`; //COLOCAR EL ID DE LA BASE DE DATOS DE NOSOTROS
  let ownID = `/profile/`;

  return (
    <>
      <div className="row p-2">
        <div className="col-md d-flex justify-content-center">
          <div className="card cardfeed">
            <div className="card-header bg-success">
              <div className="row">
                <div className="col-md ">
                  <div className="photoprofile col-md-6">
                    <Link to={profileID}>
                      {" "}
                      <img
                        className="text-white"
                        id="feedAvatar"
                        src={props.photo}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md mt-4">
                  <div>
                    <Link className="text-white" to={profileID}>
                      <h5>{props.name}</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">{props.commentary}</div>
            <div className="card-footer bg-success"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardFeed;
