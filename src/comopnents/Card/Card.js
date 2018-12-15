import React, { Component } from 'react';
import PropTypes from 'prop-types';
import keys from 'lodash/keys';

export class Card extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
  }

  static defaultProps = {
    isActive: false,
  }

  render() {
    const { name, isActive } = this.props;
    const classList = {
      card: true,
      [`card-${name}`]: true,
      active: isActive,
    }
    const cardClass = keys(classList).filter(e => classList[e]).join` `;
    return (
      <div className={cardClass}>
        <div className="card-name">
          <div>the</div>
          <div>{name}</div>
        </div>
      </div>
    )
  }
}

export default Card
