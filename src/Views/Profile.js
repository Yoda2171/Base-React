import React from 'react'
import '../App.css';

function Profile() {
    return (
        <>
            <div className="card border-success mb-3 m-auto" style={{ "max-width": "38rem" }}>
                <div className="card-header bg-success border-success py-5">Header</div>
                <div className="card-body list-group-flush">
                    <li className="list-group-item border-success ">Marisleidis</li>
                    <li className="list-group-item border-success">marisleidis84@gmail.com</li>
                    <li className="list-group-item border-success">Gustos Musicales: Pop</li>
                    <button type="button" className="btn btn-success btn-lg btn-block mt-5">Agregar amigo</button>
                </div>
                
            </div>
        </>
    )
}

export default Profile
