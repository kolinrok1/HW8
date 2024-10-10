import { Link } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Search from '../Search/Search';
import './Header.scss';
import { useCart } from '../../store/store';

function Header() {
    const { state } = useCart();
    const amountOfCartGoods = state.items.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="header center">
            <div className="header_left">
                <Link to="/" href="#"><img src="img/site-logo.png" alt="group2" /></Link>
                {}
                <Search />
            </div>
            <nav className="header_right">
                
                <HamburgerMenu></HamburgerMenu>
                <Link to="/checkout"><img src="img/Button_copy_2.png" alt="header_button2" /></Link>
                <Link to="/cart"><img src="img/Button_copy_3.png" alt="header_button3" /></Link>
                {amountOfCartGoods < 10 ? <div>
                    <img className="cart-ellipse" src='img/Ellipse 2.png' alt="кружочек на корзину"></img>
                    <span className="cart-ellipse-text">{amountOfCartGoods}</span>
                </div> : <div>
                    <img className="cart-ellipse-morethan10" src='img/Ellipse 2.png' alt="кружочек на корзину"></img>
                    <span className="cart-ellipse-text-morethan10">{amountOfCartGoods}</span>
                </div>}
                
            </nav>
        </header>
    );
}

export default Header;