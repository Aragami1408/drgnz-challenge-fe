import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import Header from '../../containers/Header';
import LevelItem from '../LevelItem';
import Loading from '../Loading';

export class Stage extends Component {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    downloadStageDetail: PropTypes.func.isRequired,
    stage: PropTypes.objectOf(PropTypes.any),
    isLoading: PropTypes.bool,
  }

  static defaultProps = {
    stage: {},
    isLoading: false,
  }

  componentDidMount() {
    const {
      match, downloadStageDetail,
    } = this.props;
    const { params } = match;

    downloadStageDetail(params.id);
  }

  handleClick = (id) => {
    const { history } = this.props;
    history.push(`/level/${id}`);
  }

  render() {
    const { stage = {}, isLoading } = this.props;
    const { levelList = [] } = stage || {};
    if (isEmpty(stage) || isLoading) return (<Loading />);
    return (
      <div id="stage" className={`stage-${stage.name}`}>
        <Header title={stage.name ? `The ${stage.name}` : ''} />
        <div className="stage-wrapper">
          <div className="stage">
            <div className="stage-title">
              Levels
            </div>
            <div className="stage-level">
              {levelList.map(level => (
                <LevelItem
                  onClick={() => this.handleClick(level._id)} // eslint-disable-line
                  key={level._id} // eslint-disable-line
                  {...level}
                  stageName={stage.name}
                />
              ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stage;
