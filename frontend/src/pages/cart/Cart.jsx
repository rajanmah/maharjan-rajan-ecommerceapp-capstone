import { useContext } from 'react';
import { Store } from '../../Store';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './cart.css'
import axios from 'axios';

export default function Cart() {
    const navigate = useNavigate()
    const location = useLocation()
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    const updateCartHandler = async (item, quantity) => {
        const { data } = await axios.get(`http://localhost:5000/api/products/${item._id}`)
        if (data.inStock < quantity) {
            window.alert("Sorry, the product is Out of Stock")
            return
        }

        ctxDispatch({
            type: 'ADD_TO_CART',
            payload: { ...item, quantity }
        })

    }
    const checkoutHandler = () => {
        navigate('/signin')
    }
    const removeItemHandler = (item) => {
        ctxDispatch({ type: 'REMOVE_CART_ITEM', payload: item })
    }
    return (
        <div className="cart">
            <h1>Delivery Bag</h1>
            <div>
                {cartItems.length === 0 ? (
                    (<h4>Empty Bag, no worries, <br/><br/> Explore our <Link style={{textDecoration: 'none'}} to='/products'> Menu</Link> to entice your taste bud. </h4>)
                ) : (
                    <div className="cart_items">
                        {cartItems.map((item) => (
                            <div className="cart_table" key={item._id}>
                                <div className="cart_image" >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="img-fluid rounded img-thumbnail"
                                    ></img>{' '} <br />
                                    <Link to={`/products/${item.slug}`} style={{textDecoration:"none", color:"red"}}><strong>{item.name}</strong></Link>
                                </div>
                                <div className="item-details">
                                    <Button variant="light" onClick={() => updateCartHandler(item, item.quantity + 1)} disabled={item.quantity === item.inStock}>
                                        <span>+ </span>
                                    </Button>{' '}
                                    <span>No. of items:{' '} {item.quantity}</span>{' '}
                                    <Button
                                        variant="light"
                                        onClick={() => updateCartHandler(item, item.quantity - 1)}
                                        disabled={item.quantity === 1}
                                    >
                                        <span> - </span>
                                    </Button>
                                    <div>
                                    <div><span>Price: ${item.price}/item</span></div>
                                </div>
                                </div>
                                
                                <br />
                                {/* delete button */}
                                <Button style={{ backgroundColor: "rgb(9, 9, 160)"}} onClick={() => removeItemHandler(item)}>Remove</Button> 
                            </div>
                        ))}
                    </div>
                )}
                <div>
                    {cartItems.length === 0 ? "" : (
                        
                            <div className="item_table">
                                <div className="item_detail">
                                    <h3> No. of Items: {cartItems.reduce((a, c) => a + c.quantity, 0)} 
                                    <br/> Total Price : $
                                        {cartItems.reduce((a, c) => a + c.price * c.quantity, 0).toFixed(2)} </h3>
                                </div>
                                <div>
                                    <div className="d-grid">
                                        <Button
                                            type="button"
                                            variant="primary"
                                            onClick={checkoutHandler}
                                            disabled={cartItems.length === 0}
                                            style={{ backgroundColor: "rgb(9, 9, 160)"}}
                                        >
                                            Proceed to Checkout
                                        </Button>
                                    </div>
                                </div>
                            </div>
                       )}
                </div>


            </div>
        </div>
    );
}