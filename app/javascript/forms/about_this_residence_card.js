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
      language: {
        id: '',
        value: ''
      },
      residence: {
        id: '',
        value: ''
      },
      yesNo: {
        id: '',
        value: ''
      }
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange (value) {
    var x = this
    console.log(value)
  }
  render () {
    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              value={this.state.residence.id}
              optionList={this.state.residenceTypes}
              label={'Do you own, rent or lease the residence?'} />
            <br />
            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              value={this.state.yesNo.id}
              optionList={yesNo.items}
              label={'Weapons in home?'} />
            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              value={this.state.yesNo.id}
              optionList={yesNo.items}
              label={'Body of Water?'} />
            <DropDownField gridClassName='col-md-9'
              selectClassName={'reusable-select'}
              value={this.state.yesNo.value}
              optionList={yesNo.items}
              label={'Does any person not listed in this document use the residence as their mailing address?'} />
            <TextAreaComponent gridClassName='col-md-12' id='directions'
              label='Please provide directions, including major cross-street information, to your residence.' placeholder='' />
            <DropDownField gridClassName='col-md-12'
              selectClassName={'reusable-select'}
              value={this.state.language.id}
              optionList={this.state.languageTypes.items}
              label={'Language(s) spoken in the home'} />
          </form>
        </div>
      </div>
    )
  }
            }
