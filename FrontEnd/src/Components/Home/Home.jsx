import React, { useEffect } from 'react'
import Slider from 'react-slick/lib/slider';
import { MotionAnimate } from 'react-motion-animate' 
import './Home.css'
import Intro from './Intro'
import Welcom from './Welcom'
import Menu from './Menu'
import Event from './Event'
import Booking from './Booking'
import Review from './Review'
import Video from './Video'
import Blog from './Blog'
import { Link } from 'react-router-dom';
import Signup from '../Footer/Signup';
import { animate, animate1, animate2 } from '../../loader';
import Footer from '../Footer/Footer';
import $ from "jquery";

const Home = () => {

  
  var settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      dots: true,
      infinite: true,
      autoplay: true,
      Speed: 6000,
      arrows: true,
  }

  return (
    <div>

      <section className="section-slide">
        <div className="wrap-slick1">
          <div className="slick1">
            <Slider {...settings}  >
              <div className="item-slick1 item1-slick1" >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                <span className="caption1-slide1 txt1 t-center animated  m-b-15" data-appear="fadeInDown">
                    <MotionAnimate {...animate1} >
                    Welcome to
                    </MotionAnimate>
                </span>

                <h2 className="caption2-slide1 tit1 t-center animated  m-b-37" data-appear="fadeInUp">
                <MotionAnimate {...animate2} >
                    Pato Place
                    </MotionAnimate>
                  
                </h2>

                <div className="wrap-btn-slide1 animated " data-appear="zoomIn">
                  <Link to={'/menu'} className="btn1 flex-c-m size1 txt3 trans-0-4">
                    Look Menu
                  </Link>
                </div>
              </div>
              </div>

              <div className="item-slick1 item2-slick1" >
                <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                  <span className="caption1-slide1 txt1 t-center animated  m-b-15" data-appear="rollIn">
                    Welcome to
                  </span>

                  <h2 className="caption2-slide1 tit1 t-center animated  m-b-37" data-appear="lightSpeedIn">
                    Pato Place
                  </h2>

                  <div className="wrap-btn-slide1 animated " data-appear="slideInUp">
                    <Link to={'/menu'} className="btn1 flex-c-m size1 txt3 trans-0-4">
                    Look Menu
                  </Link>
                  </div>
                </div>
              </div>

              <div className="item-slick1 item3-slick1" >
                <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                  <span className="caption1-slide1 txt1 t-center animated  m-b-15" data-appear="rotateInDownLeft">
                    Welcome to
                  </span>

                  <h2 className="caption2-slide1 tit1 t-center animated  m-b-37" data-appear="rotateInUpRight">
                    Pato Place
                  </h2>

                  <div className="wrap-btn-slide1 animated " data-appear="rotateIn">
                    <Link to={'/menu'} className="btn1 flex-c-m size1 txt3 trans-0-4">
                    Look Menu
                  </Link>
                  </div>
                </div>
              </div>
            </Slider>

          </div>

          <div className="wrap-slick1-dots"></div>
        </div>
      </section>
      <Welcom />
        <Intro />
        <Menu />
        <Event />
        <Booking />
        <Review />
        <Video />
      <Blog />
      <Signup />
      <Footer/>
    </div>
  )
}

export default Home
