import React, { Component } from 'react';
import TabPane from './TabPane';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabPane items={this.props.items} />
      </div>      
    );
  }
}

export default App;