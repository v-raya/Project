import React from 'react'
import NameCard from './name_card'
import PhoneComponent from './phoneNumber_card'
import AboutApplicant from './aboutApplicant_card'
import Employment from './employment_card'

export default class Cards extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isFocused: false
    }
    this.toggleOnFocus = this.toggleOnFocus.bind(this)
  }
  toggleOnFocus (name, event) {
    this.setState({
      isFocused: !this.state.isFocused
    })
  }
  render () {
    const {formData} = this.state
    return (
      <div className='cards'>
        <div id='nameSection' onClick={this.toggleOnFocus.bind(this, event)} className={(this.state.isFocused ? 'edit' : 'show') + ' ' + 'card name-section double-gap-top'}>
          <div className='card-header'>
            <span>Name</span>
          </div>
          <NameCard {...this.props} />
        </div>

        <div onClick={this.toggleOnFocus} className={(this.state.isFocused ? 'edit' : 'show') + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'>
            <span>Phone Number</span>
          </div>
          <PhoneComponent {...this.props} />
        </div>

        <div onClick={this.toggleOnFocus} className={(this.state.isFocused ? 'edit' : 'show') + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'>
            <span>More about Applicant</span>
          </div>
          <AboutApplicant {...this.props} />
        </div>

        <div onClick={this.toggleOnFocus} className={(this.state.isFocused ? 'edit' : 'show') + ' ' + 'card employment-section double-gap-top'}>
          <div className='card-header'>
            <span>Employment</span>
          </div>
          <Employment {...this.props} />
        </div>
      </div>
    )
  }
}
