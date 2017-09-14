import React from 'react'
import Immutable from 'immutable'
import ApplicantCardsGroup from './applicantCardsGroup.jsx'
import ResidenceCards from './residenceCardsMain'
import FosterCareHistoryCardMain from './FosterCareHistoryCard.jsx'
import OtherAdultsCard from './OtherAdultsCardsGroup'
import MinorCardsGroup from './minorCardsGroup'
import ReferencesMain from './referencesMain'
import RelationshipBetweenApplicantsCardMain from './relationshipBetweenApplicantsCard'

import './stylesheets/cards-main.scss'
import {fetchRequest} from 'helpers/http'
import {checkArrayObjectPresence} from 'helpers/commonHelper.jsx'
import {checkForNameValidation} from 'helpers/cardsHelper.jsx'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import Validator from 'helpers/validator'

export default class Rfa01EditView extends React.Component {
  constructor (props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.getFocusClassName = this.getFocusClassName.bind(this)
    this.setApplicationState = this.setApplicationState.bind(this)
    this.setFocusState = this.setFocusState.bind(this)
    this.validator = new Validator({})
    this.state = {
      focusComponentName: '',
      application: this.props.application,
      disableSave: !(checkForNameValidation(this.props.application.applicants))
    }
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
    if (key === 'applicants' && checkForNameValidation(value)) {
      this.setState({
        disableSave: false
      })
    } else {
      this.setState({
        disableSave: true
      })
    }
  }

  setFocusState (focusComponentName) {
    this.setState({focusComponentName: focusComponentName})
  }

  getFocusClassName (componentName) {
    return this.state.focusComponentName === componentName ? 'edit' : 'show'
  }

  render () {
    const hideRelationshipBetweenApplicants = this.state.application.applicants !== null && this.state.application.applicants.length === 2 ? 'cards-section' + 'col-xs-12 col-sm-12 col-md-12 col-lg-12' : 'hidden'
    return (
      <div className='main_page'>
        <div className='header_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='header-logo' />
        </div>
        <div className='form-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='left-content col-xs-9 col-sm-9 col-md-9 col-lg-9'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                <h1 className='page-header'>Resource Family Applications (RFA 01A)</h1>
                <p>Instructions: This is the application form for
                  Resource Family Approval by a County. Please type or print clearly</p>
              </div>
              <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                <button disabled={this.state.disableSave} id='saveProgress' className="btn btn-default" onClick={this.submitForm}>Save Progress</button>
              </div>
            </div>

            <ApplicantCardsGroup
              suffixTypes={this.props.suffixTypes}
              prefixTypes={this.props.prefixTypes}
              nameTypes={this.props.nameTypes}
              phoneTypes={this.props.phoneTypes}
              salaryTypes={this.props.salaryTypes}
              stateTypes={this.props.stateTypes}
              educationLevels={this.props.educationLevels}
              genderTypes={this.props.genderTypes}
              // raceTypes={this.props.raceTypes}
              ethnicityTypes={this.props.ethnicityTypes}
              languageTypes={this.props.languageTypes}
              focusComponentName={this.state.focusComponentName}
              applicants={this.state.application.applicants || []}
              setParentState={this.setApplicationState}
              setFocusState={this.setFocusState}
              getFocusClassName={this.getFocusClassName}
              hasValidName={this.state.disableSave}
              validator={this.validator} />

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>II. Applicant (S) - <span>Residence</span></h3>
              <ResidenceCards
                focusComponentName={this.state.focusComponentName}
                residence={this.state.application.residence || {}}
                languageTypes={this.props.languageTypes}
                residenceTypes={this.props.residenceTypes}
                stateTypes={this.props.stateTypes}
                setFocusState={this.setFocusState}
                setParentState={this.setApplicationState} />
            </div>

            <div className={hideRelationshipBetweenApplicants}>
              <h3>III.<span>Relationship Between Applicant</span></h3>
              <RelationshipBetweenApplicantsCardMain
                focusComponentName={this.state.focusComponentName}
                relationshipBetweenApplicants={this.state.application.relationshipBetweenApplicants || {}}
                getFocusClassName={this.getFocusClassName}
                setParentState={this.setApplicationState}
                setFocusState={this.setFocusState}
                stateTypes={this.props.stateTypes}
                relationshipTypes={this.props.relationshipTypes}
                applicants={this.state.application.applicants || []} />
            </div>

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>IV. <span>Minor Children Residing in the home</span></h3>
              <MinorCardsGroup
                genderTypes={this.props.genderTypes}
                relationshipToApplicantTypes={this.props.relationshipToApplicantTypes}
                focusComponentName={this.state.focusComponentName}
                setFocusState={this.setFocusState}
                setParentState={this.setApplicationState}
                applicants={this.state.application.applicants || []}
                minorChildren={this.state.application.minorChildren || undefined} />
            </div>

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>V.<span>Other adults residing or Regularly present in the home</span></h3>
              <p> Each adult residing or regularly present in the home must complete a Criminal Record Statement RFA 01B</p>
              <OtherAdultsCard
                focusComponentName={this.state.focusComponentName}
                setFocusState={this.setFocusState}
                setParentState={this.setApplicationState}
                applicants={this.state.application.applicants || []}
                otherAdults={this.state.application.otherAdults}
                relationship_types={this.props.relationshipToApplicantTypes} />
            </div>

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>VIII. Foster Care / Adoption / Licensure History</h3>
              <FosterCareHistoryCardMain
                focusComponentName={this.state.focusComponentName}
                fosterCareHistory={this.state.application.fosterCareHistory || {}}
                getFocusClassName={this.getFocusClassName}
                setParentState={this.setApplicationState}
                setFocusState={this.setFocusState}
                {...this.props}
              />
            </div>
            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <div>
                <h3>IX. References</h3>
                <ReferencesMain
                  focusComponentName={this.state.focusComponentName}
                  setParentState={this.setApplicationState}
                  getFocusClassName={this.getFocusClassName}
                  setFocusState={this.setFocusState}
                  stateTypes={this.props.stateTypes}
                  references={this.state.application.references || undefined }
                  suffixTypes={this.props.suffixTypes}
                  prefixTypes={this.props.prefixTypes}
                  nameTypes={this.props.nameTypes}
                />
              </div>
            </div>
          </div>

          <div className='right-content col-xs-3 col-sm-3 col-md-3 col-lg-3'>
            <div className='right-inner-content'>
              <img className='' src='http://via.placeholder.com/280x650' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
