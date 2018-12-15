import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class NotFound extends PureComponent {
  render() {
    return (
      <div id="not-found">
        <div className="not-found-msg">
          Oops! Wrong Way
        </div>
        <Link to="/" className="not-found-link">
          Return challenge
        </Link>
      </div>
    )
  }
}

export default NotFound
