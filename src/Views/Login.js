import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="p-3">
            <div className="card cardlogin mb-3 m-auto" style={{"max-width": "600px","height":"300px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="imglogin" src="./img/img-login.jpg" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body card-body-login mt-5">
                            <h5 className="card-title"><i class="fab fa-spotify"></i>  Sign into your account</h5>
                            <input className="card-text inputlogin w-70 mb-3" type="text" placeholder="Email address" style={{"width":"210px"}}/>
                            <input className="card-text inputlogin d-inlineblock" type="password" placeholder="***********" style={{"width":"210px"}}/>
                            <button className="btn btnlogin btn-success d-inlineblock mt-3" style={{"width":"210px"}}><strong>Login</strong></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;
