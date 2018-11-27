import sinon from 'sinon'
import React from 'react'
import Immutable from 'immutable'
import ReactDOM from 'react-dom'
import {nameTypes, suffixTypes, prefixTypes} from './../../helpers/constants'
import NameCard from 'rfa_forms/rfa01a_edit_view/nameCard'
import Validator from 'helpers/validator.js'
const TestUtils = require('react-dom/test-utils')

describe('Name Card Component', () => {
  let setCardState, isNameCardRemoved,
    handleNameChangeFun, nameType,
    suffixType, prefixType,
    nameField, otherName, renderedCard,
    renderedDOM, renderedDom

  beforeEach(() => {
    setCardState = sinon.spy()
    isNameCardRemoved = sinon.spy()
    handleNameChangeFun = sinon.spy()
    nameType = nameTypes
    suffixType = suffixTypes
    prefixType = prefixTypes
    nameField = Immutable.fromJS({
      first_name: 'John',
      middle_name: '',
      last_name: 'Smith',
      other_names: []
    })
    otherName = Immutable.fromJS({
      first_name: '',
      middle_name: '',
      last_name: '',
      name_type: {
        id: '',
        value: ''
      }
    })
    renderedCard = TestUtils.renderIntoDocument(<NameCard
      nameFields={nameField}
      nameTypes={nameType.items}
      suffixTypes={suffixType.items}
      prefixTypes={prefixType.items}
      setParentState={setCardState}
      removeCard={isNameCardRemoved}
      handleNameChange={handleNameChangeFun}
      validator={new Validator({})} />)
    renderedDOM = (domTobeRendered) => ReactDOM.findDOMNode(domTobeRendered)
    renderedDom = renderedDOM(renderedCard)
  })
  it('Verify First name Props', () => {
    const firstNameValue = renderedDom.children[0].children[0].children[1].children[0].children[0].children[1]
    expect(firstNameValue.value).toBe('John')
  })
  it('renders Only Default Name Fields and Button', () => {
    expect(renderedDom.children.length).toEqual(2)
  })
  it('Verify Add Alias Click', () => {
    const addNameBtn = renderedDom.children[1].children[0]
    TestUtils.Simulate.click(addNameBtn)
    expect(setCardState.calledOnce).toBe(true)
    nameField.toJS().other_names.push(otherName)
    const newRenderedCard = TestUtils.renderIntoDocument(<NameCard
      nameFields={nameField}
      nameTypes={nameType.items}
      suffixTypes={suffixType.items}
      prefixTypes={prefixType.items}
      setParentState={setCardState}
      removeCard={isNameCardRemoved}
      validator={new Validator({})}
      handleNameChange={handleNameChangeFun} />)
    expect(renderedDOM(newRenderedCard).children.length).toEqual(2)
    const otherNameField = renderedDOM(newRenderedCard).children[1]
    TestUtils.Simulate.change(otherNameField, {target: {value: 'othername'}})
    expect(setCardState.called).toBe(true)
    const closeButton = renderedDOM(newRenderedCard).children[1].children[0]
    TestUtils.Simulate.click(closeButton)
    expect(setCardState.callCount).toBe(2)
  })

  it('Change First Name in Name Card', () => {
    const firstName = 'myName'
    const firstNameField = renderedDom.children[0].children[0].children[1].children[0].children[0].children[1]
    ReactDOM.findDOMNode(firstNameField).value = firstName
    TestUtils.Simulate.change(firstNameField, {target: {value: firstName}})
    expect(renderedCard.props.setParentState.args[0]).toEqual(['first_name', 'myName', undefined])
    TestUtils.Simulate.change(firstNameField, {target: {value: firstName}})
    expect(renderedCard.props.setParentState.called).toBe(true)
  })
  it('Change Middle Name in Name Card', () => {
    const middleName = 'Douglous'
    const middleNameField = renderedDom.children[0].children[0].children[1].children[0].children[1].children[1]
    ReactDOM.findDOMNode(middleNameField).value = middleName
    TestUtils.Simulate.change(middleNameField, {target: {value: middleName}})
    expect(renderedCard.props.setParentState.called).toBe(true)
  })
  it('Change Last Name in Name Card', () => {
    const lastName = 'myLastName'
    const lastNameField = renderedDom.children[0].children[0].children[1].children[0].children[2].children[1]
    TestUtils.Simulate.change(lastNameField, {target: {value: lastName}})
    expect(renderedCard.props.setParentState.called).toBe(true)
  })
})
