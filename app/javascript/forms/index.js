import React from 'react'
// import Cards from './cardsMain'
import ApplicantCardsGroup from './applicantCardsGroup.jsx'
import ResidenceCards from './residenceCardsMain'
import OtherAdultsCard from './OtherAdultsCardsGroup'
import './stylesheets/cards-main.scss'
import {fetchRequest} from '../helpers/http'

export default class Forms extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      focusComponentName: '',
      application: {
        applicants: [],
        residence: {},
        otherAdults: []
      }
    }

    this.submitForm = this.submitForm.bind(this)
    this.setApplicationState = this.setApplicationState.bind(this)
    this.setFocusState = this.setFocusState.bind(this)
  }
  componentDidMount () {
    // set Dictionaty Here
  }

  submitForm () {
    var url = '/rfa/a01/' + this.props.application_id
    let params = this.state.application
    fetchRequest(url, 'PUT', this.state.application).then(
      response => response.json()).then((response) => {
        return this.setState({
          formData: response
        })
      })
      .catch(error => {
        console.log(error)
        return this.setState({
          data: error
        })
      })
  }

  setApplicationState (key, value) {
    const newState = {application: {[key]: value}}
    this.setState(newState)
  }
  setFocusState (focusComponentName) {
    this.setState({focusComponentName: focusComponentName})
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
              raceTypes={this.props.ethnicityTypes}
              languageTypes={this.props.languageTypes.items}
              focusComponentName={this.state.focusComponentName}
              applicants={this.state.application.applicants}
              setParentState={this.setApplicationState}
              setFocusState={this.setFocusState} />

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
              <h3>V. Applicant (S) - <span>Other Adults</span></h3>
              <OtherAdultsCard
                focusComponentName={this.state.focusComponentName}
                setFocusState={this.setFocusState}
                setParentState={this.setApplicationState}
                otherAdults={this.state.application.otherAdults}
                {...this.props} />
            </div>

            <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
              <button id='saveProgress' onClick={this.submitForm}>Save Progress</button>
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
