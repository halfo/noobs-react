import React, { Component } from 'react';
import { observer } from 'mobx-react';

import TabPane from './TabPane';
import Showcase from './Showcase';
import appStore from '../stores/AppStore';

import '../styles/App.css';

const App = observer(class App extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="App">
        <TabPane items={items} />
        <Showcase text={items[appStore.focusedIndex]}/>        
      </div>
    );
  }
})

export default App;