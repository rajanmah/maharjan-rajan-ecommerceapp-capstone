import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useReducer } from 'react'
import logger from 'use-reducer-logger';
// import { Link } from "react-router-dom"
// import data from '../../assets/data.js'
import axios from 'axios'

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

export default function Home() {

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
        <>
            <h1>Featured Products</h1>
            <div className="featured">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                // dynamicHeight={true}
                >
                    {products.map(product => (
                        <div key={product.slug}>
                            <div className="posterImage">
                                <img src={product.image} alt={product.image} />
                            </div>

                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{product.name}</div>
                                {/* <div className="posterImage__runtime">$ {product.price}</div> */}
                                {/* <div className="posterImage__description">
                                    {product.description}
                                </div> */}
                            </div>
                        </div>
                    ))
                    }
                </Carousel>
            </div>
        </>


    )

}
