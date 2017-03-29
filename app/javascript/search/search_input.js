import React from 'react';
import ReactDOM from 'react-dom';


export default class Search_input extends React.Component {
    render () {
        return (
            <div className="search_input col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="field_input col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <div className="input_data col-xs-12 col-sm-2 col-md-2 col-lg-2">
                        <div className="input_lable">
                            <span>County</span>
                        </div>
                        <div className="styled-select county">
                            <select>
                                <option>Orange County</option>
                                <option>San Mateo</option>
                                <option>San Fransisco</option>
                            </select>
                            <span className="glyphicon glyphicon-triangle-bottom"></span>
                        </div>
                    </div>
                    <div className="input_data col-xs-12 col-sm-2 col-md-2 col-lg-2">
                        <div className="input_lable">
                            <span>Facility Type</span>
                        </div>
                        <div className="styled-select county">
                            <select>
                                <option>RFA</option>
                                <option>Group</option>
                            </select>
                            <span className="glyphicon glyphicon-triangle-bottom"></span>
                        </div>
                    </div>
                    <div className="input_data col-xs-12 col-sm-2 col-md-2 col-lg-2">
                        <div className="input_lable">
                            <span>Facility ID #</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Enter Facility ID #" aria-describedby="sizing-addon1" />
                    </div>
                    <div className="input_data col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <div className="input_lable">
                            <span>Facility Name</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Enter Facility Name" aria-describedby="sizing-addon1" />
                    </div>
                    <div className="input_data col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <div className="input_lable">
                            <span>Facility Street Address</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Enter Facility Address" aria-describedby="sizing-addon1" />
                    </div>
                </div>
                <div className="field_search col-xs-12 col-sm-1 col-md-1 col-lg-1">
                    <div className="search_block">
                        <button>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}