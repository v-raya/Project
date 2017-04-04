import React from 'react';
import ReactDOM from 'react-dom';
export default class Search_grid extends React.Component {
    render () {
        let searchResults= this.props.searchResults;
        let gridResult = searchResults.map((result) => {
            return (
                <div className="grid_view_inner col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1">
                        <img src="http://placehold.it/80x70" />
                    </div>
                    <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <p>
                                Facility Name <span>{result.fac_name}</span>
                            </p>
                            <p>
                                Facility ID/Approval # <span>{result.fac_nbr}</span>
                            </p>
                            <p>
                                Facility Type <span>{result.status}</span>
                            </p>
                            <p>
                                Status <span>{result.status}</span>
                            </p>
                            <p>
                                Licensee Name <span>{result.fac_licensee_name}</span>
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <p>
                                Facility Address <span>{result.fac_res_street_addr},
                                {result.fac_res_city}, {result.fac_res_state} {' ' + result.fac_res_zip_code}</span>
                            </p>
                            <p>
                                County <span>{result.county}</span>
                            </p>
                            <p>
                                Facility Phone Number <span>{result.facility_telephone}</span>
                            </p>
                            <p>
                                Facility Email <span>{result.fac_email_address ? result.fac_email_address : 'N/A' }</span>
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <p>
                                Assigned Worker <span>Tom Smith</span>
                            </p>
                            <p>
                                Assigned Worker Phone# <span>N/A</span>
                            </p>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className="grid_view col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {gridResult}
            </div>
        )
    }
}
