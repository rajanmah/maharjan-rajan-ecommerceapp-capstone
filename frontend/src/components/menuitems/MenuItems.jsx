import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Store } from '../../Store';
import axios from 'axios';
import './menuitems.css'

const MenuItems = (props) => {
    const {product}= props

    const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`http://localhost:5000/api/products/${item._id}`);
    if (data.inStock < quantity) {
      window.alert('Sorry. This item is out of stock');
      return;
    }
    ctxDispatch({
      type: 'ADD_TO_CART',
      payload: { ...item, quantity },
    });
  };

    return (

        <div>
            <div className="menu">
                <Link to={`/products/${product.slug}`}>
                    <img src={product.image} alt={product.name} /> </Link>
                <Link to={`/products/${product.slug}`} style={{ textDecoration: "none" }}> <div> <span > {product.name}</span> &nbsp;&nbsp; {product.vegetarian ? <img src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/vegetarian-icon.png" style={{ width: "40px" }} alt="veg" /> : ""}</div> </Link>
                <div>Price: ${product.price}</div>
                <div>{product.description}</div>
                <div className="item button" >
                    {product.inStock === 0 ? (<Button onClick={() => addToCartHandler(product)} style={{ backgroundColor: "red" }}>Out of Stock</Button>): (<Button onClick={() => addToCartHandler(product)} style={{ backgroundColor: "green" }}>Add to Cart</Button>)} 
                    {/* {product.inStock === 0 ? (<Button onClick={() => addToCartHandler(product)} style={{ backgroundColor: "green" }}>Add to Cart</Button>):(<Button onClick={() => addToCartHandler(product)} style={{ backgroundColor: "red" }}>Out of Stock</Button>)}  */}
                </div>
            </div>
        </div>


    )
}

export default MenuItems