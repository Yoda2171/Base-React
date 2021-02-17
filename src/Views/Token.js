import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

function Token() {
  const { store, actions } = useContext(Context);

  const history = useHistory();

  let nuevaURL = "http://localhost:3000/feed"; // La URL de destino.
  let espera = 3; // La espera en segundos antes de ejecurtar la redirección.

  useEffect(() => {
    actions.getToken(history);
    
    /* 
    function paginaCargaCompleta(fn) {
        if (document.readyState !== "loading") {
          fn();
        } else {
          document.addEventListener("DOMContentLoaded", fn);
        }
      }
    
      paginaCargaCompleta(function () {
        espera = parseInt(espera);
        setTimeout('location.href="' + nuevaURL + '"', espera * 1000);
      }); */

  }, []);

  return (
    <>
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          className="spinner-border ml-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    </>
  );
}

export default Token;
