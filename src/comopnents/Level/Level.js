import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';

export class Level extends Component {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired,
    level: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    console.log(params.id);
  }

  render() {
    const { level = {} } = this.props;
    return (
      <div id="level" className="level-entrance">
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
