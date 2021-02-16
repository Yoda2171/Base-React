import React, { useContext } from 'react'
import '../App.css';
import { Context } from '../store/appContext';

function Profile() {

    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="card border-success mb-3 m-auto" style={{ "max-width": "38rem" }}>
                <div className="card-header bg-success border-success py-5 d-flex justify-content-center">
                    <img src={!!store.profile &&
                        store.profile.images[0].url} alt="Avatar" />
                </div>
                <div className="card-body list-group-flush">
                    <li className="list-group-item border-success ">{!!store.profile &&
                    store.profile.display_name
                    }
                    </li>
                    <li className="list-group-item border-success">{!!store.profile &&
                    store.profile.email}</li>
                    <li className="list-group-item border-success">Gustos Musicales: Pop</li>
                    <button type="button" className="btn btn-success btn-lg btn-block mt-5">Agregar amigo</button>
                </div>
                
            </div>
        </>
    )
}

export default Profile
