import React, { Component } from 'react';

class SearchBar extends Component {
  state = {term: ''}

  onInputChange(term) {
    this.setState({term}, () => this.props.delayedSearch(this.state.term))
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={event=> this.onInputChange(event.target.value)}
        />
      </div>
    )
  }
}

export default SearchBar;
