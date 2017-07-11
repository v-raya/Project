import React from 'react'
import {DropDownField} from '../common/dropDownField'
import {TextAreaComponent} from '../common/textArea'
import {yesNo} from '../constants/constants'

export default class AboutThisResidenceCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
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
    } else if (typeof (value) !== 'object' && (value.toLowerCase() === 'yes' || value.toLowerCase() === 'no')) {
      data[e] = value.toLowerCase() === 'yes'
    } else {
      data[e] = value
    }

    this.setState({
      residenceFieldValues: data
    })

    this.props.sendProps(this.state)
  }

  render () {
    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <DropDownField id ="residenceTypes" gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              value={this.state.residenceFieldValues.residence_ownership_type.id}
              optionList={this.state.residenceTypes}
              label={'Do you own, rent or lease the residence?'}
              onChange={(event, number) => this.onChange(event, ('residence_ownership_type'))}/>
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
              onChange={(event, number) => this.onChange(event.target.selectedOptions[0].text, ('body_of_water_exist'))}/>
            <DropDownField id='useAsMailingAddress' gridClassName='col-md-9'
              selectClassName={'reusable-select'}
              value={this.state.yesNo.value}
              optionList={yesNo.items}
              label={'Does any person not listed in this document use the residence as their mailing address?'}
              onChange={(event, number) => this.onChange(event.target.selectedOptions[0].text, ('other_people_using_residence_as_mailing'))}/>
            <TextAreaComponent gridClassName='col-md-12' id='directions'
              value = {this.state.directions}
              optionList = {this.props.directions}
              label='Please provide directions, including major cross-street information, to your residence.' placeholder=''
              onChange={(event, number) => this.onChange(event.target.value, ('directions_to_home'))}/>
            <DropDownField id='languagesSpoken' gridClassName='col-md-12'
              selectClassName={'reusable-select'}
              value={this.state.residenceFieldValues.home_languages.id}
              optionList={this.state.languageTypes.items}
              label={'Language(s) spoken in the home'}
              onChange={(event, number) => this.onChange(event, ('home_languages'))}/>
          </form>
        </div>
      </div>
    )
  }
}
