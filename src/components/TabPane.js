import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Tab from './ListItem';
import appStore from '../stores/AppStore';

import '../styles/TabPane.css';

const TabPane = observer(class TabPane extends Component {
  clicked(index) {
    appStore.focusedIndex = index
  }

  render() {
    const self  = this,
          items = this.props.items;

    return (
      <ul className="TabPane">{
        items.map((elem, index) => {
          const style = appStore.focusedIndex === 'focused'
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