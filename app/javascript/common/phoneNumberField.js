import React from 'react'
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'
import {CheckboxField} from './checkboxField'

export class PhoneNumberField extends React.Component {
  constructor (props) {
    super(props)
    this.clickClose = this.clickClose.bind(this)
    this.state = {
      isdiabled : false,
      phoneField: {
        number: '',
        phone_type: {
          id: '',
          value: ''
        },
        is_preferred: false
      },
      phoneTypes: {
        'items': this.props.props.phoneTypes.items
      }
    }
  }
  clickClose (id) {
    if (id == 1) {
      this.setState({
        phoneField: {
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
    if (event && id == 'phone_type') {
      var value = this.state.phoneTypes.items.filter(function (item) {
        return item.id == event
      })
    }
    this.state.phoneField[id] = value ? value[0] : event;
    let newPhoneField = this.state.phoneField
    this.setState({
      phoneField: newPhoneField
    })
  }
  handleCheckoboxToggle (event) {
    let is_preferred = event.target.value
    if(event.target.id) {

    }
    if(is_preferred == 'false') {
      is_preferred = false
    } else {
      is_preferred = true
    }
    is_preferred = !is_preferred
    this.setState({
      phoneField : {
        is_preferred: is_preferred
      }
    })
  }
  render () {
    let phoneTypes = this.state.phoneTypes;
    return (
      <div className='row list-item'>
        <span onClick={() => this.clickClose(this.props.id)} className='pull-right glyphicon glyphicon-remove' />
        <form>
          <InputComponent gridClassName='col-md-4' id='number' value={this.state.phoneField.number}
            label='Phone Number' placeholder='Enter Phone Number'
            type={'text'} onChange={(event, number) => this.phoneChange(event.target.value, ('number'))} />
          <DropDownField gridClassName='col-md-4' id='phone_type'
            selectClassName={'reusable-select'}
            optionList={phoneTypes.items} value={this.state.phoneField.phone_type}
            label={'Phone Type'} onChange={(event, id) => this.phoneChange(event.target.value, ('phone_type'))} />
          <CheckboxField gridClassName='col-md-4' id={'is_preferred'+'-' + this.props.id} type={'checkbox'}
            checked={this.state.phoneField.is_preferred}
            value={this.state.phoneField.is_preferred}
            label='Preferred Contact Number'
            onChange={(event) => this.handleCheckoboxToggle(event)} />
        </form>
      </div>
    )
  }
}
