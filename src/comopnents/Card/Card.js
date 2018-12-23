import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import keys from 'lodash/keys';
import isNumber from 'lodash/isNumber';
import Toast from '../../common/toast';
import HistoryService from '../../common/history';

export class Card extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    index: PropTypes.number.isRequired,
    selectStage: PropTypes.func.isRequired,
    stage: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  static defaultProps = {
    disabled: false,
  }

  state = {
    hour: '',
    minute: '',
    second: '',
  }

  componentDidMount() {
    const { stage } = this.props;
    if (!stage.unlockDate) return;
    this.calculateDiff();
    this.timer = setInterval(this.calculateDiff, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  calculateDiff = () => {
    const now = moment();
    const { stage } = this.props;
    const unlockDate = moment(stage.unlockDate, 'MM/DD/YYYY hh:mm');
    let total = unlockDate.diff(now, 'seconds');
    const hour = Math.floor(total / 3600);
    total -= hour * 3600;
    const minute = Math.floor(total / 60);
    total -= minute * 60;
    const second = total;

    this.setState({
      hour,
      minute,
      second,
    });
  }

  renderNewState = () => (
    <div className="ribbon-new ribbon">
      <div>New Stage</div>
    </div>
  )

  getS = value => ((value > 1) ? 's' : '');

  renderNext = () => {
    const {
      hour,
      minute, second,
    } = this.state;
    return (
      <div className="ribbon-countdown ribbon">
        <div className="ribbon-countdown-title">Available in</div>
        <div className="ribbon-countdown-countdown">
          {isNumber(hour) && `${hour} hour${this.getS(hour)} `}
          {isNumber(minute) && `${minute} minute${this.getS(minute)} `}
          {isNumber(second) && `${second} second${this.getS(second)}`}
        </div>
      </div>
    );
  }

  handleStageSelection = () => {
    const {
      disabled, selectStage,
      index, stage,
    } = this.props;
    if (disabled) {
      Toast.defaultToast('Currently unavailable');
    } else {
      selectStage(index);
      HistoryService.push(`/stage/${stage._id}`); // eslint-disable-line
    }
  }

  render() {
    const { stage, disabled } = this.props;
    const classList = {
      card: true,
      [`card-${stage.name}`]: true,
      disabled: disabled && !stage.unlockDate,
    };
    const cardClass = keys(classList).filter(e => classList[e]).join` `;
    return (
      <div
        className={cardClass}
        onClick={this.handleStageSelection}
      >
        <div className="card-name shine">
          {stage.unlockDate && this.renderNext()}
          {stage.newStage && this.renderNewState()}
          <div>the</div>
          <div>{stage.name}</div>
        </div>
      </div>
    );
  }
}

export default Card;
