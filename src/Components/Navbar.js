import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/"><strong> Music App <i class="fas fa-podcast"></i> </strong></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link className="nav-link" to="/"><strong>Home</strong>
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feed"> <strong>Feed</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/friends"><strong>Friends</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/chats"><strong>Chats</strong></Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " id="login" to="/login"> <strong>Login</strong></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
