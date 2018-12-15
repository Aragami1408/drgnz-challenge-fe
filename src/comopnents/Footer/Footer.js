import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends PureComponent {
  render() {
    return (
      <div id="footer">
        <Link to="about">
          From <span>Drgnz</span> with <img src="/images/heart.png" alt="heart"/>
        </Link>
      </div>
    )
  }
 }

export default Footer
