import React from 'react';
import { Link } from 'react-router-dom';

export const Ranking = () => (
  <div id="empty">
    <div className="empty-msg">
      Under Construction
    </div>
    <Link to="/" className="empty-link">
      Return Home
    </Link>
  </div>
);

export default Ranking;
