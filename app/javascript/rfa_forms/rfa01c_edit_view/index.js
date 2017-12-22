import React from 'react'
import Immutable from 'immutable'
import _ from 'lodash'
import ChildDesiredGroup from 'rfa_forms/rfa01c_edit_view/childDesiredGroup.jsx'
import {CountyUseOnlyCard} from 'components/rfa_forms/countyUseOnlyCard'
import {fetchRequest} from 'helpers/http'
import {getDictionaryId, dictionaryNilSelect, checkArrayObjectPresence} from 'helpers/commonHelper.jsx'
import {checkForNameValidation} from 'helpers/cardsHelper.jsx'
import Validator from 'helpers/validator'

export default class Rfa01cList extends React.Component {
  constructor (props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.getFocusClassName = this.getFocusClassName.bind(this)
    this.setApplicationState = this.setApplicationState.bind(this)
    this.setFocusState = this.setFocusState.bind(this)
    this.validator = new Validator({})
    this.validator.validateFieldSetErrorState = this.validateFieldSetErrorState.bind(this)

    this.state = {
      focusComponentName: '',
      desiredChild: this.props.desiredChild,
      errors: {}
    }
  }
  validateFieldSetErrorState (fieldName, value) {
    const error = this.validator.validateFieldAndGetError(fieldName, value)
    let currentErrors = this.state.errors
    if (error === undefined) {
      _.unset(currentErrors, fieldName)
    } else {
      _.set(currentErrors, fieldName, error)
    }
    this.setState({errors: currentErrors})
  }

  submitForm () {
    let url = '/rfa/a01/' + this.props.application_id + '/c01/' + this.props.rfa_c1_application_id
    let params = this.state.desiredChild
    fetchRequest(url, 'PUT', params).then(
      response => response.json()).then((response) => {
      return this.setState({
        formData: response
      })
    })
      .catch(error => {
        return this.setState({
          data: error
        })
      })
  }
  componentDidMount () {
    // set Dictionaty Here
  }
  setApplicationState (key, value) {
    let newState = Immutable.fromJS(this.state)
    newState = newState.setIn(['desiredChild', key], value)
    this.setState(newState.toJS())
  }

  setFocusState (focusComponentName) {
    this.setState({focusComponentName: focusComponentName})
  }

  getFocusClassName (componentName) {
    return this.state.focusComponentName === componentName ? 'edit' : 'show'
  }

  render () {
    const countyValue = (this.state.desiredChild && getDictionaryId(this.state.desiredChild.application_county)) || (this.props.user && this.props.user.county_code)
    const identifiedChildren = checkArrayObjectPresence(this.state.desiredChild.identified_children) || undefined
    return (
      <div className='main_page'>
        <div className='header_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='header-logo'/>
        </div>
        <div className='form-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='left-content col-xs-9 col-sm-9 col-md-9 col-lg-9'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <div className='col-xs-13 col-sm-13 col-md-13 col-lg-13'>
                <h1 className='page-header'>Resource Family Criminal Record Statement (RFA 01C)</h1>
              </div>
              <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                <button id='saveProgress' className='btn btn-default' onClick={this.submitForm}>Save Progress</button>
              </div>
            </div>
            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <CountyUseOnlyCard
                countyUseOnlyCardId='county_use_only'
                setFocusState={this.setFocusState}
                getFocusClassName={this.getFocusClassName}
                county={countyValue}
                CountyList={this.props.countyTypes}
                onFieldChange={(event) => this.setApplicationState('application_county',
                  dictionaryNilSelect(event.target.options))}/>
            </div>
            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h2>VII.<span>Desired Child</span></h2>
              <p> (to be completed if a child has been identified prior to approval)</p>
              <ChildDesiredGroup
                focusComponentName={this.state.focusComponentName}
                getFocusClassName={this.getFocusClassName}
                setParentState={this.setApplicationState}
                identifiedChildren={identifiedChildren}
                setFocusState={this.setFocusState}
                stateTypes={this.props.stateTypes}
                suffixTypes={this.props.suffixTypes}
                schoolGrades={this.props.schoolGrades}
                genderTypes={this.props.genderTypes}
                countyTypes={this.props.countyTypes}
                validator={this.validator}
                errors={this.state.errors.child}
                nameSuffixTypes={this.props.nameSuffixTypes}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
