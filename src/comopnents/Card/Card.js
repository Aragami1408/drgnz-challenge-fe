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

  renderNewState = () => (
    <div className="ribbon-new ribbon">
      <div>New Stage</div>
    </div>
  )

  renderNext = () => (
    <div className="ribbon-countdown ribbon">
      <div>Available in</div>
      <div>22 hours 12 minutes 12 seconds</div>
    </div>
  )

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
        <div className="card-name shine">
          <div>the</div>
          <div>{name}</div>
        </div>
      </div>
    )
  }
}

export default Card
