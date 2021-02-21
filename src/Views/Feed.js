import React, { useContext, useEffect, useState } from "react";
import CardFeed from "../Components/CardFeed";
import "../App.css";
import Player from "../Components/Player";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

function Feed() {
  const { store, actions } = useContext(Context);
  /* console.log(store.token) */

  const history = useHistory();

  useEffect(() => {
    if (store.token === null) history.push("/login");
    actions.getPosts()
  }, []);

  const [post, setPost] = useState(null);

  function captureText(e) {
    setPost(e.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md">
            <div className="card-header rounded-pill ">
              <div className="row">
                <div className="col-md-2">
                  <img
                    src={!!store.profile && store.profile.images[0].url}
                    id="feedAvatar"
                    alt="fotito"
                  />
                </div>
                <div className="col-md col-sm">
                  <input
                    className="text-white btn btn-rounded btn-lg btn-block bg-success rounded-pill"
                    type="button"
                    value="¿Que estas pensando?"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  ></input>
                </div>
              </div>
            </div>
            <div className="row mb-2 mt-2">
              <div className="col-md col-sm">
                <ul>
                  {
                    !!store.postList &&
                    store.postList.map((index, i) => {
                      return (
                        <CardFeed key={i} id={index.user_id} photo={index.photo} name={index.name} commentary={index.commentary} />
                      );
                    })
                  }

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-success">
              <h3
                className="modal-title-center text-center text-white col-md-10 ml-4"
                id="exampleModalLabel"
              >
                Crear publicación
              </h3>
              <button
                type="button"
                className="close text-white col-md-2"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-3 col-sm">
                  <img
                    src={!!store.profile && store.profile.images[0].url}
                    id="modalAvatar"
                    alt="fotito"
                  />
                </div>
                <div className="col-md-9 col-sm mt-2">
                  <h5>{!!store.profile && store.profile.display_name}</h5>
                </div>
              </div>
              <textarea
                className="w-100 border-0 mt-4"
                type="text"
                placeholder="¿Que estas pensando?"
                onChange={captureText}
              ></textarea>
            </div>
            <div className="modal-footer">
            
              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => actions.createPost(post)}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Feed;
