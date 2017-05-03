import React from 'react'
import SearchGrid from './search_grid';
import SearchInput from './search_input';
import SearchList from './search_list';
import SearchNotFound from './search_notfount';
import SearchDetails from './search_Data';
import 'whatwg-fetch';

export default class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isToggled : true,
      inputData : ' ',
      fromResponse : false,
      searchData : []
    };

    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle () {
    this.setState({isToggled: !this.state.isToggled})
  }
  getInitialState () {
    this.state.isToggled = false;
  }
  addSearchInput (DataSearch) {
    // var url = new URL("https://geo.example.org/api"),
    //     params = {lat:35.696233, long:139.570431}
    // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    this.state.inputData = DataSearch;
    fetch(`/facilities/search?query=${DataSearch}`, {
      mode: "no-cors",
      method: "GET",
      headers: {
          "Accept": "application/json"
      }
    })
    .then(
      response => response.json())
    .then((response) => {
      return this.setState({
          searchData: response
      });

    })
    .catch(error => {
      return this.setState({
        searchData: [],
        fromResponse : true
      });
    });
  }
  render() {
    let searchArray = this.state.searchData[0] ?  this.state.searchData : false;
    return (
      <div className="search_page">
        <div className="search-section col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <SearchInput sendSearchInput={this.addSearchInput.bind(this)}/>
        </div>
        {searchArray && <SearchDetails sendSearchInput={this.addSearchInput.bind(this)} {...this}/>}
        <div className="result-section col-xs-12 col-sm-12 col-md-12 col-lg-12">
          {this.state.isToggled && <SearchGrid searchResults={this.state.searchData} />}
          {!this.state.isToggled && <SearchList searchResults={this.state.searchData} />}
          {(this.state.fromResponse && !searchArray) && <SearchNotFound />}
        </div>
      </div>
    )
  }
}
