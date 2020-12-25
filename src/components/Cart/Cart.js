import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price,0);
    let shipping = 0;
    if( totalPrice > 35){
        shipping = 0;
    }
    else if( totalPrice > 15){
        shipping = 4.99;
    }
    else if( totalPrice > 0){
        shipping = 12.99;
    }
    
    const tax = totalPrice / 10;

    const grandTotal = (totalPrice + Number(tax) + shipping ).toFixed(2);
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h2 className="content">Order Summary</h2>
            <h3 className="content">Order Items : {props.cart.length}</h3>
            <p>Price : {formatNumber(totalPrice)}</p>
            <p>Shipping Cost : {shipping}</p>
            <p>Tax + VAT : {formatNumber(tax)}</p>
            <h3 className="text-color">Total Price : {grandTotal}</h3>
            <div className="text-center">
                <button className="btn">Review Your Order</button>
            </div>
        </div>
    );
};

export default Cart;