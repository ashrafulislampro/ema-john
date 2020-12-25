import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    // <Header cart={cart}></Header>
    return (
        <div className="container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        handleAddProduct={handleAddProduct}
                        product={product}
                        ></Product>)
                }
            </div>
            <div  className="cart-container">
                <Cart cart={cart}></Cart>
                
            </div>
           
        </div>
    );
};

export default Shop;