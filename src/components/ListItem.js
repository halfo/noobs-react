import React, { Component } from 'react';
import '../styles/ListItem.css';

class ListItem extends Component {
  render() {
    const { id, child, style, context } = this.props;

    return (
      <li className={style}
          onClick={context.onClick.bind(context, id)}>
          {child}
      </li>
    );
  }
}

export default ListItem;