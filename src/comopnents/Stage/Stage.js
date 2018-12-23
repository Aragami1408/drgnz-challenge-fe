import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';

export class Stage extends Component {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired,
    downloadStageDetail: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const {
      match, downloadStageDetail,
    } = this.props;
    const { params } = match;

    downloadStageDetail(params.id);
  }

  render() {
    return (
      <div id="stage">
        <Header />
        <div className="stage-wrapper">
          <div className="stage">
            Hello world
          </div>
        </div>
      </div>
    );
  }
}

export default Stage;
