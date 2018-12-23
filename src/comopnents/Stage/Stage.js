import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';

export class Stage extends Component {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    console.log(params.id);
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
