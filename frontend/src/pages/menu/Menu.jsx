import React, { useEffect, useReducer, useState } from 'react'
// import data from '../../assets/data.js'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './menu.css'
import Spinner from '../../components/spinner/Spinner'
import logger from 'use-reducer-logger'
import Button from 'react-bootstrap/Button'

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true }

        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false }

        case 'FETCH_FAIL':
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
}


const Menu = () => {
    // const [products, setProducts] = useState([])
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' })
            try {
                const result = await axios.get('http://localhost:5000/api/products')
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
            } catch (error) {
                dispatch({ type: 'FETCH_FAIL', payload: error.message })
            }

            // setProducts(result.data)
        }
        fetchData()
    }, [])

    return (
        <main>
            <h1>Menu</h1>
            <div className="menulists">
                {/* {loading ? <Spinner /> : ""} */}
                {loading ? <Spinner /> : error ? (<div>{error}</div>) : (
                    products.map(product => (
                        <div className="menu" key={product.slug}>
                            <Link to={`/products/${product.slug}`}>
                                <img src={product.image} alt={product.name} /> </Link>
                            <Link to={`/products/${product.slug}`} style={{textDecoration:"none" }}> <div> <span > {product.name}</span> &nbsp;&nbsp; {product.vegetarian ? <img src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/vegetarian-icon.png" style={{width:"40px"}} alt="veg"/> : ""}</div> </Link>
                            <div>Price: ${product.price}</div>
                            <div>{product.description}</div>
                            <div className="item button" >
            {product.inStock ? <Button  style={{backgroundColor:"green"}}>Add to Cart</Button> : <Button disabled style={{backgroundColor:"red"}}>Out of Stock</Button>}
            </div>
                        </div>
                    )))
                }
            </div>
        </main>
    )
}

export default Menu