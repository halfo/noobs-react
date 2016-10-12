import React, { Component } from 'react';
import { observer } from 'mobx-react';

import TabPane from './TabPane';
import appStore from '../stores/AppStore';

import '../styles/App.css';

const App = observer(class App extends Component {
  render() {
    return (
      <div className="App">
        <TabPane items={this.props.items} />
        <p>{this.props.items[appStore.getFocusedIndex()]}</p>
      </div>
    );
  }
})

export default App;