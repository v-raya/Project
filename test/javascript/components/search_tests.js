import React from 'react'
import SearchApp from '../../../app/javascript/search/search'
var TestUtils = require('react-dom/lib/ReactTestUtils')

describe('Verify Search component Fields', function () {

  beforeEach(function(){
    let createElem = document.createElement('meta');
    let csrfTokenAtt = document.createAttribute("name");
    let csrfTokenContent = document.createAttribute("content");
    csrfTokenAtt.value = "csrf-token";
    csrfTokenContent.value = " ";
    createElem.setAttributeNode(csrfTokenAtt);
    createElem.setAttributeNode(csrfTokenContent);
    document.getElementsByTagName('head')[0].appendChild(createElem);

    let createElem2 = document.createElement('meta');
    let csrfTokenAtt2 = document.createAttribute("name");
    let csrfTokenContent2 = document.createAttribute("content");
    csrfTokenAtt2.value = "csrf-param";
    csrfTokenContent2.value = "authenticity_token";
    createElem2.setAttributeNode(csrfTokenAtt2);
    createElem2.setAttributeNode(csrfTokenContent2);
    document.getElementsByTagName('head')[0].appendChild(createElem2);
  });
  const renderSearch = TestUtils.createRenderer()
  const searchComp = renderSearch.render(<SearchApp/>)
  const sendSearch = searchComp.props.children[1];
  const sendSearchFun = sendSearch.props.children.props
  it('verify search component', function () {
    //let searchResults = renderIntoDocument(<SearchApp />);
    let DataSearch = "02, 738, 193600008, home, 2024 W el camino, Sacramento, Ca, 95833"
    let sendQueryFunc = sendSearchFun.sendSearchInput(DataSearch);
    let x = sendQueryFunc;
  })
})