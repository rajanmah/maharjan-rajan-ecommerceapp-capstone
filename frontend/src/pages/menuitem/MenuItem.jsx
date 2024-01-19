import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../../components/spinner/Spinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './menuitem.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }

    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false }

    case 'FETCH_FAIL':
      return { ...state, error: action.payload, loading: false }
    default:
      return state;
  }
}

const MenuList = () => {
  const params = useParams()
  const { slug } = params

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: ''
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get(`http://localhost:5000/api/products/slug/${slug}`)
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message })
      }

    }
    fetchData()
  }, [slug])



  return (
    loading ? <Spinner />
      : error ? <div>{error}</div>
        :
        <div className="menu_item">
          <div className="item_image">
            <img src={product.image} alt={product.name}></img>
          </div>
          <div className="item_details">
            <div><h2><span>{product.name} </span> {product.vegetarian} ? <img src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/vegetarian-icon.png" className="veg_icon" alt="veg"/> : "" </h2></div>
            <div><h3>$ {product.price}</h3></div>
            <div>{product.description}</div>
          
            <div>
            
            </div>
          </div>
        </div>
  )
}

export default MenuList