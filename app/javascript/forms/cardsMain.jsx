import React from 'react'
import NameCard from './name_card'
import PhoneComponent from './phoneNumbersCard.jsx'
import AboutApplicant from './aboutApplicantCard'
import Employment from './employment_card'

export default class Cards extends React.Component {
  constructor (props) {
    super(props)
    this.clickClose = this.clickClose.bind(this)
    this.state = {
      isFocused: {},
      numApplicantCards: this.props.id + 1
    }
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
          <NameCard {...this.props} />
        </div>

        <div id='aboutAppSection' onClick={this.toggleOnFocus.bind(this, 'aboutAppSection')} className={(this.state.isFocused['aboutAppSection']) + ' ' + 'card aboutApp-section double-gap-top'}>
          <div className='card-header'>
            <span>More about Applicant</span>
          </div>
          <AboutApplicant {...this.props} />
        </div>

        <div id='employmentSection' onClick={this.toggleOnFocus.bind(this, 'employmentSection')} className={(this.state.isFocused['employmentSection']) + ' ' + 'card employment-section double-gap-top'}>
          <div className='card-header'>
            <span>Employment</span>
          </div>
          <Employment {...this.props} />
        </div>

        <div id='phoneSection' onClick={this.toggleOnFocus.bind(this, 'phoneSection')} className={(this.state.isFocused['phoneSection']) + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'>
            <span>Phone Number</span>
          </div>
          <PhoneComponent {...this.props} />
        </div>
      </div>
    )
  }
}
