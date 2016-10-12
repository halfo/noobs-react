import React, { Component } from 'react';
import '../styles/Showcase.css';

class ShowCase extends Component {
  render() {
    return (
      <p>{this.props.text}</p>
    );
  }
}

export default ShowCase;