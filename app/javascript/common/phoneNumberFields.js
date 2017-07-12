import React from 'react'
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'
import {CheckboxField} from './checkboxField'

export class PhoneNumberField extends React.Component {
  constructor (props) {
    super(props)
    this.clickClose = this.clickClose.bind(this)
    this.state = {
      isdiabled: false,
      phoneField: this.props.state.phoneFieldList[this.props.state.phoneComponentValue],
      phoneList: [],
      phoneTypes: {
        'items': this.props.props.phoneTypes.items
      }
    }
    this.state.phoneField.ID = this.props.id
  }
  clickClose (id) {
    if (id === 0) {
      this.setState({
        phoneField: {
          ID: '',
          number: '',
          phone_type: {
            id: '',
            value: ''
          },
          is_preferred: false
        }
      })
    } else {
      this.props.removeCard(id)
    }
  }
  phoneChange (event, id) {
    let value
    this.state.phoneField.ID = this.props.id
    if (event && id == 'phone_type') {
      value = this.state.phoneTypes.items.filter(function (item) {
        return item.id == event
      })
    }
    if (id === 'is_preferred') {
      event = event.target.value
      event = !(event === 'true')
      this.state.phoneField[id] = event
      this.props.checkPreferred(this.state)
    } else {
      this.state.phoneField[id] = value ? value[0] : event
    }
    let newPhoneField = this.state.phoneField
    this.setState({
      phoneField: newPhoneField
    })
  }
  render () {
    let phoneTypes = this.state.phoneTypes
    return (
      <div className='row list-item'>
        <span onClick={() => this.clickClose(this.props.id)} className='pull-right glyphicon glyphicon-remove' />
        <form>
          <InputComponent gridClassName='col-md-4' id='number' value={this.state.phoneField.number}
            label='Phone Number' placeholder='Enter Phone Number'
            type={'text'} onChange={(event, number) => this.phoneChange(event.target.value, ('number'))} />
          <DropDownField gridClassName='col-md-4' id='phone_type'
            selectClassName={'reusable-select'}
            optionList={phoneTypes.items} value={this.state.phoneField.phone_type.id}
            label={'Phone Type'} onChange={(event, id) => this.phoneChange(event.target.value, ('phone_type'))} />
          <CheckboxField gridClassName='col-md-4' id={this.props.id} type={'checkbox'}
            checked={this.state.phoneField.is_preferred}
            value={this.state.phoneField.is_preferred}
            label='Preferred Contact Number'
            onChange={(event, id) => this.phoneChange(event, ('is_preferred'))} />
        </form>
      </div>
    )
  }
}
