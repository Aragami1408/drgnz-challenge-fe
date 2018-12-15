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
              name="gate"
              isActive
            />
            <Card
              name="highland"
            />
            <Card
              name="frozen"
            />
            <Card
              name="blade"
            />
            <Card
              name="bloodmoon"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
