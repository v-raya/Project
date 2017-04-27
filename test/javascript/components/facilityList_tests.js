import React from 'react';
import ReactDOM from 'react-dom';
import FacilityList from '../../../app/javascript/facility/facility_list.jsx';
var TestUtils = require('react-dom/lib/ReactTestUtils');



describe('check Facility List', function () {
  const renderedComp = TestUtils.createRenderer();
  const compRendered= renderedComp.render(<FacilityList />);
  const result_tag = renderedComp.getRenderOutput();

  // it('Rendered A React Component or Not', function () {
  //     expect(TestUtils.isDOMComponent(compRendered)).toBe(true)
  // });

  it('render the List', function () {
      expect(result_tag.type).toBe('div');
  });

  it('Verify classNames', function () {
      const checkClassName = result_tag.props;
      expect(checkClassName.className).toEqual("facility-list col-xs-12 col-sm-12 col-md-12 col-lg-12");
  });
  it('Check Facility Title was Rendered', function () {
      const check_Tag = result_tag.props.children.props.children;
      expect(check_Tag[0].type).toBe('h1');
  })
});