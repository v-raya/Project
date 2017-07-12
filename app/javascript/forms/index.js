import React from 'react'
import Cards from './cardsMain'
import ResidenceCards from './residenceCardsMain'
import OtherAdultsCard from './OtherAdultsCardsMain'
import './stylesheets/cards-main.scss'

export default class Forms extends React.Component {
  constructor (props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.removeCard = this.removeCard.bind(this)
    this.state = {
      applicantValue: 0,
      numApplicantCards: [0]
    }
    this.getResidentsProps = this.getResidentsProps.bind(this)
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
  removeCard (id) {
    if (id > 0) {
      let newtotalCards = []
      newtotalCards = newtotalCards.concat(this.state.numApplicantCards)
      this.state.applicantValue -= 1
      newtotalCards.pop()
      this.setState({
        numApplicantCards: newtotalCards
      })
    }
  }
  addCard () {
    let totalCards = []
    totalCards = totalCards.concat(this.state.numApplicantCards)
    this.state.applicantValue += 1
    totalCards.push(this.state.applicantValue)
    this.setState({
      numApplicantCards: totalCards
    })
  }
  getResidentsProps (data) {
    console.log(data)
  }
  render () {
    var numApplicantCards = this.state.numApplicantCards
    const propData = this.props
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
              {
                numApplicantCards.map((i) => {
                  return <Cards clickClose={this.removeCard} key={i} id={i} {...propData} />
                })
              }
            </div>
            <div className='add-another col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <div className='text-center'>
                <button onClick={this.addCard} className='btn btn-default'>Add Another Applicant +</button>
              </div>
            </div>

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>II. Applicant (S) - <span>Residence</span></h3>
              <ResidenceCards parentProps={this.getResidentsProps} {...this.props} />
            </div>

            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>V. Applicant (S) - <span>Other Adults</span></h3>
              <OtherAdultsCard {...this.props} />
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
