import React, { useState } from 'react';
import Header from '../Header/Header';
import CatalogNav from '../CatalogNav/CatalogNav';
import './CatalogPage.scss';
import Footer from '../Footer/Footer';
import GoodItem from '../GoodItem/GoodItem';

const CatalogPage = (goods) => {

    //Это данные обо всех товарах. Добавил туда несколько собственных, чтоб было побольше, и можно было во всей красе попробовать пагинацию
    const goodsData = [
        { id: 1,
        imgSrc: 'img/Rectangle 1.jpg', 
        altDescr: 'товар1',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Blue',
        size: 'XL',
        price: 134,}, 
        { id: 2,
            imgSrc: 'img/Rectangle 8.png', 
        altDescr: 'товар8',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Red',
        size: 'L',
        price: 45,}, 
        { id: 3,
            imgSrc: 'img/Rectangle 3.png', 
        altDescr: 'товар3',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Blue',
        size: 'L',
        price: 76,}, 
        { id: 4,
            imgSrc: 'img/Rectangle 4.png', 
        altDescr: 'товар4',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Blue',
        size: 'XS',
        price: 66,}, 
        { id: 5,
            imgSrc: 'img/Rectangle 9.png', 
        altDescr: 'товар9',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'White',
        size: 'XXL',
        price: 45,}, 
        { id: 6,
            imgSrc: 'img/Rectangle 11.png', 
        altDescr: 'товар11',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'White',
        size: 'M',
        price: 123,}, 
        { id: 7,
            imgSrc: 'img/Rectangle 7.png', 
        altDescr: 'товар7',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'White',
        size: 'M',
        price: 100,}, 
        { id: 8,
            imgSrc: 'img/Rectangle 10.png', 
        altDescr: 'товар10',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Black',
        size: 'XL',
        price: 77,}, 
        { id: 9,
            imgSrc: 'img/Rectangle 12.png', 
        altDescr: 'товар12',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Green',
        size: 'S',
        price: 52,}, 
        { id: 10,
            imgSrc: 'img/Rectangle 2.png', 
        altDescr: 'товар10',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Black',
        size: 'XXL',
        price: 200,}, 
        { id: 11,
            imgSrc: 'img/Rectangle 5.png', 
        altDescr: 'товар11',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Blue',
        size: 'S',
        price: 85,}, 
        { id: 12,
            imgSrc: 'img/Rectangle 6.png', 
        altDescr: 'товар12',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Green',
        size: 'L',
        price: 109,}, 
        { id: 13,
            imgSrc: 'img/Rectangle 13.png', 
        altDescr: 'товар13',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Green',
        size: 'M',
        price: 155,}, 
        { id: 14,
            imgSrc: 'img/Rectangle 14.png', 
        altDescr: 'товар14',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Green',
        size: 'M',
        price: 98,}, 
        { id: 15,
            imgSrc: 'img/Rectangle 15.png', 
        altDescr: 'товар15',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Green',
        size: 'S',
        price: 71,},
        { id: 16,
            imgSrc: 'img/Rectangle 16.png', 
        altDescr: 'товар16',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Black',
        size: 'L',
        price: 13,},
        { id: 17,
            imgSrc: 'img/Rectangle 17.png', 
        altDescr: 'товар17',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Red',
        size: 'XL',
        price: 138,},
        { id: 18,
            imgSrc: 'img/Rectangle 18.png', 
        altDescr: 'товар18',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Blue',
        size: 'M',
        price: 97,},
        { id: 19,
            imgSrc: 'img/Rectangle 19.png', 
        altDescr: 'товар19',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Blue',
        size: 'L',
        price: 84,},
        { id: 20,
            imgSrc: 'img/Rectangle 20.png', 
        altDescr: 'товар20',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Black',
        size: 'XL',
        price: 110,},
        { id: 21,
            imgSrc: 'img/Rectangle 21.png', 
        altDescr: 'товар21',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'White',
        size: 'XXL',
        price: 1,},
        { id: 22,
            imgSrc: 'img/Rectangle 22.png', 
        altDescr: 'товар22',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Black',
        size: 'L',
        price: 105,},
        { id: 23,
            imgSrc: 'img/Rectangle 23.png', 
        altDescr: 'товар23',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Red',
        size: 'M',
        price: 113,},
        { id: 24,
            imgSrc: 'img/Rectangle 24.png', 
        altDescr: 'товар24',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'White',
        size: 'M',
        price: 561,},
        { id: 25,
            imgSrc: 'img/Rectangle 25.png', 
        altDescr: 'товар25',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Blue',
        size: 'S',
        price: 68,},
    ]

    //Состояние выбранного цвета (на одежде)
    const [selectedColor, setSelectedColor] = useState('');
    //Состояние выбранных размеров
    const [selectedSizes, setSelectedSizes] = useState([]);
    //Состояние номера текущей страницы (для пагинации по каталогу)
    const [currentPage, setCurrentPage] = useState(1);
    //Состояние кол-ва отображаемых товаров на странице каталога
    const [itemsPerPage, setItemsPerPage] = useState(9);

    //Хэндлер выбора размеров одежды
    const handleSizeChoice = (size) => {
        setCurrentPage(1);
        setSelectedSizes(prev => 
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    //Хэндлер выбора цветов товаров
    const handleColorChoice = (color) => {
        setCurrentPage(1);
        color === 'All' ? setSelectedColor(''): setSelectedColor(color);
    };

    //Фильтрация имеющихся у нас товаров по цветам и размерам
    const filteredGoods = goodsData.filter(product => 
        (selectedColor === '' || product.color === selectedColor) && // Проверка на совпадение цвета
        (selectedSizes.length === 0 || selectedSizes.includes(product.size))
    );

    //Хэндлер, устанавливающий кол-во отображаемых товаров на странице. Привязан к селекту Show на странице каталога.
    //Можно выбрать 9 или All Goods. Во что это выливается - см. следующую функцию.
    const handleItemsPerPage = (e) => {
        setItemsPerPage(e.target.value);
    };

    //Функция, отвечающая за показ товаров на странице. Если выбрано показывать по 9 товаров, 
    // то возможно переключение между страницами товаров (реализована пагинация, пускай, возможно, и не в лучшем ее виде). 
    // Если выбрано All goods, то страница только одна, 
    // и на ней будут показаны все товары
    const showGoodsOnPage = (pageNum, itemsPerPage) => {
        let indexOfLastGood = pageNum*itemsPerPage;
        const indexOfFirstGood = indexOfLastGood-itemsPerPage;
        
        if (itemsPerPage === 'All goods') {
            return filteredGoods.map(good => <GoodItem id={good.id} imgSrc={good.imgSrc} altDescr={good.altDescr} heading={good.heading} description={good.description} color={good.color} size={good.size} price={good.price}/>)
        }

        const goodsOnThisPage = [];
        if (indexOfLastGood > filteredGoods.length) {
            indexOfLastGood = filteredGoods.length;
        }
        for (let i = indexOfFirstGood; i < indexOfLastGood; i++) {
            goodsOnThisPage.push(
                <GoodItem 
                    key={filteredGoods[i].id} 
                    id={filteredGoods[i].id} 
                    imgSrc={filteredGoods[i].imgSrc} 
                    altDescr={filteredGoods[i].altDescr} 
                    heading={filteredGoods[i].heading} 
                    description={filteredGoods[i].description} 
                    color={filteredGoods[i].color} 
                    size={filteredGoods[i].size} 
                    price={filteredGoods[i].price}
                />
            );
        }
        return goodsOnThisPage;
        
    }
   

  return (
    <>
    <Header />

    <CatalogNav /> 

    <section className="prod-catalogue">
        <div className="container">
            <div className="prod-catalogue__content">
                <div className="prod-catalogue__left">
                    <details className="prod-catalogue__details" open>
                        <summary className="prod-catalogue__summary mega-title">Category <i
                                className="fa fa-caret-down fa-caret-down__prod-catalogue"></i></summary>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Accessories</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Bags</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Denim</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Hoodies & Sweatshirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Jackets & Coats</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Pants</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Polos</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shoes</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shorts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Sweaters & Knits</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">T-Shirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Tanks</a>
                    </details>
                    <details className="prod-catalogue__details">
                        <summary className="prod-catalogue__summary mega-title">Brand<i
                                className="fa fa-caret-down fa-caret-down__prod-catalogue"></i></summary>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Accessories</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Bags</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Denim</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Hoodies & Sweatshirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Jackets & Coats</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Pants</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Polos</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shoes</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shorts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Sweaters & Knits</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">T-Shirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Tanks</a>
                    </details>
                    <details className="prod-catalogue__details">
                        <summary className="prod-catalogue__summary mega-title">Designer<i
                                className="fa fa-caret-down fa-caret-down__prod-catalogue"></i></summary>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Accessories</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Bags</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Denim</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Hoodies & Sweatshirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Jackets & Coats</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Pants</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Polos</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shoes</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shorts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Sweaters & Knits</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">T-Shirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Tanks</a>
                    </details>
                </div>
                <div className="prod-catalogue__right">
                    <div className="prod-catalogue__parameters">
                    <div className="prod-catalogue__trending">
                                <h2 className="prod-catalogue__heading">Color</h2>
                                <div className="prod-catalogue__text-flex">
                                    {['Black', 'Blue', 'Green', 'Red', 'White', 'All'].map(color => (
                                        <a 
                                            href="#" 
                                            className={`prod-catalogue__text prod-catalogue__text-link ${selectedColor === color ? 'active' : ''}`} 
                                            onClick={(e) => { e.preventDefault(); handleColorChoice(color); }}
                                            key={color}
                                        >
                                            {color}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="prod-catalogue__size">
                                <h2 className="prod-catalogue__heading">Size</h2>
                                <div className="prod-catalogue__size-flex">
                                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                        <div className="prod-catalogue__checkbox-flex" key={size}>
                                            <input 
                                                name="Size" 
                                                type="checkbox" 
                                                checked={selectedSizes.includes(size)}
                                                onChange={() => handleSizeChoice(size)} 
                                            />
                                            <label className="prod-catalogue__checkbox">{size}</label>
                                        </div>
                                    ))}
                                </div>
                            
                        </div>
                        <div className="prod-catalogue__price">
                            <h2 className="prod-catalogue__heading">Price</h2>
                            <div className="prod-catalogue__range">
                                <div className="prod-catalogue__range-circle"></div>
                                <div className="prod-catalogue__range-between"></div>
                                <div className="prod-catalogue__range-circle"></div>
                            </div>
                            <div className="prod-catalogue__prices"><span>$52</span>
                                <span>$400</span>
                            </div>

                        </div>
                    </div>
                    <div className="prod-catalogue__under-params">
                        <div className="prod-catalogue__sort">
                            <div><span className="prod-catalogue__select-text">Sort By</span>
                                <select className="prod-catalogue__select" name="" id="">
                                    <option selected="selected">Name</option>
                                    <option selected="selected">Size</option>
                                    <option selected="selected">Price</option>
                                    <option selected="selected">Rating</option>
                                    <option selected="selected">Date</option>
                                </select>
                            </div>
                        </div>
                        <div className="prod-catalogue__sort">
                            <div><span className="prod-catalogue__select-text">Show</span>
                                <select className="prod-catalogue__select" name="" id="" onInput={handleItemsPerPage}>
                                    <option selected="selected">9</option>
                                    <option>All goods</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* <div className="prod-catalogue__items-box">
        {filteredGoods.map(good => <GoodItem id={good.id} imgSrc={good.imgSrc} altDescr={good.altDescr} heading={good.heading} description={good.description} color={good.color} size={good.size} price={good.price}/>)}
        </div> */}
        <div className="prod-catalogue__items-box">
        {showGoodsOnPage(currentPage,itemsPerPage)}
        </div>
                    <nav className="prod-catalogue__under-items">
                        {itemsPerPage !== 'All goods' && selectedColor === '' ? <div className="prod-catalogue__pages-select">
                            <a href="#" className="prod-catalogue__pages-select__link"><i className="fa fa-angle-left"></i></a>
                            <a href="#" className="prod-catalogue__pages-select__link" onClick={() => setCurrentPage(1)}>1</a>
                            <a href="#" className="prod-catalogue__pages-select__link" onClick={() => setCurrentPage(2)}>2</a>
                            <a href="#" className="prod-catalogue__pages-select__link" onClick={() => setCurrentPage(3)}>3</a>
                            <a href="#" className="prod-catalogue__pages-select__link"><i className="fa fa-angle-right"></i></a>
                        </div> : <a href="#" className="prod-catalogue__pages-select__link" onClick={() => setCurrentPage(1)}>1</a>}
                        <button className="prod-catalogue__button" onClick={() => setItemsPerPage("All goods")}>View All</button>
                    </nav>
                </div>
            </div>
        </div>
    </section>

    <Footer isFullVersion={true}/>
    </>
  )
}

export default CatalogPage;

