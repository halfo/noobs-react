import React, { Component } from 'react';
import Tab from './ListItem';
import '../styles/TabPane.css';

class TabPane extends Component {
  state = {
    focused: 0,
  }

  clicked(index) {
    this.setState({ focused: index })
  }

  render() {
    let self  = this,
        items = this.props.items;

    return (
        <ul className="TabPane">{
          items.map((elem, index) => {
            let style = self.state.focused === 'focused'
                      ? 'focused'
                      : '';

            return <Tab id={index}
                        key={index}
                        child={elem}
                        style={style}
                        boundNode={self} />
          })
        }</ul>    
    );
  }
}

export default TabPane;