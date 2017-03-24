import React from 'react';
import ReactDOM from 'react-dom';
export default class Search_grid extends React.Component {
    render () {
        return (
            <div className="grid_view col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="grid_view_inner col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1">
                        <img src="#" />
                    </div>
                    <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <p>
                                Facility Name <span>Sunshine House</span>
                            </p>
                            <p>
                                Facility ID/Approval # <span>193600031</span>
                            </p>
                            <p>
                                Facility Type <span>RFA</span>
                            </p>
                            <p>
                                Status <span>Active</span>
                            </p>
                            <p>
                                Licensee Name <span>Mary jone</span>
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <p>
                                Facility Address <span>Sunshine House</span>
                            </p>
                            <p>
                                County <span>193600031</span>
                            </p>
                            <p>
                                Facility Phone Number <span>RFA</span>
                            </p>
                            <p>
                                Facility Email <span>Active</span>
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <p>
                                Assigned Worker <span>Tom Smith</span>
                            </p>
                            <p>
                                Assigned Worker Phone# <span>123-123-1234</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
