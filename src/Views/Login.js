import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

function Login() {

    const { store, actions } = useContext(Context);

    const REACT_APP_CLIENT_ID = "67aafa4a55a5406cbb5a1df8096f0448";
    const REACT_APP_AUTHORIZE_URL = "https://accounts.spotify.com/authorize";
    const REACT_APP_REDIRECT_URL = "http://localhost:3000/feed";

    const handleLogin = () => {
        window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
    };

    useEffect(() => {
        handleLogin();
        return () => {
            actions.getUserData();
        }
    }, [])




    return (
        <>
            <div clasName="col-md" style={{ "padding": "188px" }}>
                <div className="card m-auto border border-success p-5 col-md" style={{ "max-width": "750px" }}>
                    <div className="row no-gutters">
                        <div className="col-md">
                            <img src="./img/img-login.jpg" alt="" className="img-fluid mb-3" />
                        </div>
                        <div className="col-md">
                            <div className="card-body col-md">
                                <h4 className="card-title mt-5"><i className="fab fa-spotify text-success"></i> Sign into your account</h4>
                                <button className="btn btn-success mt-5 col-md" onClick={handleLogin}><strong>Login</strong></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
