import React, { useEffect, useReducer, useContext } from 'react'
import data from '../../assets/data.js'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './menu.css'
import Spinner from '../../components/spinner/Spinner'
import logger from 'use-reducer-logger'
import Button from 'react-bootstrap/Button'
import { Store } from '../../Store'
import MenuItems from '../../components/menuitems/MenuItems'


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

    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: ''
    })

    // const { state, dispatch: ctxDispatch } = useContext(Store);
    // const {
    //     cart: { cartItems },
    // } = state;


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

    // const addToCartHandler = async (item) => {
    //     const existItem = cartItems.find((x) => x._id === product._id)
    //     const quantity = existItem ? existItem.quantity + 1 : 1
    //     const { data } = await axios.get(`http://localhost:5000/api/products/${item._id}`)
    //     if (data.inStock < quantity) {
    //         window.alert("Sorry, the product is Out of Stock")
    //         return
    //     }

    //     ctxDispatch({
    //         type: 'ADD_TO_CART',
    //         payload: { ...item, quantity }
    //     })

    // }


    return (
        <main>
            <h1>Menu</h1>
            <div className="menulists">
                {loading ? (<Spinner />) : error ? (<div>{error}</div>) : (
                    <div className="menu">
                        {products.map((product) => (
                            <div key={product.slug}>
                                <MenuItems product={product}/>
                            </div>
                            // <div className="menu" key={product.slug}>
                            //     <Link to={`/products/${product.slug}`}>
                            //         <img src={product.image} alt={product.name} /> </Link>
                            //     <Link to={`/products/${product.slug}`} style={{ textDecoration: "none" }}> <div> <span > {product.name}</span> &nbsp;&nbsp; {product.vegetarian ? <img src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/vegetarian-icon.png" style={{ width: "40px" }} alt="veg" /> : ""}</div> </Link>
                            //     <div>Price: ${product.price}</div>
                            //     <div>{product.description}</div>
                            //     <div className="item button" >
                            //         {product.inStock ? <Button onClick={() => addToCartHandler(product)} style={{ backgroundColor: "green" }}>Add to Cart</Button> : <Button disabled style={{ backgroundColor: "red" }}>Out of Stock</Button>}
                            //     </div>
                            // </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}

export default Menu