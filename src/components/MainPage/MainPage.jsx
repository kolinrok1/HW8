import React from 'react';
import Header from '../Header/Header';
import './MainPage.scss';
import Footer from '../Footer/Footer';
import GoodItem from '../GoodItem/GoodItem';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
        <Header />

        <section className="brand center">
        <div className="brand_left">
            <img className="brang_img" src="img/Layer_57-removebg-preview 1.png" alt="brand_photo" />
        </div>
        <div className="brand_right">
            <span className="upper_brand_inscription">THE BRAND</span><br></br>
            <span className="brand_inscription">OF LUXERIOUS</span>&nbsp;
            <span className="brand_inscription" style={{ color: '#F16D7F' }}>FASHION</span>
        </div>
        </section>

        <section className="main center">
        <div className="sections">
            <div className="section1"><img className="section_img" src="img/Layer 43.png" alt="women section img"/></div>
            <div className="section1"><span className="upper_sections_inscription">30% OFF</span><br/><span
                    className="big_sections_inscription">FOR WOMEN</span></div>
            <div className="section2"><img className="section_img" src="img/Rectangle 30.png" alt="man section img"/></div>
            <div className="section2"><span className="upper_sections_inscription">HOT DEAL</span><br/><span
                    className="big_sections_inscription">FOR MEN</span></div>
            <div className="section3"><img className="section_img" src="img/Rectangle 30 (1).png" alt="children section img"/>
            </div>
            <div className="section3"><span className="upper_sections_inscription">NEW ARRIVALS</span><br/><span
                    className="big_sections_inscription">FOR KIDS</span></div>
            <div className="section4"><img className="section_img" src="img/Rectangle 20 (1).png" alt="accessories section img"/>
            </div>
            <div className="section4"><span className="upper_sections_inscription">LUXIROUS & TRENDY</span><br/><span
                    className="big_sections_inscription">ACCESORIES</span></div>
                    </div>
        </section>

        <section className="catalogue_block center">
        <h2 className="heading_before_catalogue">Fetured Items</h2>
        <p className="description_before_catalogue">Shop for items based on what we featured in this week</p>
        <div className="catalogue">
        <GoodItem id='1' imgSrc='img/Rectangle 1.jpg' altDescr='товар1' heading="ELLERY X M'O CAPSULE" description='Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' color='Blue' size='XL' price='134'/>
        <GoodItem id='10' imgSrc='img/Rectangle 2.png' altDescr='товар10' heading="ELLERY X M'O CAPSULE" description='Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' color='Black' size='XXL' price='200'/>
        <GoodItem id='3' imgSrc='img/Rectangle 3.png' altDescr='товар3' heading="ELLERY X M'O CAPSULE" description='Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' color='Blue' size='L' price='76'/>
        <GoodItem id='4' imgSrc='img/Rectangle 4.png' altDescr='товар4' heading="ELLERY X M'O CAPSULE" description='Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' color='Blue' size='XS' price='66'/>
        <GoodItem id='11' imgSrc='img/Rectangle 5.png' altDescr='товар11' heading="ELLERY X M'O CAPSULE" description='Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' color='Blue' size='S' price='85'/>
        <GoodItem id='12' imgSrc='img/Rectangle 6.png' altDescr='товар12' heading="ELLERY X M'O CAPSULE" description='Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' color='Green' size='L' price='109'/>
        </div>
        <Link to="/catalogue"><button className="catalogue_button">Browse All Product</button></Link>
        </section>

        <Footer isFullVersion={true}/>
    </>
  );
}

export default MainPage;