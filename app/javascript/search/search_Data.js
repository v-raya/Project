import React from 'react';
import PropTypes from 'prop-types';
import lineOff from './images/line_off.png';
import lineOn from './images/line_on.png';
import gridOn from './images/grid_on.png';
import gridOff from './images/grid_off.png';
import close from './images/cross.png';

export default class SearchDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: this.props.state.inputData,
      searchData: this.props.state.inputData.split(',')
    };
    this.removeCriteria = this.removeCriteria.bind(this);
  }
  getInitialState() {
    this.state = {
      searchData: this.props.state.inputData.split(',')
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.state.inputData !== this.state.searchQuery) {
      this.setState(
        {
          searchData: nextProps.state.inputData.split(',')
        }
      );
    }
  }
  removeCriteria(event) {
    const newState = this.state.searchData;
    if (newState.indexOf(event) > -1) {
      newState.splice(newState.indexOf(event), 1, '');
      this.setState(
        {
          searchData: newState,
          searchQuery: this.state.searchData.toString()
        }
      );
    }
    const newQuery = this.state.searchData.toString();
    this.props.sendSearchInput(newQuery);
  }
  render() {
    const searchCount = this.props.state.searchData;
    let searchFacilityId = null;
    if (this.state.searchData[2] && this.state.searchData[2].length > 1) {
      searchFacilityId = (<p>Facility ID:
        <span>{this.state.searchData[2]}</span>
        <img onClick={this.removeCriteria.bind(this, this.state.searchData[2])} alt="close" src={close} />
      </p>);
    }
    let searchFacilityName = null;
    if (this.state.searchData[3] && this.state.searchData[3].length > 1) {
      searchFacilityName = (<p>Facility Name:
        <span>{this.state.searchData[3]}</span>
        <img onClick={this.removeCriteria.bind(this, this.state.searchData[3])} alt="close" src={close} />
      </p>);
    }
    // Below code for future reference of UX changes
    // const searchedCriteria = this.state.searchData.map((item) => {
    //   return (
    //     <p onClick={this.removeCriteria.bind(this, item)}>
    //       {item}
    //     </p>
    //   )
    // });
    return (
      <div className="search-toggle col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <span className="glyphicon glyphicon-triangle-right" />
          <span>Advanced Search</span>
        </div>
        <div className="search_details col-xs-12 col-sm-9 col-md-9 col-lg-9">
          <p>Search Results: <span>1-{searchCount.length}</span></p>
          {searchFacilityId}
          {searchFacilityName}
        </div>
        <div className="toggle_result col-xs-12 col-sm-3 col-md-3 col-lg-3">
          <div className="pull-right">
            <img className="navbar-brand" onClick={this.props.handleToggle} src={this.props.state.isToggled ? lineOff : lineOn} alt={'list'} />
            <img className="navbar-brand" onClick={this.props.handleToggle} src={this.props.state.isToggled ? gridOn : gridOff} alt={'grid'} />
          </div>
        </div>
      </div>
    );
  }
}

SearchDetails.propTypes = {
  state: PropTypes.object
};
