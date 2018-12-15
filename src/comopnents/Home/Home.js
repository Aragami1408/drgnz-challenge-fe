import React, { PureComponent } from 'react';
import Card from '../Card';
import Header from '../Header';

export class Home extends PureComponent {
  render() {
    return (
      <div id="home">
        <Header />
        <div id="card-container">
          <div className="slider">
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
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
