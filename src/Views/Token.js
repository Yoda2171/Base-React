import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext';

function Token() {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getToken();
        actions.getUserData();

        return () => {
        }

    }, []);

    

    

    return (
        <>
            <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        </>
    )
}

export default Token
