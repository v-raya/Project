import React from 'react'
import AddressCard from './addressCard'
import AboutThisResidenceCard from './aboutThisResidenceCard'

export default class ResidenceCards extends React.Component {
  constructor (props) {
    super(...arguments)
    this.propsToParent = this.propsToParent.bind(this)
    this.state = {
      isFocused: {},
      residenceData: {
        address: []
      }
    }
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
  submitForm () {
    console.log('Hello')
  }

  propsToParent (childFields) {
    this.props.parentProps(childFields)
  }
  getAddressData (data) {
    let addressDataOj = data
    let newStateData = this.state.residenceData
    for (var k in addressDataOj) newStateData[k] = addressDataOj[k]
    this.setState({
      residenceData: newStateData
    })
    this.props.getData(this.state.residenceData)
  }

  getResidenceData (data) {
    let residenceDataOj = data
    let newStateData = this.state.residenceData
    for (var k in residenceDataOj) newStateData[k] = residenceDataOj[k]
    this.setState({
      residenceData: newStateData
    })
    this.props.getData(this.state.residenceData)
  }
  render () {
    const {formData} = this.state
    return (
      <div className='residence_cards'>
        <div id='residentAddress' onClick={this.toggleOnFocus.bind(this, 'residentAddress')} className={(this.state.isFocused['residentAddress']) + ' ' + 'card resident-section double-gap-top'}>
          <div className='card-header'>
            <span> Address</span>
          </div>
          {/*
          <AddressCard sendProps={this.propsToParent} {...this.props} />
*/}
          <AddressCard sendProps={this.getAddressData.bind(this)} {...this.props} />

        </div>
        <div id='aboutResidence' onClick={this.toggleOnFocus.bind(this, 'aboutResidence')} className={(this.state.isFocused['aboutResidence']) + ' ' + 'card about-resident-section double-gap-top'}>
          <div className='card-header'>
            <span>About This Residence</span>
          </div>
          {/*
          <AboutThisResidenceCard sendProps={this.propsToParent}  {...this.props} />
*/}
          <AboutThisResidenceCard sendProps={this.getResidenceData.bind(this)} {...this.props} />
        </div>
      </div>
    )
  }
}
