import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Context } from '../store/appContext';

function OtherProfile() {

        

    const { store, actions } = useContext(Context);

    const history = useHistory();

    useEffect(() => {
        if (store.profile === null) history.push("/login");
    }, []);

    return (
        <>
            <div
                className="card border-success mb-3 m-auto"
                style={{ "max-width": "38rem" }}
            >
                <div className="card-header bg-success border-success py-5">
                    <img
                        src="" //INFORMACION DE LA BASE DE DATOS DE NOSOTROS PLSS
                        alt="Avatar"
                        id="profileAvatar"
                    />
                    <h1 className="text-white d-inline-block ml-4">
                    {/* //INFORMACION DE LA BASE DE DATOS DE NOSOTROS PLSS */}
                    </h1>
                </div>
                <div className="card-body list-group-flush">
                    <li className="list-group-item border-success ">
                        <i class="fas fa-users"></i>
                       
                    </li>
                    <li className="list-group-item border-success">
                        <i class="fas fa-music" onClick=" //INFORMACION DE LA BASE DE DATOS DE NOSOTROS PLSS "    ></i>
                        
                    </li>
                    <li className="list-group-item border-success">
                        Gustos Musicales: Pop
                    </li>
                    <button
                        type="button"
                        className="btn btn-success btn-lg btn-block mt-5"
                    >
                        Agregar amigo
                    </button>
                </div>
            </div>
        </>
    )
}

export default OtherProfile
