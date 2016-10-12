import React, { Component } from 'react';
import ListItem from './ListItem';
import '../styles/App.css';

class App extends Component {
  state = {
    focused: 0,
  }

  clicked(index) {
    this.setState({ focused: index })
  }

  render() {
    let self = this;

    return (
      <div className="App">
        <ul>{
          this.props.items.map((elem, index) => {
            let style = self.state.focused === 'focused'
                      ? 'focused'
                      : '';

            return <ListItem id={index}
                             key={index}
                             text={elem}
                             style={style}
                             node={self} />
          })
        }</ul>
      </div>
    );
  }
}

export default App;