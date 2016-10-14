import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import '../styles/Counter.css';

const Counter = observer(class Counter extends Component {
  count = observable(0);

  handleInc() { this.count.set(this.count.get() + 1) }
  handleDec() { this.count.set(this.count.get() - 1) }
  handleReset() { this.count.set(0) }

  render() {
    return (
      <div className="Counter">
        <button onClick={this.handleInc.bind(this)}> + </button>
        <button onClick={this.handleDec.bind(this)}> - </button>
        <button onClick={this.handleReset.bind(this)}> Reset </button>
        <p>Counter: {this.count.get()}</p>
      </div>
    )
  }
})

export default Counter;
