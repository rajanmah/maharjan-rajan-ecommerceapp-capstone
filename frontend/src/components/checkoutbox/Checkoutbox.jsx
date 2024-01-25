// import React from 'react'

// const Checkoutbox = (props) => {
//   return (
//     <div>
//           {cartItems.length === 0 ? "" : (
//                         <div className="checkout">
//                             <div className="item_table">
//                                 <div className="item_detail">
//                                     <h3> Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
//                                         items) : $
//                                         {cartItems.reduce((a, c) => a + c.price * c.quantity, 0).toFixed(2)} </h3>
//                                 </div>
//                                 <div>
//                                     <div className="d-grid">
//                                         <Button
//                                             type="button"
//                                             variant="primary"
//                                             onClick={checkoutHandler}
//                                             disabled={cartItems.length === 0}
//                                             style={{ backgroundColor: "rgb(9, 9, 160)"}}
//                                         >
//                                             Proceed to Checkout
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>)}
//     </div>
//   )
// }

// export default Checkoutbox