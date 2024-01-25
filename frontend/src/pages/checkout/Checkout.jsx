import React from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/esm/Button";
import './checkout.css'

function Checkout() {
    const location = useLocation()
    const navigate= useNavigate()
const successHandler=()=>{
    navigate('/success')
}
    return (
        <div className="checkout">
            <h5>Your are logged in as <span style={{color:"red"}}>{location.state.id}</span></h5>
            <hr/>
            <form>
                <h5>Choose payment methods</h5>

                <input type="radio" id="card" name="payment" value="HTML" /> 
                <label for="html">Debit or Credit Card</label><br />
                <input type="radio" id="paypal" name="payment" value="CSS" /> 
                <label for="css">Pay Pal</label><br />
                <input type="radio" id="applepay" name="payment" value="JavaScript" /> 
                <label for="applepay">Apple Pay</label>
<br/>
<br/>
                <Button style={{ backgroundColor: "rgb(9, 9, 160)"}} onClick={successHandler}>Pay</Button>

            </form>

        </div>
    )
}

export default Checkout