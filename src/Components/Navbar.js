import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <nav className="navbar navbar-expand-lg navbar-dark bg-success container-fluid">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <p className='mt-2'>
                <strong> Music App <i class="fas fa-podcast"></i> </strong>
              </p>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link mx-3 text-white navfeed" to="/feed">
                    <strong>Feed</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-3 text-white navfriends" to="/friends">
                    <strong>Friends</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-3 text-white navchats" to="/chats">
                    <strong>Chats</strong>
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-user-circle"></i>
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">
                      Log out
                    </Link>
                  </div>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link mx-3 text-white" id="login" to="/login">
                    <strong>Log in</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
