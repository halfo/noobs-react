import React, { Component } from 'react';
import '../styles/ListItem.css';

class ListItem extends Component {
  render() {
    const { id, child, style, boundNode } = this.props;

    return (
      <li className={style}
          onClick={boundNode.clicked.bind(boundNode, id)}>
          {child}
      </li>
    );
  }
}

export default ListItem;