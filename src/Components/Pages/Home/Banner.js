import React from "react";
import { Carousel } from "react-bootstrap";
import BannerImg from '../../Images/Banner.png'
import Styles from '../../Styles/Banner.module.css'

const Banner = () => {
  return (
    <div>
      <Carousel controls={false} >
        <Carousel.Item>
          <img
            className="d-block w-100 myImg"
            src={BannerImg}
            alt="First slide"
          />
          <div className={Styles.MyCaption}>
            <h3>Computer Engineering</h3>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
