import React from 'react'
import CardFeed from '../Components/CardFeed'
import '../App.css';

function Feed() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 mt-5">
                    <div className="play card border"></div>
                </div>
                <div className="col-md-6">
                    <input className="imputfeed" type="text d-block" placeholder="¿Que estas pensando?"></input>
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
