import React, { useEffect, useReducer, useContext  } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../../components/spinner/Spinner'
import './menuitem.css'
import { Store } from '../../Store'
import Button from 'react-bootstrap/Button'

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

  const{state, dispatch:ctxDispatch} =useContext(Store) 

const addToCartHandler = () => {
ctxDispatch({
  type: 'ADD_TO_CART',
  payload: {...product, quantity:1}
})
}
  
  return (
    loading ? <Spinner />
      : error ? <div>{error}</div>
        :
        <div className="menu_item">
          <div className="item_image">
            <img src={product.image} alt={product.name}></img>
          </div>
          <div className="item_details">
            <div className="item"><h2><span>{product.name} </span> {product.vegetarian ? <img src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/vegetarian-icon.png" className="veg_icon" alt="veg"/> : ""} </h2></div>
            <div className="item"><h3>Price: $ {product.price}</h3></div>
            <div className="item"><h5>{product.description}</h5></div>
          
            <div className="item button" >
            {product.inStock ? <Button onClick={addToCartHandler} style={{backgroundColor:"green"}}>Add to Cart</Button> : <Button style={{backgroundColor:"red"}}>Out of Stock</Button>}
            </div>
          </div>
        </div>
  )
}

export default MenuList