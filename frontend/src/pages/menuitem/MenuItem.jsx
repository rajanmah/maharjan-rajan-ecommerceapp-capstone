import { useEffect, useReducer, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../../components/spinner/Spinner'
import './menuitem.css'
import { Store } from '../../Store'
import Button from 'react-bootstrap/Button'
import { getError } from '../../utils' 


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }

    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false }

    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}

const MenuList = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { slug } = params

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get(`http://localhost:5000/api/products/slug/${slug}`)
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(error) })
      }
    }
    fetchData()
  }, [slug])

  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { cart } = state
  
  const addToCartHandler = async (item) => {  //adding items to the cart
    const existItem = cart.cartItems.find((x) => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    const { data } = await axios.get(`/api/products/${product._id}`)
// console.log(data)
    if (data.inStock < quantity) {
      window.alert("Sorry, the product is Out of Stock")
      return
    }

    ctxDispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity }
    })
    navigate('/cart')
  }

  return loading ? <Spinner />
    : error ? (<div>{error}</div>)
      : (
        <div className="menu_item">
          <div className="item_image">
            <img src={product.image} alt={product.name}></img>
          </div>
          <div className="item_details">
            <div className="item"><h2><span>{product.name} </span> {product.vegetarian ? <img src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/vegetarian-icon.png" className="veg_icon" alt="veg" /> : ""} </h2></div>
            <div className="item"><h3>Price: $ {product.price}</h3></div>
            <div className="item"><h5> Description: {product.description}</h5></div>

            <div className="item button" >
              {product.inStock ? <Button onClick={addToCartHandler} style={{ backgroundColor: "green" }}>Add to Cart</Button> : <Button style={{ backgroundColor: "red" }}>Out of Stock</Button>}
            </div>
          </div>
        </div>
      )
}

export default MenuList