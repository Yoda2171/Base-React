import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Player from "../Components/Player";
import { Context } from "../store/appContext";

function Friends() {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (store.profile === null) history.push("/login");
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md">
          <Player />
        </div>
        <div className="col-md">
          <div className="list-group">
            <Link
              onClick={actions.getOtherProfile}
              className="list-group-item list-group-item-action d-flex justify-content-center"
            >
              <i className="fas fa-camera"></i> &nbsp; Marisleidis Perdomo
            </Link>

            <Link
              to="#"
              className="list-group-item list-group-item-action list-group-item d-flex justify-content-center"
            >
              <i className="fas fa-camera"></i> &nbsp; Name
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action list-group-item d-flex justify-content-center"
            >
              <i className="fas fa-camera"></i> &nbsp; Name
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action list-group-item d-flex justify-content-center"
            >
              <i className="fas fa-camera"></i> &nbsp; Name
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action list-group-item d-flex justify-content-center"
            >
              <i className="fas fa-camera"></i> &nbsp; Name
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action list-group-item d-flex justify-content-center"
            >
              <i className="fas fa-camera"></i> &nbsp; Name
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Friends;
