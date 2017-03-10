import React from 'react';
import FacilityDetails from './facility_details.jsx';
import FacilityAddress from './facility_address.jsx';
import logo from "./logo.jpg"

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


export default class Facilities extends React.Component {

    render() {
        let propsData = this.props.location.state.data;
     //items.each do |item| <Link to facility/fac_nbr compononet facilities params = item>

        return (
            <div className="main_page">
                <div className="header_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <img src= {logo} alt = {"logo"} />
                </div>
                <div className="body_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <FacilityDetails facilityData={propsData} />
                    <FacilityAddress facilityData={propsData} />
                </div>
            </div>
        )
    }
};

