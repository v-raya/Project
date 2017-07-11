import React from 'react'
import AddressCard from './addressCard'
import AboutThisResidenceCard from './aboutThisResidenceCard'

export default class ResidenceCards extends React.Component {x
  constructor (props) {
    super(...arguments)
    this.propsToParent = this.propsToParent.bind(this)
    this.state = {
      isFocused : {},
      formData: {
        first_name: null,
        last_name: null,
        name_suffix: null,
        gender: null,
        date_of_birth: null,
        ssn: null,
        languages: [],
        races: []
      }
    }
  }
  toggleOnFocus (name, event) {
    let focused = this.state.isFocused;
    focused = {};
    let focusedCard = focused[name] == 'focused' ? 'show' : 'edit';
    focused[name] = focusedCard
    this.setState({
      isFocused : focused
    })
  }
  submitForm () {
    console.log('Hello')
  }

  propsToParent(childFields) {
    this.props.parentProps(childFields)
  }

  render () {
    const {formData} = this.state
    return (
      <div className='residence_cards'>
        <div id="residentAddress" onClick={this.toggleOnFocus.bind(this, 'residentAddress')} className={(this.state.isFocused['residentAddress']) + ' '  + "card resident-section double-gap-top"}>
          <div className='card-header'>
            <span> Address</span>
          </div>
          <AddressCard sendProps={this.propsToParent} {...this.props} />
        </div>
        <div id="aboutResidence" onClick={this.toggleOnFocus.bind(this, 'aboutResidence')} className={(this.state.isFocused['aboutResidence']) + ' '  + "card about-resident-section double-gap-top"}>
          <div className='card-header'>
            <span>About This Residence</span>
          </div>
          <AboutThisResidenceCard sendProps={this.propsToParent}  {...this.props} />
        </div>
      </div>
    )
  }
}
