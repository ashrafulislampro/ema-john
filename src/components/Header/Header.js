import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import './Header.css';
const Header = (props) => {
    console.log(props);
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <FontAwesomeIcon className="icon" icon={faShoppingCart}  />
                 {/* <p>cart : {props.cart}</p> */}
            </nav>
        </div>
    );
};

export default Header;