import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useReducer } from 'react'
import logger from 'use-reducer-logger';
import { Link } from "react-router-dom"
// import data from '../../assets/data.js'
import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';

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
        <div className="main">
            <div className="intro">
                <div className="main_text">
                    <p>EXPERIENCE ETHNIC <br /> NEWA CUISINE IN <br /> NEW YORK </p></div>
                <Link to="/products" style={{ textDecoration: "none" }} className="explore"><span className="explore">explore</span></Link>
            </div>
            <br />
            <div className="intro_text">
                <h1>Who We Are</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe quia ducimus nam sapiente quos id, quod ipsum ullam porro quasi quisquam pariatur cupiditate nesciunt voluptates exercitationem amet est excepturi!</h6>
            </div>

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
                            {/* <div className="posterImage__overlay"> */}
                                <div className="posterImage__title">{product.name}</div>
                            {/* </div> */}
                        </div>
                    ))
                    }
                </Carousel>
                <div className="intro_text we_are">
                    <h1>Pioneer in Newa Cuisine since 1980</h1>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima eius totam iure pariatur voluptatibus quia sed eos fugiat accusantium. Necessitatibus minus obcaecati, vero nam et incidunt. Sequi impedit aut libero recusandae, nam necessitatibus! Corrupti repellendus recusandae optio sint enim.</h6>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>


    )

}
