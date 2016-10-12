import React, { Component } from 'react';
import { observer } from 'mobx-react';

import appStore from '../stores/AppStore';

import '../styles/Counter.css';

const Counter = observer(class Counter extends Component {
  handleInc() { appStore.incrementCounter() }
  handleDec() { appStore.decrementCounter() }
  handleReset() { appStore.resetCounter() }

  render() {
    return (
      <div className="Counter">        
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
        <button onClick={this.handleReset}> Reset </button>
        <p>Counter: {appStore.counter}</p>
      </div>
    )
  }
})

export default Counter;