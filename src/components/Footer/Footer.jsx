import React from 'react';
import './Footer.scss';

const Footer = ({isFullVersion}) => {
  return (
    <footer>
      { isFullVersion && (
      <section className="upper_footer_part center">
        <div className="upper_footer_figures">
          <figure className="upper_footer_figure_element">
            <img className="upper_footer_img" src="img/Footer Forma 1.png" alt="Footer upper icon 1" />
            <figcaption className="upper_footer_heading">Free Delivery</figcaption>
            <p className="upper_footer_description">Worldwide delivery on all. Authoritatively morph next-generation
              innovation with extensive models.
            </p>
          </figure>
          <figure className="upper_footer_figure_element">
            <img className="upper_footer_img" src="img/Footer Forma 2.png" alt="Footer upper icon 2" />
            <figcaption className="upper_footer_heading">Sales & discounts</figcaption>
            <p className="upper_footer_description">Worldwide delivery on all. Authoritatively morph next-generation
              innovation with extensive models.
            </p>
          </figure>
          <figure className="upper_footer_figure_element">
            <img className="upper_footer_img" src="img/Footer Forma 3.png" alt="Footer upper icon 3" />
            <figcaption className="upper_footer_heading">Quality assurance</figcaption>
            <p className="upper_footer_description">Worldwide delivery on all. Authoritatively morph next-generation
              innovation with extensive models.
            </p>
          </figure>
        </div>
      </section>)}
      <section className="central_footer_part">
        <div className="central_footer_part_image_bg"></div>
        <div className="central_footer_content center">
          <figure className="central_footer_part_grid_left">
            <img className="central_footer_part_quote_img" src="img/Intersect.png" alt="woman's photo" />
            <figcaption className="central_footer_part_quote">“Vestibulum quis porttitor dui! Quisque<br /> viverra
              nunc mi, <i>a pulvinar purus<br /> condimentum</i>“
            </figcaption>
          </figure>
          <figure className="central_footer_part_grid_right">
            <figcaption className="central_footer_part_description_bald">SUBSCRIBE</figcaption>
            <figcaption className="central_footer_part_description">FOR OUR NEWLETTER AND PROMOTION</figcaption>
            <form className="input_field_plus_button" action="#">
              <input className="button_input_field" type="email" placeholder="Enter Your Email" />
              <button className="subscribe_button">Subscribe</button>
            </form>
          </figure>
        </div>
      </section>

      <section className="down_footer_part center">
        <span className="copyright_inscription">© 2022 Brand All Rights Reserved.</span>
        <div className="social_networks">
          <a href="#">
            <div className="square_social_networks">
              <img className="social_network_icon" src="img/facebook-icon.svg" alt="Facebook logo" />
            </div>
          </a>
          <a href="#">
            <div className="square_social_networks">
              <img className="social_network_icon" src="img/instagram-icon.svg" alt="Instagram logo" />
            </div>
          </a>
          <a href="#">
            <div className="square_social_networks">
              <img className="social_network_icon" src="img/pinterest-icon.svg" alt="Pinterest logo" />
            </div>
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer;