import React, { Component } from 'react'
import Slider from 'react-slick'

export default class SimpleSlider extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    }
    return (
      <div className="container">
		<link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
		<style>{cssstyle}</style>
        <Slider {...settings}>
          <div>
            <img src={'https://salt.tikicdn.com/cache/w824/ts/banner/2d/c2/61/c0f66e8395c03913e78a1b4e35b1a11f.png.jpg'} width='100%' height='300px'/>
          </div>
          <div>
            <img src={'https://salt.tikicdn.com/cache/w824/ts/banner/ff/57/3e/d08b888e7feab544ee9ce7c014c92947.png.jpg'} width='100%' height='300px'/>
          </div>
          <div>
            <img src={'https://salt.tikicdn.com/cache/w824/ts/banner/2a/f0/f5/44ae1bdecdac48a8ef5f99c0f2b20766.png.jpg'} width='100%' height='300px'/>
          </div>
        </Slider>
      </div>
    )
  }
}

const cssstyle = `
.container {
  //margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 900px;
}
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`
