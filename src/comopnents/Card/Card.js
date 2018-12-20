import React, { Component } from 'react';
import PropTypes from 'prop-types';
import keys from 'lodash/keys';

export class Card extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    isActive: false,
  }

  constructor(props) {
    super(props);
    this.card = React.createRef();
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
    const { name, disabled } = this.props;
    const classList = {
      card: true,
      [`card-${name}`]: true,
      disabled,
    }
    const cardClass = keys(classList).filter(e => classList[e]).join` `;
    return (
      <div className={cardClass} ref={this.card}>
        <div className="card-name shine">
          <div>the</div>
          <div>{name}</div>
        </div>
      </div>
    )
  }
}

export default Card
