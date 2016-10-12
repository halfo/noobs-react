import React, { Component } from 'react';
import '../styles/ListItem.css';

class ListItem extends Component {
  render() {
    let id    = this.props.id,
        text  = this.props.text,
        style = this.props.style,
        node  = this.props.node;

    return (
      <li className={style}
          onClick={node.clicked.bind(node, id)}>
          {text}
      </li>
    );
  }
}

export default ListItem;