import React, { PureComponent } from 'react';
import Card from '../Card';

export class Home extends PureComponent {
  render() {
    return (
      <div id="home">
        <div id="card-container">
          <div className="slider">
            <Card
              name="gate"
            />
            <Card
              name="highland"
              isActive
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
