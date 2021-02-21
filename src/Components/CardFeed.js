import React, { useContext } from 'react'
import '../App.css';
import { Context } from '../store/appContext';

function CardFeed(props) {

    const { store, actions } = useContext(Context);

    return (
        <div className="row p-2">
            <div className="col-md col-sm d-flex justify-content-center">
                <div className="card cardfeed">
                    <div className="card-header bg-success">
                        <div className="row">
                            <div className="col-md col-sm">
                                <div className="photoprofile col-md-4">
                                    <img className="text-white" id="feedAvatar" src={props.photo}/>
                                </div>
                            </div>
                            <div className="col-md col-sm mt-4">
                                <div className="text-white"><strong>{props.name}</strong></div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {props.commentary}
                    </div>
                    <div className="card-footer">
                    <button className="fa fa-heart mr-2 border-0" aria-hidden="true"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFeed
