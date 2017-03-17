//import './facility.sass';
//import facility from './facilities_main.jsx'

//document.addEventListener('DOMContentLoaded', ()=>{
//    facility
//});


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Facilities from './facilities_main.jsx';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
// import configureStore from './redux/store';
// import { Provider } from 'react-redux';

// let initialState = {};
// let store = configureStore(initialState);
//document.addEventListener('DOMContentLoaded', ()=> {
//     <Router history={browserHistory}>
//                <Route path= '/' component={App} />
//                  <Route path= "/facility/:fac_nbr"  component={Facilities}/>
//                 </Router>
//    });

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}


ReactDOM.render(
  <Router
  onUpdate={hashLinkScroll}
  history={browserHistory}>
  <Route path= '/facilities' component={App} />
  <Route path= "/facilities/:fac_nbr"  component={Facilities}/>
  </Router>,
  document.getElementById('root')
);
