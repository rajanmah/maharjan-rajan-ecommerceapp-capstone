import React from 'react'
import './card.css'
// import { Link } from 'react-router-dom'

export default function Card() {

    return <>
    <h4>Menu Card</h4>
        <div className="cards">
            <img className="cards__img" src='https://www.insidehimalayas.com/wp-content/uploads/2015/05/newari-food.jpg' alt="samaybaji" />
            <div className="cards__overlay">
                
            </div>
        </div><div className="card__title"> Samay Baji Set</div>
                <div className="card__runtime"> $ 9.99</div>
                <div className="card__description">Description</div>
                <button>Add to Cart</button>

    </>
}