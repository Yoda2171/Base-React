import React from 'react'
import '../App.css';

function CardFeed() {
    return (
        <div className="row p-2">
            <div className="col-md-6 d-flex justify-content-center">
                <div className="card cardfeed">
                    <div className="card-header bg-success">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="photoprofile"></div>
                            </div>
                            <div className="col-md-6 mt-4">
                                <div className="text-white"><strong>Marisleidis Perdomo</strong></div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        Katy Perry me encanta
                    </div>
                    <div className="card-footer"></div>
                </div>
            </div>
        </div>
    )
}

export default CardFeed
