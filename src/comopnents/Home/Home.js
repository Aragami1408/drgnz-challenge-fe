import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import Card from '../Card';
import Header from '../Header';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  className: 'slider-custom',
  // arrows: false,
  nextArrow: (<NextArrow />),
  prevArrow: (<PrevArrow />),
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
      }
    },
  ],
};

export class Home extends PureComponent {
  componentDidMount() {
    document.title = 'Home - Drgnz Challenge 2018';
  }

  render() {
    return (
      <div id="home">
        <Header />
        <div id="card-container">
          <Slider {...settings}>
            <Card
              ref={this.entrance}
              name="entrance"
            />
            <Card
              ref={this.highland}
              name="highland"
            />
            <Card
              ref={this.frozen}
              name="frozen"
              disabled
            />
            <Card
              ref={this.blade}
              name="blade"
              disabled
            />
            <Card
              ref={this.bloodmoon}
              name="bloodmoon"
              disabled
            />
          </Slider>
        </div>
      </div>
    );
  }
}

export default Home;
