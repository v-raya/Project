import React from 'react'
import AddressCard from './addressCard'
import AboutThisResidenceCard from './aboutThisResidenceCard.jsx'

const blankResidenceFields = Object.freeze({
  residence_ownership_type: '',
  physical_mailing_similar: true,
  weapon_in_home: '',
  body_of_water_exist: '',
  body_of_water_description: '',
  others_using_residence_as_mailing: '',
  other_people_using_residence_as_mailing: [],
  directions_to_home: '',
  home_languages: ''
})

export default class ResidenceCards extends React.Component {
  constructor (props) {
    super(props)
    this.setResidenceState = this.setResidenceState.bind(this)
    this.getFocusClassName = this.getFocusClassName.bind(this)
  }
  // setResidenceState (key, value) {
  //   let ResidenceData = this.props.applicantFields
  //   ResidenceData[key] = value
  //   this.props.setResidenceState(this.props.index, ResidenceData)
  // }

  getFocusClassName (componentName) {
    return this.props.focusComponentName === componentName ? 'edit' : 'show'
  }
  // propsToParent (childFields) {
  //   this.props.parentProps(childFields)
  // }
  // getAddressData (data) {
  //   let addressDataOj = data
  //   let newStateData = this.state.residenceData
  //   for (var k in addressDataOj) newStateData[k] = addressDataOj[k]
  //   this.setState({
  //     residenceData: newStateData
  //   })
  //   this.props.getData(this.state.residenceData)
  // }

  // getAboutResidenceData (data) {
  //   let residenceDataOj = data
  //   let newStateData = this.state.residenceData
  //   for (var k in residenceDataOj) newStateData[k] = residenceDataOj[k]
  //   this.setState({
  //     residenceData: newStateData
  //   })
  //   this.props.getData(this.state.residenceData)
  // }

  setResidenceState (key, value) {
    let data = this.props.residence
    data[key] = value
    this.props.setParentState('residence', data)
  }

  // setApplicantState (key, value) {
  //   let ResidenceData = this.props.residenceFieldValues
  //   ResidenceData[key] = value
  //   this.props.setParentState(this.props.index, ResidenceData)
  // }
  render () {
    let residenceData = this.props.residence || blankResidenceFields

    return (
      <div className='residence_cards'>
        <div id='nameSection' onClick={() => this.props.setFocusState('residentAddress')}
          className={this.getFocusClassName('residentAddress') + ' ' + 'card resident-section double-gap-top'}>
          <div className='card-header'>
            <span> Address</span>
          </div>
          <AddressCard
            stateTypes={this.props.stateTypes}
            address={residenceData.address}
            physicalMailingSimilar={residenceData.physical_mailing_similar}
            setParentState={this.setResidenceState}
          />

        </div>
        <div id='nameSection' onClick={() => this.props.setFocusState('aboutResidence')}
          className={this.getFocusClassName('aboutResidence') + ' ' + 'card about-resident-section double-gap-top'}>
          <div className='card-header'>
            <span>About This Residence</span>
          </div>
          <AboutThisResidenceCard
            residenceTypes={this.props.residenceTypes}
            languageTypes={this.props.languageTypes}
            aboutResidence={residenceData}
            setParentState={this.setResidenceState}
          />
        </div>
      </div>
    )
  }
}
