import React from 'react';
import './GoodItem.scss';
import { Link } from 'react-router-dom';
import { useCart } from '../../store/store';

const GoodItem = ({ imgSrc, altDescr, heading, description, color, size, price, id }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
      dispatch({
          type: 'ADD_ITEM',
          payload: { id, name: heading, color, size, price, quantity: 1, img: imgSrc, altDescr },
      });
  };
  return (
    <div className="products__item" key={id}>
                    <Link to="/product" className="products__item__link">
                        <img className="products__item__image" src={imgSrc} alt={altDescr} />
                        <div className="catalogue_down_part">
                        <h3 className="catalogue_heading">{heading}</h3>
                        <p className="catalogue_description">{description}</p>
                        <p className="catalogue_description" style={{display:"none"}}>{color}</p>
                        <p className="catalogue_description" style={{display:"none"}}>{size}</p>
                        <p className="catalogue_price">${price}</p>
                        </div>
                    </Link>
                    <div className="products__add__box">
                        <Link  className="products__add__flex" onClick={handleAddToCart}>
                            <p className="products__add__text">Add to Cart</p>
                        </Link>
                    </div>    
                    </div>    
  )
}

export default GoodItem;
                
