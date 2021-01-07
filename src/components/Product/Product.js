import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props)
    const {name, img, stock, price, seller,key} = props.product;
    
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-text">
                <h3  className="product-name"><Link to={"/product/" + key}>{name}</Link></h3>
                <p>By : {seller}</p>
                <p><small>Price : ${price}</small></p>
                <p>Only {stock} left in stock- Order soon.</p>
               {props.showAddToCart && <button onClick={ () => props.handleAddProduct(props.product)} className="btn"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;
