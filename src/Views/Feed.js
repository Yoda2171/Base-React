import React from 'react'
import CardFeed from '../Components/CardFeed'
import '../App.css';
import Player from '../Components/Player';

function Feed() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-5 mt-5 mr-5">
                    <Player />
                </div>
                <div className="col-md-5 ml-5">
                    <input className="imputfeed btn btn-rounded" type="button" value="¿Que estas pensando?"></input>
                    <div className="row mb-2 mt-2">
                        <CardFeed />
                    </div>
                    <div className="row">
                        <CardFeed />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Feed
