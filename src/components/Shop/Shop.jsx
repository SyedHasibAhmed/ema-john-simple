import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
         fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    const handlerAddToCart = (product) =>{
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <h2>Product Coming Hare:{products.length}</h2> */}
                {
                    products.map(product => <Product
                      key={product.id}
                      product={product}
                      handlerAddToCart={handlerAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                {/* <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p> */}
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;