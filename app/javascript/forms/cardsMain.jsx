import React from 'react'
import NameCard from './nameCard'
import PhoneComponent from './phoneNumbersCard.jsx'
import AboutApplicant from './aboutApplicantCard.jsx'
import Employment from './employmentCard.jsx'

export default class Cards extends React.Component {
  constructor (props) {
    super(props)
    this.clickClose = this.clickClose.bind(this)
    this.state = {
      isFocused: {},
      applicantData: {
        name: [],
        employment: {},
        phones: []
      },
      numApplicantCards: this.props.id + 1
    }
    this.getPhoneData = this.getPhoneData.bind(this)
    this.getEmployment = this.getEmployment.bind(this)
    this.getAboutAplicantData = this.getAboutAplicantData.bind(this)
    this.getNameData = this.getNameData.bind(this)
  }
  clickClose (id) {
    this.props.clickClose(id)
  }
  toggleOnFocus (name, event) {
    let focused = this.state.isFocused
    focused = {}
    let focusedCard = focused[name] === 'focused' ? 'show' : 'edit'
    focused[name] = focusedCard
    this.setState({
      isFocused: focused
    })
  }
  getPhoneData (data) {
    let phoneData = this.state.applicantData
    phoneData['phones'] = data
    this.setState({
      applicantData: phoneData
    })
    this.props.getData(this.state.applicantData)
  }
  getEmployment (data) {
    let employmentData = this.state.applicantData
    employmentData['employment'] = data
    this.setState({
      applicantData: employmentData
    })
    this.props.getData(this.state.applicantData)
  }
  getAboutAplicantData (data) {
    let aboutApplicantOj = data
    let newStateData = this.state.applicantData
    for (var k in aboutApplicantOj) newStateData[k] = aboutApplicantOj[k]
    this.setState({
      applicantData: newStateData
    })
    this.props.getData(this.state.applicantData)
  }
  getNameData (data) {
    let newNameData = this.state.applicantData
    newNameData['name'] = data
    this.setState({
      applicantData: newNameData
    })
    this.props.getData(this.state.applicantData)
  }
  render () {
    const {formData} = this.state
    let showClose = this.props.id !== 0
    let applicantNumber = this.state.numApplicantCards

    return (
      <div className='cards'>
        <h3>I. Applicant {String(applicantNumber)} - <span>Information</span></h3>
        {showClose && <span onClick={() => this.clickClose(this.props.id)} className='pull-right glyphicon glyphicon-remove' />}
        <div id='nameSection' onClick={this.toggleOnFocus.bind(this, 'nameSection')} className={(this.state.isFocused['nameSection']) + ' ' + 'card name-section double-gap-top'}>
          <div className='card-header'>
            <span>Name</span>
          </div>
          <NameCard sendtoParent={this.getNameData.bind(this)} {...this.props} />
        </div>

        <div id='aboutAppSection' onClick={this.toggleOnFocus.bind(this, 'aboutAppSection')} className={(this.state.isFocused['aboutAppSection']) + ' ' + 'card aboutApp-section double-gap-top'}>
          <div className='card-header'>
            <span>More about Applicant</span>
          </div>
          <AboutApplicant sendtoParent={this.getAboutAplicantData.bind(this)} {...this.props} />
        </div>

        <div id='employmentSection' onClick={this.toggleOnFocus.bind(this, 'employmentSection')} className={(this.state.isFocused['employmentSection']) + ' ' + 'card employment-section double-gap-top'}>
          <div className='card-header'>
            <span>Employment</span>
          </div>
          <Employment sendtoParent={this.getEmployment.bind(this)} {...this.props} />
        </div>

        <div id='phoneSection' onClick={this.toggleOnFocus.bind(this, 'phoneSection')} className={(this.state.isFocused['phoneSection']) + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'>
            <span>Phone Number</span>
          </div>
          <PhoneComponent sendtoParent={this.getPhoneData.bind(this)} {...this.props} />
        </div>
      </div>
    )
  }
}
