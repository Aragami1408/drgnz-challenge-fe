import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';

export class Level extends Component {
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
      <div id="level">
        <Header />
        <div className="level-wrapper">
          <div className="level">
            Hello world
          </div>
        </div>
      </div>
    );
  }
}

export default Level;
