import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <div id="footer">
    <Link to="about">
      From
      <span>Drgnz</span>
      with
      <img src="/images/heart.png" alt="heart" />
    </Link>
  </div>
);

export default Footer;
