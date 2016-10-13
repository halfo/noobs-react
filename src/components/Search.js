import React, { Component } from 'react';
import { observer } from 'mobx-react';

import appStore from '../stores/AppStore';

import { libraries } from '../static-content.js';
import '../styles/Search.css';

const Search = observer(class Search extends Component {
  onChange(event) {
    appStore.searchString = event.target.value
  }

  render() {
    const searchString = appStore.searchString
                                 .trim()
                                 .toLowerCase();

    const result = libraries.filter((elem) => elem.name
                                                  .toLowerCase()
                                                  .match(searchString));

    return (
      <div className="Search">
        <input type="text"
               onChange={this.onChange}
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
