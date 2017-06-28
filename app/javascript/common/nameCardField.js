import React from 'react'
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'

export class NameCardField extends React.Component {
  constructor (props) {
    super(props)
    this.clickClose = this.clickClose.bind(this)
    this.state = {
      nameField: {
        first_name: '',
        last_name: '',
        middle_name: ''
      },
      ifLegal: false,
      nameTypes: {
        items: this.props.props.nameTypes.items
      }
    }
  }
  clickClose (id) {
    if (id == 1) {
      this.setState({
        nameField: {
          first_name: '',
          last_name: '',
          middle_name: ''
        }
      })
    } else {
      this.props.removeCard(id)
    }
  }
  onChange (event, id) {
    if (event && id == 'name_type') {
      var value = this.state.nameTypes.items.filter(function (item) {
        return item.id == event
      })
    }
    this.state.nameField[id] = event
    let newNameField = this.state.nameField
    this.setState({
      nameField: newNameField
    })
    var finalState = this.state
  }
  render () {
    //let nameTypes = this.state.nameTypes
    if (this.props.id == 1) {
      this.state.ifLegal = true
      this.state.nameTypes = {
        items: [
          {
            'id': 1,
            'value': 'Legal'
          }
        ]
      }
    }
    return (
      <div className='row list-item'>
        <span onClick={() => this.clickClose(this.props.id)} className='pull-right glyphicon glyphicon-remove' />
        <form>
          <InputComponent gridClassName='col-md-4' id='firstname' value={this.state.nameField.first_name}
            label='First Name' placeholder='Enter First Name'
            type={'text'} onChange={(event, first_name) => this.onChange(event.target.value, ('first_name'))} />
          <InputComponent gridClassName='col-md-4' id='middleName' value={this.state.nameField.middle_name}
            label='Middle Name' placeholder='Enter Middle Name'
            type={'text'} onChange={(event) => this.onChange(event.target.value, ('middle_name'))} />
          <InputComponent gridClassName='col-md-4' id='lastName' value={this.state.nameField.last_name}
            label='Last Name' placeholder='Enter Last Name'
            type={'text'} onChange={(event) => this.onChange(event.target.value, ('last_name'))} />
          <DropDownField gridClassName='col-md-4' id='name_type'
            selectClassName={'reusable-select'}
            disable={this.state.ifLegal}
            optionList={this.state.nameTypes.items}
            label={'Name Type'} onChange={(event, id) => this.onChange(event.target.value, ('name_type'))} />
        </form>
      </div>
    )
  }
}
