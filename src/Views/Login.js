import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <form clasName="col-md" style={{"padding" : "6.4em"}}>
                <div className="card m-auto border border-success p-5 col-md" style={{ "max-width": "750px"}}>
                    <div className="row no-gutters">
                        <div className="col-md">
                            <img src="./img/img-login.jpg" alt="" className="img-fluid mb-3" />
                        </div>
                        <div className="col-md">
                            <div className="card-body col-md">
                                <h4 className="card-title mt-5"><i className="fab fa-spotify text-success"></i> Sign into your account</h4>
                                <button className="btn btn-success mt-5 ml-4 col-md" style={{ "width": "210px" }}><strong>Login</strong></button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login;
