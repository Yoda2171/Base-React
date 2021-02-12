import React from 'react'
import CardFeed from '../Components/CardFeed'
import '../App.css';
import Player from '../Components/Player';

function Feed() {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-5 mt-5 mr-5">
                        <Player />
                    </div>

                    <div className="col-md">
                        <div className="card-header rounded-pill ">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="fotoperfilfeed bg-success"></div>
                                </div>
                                <div className="col-md col-sm">
                                    <input className="text-white btn btn-rounded btn-lg btn-block bg-success rounded-pill" type="button" value="¿Que estas pensando?" data-toggle="modal" data-target="#exampleModal"></input>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2 mt-2">
                            <div className="col-md col-sm">
                                <CardFeed />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md col-sm">
                                <CardFeed />
                            </div>
                        </div>

                    </div>
                </div>
            </div >

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-success">
                            <h3 className="modal-title text-white" id="exampleModalLabel">Crear publicación</h3>
                            <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-3 col-sm">
                                    <img className="fotoperfilfeed bg-success rounded-circle" src="#" />
                                </div>
                                <div className="col-md-9 col-sm">
                                    <h5>Marisleidis Perdomo</h5>
                                </div>
                            </div>
                            <textarea className="w-100 border-0 mt-4" type="text" placeholder="¿Que estas pensando, Marisleidis?"></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Feed
