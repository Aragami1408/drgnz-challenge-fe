import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Card from '../Card';
import Header from '../../containers/Header';
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
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export class Home extends PureComponent {
  static propTypes = {
    stages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  }

  componentDidMount() {
    document.title = 'Home - Drgnz Challenge';
  }

  renderHeader = () => (
    <Header />
  )

  renderHome = (stages) => {
    const stageToShown = stages.filter(stage => !stage.hide);
    const slidesToShow = stageToShown.length;
    settings.slidesToShow = slidesToShow;

    return (
      <div id="card-container">
        <Slider {...settings}>
          {
            stageToShown.map(stage => (
              <Card
                key={stage._id} // eslint-disable-line
                disabled={!stage.unlocked}
                stage={stage}
              />
            ))
          }
        </Slider>
      </div>
    );
  }

  render() {
    const { stages } = this.props;
    return (
      <div id="home">
        {this.renderHeader()}
        {this.renderHome(stages)}
      </div>
    );
  }
}

export default Home;
