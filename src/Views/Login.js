import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <form>
                <div className="container-login">
                    <div className="card cardlogin mb-3 m-auto" style={{ "maxWidth": "600px", "height": "300px" }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img className="imglogin" src="./img/img-login.jpg" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body card-body-login mt-5">
                                    <h5 className="card-title"><i class="fab fa-spotify text-success"></i> Sign into your account</h5>
                                    <button className="btn btnlogin btn-success d-inlineblock mt-5" style={{ "width": "210px" }}><strong>Login</strong></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login;
