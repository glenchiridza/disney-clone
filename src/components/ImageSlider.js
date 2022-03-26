import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {
    let settings = {
        dots:true,
        Infinity:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    }

  return (
    <Carousel {...settings}>
        <Wrap>
        <img src='/images/slider-badging.jpg' alt='slider1'/>
        </Wrap>
        <Wrap>
        <img src='/images/slider-badag.jpg' alt='slider2'/>
        </Wrap>
        <Wrap>
        <img src='/images/slider-badging.jpg' alt='slider3'/>
        </Wrap>
    </Carousel>
  )
}

export default ImageSlider;

const Carousel = styled(Slider)`
    margin-top:20px;

    ul li button{
        &:before{
            font-size:10px;
            color:#fff;
        }
    }

    li.slick-active button:before{
        color:#fff;
    }

    .slick-list{
        overflow:visible;
    }
    button{
        z-index:1;
    }
`;

const Wrap = styled.div`
    img{
        border:4px solid transparent;
        width:100%;
        height:100%;
        border-radius:4px;
        box-shadow: rgba(0 0 0 / 69%) 0px 36px 30px -10px,
        rgba(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration:300ms;

        &:hover{
            border:4px solid #e1e1e1;
        }
    }
`;