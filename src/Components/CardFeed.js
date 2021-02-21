import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../App.css';
import { Context } from '../store/appContext';

function CardFeed() {

    const { store, actions } = useContext(Context);

     

    let profileID = `/profile/id ` //COLOCAR EL ID DE LA BASE DE DATOS DE NOSOTROS 

    return (
        <>
            <div className="row p-2">
            <div className="col-md col-sm d-flex justify-content-center">
                <div className="card cardfeed">	
                    <div className="card-header bg-success">
                        <div className="row">
                            <div className="col-md col-sm">
                                <div className="photoprofile">

                                </div>
                            </div>
                            <div className="col-md col-sm mt-4">
                                <div className="card-title"> <Link to ={profileID} > Marisleidis Perdomo </Link> </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        Katy Perry me encanta
                    </div>
                    <div className="card-footer">
                        Katy Perry me encanta
                    </div>
                </div>
            </div>
        </div>


        </>
    )
}

export default CardFeed
