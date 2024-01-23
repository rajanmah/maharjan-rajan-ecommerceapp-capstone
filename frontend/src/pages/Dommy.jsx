import React from "react"
import {useLocation} from 'react-router-dom';

function Dommy (){
    const location=useLocation()

    return (
        <div className="homepage">

            <h1>Your are logged in as {location.state.id}</h1>

        </div>
    )
}

export default Dommy