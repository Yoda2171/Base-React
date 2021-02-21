import React, { useContext } from 'react'
import '../App.css';
import { Context } from '../store/appContext';

function CardFeed() {

    const { store, actions } = useContext(Context);

    return (
        <>
            <div class="card border-success mb-3" style={{"max-width": "12rem;"}}>
                <div class="card-header bg-transparent border-success">
                    <img src={!!store.profile && store.profile.images[0].url} className="rounded-pill"></img>
                </div> 
                <div class="card-body text-success">
                    <h5 class="card-title">Success card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-footer bg-transparent border-success">Footer</div>
            </div>


        </>
    )
}

export default CardFeed
