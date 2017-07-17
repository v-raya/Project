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
        others_using_residence_as_mailing: '',
        other_people_using_residence_as_mailing: [{ nameField: {
          first_name: '',
          middle_name: '',
          last_name: ''
        }}]
      }
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange (value, e) {
    let data = this.state.residenceFieldValues
    if (typeof (value) === 'object') {
      var idAndValue
      idAndValue = {id: value.target.selectedOptions[0].value, value: value.target.selectedOptions[0].text}
      data[e] = e === 'home_languages' ? [idAndValue] : idAndValue
    } else if (e === 'first_name' || e === 'last_name' || e === 'middle_name') {
      data['other_people_using_residence_as_mailing'][0]['nameField'][e] = value
    } else if (typeof (value) !== 'object' && (value.toLowerCase() === 'yes' || value.toLowerCase() === 'no')) {
      data[e] = value.toLowerCase() === 'yes'
    } else {
      data[e] = value
    }
    this.setState({
      residenceFieldValues: data
    })
    this.props.sendProps(this.state.residenceFieldValues)
  }

  render () {
    const hiddenBodyOfWater = this.state.residenceFieldValues.body_of_water_exist ? '' : 'hidden'
    const hiddenUseAsMailingAddress = this.state.residenceFieldValues.others_using_residence_as_mailing ? '' : 'hidden'

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

            <DropDownField id='body_of_water_exist' gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              value={this.state.yesNo.id}
              optionList={yesNo.items}
              label={'Body of Water?'}
              onChange={(event, number) => this.onChange(event.target.selectedOptions[0].text, ('body_of_water_exist'))} />

            <div className={hiddenBodyOfWater}>
              <TextAreaComponent gridClassName='col-md-12' id='body_of_water_description'
                value={this.state.residenceFieldValues.body_of_water_description}
                label='Please Describe the location of the body of water and its size.' placeholder=''
                onChange={(event) => this.onChange(event.target.value, ('body_of_water_description'))} />
            </div>

            <DropDownField id='others_using_residence_as_mailing' gridClassName='col-md-9'
              selectClassName={'reusable-select'}
              value={this.state.yesNo.value}
              optionList={yesNo.items}
              label={'Does any person not listed in this document use the residence as their mailing address?'}
              onChange={(event, number) => this.onChange(event.target.selectedOptions[0].text, ('others_using_residence_as_mailing'))} />

            <div className={hiddenUseAsMailingAddress} >
              <InputComponent gridClassName='col-md-4' id='firstName' value={this.state.residenceFieldValues.other_people_using_residence_as_mailing[0]['nameField']['first_name']}
                label='First Name' placeholder='Enter First Name'
                onChange={(event) => this.onChange(event.target.value, ('first_name'))} />
              <InputComponent gridClassName='col-md-4' id='middleName' value={this.state.residenceFieldValues.other_people_using_residence_as_mailing[0]['nameField']['middle_name']}
                label='Middle Name' placeholder='Enter Middle Name'
                onChange={(event) => this.onChange(event.target.value, ('middle_name'))} />
              <InputComponent gridClassName='col-md-4' id='lastName' value={this.state.residenceFieldValues.other_people_using_residence_as_mailing[0]['nameField']['last_name']}
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
