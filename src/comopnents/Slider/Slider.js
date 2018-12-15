import React, { Component } from 'react'

export class Slider extends Component {
  render() {
    return (
      <div className="slider">
        {this.props.children}
      </div>
    )
  }
}

export default Slider
