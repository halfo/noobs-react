import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { libraries } from '../static-content.js';
import '../styles/Search.css';

const Search = observer(class Search extends Component {
  inputText = observable('');

  onChange(event) {
    this.inputText.set(event.target.value);
  }

  render() {
    const queryString = this.inputText
                            .get()
                            .trim()
                            .toLowerCase();

    const result = libraries.filter((elem) => elem.name
                                                  .toLowerCase()
                                                  .match(queryString));

    return (
      <div className="Search">
        <input type="text"
               onChange={this.onChange.bind(this)}
               placeholder="Type here" />

        <ul>{
          result.map((elem) => {
            return <li>{elem.name} <a href={elem.url}>{elem.url}</a></li>
          })
        }</ul>
      </div>
    )
  }
})

export default Search;
