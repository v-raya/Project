import React from 'react'
import Cards from './cardsMain'
import ResidenceCards from './residenceCardsMain'
import './stylesheets/cards-main.scss'

export default class Forms extends React.Component {
  constructor (props) {
    super(props)
    // TODO: init dictionaries here
    // @name_types = rfa_application_helper.name_types
    // this.nameTypeValues = this.props.nameTypes
    // this.phoneTypeValues = this.props.phoneTypes
    // this.genderTypeValues = this.props.genderTypes
    // this.ethnicityTypeValues = this.props.ethnicityTypes
    // this.educationLevelValues = this.props.educationLevels
    // this.languageTypeValues = this.props.languageTypes
    // this.salaryTypeValues = this.props.salaryTypes
  }
  submitForm () {
    var x = this.props
    // TODO: route to save
    console.log(this)
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
            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>I. Application 1 - <span>Information</span></h3>
              <Cards {...this.props} />
            </div>
            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>II. Applicant (S) - <span>Residence</span></h3>
              <ResidenceCards {...this.props} />
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
