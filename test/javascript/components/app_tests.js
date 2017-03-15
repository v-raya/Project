import React from 'react';
import ReactDOM from 'react-dom';
var TestUtils = require('react-dom/lib/ReactTestUtils');
import App from './../../../app/javascript/facility/App';

describe('check App Component loaded', function () {
  it('render the component', function () {
    var div = document.createElement('div');
    document.documentElement.appendChild(div);
    const renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect (result.type).toBe('div');
//TODO: more test expect on results 
  });
});
