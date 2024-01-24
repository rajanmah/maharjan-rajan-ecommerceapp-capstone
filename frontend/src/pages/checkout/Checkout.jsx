import React from "react"
import {useLocation} from 'react-router-dom';
import Button from "react-bootstrap/esm/Button";

function Checkout (){
    const location=useLocation()

    return (
        <div className="homepage">

            <h1>Your are logged in as {location.state.id}</h1>

<Button>Proceed to Payment Options</Button>
        </div>
    )
}

export default Checkout