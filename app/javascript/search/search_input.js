import React from 'react';
import ReactDOM from 'react-dom';


export default class Search_input extends React.Component {
    render () {
        return (
            <div className="search_input col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="field_input col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <div className="input_data col-xs-12 col-sm-2 col-md-2 col-lg-2">
                        <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Orange County
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="input_data col-xs-12 col-sm-2 col-md-2 col-lg-2">
                        <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                RFA
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="input_data col-xs-12 col-sm-2 col-md-2 col-lg-2">
                        <input type="text" className="" placeholder="Enter Facility ID #" aria-describedby="sizing-addon1" />
                    </div>
                    <div className="input_data col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <input type="text" className="form-control" placeholder="Enter Facility Name" aria-describedby="sizing-addon1" />
                    </div>
                    <div className="input_data col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <input type="text" className="form-control" placeholder="Enter Facility Address" aria-describedby="sizing-addon1" />
                    </div>
                </div>
                <div className="field_search col-xs-12 col-sm-1 col-md-1 col-lg-1">
                    <div className="input_data col-xs-12 col-sm-1 col-md-1 col-lg-1">
                        <button>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}