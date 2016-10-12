import React, { Component } from 'react';
import { observer } from 'mobx-react';

const DefaultComponent = observer(class DefaultComponent extends Component {
  render() {
    return (
      <div className="DefaultComponent">Hello World!</div>
    )
  }
})

export default DefaultComponent;