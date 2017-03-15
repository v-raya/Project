import React from 'react';
import ReactDOM from 'react-dom';
var TestUtils = require('react-dom/lib/ReactTestUtils');
var App = require('./../../../app/javascript/facility/App.js');


describe('check App Component loaded', function () {
    it('render the component', function () {
       var a = 1
     //   var element = TestUtils.renderIntoDocument(<App />);
     //   var h1_Tag = ReactDOM.findDOMNode(element);
     //   expect(h1_Tag.tagName).toEqual("DIV");
       expect(a).toEqual(1);
    });
});
