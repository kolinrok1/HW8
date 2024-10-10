import { useState } from 'react';
import CartGood from '../CartGood/CartGood';
import { useCart } from '../../store/store';
// import CatalogNav from '../CatalogNav/CatalogNav';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './CartPage.scss';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { state, dispatch } = useCart(); 

    const handleRemove = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id }); 
    };
    
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' }); 
    };

    const totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    
  return (
    <>
    
    <Header />

    <nav className="catalogue__nav">
    <div className="container">
        <div className="catalogue__nav__info">
            <h1 className="catalogue__nav__title">Shopping cart</h1>
        </div>
    </div>
</nav>

<section class="sh__cart__main">
        <div class="container">
            <div class="sh__cart__table">
                <div class="sh__cart__table__collumnNames">
                    <h2 class="sh__cart__table__collumnName sh__cart__table__collumnName__first">Product Details</h2>
                    <h2 class="sh__cart__table__collumnName">Unite Price</h2>
                    <h2 class="sh__cart__table__collumnName">Quantity</h2>
                    <h2 class="sh__cart__table__collumnName">Shipping</h2>
                    <h2 class="sh__cart__table__collumnName">Subtotal</h2>
                    <h2 class="sh__cart__table__collumnName">Action</h2>
                </div>
                {state.items.map(item => (
                        <CartGood key={item.id} product={item} onRemove={handleRemove} />
                    ))}
                <div class="sh__cart__table__buttons">
                    <button class="sh__cart__table__button" onClick={clearCart}>cLEAR SHOPPING CART</button>
                    <Link to="/catalogue"><button class="sh__cart__table__button">cONTINUE sHOPPING</button></Link>
                </div>
            </div>
            <div class="sh__cart__orderForm">
                <div class="sh__cart__orderForm__column">
                    <h2 class="sh__cart__orderForm__title">
                        Shipping Address</h2>
                    <select class="sh__cart__orderForm__input_select" name="" id="">
                        <option selected="selected">Bangladesh</option>
                    </select>
                    <input class="sh__cart__orderForm__input" type="text" value="State" />
                    <input class="sh__cart__orderForm__input" type="int" value="Postcode / Zip"/> 
                    <button class="sh__cart__orderForm__button">Get a Quote</button>
                </div>
                <div class="sh__cart__orderForm__column">
                    <h2 class="sh__cart__orderForm__title">
                        Coupon Discount</h2>
                    <span class="sh__cart__orderForm__instruction">Enter your coupon code if you have one</span>
                    <input class="sh__cart__orderForm__input" type="text" value="State" />
                    <button class="sh__cart__orderForm__button">Apply coupon</button>
                </div>
                <div class="sh__cart__orderForm__column_last">
                    <span class="sh__cart__orderForm__price sh__cart__orderForm__price_little">Sub
                        total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${totalAmount}</span>
                    <span class="sh__cart__orderForm__price sh__cart__orderForm__price_big">GRAND TOTAL
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="sh__cart__orderForm__price_colored">${totalAmount}</span></span>
                        <Link to="/checkout"><button
                                class="sh__cart__orderForm__button sh__cart__orderForm__button_big">Proceed to
                                checkout</button></Link>
                </div>
            </div>
        </div>
    </section>

    <Footer isFullVersion={false} />

    </>
  )
}

export default CartPage
