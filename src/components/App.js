import React, { Component } from 'react';
import { observer } from 'mobx-react';

import TabPane from './TabPane';
import { showcaseItems } from '../static-content.js';
import appStore from '../stores/AppStore';

import '../styles/App.css';

const App = observer(class App extends Component {
  render() {
    const { itemNames } = this.props;
    console.log(Object.keys(showcaseItems));
    console.log(itemNames);
    return (
      <div className="App">
        <TabPane itemNames={itemNames} />
        {showcaseItems[itemNames[appStore.focusedIndex]]}                
      </div>
    );
  }
})

export default App;