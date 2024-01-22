// import { useContext } from 'react'
// import { Store } from '../../Store'
// import { Link } from 'react-router-dom';

// const Cart = () => {
//     const { state, dispatch: ctxDispatch } = useContext(Store);
//     const {
//       cart: { cartItems },
//     } = state;

//     return (
//         <div>
//             <div className="cart_title"><h1>Delivery Bag</h1></div>
//             <div className="cart_col">
//             {cartItems.length === 0 ? (<h4>Cart is Empty. <Link to='/products'>Go to Menu</Link> </h4>) : (
//                 <div>
//                     {cartItems.map((item) = (
//                         <div>
//                             <div className="cart_image"><img src={item.image} alt={item.name} /> {' '}
//                                 <Link to={`/product/${item.slug}`}>{item.name}</Link>
//                             </div>
//                             <div>
//                                 <button>-</button>
//                                 <span>{item.quantity}</span>
//                                 <button>+</button>
//                             </div>
//                             <div className="item_price">{item.price}</div>
//                             <button>Delete</button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//             </div>

//             <div>
//                 <h3>Subtotal ({cartItems.reduce((a,c) => a+c.quantity, 0)}
//                 items): $
//                 {cartItems.reduce((a,c) => a +c.price * c.quantity, 0)}
//                 </h3>
//                 </div>

//                 <div>
//                     <button>proceed to checkout</button>
//                 </div>
//         </div>

//     );

// }

// export default Cart



import { useContext } from 'react';
import { Store } from '../../Store';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './cart.css'

export default function CartScreen() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    return (
        <div>
            <h1><i>Delivery Bag</i></h1>
            <div>

                {cartItems.length === 0 ? (
                    (<h4>Cart is Empty. <Link to='/products'>Go to Menu</Link> </h4>)
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
                                    <Link to={`/products/${item.slug}`}>{item.name}</Link>
                                </div>
                                <div className="item-details">
                                    <Button variant="light" disabled={item.quantity === 0}>
                                    <strong>- </strong>
                                    </Button>{' '}
                                    <span>No. of items: {item.quantity}</span>{' '}
                                    <Button
                                        variant="light"
                                        disabled={item.quantity === item.countInStock}
                                    >
                                        <strong>+ </strong>
                                    </Button>
                                </div>
                                <div>
                                    <div>${item.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div>
                {cartItems.length === 0 ? "" : ( 
                    <div className="checkout">
                        <div className="item_table">
                            <div className="item_detail">
                                <h3> Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                                    items) : $
                                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)} </h3>
                            </div>
                            <div>
                                <div className="d-grid">
                                    <Button
                                        type="button"
                                        variant="primary"
                                        disabled={cartItems.length === 0}
                                    >
                                        Proceed to Checkout
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>


            </div>
        </div>
    );
}
