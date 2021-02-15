import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function Navbar() {
  const { store, actions } = useContext(Context);
  console.log(store.profile);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <strong>
              {" "}
              Facetify <i className="fas fa-podcast"></i>{" "}
            </strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {!!store.profile &&
              store.profile ? (
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item ">
                    <Link className="nav-link" to="/feed">
                      <strong>Feed</strong>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/friends">
                      <strong>Friends</strong>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/chats">
                      <strong>Chats</strong>
                    </Link>
                  </li>
                </ul>) : (null)}
            {!!store.profile &&
              store.profile ? (
                <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn btn-success dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-user-circle"></i>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link className="dropdown-item" to="/profile/id">
                        Profile
                      </Link>
                      <a className="dropdown-item" href="#">
                        Log Out
                      </a>
                    </div>
                  </div>
                </li>
              </ul>) : (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" id="login" to="/login">
                      <strong>Login</strong>
                    </Link>
                  </li>
                </ul>
              )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
