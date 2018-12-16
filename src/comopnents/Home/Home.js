import React, { PureComponent } from 'react';
import Card from '../Card';
import Header from '../Header';
import Slider from '../Slider';

export class Home extends PureComponent {
  componentDidMount() {
    document.title = 'Home - Drgnz Challenge 2018';
  }
  render() {
    return (
      <div id="home">
        <Header />
        <div id="card-container">
          <Slider>
            <Card
              name="entrance"
            />
            <Card
              name="highland"
            />
            <Card
              name="frozen"
              disabled
            />
            <Card
              name="blade"
              disabled
            />
            <Card
              name="bloodmoon"
              disabled
            />
          </Slider>
        </div>
      </div>
    )
  }
}

export default Home;
