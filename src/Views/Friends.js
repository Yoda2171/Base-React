import React, { useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Player from "../Components/Player";
import { Context } from "../store/appContext";

function Friends(props) {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  
  const {slug} = useParams()

  useEffect(() => {
    if (store.profile === null) history.push("/login");
  }, []);


   let urlID = `/profile/${store.postList.user_ids}`

  return (
    <>
      <div className="row">
        
        <div className="col-md">
          <div className="list-group">
            <Link
              to={urlID}
              /* onClick={actions} */
              className="list-group-item list-group-item-action d-flex justify-content-center"
            >
              <i className="fas fa-camera"></i> 
            </Link>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Friends;
