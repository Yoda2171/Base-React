import React from 'react'
import '../App.css';

function Profile() {
    return (

        <div className="card cardprofile d-flex justify-content-center m-auto">
            <div className="card-header">
                <div className="row photoprofile"></div>
            </div>
            <div className="card-body">
                <form>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default Profile
