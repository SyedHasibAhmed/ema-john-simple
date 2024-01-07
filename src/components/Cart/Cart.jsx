import './Cart.css'
import React from 'react';

// const Cart = (props) => {
const Cart = ({cart}) => {
    // const cart = props.cart;  // option 1 
    // const {cart} props;  // option 2
   
    console.log(cart);

    let total = 0;
    for (const product of cart){
        total = total + product.price;
    }

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Shipping:</p>
            <p>Tax :</p>
            <h6>Grand Total:  </h6>
        </div>
    );
};

export default Cart;