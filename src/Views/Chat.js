import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Player from "../Components/Player";
import { Context } from "../store/appContext";

function Chat(props) {

  const { store, actions } = useContext(Context);
    
    const history = useHistory();
    
    useEffect(() => {
        if (store.profile === null) history.push('/login');
      }, []);
      
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <Link
                to="#"
                className="list-group-item list-group-item-action d-flex justify-content-center"
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
          <div className="col-md-6">
            <div className="card w-100 h-75 bg-success">
              <div className="card-body">
                <h5 className="card-title text-white"><i className="fas fa-camera"></i> Name </h5>
                <p className="card-text text-white bubble">
                  <strong>Hello!</strong>
                </p>
                <p className="card-text text-white bubble">
                  <strong>Hi!</strong>
                </p>
              </div>
              <input type="text" placeholder="Type something..." className="card-footer bg-white rounded msgBox" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
