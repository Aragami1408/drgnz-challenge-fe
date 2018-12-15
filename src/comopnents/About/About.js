import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class NotFound extends PureComponent {
  render() {
    return (
      <div id="about">
        <div>
          Card images are belong to <a href="https://duelyst.com/">Duelyst</a> - <a href="https://www.counterplaygames.com/">Counter Play Games</a>.
        </div>
        <Link to="/" className="about-link">
          Return challenge
        </Link>
      </div>
    )
  }
}

export default NotFound
