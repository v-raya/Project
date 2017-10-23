import React from 'react'
import sinon from 'sinon'
import {nameTypes, suffixTypes, prefixTypes, stateTypes, genderTypes, educationLevels, ethnicityTypes, languageTypes, salaryTypes} from './../../helpers/constants.js'
//import ShallowRenderer from 'react-test-renderer/shallow'
import ApplicantCardsGroup from 'rfa_forms/rfa01a_edit_view/applicantCardsGroup.jsx'
import ReactDOM from 'react-dom'
var TestUtils = require('react-dom/test-utils')
import Validator from 'helpers/validator.js'

describe('Verify Applicant Card Group', () => {
  const isApplicantAdded = sinon.spy()
  const getFocusClassNameSpy = sinon.spy()
  const applicantRender = TestUtils.renderIntoDocument(<ApplicantCardsGroup
    nameTypes={nameTypes.items}
    suffixTypes={suffixTypes.items}
    prefixTypes={prefixTypes.items}
    phoneTypes={nameTypes.items}
    salaryTypes={salaryTypes.items}
    stateTypes={stateTypes.items}
    educationLevels={educationLevels.items}
    genderTypes={genderTypes.items}
    ethnicityTypes={ethnicityTypes.items}
    languageTypes={languageTypes.items}
    setParentState={isApplicantAdded}
    validator={new Validator({})}
    getFocusClassName={getFocusClassNameSpy}/>)
  const renderedDOM = () => ReactDOM.findDOMNode(applicantRender)
  it('Spy on Button Click doesnot call', () => {
    const addCardButton = renderedDOM()
    const addCardBtn = addCardButton.children[1].children[0].children[0]
    // const addCardButton = this.children.type('button')
    TestUtils.Simulate.click(addCardBtn)
    expect(isApplicantAdded.calledOnce).toBe(true)
  })
})
