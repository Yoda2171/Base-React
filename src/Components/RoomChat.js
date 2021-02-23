import React from 'react'

function RoomChat() {
    return (
        <>
            <div className="col-md-6">
                <div className="card w-100 h-75 bg-success">
                    <div className="card-body">
                        <h5 className="card-title text-white"><i className="fas fa-camera"></i> Friends</h5>
                        <p className="card-text text-white bubble">
                            <strong>Hello!</strong>
                        </p>
                        <p className="card-text text-white bubble">
                            <strong>Hi!</strong>
                        </p>
                    </div>
                    <input type="text" placeholder="Type something..." className="card-footer bg-white rounded msgBox" />
                </div>
            </div>

        </>
    )
}

export default RoomChat
