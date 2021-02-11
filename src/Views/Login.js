import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <form>
                <div class="card m-auto  border border-success " style={{ "max-width": "750px" }}>
                    <div class="row no-gutters">
                        <div class="col-md">
                            <img src="./img/img-login.jpg" alt="" className="img-fluid mb-3" />
                        </div>
                        <div class="col-md">
                            <div class="card-body">
                                <h4 className="card-title mt-5"><i class="fab fa-spotify text-success"></i> Sign into your account</h4>
                                <button className="btn btnlogin btn-success d-inlineblock mt-5" style={{ "width": "210px" }}><strong>Login</strong></button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login;
