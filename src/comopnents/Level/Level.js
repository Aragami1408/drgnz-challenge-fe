import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';

export class Level extends Component {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired,
    level: PropTypes.objectOf(PropTypes.any),
    stageList: PropTypes.arrayOf(PropTypes.any).isRequired,
    downloadLevelDetail: PropTypes.func.isRequired,
  }

  static defaultProps = {
    level: {},
  }

  state = {
    stageName: '',
  }

  componentDidMount() {
    const {
      match,
      downloadLevelDetail,
    } = this.props;
    const { params } = match;
    downloadLevelDetail(params.id);
  }

  componentDidUpdate = () => {
    const { level = {}, stageList } = this.props;
    const { stageName } = this.state;

    console.log(stageList);

    document.timeline = (level.name || 'Drgnz Challenge');
    if (level.stageId) {
      const stage = stageList.find(sta => sta._id === level.stageId) // eslint-disable-line
      if (stage.name !== stage || !stageName) {
        this.setState({
          stageName: stage.name,
        });
      }
    }
  }

  render() {
    const { level = {} } = this.props;
    const { stageName } = this.state;
    return (
      <div id="level" className={`level-${stageName}`}>
        <Header />
        <div className="level-wrapper">
          <div className="level">
            <div className="level-title">
              {level.name || 'Sample'}
            </div>
            <div className="level-section-selector">
              {level.name || 'Sample'}
            </div>
            <div id="level-section">
              {level.name || 'Sample'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Level;
