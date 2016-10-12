import React, { Component } from 'react';
import '../styles/ListItem.css';

class ListItem extends Component {
  render() {
    let id         = this.props.id,
        child      = this.props.child,
        style      = this.props.style,
        boundNode  = this.props.boundNode;

    return (
      <li className={style}
          onClick={boundNode.clicked.bind(boundNode, id)}>
          {child}
      </li>
    );
  }
}

export default ListItem;