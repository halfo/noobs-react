import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Tab from './ListItem';
import appStore from '../stores/AppStore';

import '../styles/TabPane.css';

const TabPane = observer(class TabPane extends Component {
  onClick(index) { appStore.focusedIndex = index }

  render() {
    const self      = this,
          itemNames = this.props.itemNames;

    return (
      <ul className="TabPane">{
        itemNames.map((elem, index) => {
          const style = appStore.focusedIndex === index
                      ? 'focused'
                      : '';

          return <Tab id={index}
                      key={index}
                      child={elem}
                      style={style}
                      context={self} />
        })
      }</ul>
    );
  }
})

export default TabPane;
