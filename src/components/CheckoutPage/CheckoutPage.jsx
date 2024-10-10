import React from 'react';
import './CheckoutPage.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const CheckoutPage = () => {
  return (
    <>
    <Header />

    <nav className="catalogue__nav">
    <div className="container">
        <div className="catalogue__nav__info">
            <h1 className="catalogue__nav__title">Checkout</h1>
        </div>
    </div>
</nav>

    <section className="checkout">
        <div className="container">
            <div className="checkout__flexline">
                <details className="checkout__details" open>
                    <summary className="checkout__summary">01. Shipping Adress</summary>
                    <div className="checkout__ship-adr__flex">
                        <div className="checkout__ship-adr__flex-left">
                            <p className="checkout__text">Check as a guest or register</p>
                            <p className="checkout__instructions">Register with us for future convenience</p>
                            <form action="submit_form">
                                <div className="checkout__radio-flex">
                                    <label className="checkout__radio" for=""><input type="radio" name="radAnswer"
                                            id="1" /><span className="checkour__radio-text">CHECK AS
                                            A GUEST</span></label>
                                    <label className="checkout__radio" for=""><input type="radio" name="radAnswer"
                                            id="1" /><span>REGISTER</span></label>
                                </div>
                                <p className="checkout__text">register and save time!</p>
                                <p className="checkout__instructions">Register with us for future convenience</p>

                                <p className="checkout__fa-instructions"><i className="fa fa-angle-double-right"></i> Fast and
                                    easy
                                    checkout
                                </p>
                                <p className="checkout__fa-instructions"><i className="fa fa-angle-double-right"></i> Easy
                                    access to
                                    your
                                    order history and status</p>

                                <button className="checkout__button">Continue</button>
                            </form>
                        </div>

                        <div className="checkout__ship-adr__flex-right">
                            <p className="checkout__text">Already registed?</p>
                            <p className="checkout__instructions">Please log in below</p>
                            <form action="submit_form">
                                <p className="checkout__text">EMAIL ADDRESS<span className="checkout__requiredText">*</span></p>
                                <input className="checkout__input" type="email" value="" required />
                                <p className="checkout__text">PASSWORD<span className="checkout__requiredText">*</span></p>
                                <input className="checkout__input" type="password" value="" required />
                                <p className="checkout__requiredText">* Required fields</p>
                                <div className="checkout__login-forgot">
                                    <button className="checkout__button" type="submit">log in</button>
                                    <a href="#">
                                        <p className="checkout__forgotlink">Forgot Password?</p>
                                    </a>
                                </div>
                            </form>

                        </div>
                    </div>
                </details>
            </div>
            <div className="checkout__flexline">
                <details className="checkout__details">
                    <summary className="checkout__summary">02. BILLING INFORMATION</summary>
                    <p className="checkout__instructions">Information to be updated in this section...</p>
                </details>
            </div>
            <div className="checkout__flexline">
                <details className="checkout__details">
                    <summary className="checkout__summary">03. Shipping information</summary>
                    <p className="checkout__instructions">Information to be updated in this section...</p>
                </details>
            </div>
            <div className="checkout__flexline">
                <details className="checkout__details">
                    <summary className="checkout__summary">04. Shipping Method</summary>
                    <p className="checkout__instructions">Information to be updated in this section...</p>
                </details>
            </div>
            <div className="checkout__flexline">
                <details className="checkout__details">
                    <summary className="checkout__summary">05. Payment method</summary>
                    <p className="checkout__instructions">Information to be updated in this section...</p>
                </details>
            </div>
            <div className="checkout__flexline">
                <details className="checkout__details">
                    <summary className="checkout__summary">06. Order review</summary>
                    <p className="checkout__instructions">Information to be updated in this section...</p>
                </details>
            </div>
        </div>
    </section>

    <Footer isFullVersion={false} />
    </>
  )
}

export default CheckoutPage;