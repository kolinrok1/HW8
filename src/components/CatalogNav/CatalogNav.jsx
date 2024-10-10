import React from 'react';
import './CatalogNav.scss';

const CatalogNav = () => {
  return (
    <nav className="catalogue__nav">
    <div className="container">
        <div className="catalogue__nav__info">
            <h1 className="catalogue__nav__title">New Arrivals</h1>
            <ul className="catalogue__nav__breadcrumbs-ul">
                <li className="catalogue__nav__breadcrumbs-li"><a className="catalogue__nav__breadcrumbs-link"
                        href="#">Home</a></li>
                <li className="catalogue__nav__breadcrumbs-li"><a className="catalogue__nav__breadcrumbs-link"
                        href="#">Men</a></li>
                <li className="catalogue__nav__breadcrumbs-li"><a className="catalogue__nav__breadcrumbs-link" href="#">New
                        arrivals</a></li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default CatalogNav;