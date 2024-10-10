import React, { useState } from 'react';
import './HamburgerMenu.scss';

function HamburgerMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="hamburger-menu_box">
      <div className="hamburger-menu_idle" onMouseEnter={toggleMenu}>
        <img className="header_button1" src="img/Button_copy_1.png" alt="header_button1" />
      </div>
      {isVisible && (
        <div className="hamburger-menu_hover" onMouseLeave={toggleMenu}>
          <aside className="sidemenu_right">
            <h1 className="hamburger-menu_heading">MENU</h1>
            <nav>
              <h1 className="hamburger-menu_category">MEN</h1>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">Accessories</a></li>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">Bags</a></li>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">Denim</a></li>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">T-Shirts</a></li>
              <h1 className="hamburger-menu_category">WOMEN</h1>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">Accessories</a></li>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">Jackets & Coats</a></li>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">Polos</a></li>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">T-Shirts</a></li>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">Shirts</a></li>
              <h1 className="hamburger-menu_category">KIDS</h1>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">Accessories</a></li>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">Jackets & Coats</a></li>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">Polos</a></li>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">T-Shirts</a></li>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">Shirts</a></li>
              <li className="hamburger-menu_li"><a className="hamburger-menu_subcategory" href="#">Bags</a></li>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;