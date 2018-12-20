import React from 'react';
import { Link } from 'react-router-dom';

export const Level = () => (
  <div id="not-found">
    <div className="not-found-msg">
      Under Construction
    </div>
    <Link to="/" className="not-found-link">
      Return Home
    </Link>
  </div>
);

export default Level;
