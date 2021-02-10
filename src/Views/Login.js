import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div className="container">
                <div className="card" >
                    <div className="card-body">
                        <div className="row">
                            <div id="left" className="col-7">
                                <h4 className="card-title">LOGO</h4>
                                <h6 id="emailText">Email</h6>
                                <h6 id="passwordText">Contraseña</h6>
                                <i className="far fa-envelope" id="envelope"></i>
                                <i className="far fa-eye" id="eye"></i>

                                <form>
                                    <div className="bars">
                                        <div className="form-group" id="email-field">
                                            <input required type="email" className="form-control" id="emailBar" aria-describedby="emailHelp" placeholder="myemail@email.com"></input>
                                        </div>
                                        <div className="form-group" id="password-field">
                                            <input required type="password" className="form-control" id="passwordBar" placeholder="•••••••••"></input>
                                        </div>
                                    </div>
                                    <div className="form-group form-check" id="rememberBox">
                                        <input type="checkbox" className="form-check-input" id="remember" />
                                        <label className="form-check-label" for="exampleCheck1">Recordar</label>
                                    </div>

                                    <button type="submit" className="btn btn-dark" id="loginButton">Iniciar sesión</button>

                                </form>

                            </div>
                            <div id="right" className="col-5">
                                <h3><strong>Bienvenido</strong></h3>
                                <h5><strong>Para iniciar sesión debe ingresar su usuario y contraseña.</strong></h5>
                                <h6><strong>No posees una cuenta de Spotify?</strong></h6>
                                <Link id="register" to="https://www.spotify.com/cl/signup/?forward_url=https%3A%2F%2Fopen.spotify.com%2F" className="btn btn-dark"><strong>Registrarse en Spotify</strong></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>




    )
}

export default Login;
