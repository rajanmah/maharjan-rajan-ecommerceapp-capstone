import React, { useEffect, useReducer, useContext } from 'react'
import axios from 'axios'
import './menu.css'
import logger from 'use-reducer-logger'
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



    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' })
            try {
                const result = await axios.get('http://localhost:5000/api/products')
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
            } catch (error) {
                dispatch({ type: 'FETCH_FAIL', payload: error.message })
            }

        }
        fetchData()
    }, [])


    return (
        <div className="menu_list">
            <h1 className="list__title">Enjoy <br />FREE Delivery</h1>
            <div className="menu_cards">
                {
                    products.map(product => (
                        <MenuItems product={product} />
                    ))
                }
            </div>
        </div>

    )
}

export default Menu