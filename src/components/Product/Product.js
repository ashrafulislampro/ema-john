import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    
    const {name, img, stock, price, seller} = props.product;
    
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-text">
                <h3  className="product-name">{name}</h3>
                <p>By : {seller}</p>
                <p><small>Price : ${price}</small></p>
                <p>Only {stock} left in stock- Order soon.</p>
                <button onClick={ () => props.handleAddProduct(props.product)} className="btn"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;
