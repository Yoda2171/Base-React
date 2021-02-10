import React from 'react'
import CardFeed from '../Components/CardFeed'
import '../App.css';

function Feed() {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="play card border"></div>
            </div>
            <div className="col-md-6">
            <input type="text d-block"></input>
                <div className="row mb-2 mt-2">
                    <CardFeed />
                </div>
                <div className="row">
                    <CardFeed />
                </div>

            </div>
        </div>
    )
}

export default Feed
