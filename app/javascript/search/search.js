import React from 'react'
import Search_grid from './search_grid';
import Search_input from './search_input';
import Search_list from './search_list';
import Response from './search_result'

export default class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isToggled : true,
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
        var fac_nbr = DataSearch;
        fetch(`/facilities/search?query=${fac_nbr}`, {
            mode: "no-cors",
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
        .then(
            response => response.json())
        .then((response) => {
            console.log(response);
            return this.setState({ searchData: response});

        })
        .catch(error => {
            console.log('request failed', error);
        });
    }
    render() {
        return (
            <div className="search_page">
                <div className="search-section col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Search_input sendSearchInput={this.addSearchInput.bind(this)}/>
                </div>
                <div className="search-toggle col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="search_details col-xs-12 col-sm-7 col-md-7 col-lg-7">
                        <p>Search Results: <span>1-6</span></p>
                        <p>County: <span>Orange</span></p>
                        <p>Facility Name: <span>Sunshine</span></p>
                    </div>
                    <div className="toggle_result col-xs-12 col-sm-5 col-md-5 col-lg-5">
                        <div className="pull-right">
                            <img className="navbar-brand" onClick={this.handleToggle} src="http://placehold.it/30x30" />
                            <img className="navbar-brand" onClick={this.handleToggle} src="http://placehold.it/30x30" />
                        </div>
                    </div>
                </div>
                <div className="result-section col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {this.state.isToggled && <Search_grid searchResults={this.state.searchData}/>}
                    {!this.state.isToggled && <Search_list searchResults={this.state.searchData}/>}
                </div>
            </div>
        )
    }
}