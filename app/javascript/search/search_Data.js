import React from 'react';
import line_off from './line_off.png';
import line_on from './line_on.png';
import grid_on from './grid_on.png';
import grid_off from './grid_off.png';
import close from './cross.png';


export default class SearchDetails extends React.Component {
    render() {
        let searchCount = this.props.state.searchData;
        let searchData = this.props.state.inputData.split(',');
        let searchFacilityId = searchData[0];
        let searchFacilityName = searchData[1];

        return (
            <div className="search-toggle col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <span className="glyphicon glyphicon-triangle-right"></span><span>Advanced Search</span>
                </div>
                <div className="search_details col-xs-12 col-sm-9 col-md-9 col-lg-9">
                    <p>Search Results: <span>1-{searchCount.length}</span></p>
                    <p>Facility ID: <span>{searchFacilityId}</span> <img src={close}/></p>
                    <p>Facility Name: <span>{searchFacilityName}</span><img src={close}/></p>
                </div>
                <div className="toggle_result col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <div className="pull-right">
                        <img className="navbar-brand" onClick={this.props.handleToggle} src={this.props.state.isToggled  ? line_off : line_on} alt={"list"}/>
                        <img className="navbar-brand" onClick={this.props.handleToggle} src={this.props.state.isToggled ? grid_on : grid_off} alt={"grid"}/>
                    </div>
                </div>
            </div>
        )
    }
}
