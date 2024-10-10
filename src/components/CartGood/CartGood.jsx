import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../store/store';

const CartGood = ({ product, onRemove }) => {
    
    const { dispatch } = useCart();
    const [quantity, setQuantity] = useState(product.quantity);

    const handleQuantityChange = (event) => {
        dispatch({ type: 'REMOVE_ITEM', payload: product.id }); 
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                id: product.id,
                name: product.name,
                color: product.color,
                size: product.size,
                price: product.price,
                quantity: Number(event.target.value),
                img: product.img,
                altDescr: product.altDescr
            },
        });
        setQuantity(event.target.value);
    };

    return (
        <div className="sh__cart__table__productLine">
            <div className="sh__cart__table__productDetails">
                <Link to="/product" className="sh__cart__table__productImg" href="single_page.html">
                    <img className="sh__cart__table__img" src={product.img} alt={product.altDescr} />
                </Link>
                <div className="sh__cart__table__productText">
                    <h3 className="sh__cart__table__productName">{product.name}</h3>
                    <span className="sh__cart__table__productColorSize">
                        Color: <span className="sh__cart__table__productColorSize__data">{product.color}</span><br />
                        Size: <span className="sh__cart__table__productColorSize__data">{product.size}</span>
                    </span>
                </div>
            </div>
            <span className="sh__cart__table__productPrice">${product.price}</span>
            <input className="sh__cart__table__inputField" type="number" 
                    value={quantity} 
                    min="1" 
                    max="100" 
                    onChange={handleQuantityChange} />
            <span className="sh__cart__table__productShipping">FREE</span>
            <span className="ssh__cart__table__productSubtotal">${(product.price * product.quantity)}</span>
            <a className="sh__cart__table__productAction" href="#" onClick={() => onRemove(product.id)}>
                <img src="img/remove_icon.png" alt="крестик-удалить" />
            </a>
        </div>
    );
};

export default CartGood;