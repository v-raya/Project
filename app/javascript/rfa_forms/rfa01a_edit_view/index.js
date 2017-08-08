import React from 'react'
import Immutable from 'immutable'
import ApplicantCardsGroup from './applicantCardsGroup.jsx'
import ResidenceCards from './residenceCardsMain'
import FosterCareHistoryCardMain from './FosterCareHistoryCard.jsx'
import OtherAdultsCard from './OtherAdultsCardsGroup'
import MinorCardsGroup from './minorCardsGroup'

import './stylesheets/cards-main.scss'
import {fetchRequest} from 'helpers/http'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'

export default class Rfa01EditView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      focusComponentName: '',
      application: {
        applicants: [],
        residence: {},
        otherAdults: [],
        fosterCareHistory: {},
        minorChildren: []
      }
    }

    this.submitForm = this.submitForm.bind(this)
    this.getFocusClassName = this.getFocusClassName.bind(this)
    this.setApplicationState = this.setApplicationState.bind(this)
    this.setFocusState = this.setFocusState.bind(this)
  }

  componentDidMount () {
    // set Dictionaty Here
  }

  submitForm () {
    var url = urlPrefixHelper('/rfa/a01/' + this.props.application_id)
    let params = this.state.application
    fetchRequest(url, 'PUT', this.state.application).then(
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

  setApplicationState (key, value) {
    let newState = Immutable.fromJS(this.state)
    newState = newState.setIn(['application', key], value)
    this.setState(newState.toJS())
  }

  setFocusState (focusComponentName) {
    this.setState({focusComponentName: focusComponentName})
  }

  getFocusClassName (componentName) {
    return this.state.focusComponentName === componentName ? 'edit' : 'show'
  }

  render () {
    return (
      <div className='main_page'>
        <div className='header_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='header-logo' />
        </div>
        <div className='form-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='left-content col-xs-8 col-sm-8 col-md-8 col-lg-8'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                <h1 className='page-header'>Resource Family Applications (RFA 01A)</h1>
                <p>Instructions: This is the application form for
                  Resource Family Approval by a County. Please type or print clearly</p>
              </div>
              <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                <button id='saveProgress' onClick={this.submitForm}>Save Progress</button>
              </div>
            </div>

            <ApplicantCardsGroup
              nameTypes={this.props.nameTypes.items}
              phoneTypes={this.props.phoneTypes.items}
              salaryTypes={this.props.salaryTypes.items}
              stateTypes={this.props.stateTypes.items}
              educationLevels={this.props.educationLevels.items}
              genderTypes={this.props.genderTypes.items}
              // raceTypes={this.props.raceTypes}
              ethnicityTypes={this.props.ethnicityTypes}
              languageTypes={this.props.languageTypes.items}
              focusComponentName={this.state.focusComponentName}
              applicants={this.state.application.applicants}
              setParentState={this.setApplicationState}
              setFocusState={this.setFocusState}
              getFocusClassName={this.getFocusClassName} />

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>II. Applicant (S) - <span>Residence</span></h3>
              <ResidenceCards
                focusComponentName={this.state.focusComponentName}
                residence={this.state.application.residence}
                languageTypes={this.props.languageTypes.items}
                residenceTypes={this.props.residenceTypes}
                stateTypes={this.props.stateTypes.items}
                setFocusState={this.setFocusState}
                setParentState={this.setApplicationState} />
            </div>

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>IV. <span>Minor Children Residing in the home</span></h3>
              <MinorCardsGroup
                genderTypes={this.props.genderTypes.items}
                relationshipToApplicantTypes={this.props.relationshipToApplicantTypes}
                focusComponentName={this.state.focusComponentName}
                setFocusState={this.setFocusState}
                setParentState={this.setApplicationState}
                applicants={this.state.application.applicants}
                minorChildren={this.state.application.minorChildren} />
            </div>

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>V.<span>Other adults residing or Regularly present in the home</span></h3>
              <p> Each adult residing or regularly present in the home must complete a Criminal Record Statement RFA 01B</p>
              <OtherAdultsCard
                focusComponentName={this.state.focusComponentName}
                setFocusState={this.setFocusState}
                setParentState={this.setApplicationState}
                applicants={this.state.application.applicants}
                otherAdults={this.state.application.otherAdults}
                relationship_types={this.props.relationshipToApplicantTypes} />
            </div>

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>VIII. Foster Care / Adoption / Licensure History</h3>
              <FosterCareHistoryCardMain
                focusComponentName={this.state.focusComponentName}
                fosterCareHistory={this.state.application.fosterCareHistory}
                getFocusClassName={this.getFocusClassName}
                setParentState={this.setApplicationState}
                setFocusState={this.setFocusState}
                {...this.props}
              />
            </div>
          </div>

          <div className='right-content col-xs-4 col-sm-4 col-md-4 col-lg-4'>
            <div className='right-inner-content'>
              <img className='' src='http://via.placeholder.com/350x650' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
