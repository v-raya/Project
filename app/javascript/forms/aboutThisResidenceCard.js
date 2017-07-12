import React from 'react'
import {DropDownField} from '../common/dropDownField'
import {TextAreaComponent} from '../common/textArea'
import {yesNo} from '../constants/constants'
import {InputComponent} from '../common/inputFields'

export default class AboutThisResidenceCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visibleBodyOfWater: false,
      visibleUseAsMailingAddress: false,
      bodyofWaterLocation: '',
      languageTypes: {items: this.props.languageTypes.items},
      residenceTypes: this.props.residenceTypes,
      yesNo: {yesNo},
      residenceFieldValues: {
        residence_ownership_type: {
          id: '',
          value: ''
        },
        home_languages: {
          id: '',
          value: ''
        },
        directions_to_home: '',
        weapon_in_home: '',
        body_of_water_exist: '',
        body_of_water_description: '',
        other_people_using_residence_as_mailing: ''
      },
      nameField: {
        first_name: '',
        last_name: '',
        middle_name: ''
      }
    }
    this.onChange = this.onChange.bind(this)
    this.handleBodyOfWaterChange = this.handleBodyOfWaterChange.bind(this)
    this.handleUseAsMailingAddress = this.handleUseAsMailingAddress.bind(this)
    this.handleBodyOfWaterLocation = this.handleBodyOfWaterLocation.bind(this)
  }
  onChange (value, e) {
    let data = this.state.residenceFieldValues
    if (typeof (value) === 'object') {
      var idAndValue
      idAndValue = {id: value.target.selectedOptions[0].value, value: value.target.selectedOptions[0].text}
      data[e] = e === 'home_languages' ? [idAndValue] : idAndValue
    } else if (typeof (value) !== 'object' && (value.toLowerCase() === 'yes' || value.toLowerCase() === 'no')) {
      data[e] = value.toLowerCase() === 'yes'
    } else {
      data[e] = value
    }

    this.state.nameField[e] = value
    let newNameField = this.state.nameField
    this.setState({
      nameField: newNameField
    })

    this.setState({
      residenceFieldValues: data
    })

    this.props.sendProps(this.state)
  }

  handleBodyOfWaterChange (event) {
    if (event.target.value === '1') {
      this.setState({
        visibleBodyOfWater: true
      })
    } else {
      this.setState({
        visibleBodyOfWater: false
      })
    }
  }

  handleUseAsMailingAddress (event) {
    if (event.target.value === '1') {
      this.setState({
        visibleUseAsMailingAddress: true
      })
    } else {
      this.setState({
        visibleUseAsMailingAddress: false
      })
    }
  }

  handleBodyOfWaterLocation (event) {
    this.setState({
      bodyofWaterLocation: event.target.value
    })
  }

  render () {
    const hiddenBodyOfWater = this.state.visibleBodyOfWater ? '' : 'hidden'
    const hiddenUseAsMailingAddress = this.state.visibleUseAsMailingAddress ? '' : 'hidden'

    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <DropDownField id='residenceTypes' gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              value={this.state.residenceFieldValues.residence_ownership_type.id}
              optionList={this.state.residenceTypes}
              label={'Do you own, rent or lease the residence?'}
              onChange={(event, number) => this.onChange(event, ('residence_ownership_type'))} />
            <br />
            <DropDownField id='weapons' gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              value={this.state.yesNo.id}
              optionList={yesNo.items}
              label={'Weapons in home?'}
              onChange={(event, number) => this.onChange(event.target.selectedOptions[0].text, ('weapon_in_home'))} />

            <DropDownField id='bodyOfWater' gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              value={this.state.yesNo.id}
              optionList={yesNo.items}
              label={'Body of Water?'}
              onChange={this.handleBodyOfWaterChange} />

            <div className={hiddenBodyOfWater}>
              <TextAreaComponent gridClassName='col-md-12' id='bodyofWaterLocation'
                value={this.state.bodyofWaterLocation}
                label='Please Describe the location of the body of water and its size.' placeholder=''
                onChange={this.handleBodyOfWaterLocation} />
            </div>

            <DropDownField id='useAsMailingAddress' gridClassName='col-md-9'
              selectClassName={'reusable-select'}
              value={this.state.yesNo.value}
              optionList={yesNo.items}
              label={'Does any person not listed in this document use the residence as their mailing address?'}
              onChange={this.handleUseAsMailingAddress} />

            <div className={hiddenUseAsMailingAddress} >
              <InputComponent gridClassName='col-md-4' id='firstName' value={this.state.nameField.first_name}
                label='First Name' placeholder='Enter First Name'
                onChange={(event) => this.onChange(event.target.value, ('first_name'))} />
              <InputComponent gridClassName='col-md-4' id='middleName' value={this.state.nameField.middle_name}
                label='Middle Name' placeholder='Enter Middle Name'
                onChange={(event) => this.onChange(event.target.value, ('middle_name'))} />
              <InputComponent gridClassName='col-md-4' id='lastName' value={this.state.nameField.last_name}
                label='Last Name' placeholder='Enter Last Name'
                onChange={(event) => this.onChange(event.target.value, ('last_name'))} />
            </div>

            <TextAreaComponent gridClassName='col-md-12' id='directions'
              value={this.state.directions}
              optionList={this.props.directions}
              label='Please provide directions, including major cross-street information, to your residence.' placeholder=''
              onChange={(event, number) => this.onChange(event.target.value, ('directions_to_home'))} />

            <DropDownField id='languagesSpoken' gridClassName='col-md-12'
              selectClassName={'reusable-select'}
              value={this.state.residenceFieldValues.home_languages.id}
              optionList={this.state.languageTypes.items}
              label={'Language(s) spoken in the home'}
              onChange={(event, number) => this.onChange(event, ('home_languages'))} />
          </form>
        </div>
      </div>
    )
  }
}
