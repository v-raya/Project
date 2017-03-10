import React from 'react';
import { Link } from 'react-router';
import 'whatwg-fetch'

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import actions from './redux/actions';
import FacilityList from './facility_list.jsx';

export default class App extends React.Component {
    constructor() {
       debugger;
       super();
        this.state = {items: []};
    }
   componentDidMount() {
debugger;
        fetch(`/facilities`, {
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
            return this.setState({ items: response});

        })
        .catch(error => {
            console.log('request failed', error);
        });
    }
    render() {
      debugger;
      const itemsList = this.state.items.map(item =>  <FacilityList key={item.fac_nbr} {...item}/>);
        return (
            <div className="block">
                {itemsList}
            </div>
        );
    }
}
