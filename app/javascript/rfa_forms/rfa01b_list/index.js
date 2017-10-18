import React from 'react'
import Immutable from 'immutable'
import OutOfStateDisclosureCard from './outOfStateDisclosureCard'
import ApplicantDetailsCard from './applicantDetailsCard'
import DisclosureInstructions from './disclosureInstructions'
import CaliforniaCriminalBackground from './californiaCriminalBackground'
import OutsideCACriminalBackground from './outsideCACriminalBackground'
import CrimeBackgroundAgainstCohabitant from './crimeBackgroundAgainstCohabitant'
import PrivacyStatement from './privacyStatement'
import {CountyUseOnlyCard} from 'components/rfa_forms/countyUseOnlyCard.js'
import {getDictionaryId, dictionaryNilSelect, checkArrayObjectPresence} from 'helpers/commonHelper.jsx'

import '../rfa01a_edit_view/stylesheets/cards-main.scss'

export default class Rfa01bList extends React.Component {
  constructor (props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.getFocusClassName = this.submitForm.bind(this)
    this.setFocusState = this.submitForm.bind(this)

    this.state = {
      focusComponentName: '',
      errors: {}
    }
  }

  submitForm () {
    console.log('TODO submit')
  }

  setFocusState (focusComponentName) {
    this.setState({focusComponentName: focusComponentName})
  }

  getFocusClassName (componentName) {
    return this.state.focusComponentName === componentName ? 'edit' : 'show'
  }

  onFieldChange () {
    console.log('TODO field change')
  }

  setApplicationState (key, value) {
    let newState = Immutable.fromJS(this.state)
    newState = newState.setIn(['application', key], value)
    this.setState(newState.toJS())
  }

  render () {
    const countyValue = getDictionaryId(this.state.application_county) || (this.props.user && this.props.user.county_code)

    return (

      <div className='main_page'>
        <div className='header_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='header-logo' />
        </div>
        <div className='form-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='left-content col-xs-9 col-sm-9 col-md-9 col-lg-9'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                <h1 className='page-header'>Resource Family Criminal Record Statement (RFA 01B)</h1>
                <h3><span>Confidential Document - For County Use Only</span></h3>
                <p>Instructions: Each Resource Family applicant and adult residing
                   in or regularly present in the home must complete this Criminal
                    Record Statement</p>
              </div>
              <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                <button id='saveProgress' className='btn btn-default' onClick={this.submitForm}>TODO Save</button>
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
                  dictionaryNilSelect(event.target.selectedOptions[0]))} />
            </div>

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h2>I.<span>Out of State Disclosure</span></h2>
              <OutOfStateDisclosureCard
                focusComponentName={this.state.focusComponentName}
                getFocusClassName={this.getFocusClassName}
                setFocusState={this.setFocusState} />
            </div>
            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h2>II.<span>Criminal Record Statement</span></h2>
              <DisclosureInstructions
                focusComponentName={this.state.focusComponentName}
                getFocusClassName={this.getFocusClassName}
                setFocusState={this.setFocusState} />
            </div>

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <CaliforniaCriminalBackground
                focusComponentName={this.state.focusComponentName}
                getFocusClassName={this.getFocusClassName}
                setFocusState={this.setFocusState} />
            </div>

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <OutsideCACriminalBackground
                focusComponentName={this.state.focusComponentName}
                getFocusClassName={this.getFocusClassName}
                setFocusState={this.setFocusState} />
            </div>

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <CrimeBackgroundAgainstCohabitant
                focusComponentName={this.state.focusComponentName}
                getFocusClassName={this.getFocusClassName}
                setFocusState={this.setFocusState} />
            </div>

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <PrivacyStatement
                focusComponentName={this.state.focusComponentName}
                getFocusClassName={this.getFocusClassName}
                setFocusState={this.setFocusState} />
            </div>

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h2><span>Applicant or Other Adult </span></h2>
              <ApplicantDetailsCard
                focusComponentName={this.state.focusComponentName}
                getFocusClassName={this.getFocusClassName}
                setFocusState={this.setFocusState}
                onFieldChange={this.onFieldChange}
                stateTypes={this.props.stateTypes}
                namePrefixTypes={this.props.namePrefixTypes}
                nameSuffixTypes={this.props.nameSuffixTypes} />
            </div>

          </div>
        </div>
      </div>

    )
  }
}
