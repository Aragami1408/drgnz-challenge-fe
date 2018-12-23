import React, { Component } from 'react';
import PropTypes from 'prop-types';
import keys from 'lodash/keys';
import Toast from '../../common/toast';

export class Card extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    isNew: PropTypes.bool,
  }

  static defaultProps = {
    disabled: false,
    isNew: false,
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

  handleStageSelection = () => {
    const { disabled } = this.props;
    if (disabled) {
      Toast.defaultToast('Currently unavailable');
    } else {
      Toast.defaultToast('Available soon');
    }
  }

  render() {
    const { name, disabled, isNew } = this.props;
    const classList = {
      card: true,
      [`card-${name}`]: true,
      disabled,
    };
    const cardClass = keys(classList).filter(e => classList[e]).join` `;
    return (
      <div
        className={cardClass}
        onClick={this.handleStageSelection}
      >
        <div className="card-name shine">
          {isNew && this.renderNewState()}
          <div>the</div>
          <div>{name}</div>
        </div>
      </div>
    )
  }
}

export default Card;
