import React from 'react'
import Search_grid from './search_grid';
import Search_input from './search_input';
import Search_list from './search_list';
import Search_notfound from './search_notfount';
import Response from './search_result';
import SearchDetails from './search_Data';



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
            return this.setState({
                searchData: response,
                fromResponse : true
            });

        })
        .catch(error => {
            console.log('request failed', error);
        });
    }
    render() {
        let searchArray = this.state.searchData[0] ?  this.state.searchData : false;
        return (
            <div className="search_page">
                <div className="search-section col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Search_input sendSearchInput={this.addSearchInput.bind(this)}/>
                </div>
                {searchArray && <SearchDetails {...this}/>}
                <div className="result-section col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {this.state.isToggled && <Search_grid searchResults={this.state.searchData}/>}
                    {!this.state.isToggled && <Search_list searchResults={this.state.searchData}/>}
                    {!searchArray && this.state.fromResponse && <Search_notfound />}
                </div>
            </div>
        )
    }
}