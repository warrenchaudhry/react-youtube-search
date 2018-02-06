import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render () {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={ this.onInputChange.bind(this) } />
      </div>
    );
  }

  onInputChange(e) {
    this.setState({term: e.target.value});
  }
};
export default SearchBar;