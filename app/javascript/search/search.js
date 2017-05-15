import React from 'react'
import SearchGrid from './search_grid'
import SearchInput from './search_input'
import SearchList from './search_list'
import SearchNotFound from './search_notfount'
import SearchDetails from './search_Data'
import 'whatwg-fetch'
import logo from '../facilities/images/logo.jpg'

export default class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      landingPageUrl: props.landingUrl,
      isToggled: true,
      inputData: ' ',
      fromResponse: false,
      searchData: []
    }

    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle () {
    this.setState({isToggled: !this.state.isToggled})
  }
  getInitialState () {
    this.state.isToggled = false
  }
  addSearchInput (DataSearch) {
    var query = DataSearch.split(",");
    var params = {
     county : query[0],
     type : query[1],
     fac_nbr: query[2],
     fac_name : query[3],
     fac_addr : ''
    };

    this.state.inputData = DataSearch
    fetch('/facilities/search', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        params
      })
    })
    .then(
      response => response.json())
    .then((response) => {
      return this.setState({
        searchData: response.facilities
      })
    })
    .catch(error => {
      console.log(error)
      return this.setState({
        searchData: [],
        fromResponse: true
      })
    })
  }
  render () {
    let searchArray = this.state.searchData[0] ? this.state.searchData : false
    return (
      <div className='search_page'>
        <div className='header_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <img src={logo} alt={'logo'} />
          <a href={this.state.landingPageUrl} className='btn btn-default btn-lg active pull-right back-button' role='button'>Back</a>
        </div>
        <div className='search-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <SearchInput sendSearchInput={this.addSearchInput.bind(this)} />
        </div>
        {searchArray && <SearchDetails sendSearchInput={this.addSearchInput.bind(this)} {...this} />}
        <div className='result-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          {this.state.isToggled && <SearchGrid searchResults={this.state.searchData} />}
          {!this.state.isToggled && <SearchList searchResults={this.state.searchData} />}
          {(this.state.fromResponse && !searchArray) && <SearchNotFound />}
        </div>
      </div>
    )
  }
}
