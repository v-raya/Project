import React from 'react';
import ReactDOM from 'react-dom';
import home from './home.png';
import ghome from './ghome.png';
import phome from './phome.png';

export default class Search_grid extends React.Component {
    render () {
        let searchResults= this.props.searchResults;
        let gridResult = searchResults.map((result) => {
            return (
                <div className="grid_view_inner col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1">
                        <img src={home} />
                    </div>
                    <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                        <div className="grid_layout col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <div>
                                <p className="block_lable">Facility Name</p> <p className="block_text">{result.fac_name}</p>
                            </div>
                            <div>
                                <p className="block_lable">Facility ID/Approval # </p> <p className="block_text">{result.fac_nbr}</p>
                            </div>
                            <div>
                                <p className="block_lable">Facility Type </p> <p className="block_text">{result.type}</p>
                            </div>
                            <div>
                                <p className="block_lable">Status </p> <p className="block_text">{result.status}</p>
                            </div>
                            <div>
                                <p className="block_lable">Licensee Name </p> <p className="block_text">{result.fac_licensee_name}</p>
                            </div>
                        </div>
                        <div className="grid_layout col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <div>
                                <p className="block_lable">Facility Address </p> <p className="block_text">{result.fac_res_street_addr},
                                {result.fac_res_city}, {result.fac_res_state} {' ' + result.fac_res_zip_code}</p>
                            </div>
                            <div>
                                <p className="block_lable">County </p> <p className="block_text">{result.county}</p>
                            </div>
                            <div>
                                <p className="block_lable">Facility Phone Number </p> <p className="block_text">{result.facility_telephone}</p>
                            </div>
                            <div>
                                <p className="block_lable">Facility Email </p> <p className="block_text">{result.fac_email_address ? result.fac_email_address : 'N/A' }</p>
                            </div>
                        </div>
                        <div className="grid_layout col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <div>
                                <p className="block_lable">Assigned Worker </p> <p className="block_text">{result.assigned_worker}</p>
                            </div>
                            <div>
                                <p className="block_lable">Assigned Worker Phone# </p> <p className="block_text">N/A</p>
                            </div>
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
