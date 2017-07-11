import React from 'react'
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'

export class OtherAdultsCardField extends React.Component {
  constructor (props) {
    super(props)
    this.clickClose = this.clickClose.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = {
      nameField: {
        firstName: '',
        lastName: '',
        middleName: ''
      },
      dateOfBirth: '',
      relationshipTypes: {
        items: this.props.props.relationshipTypes
      },
      availableApplicants: {
        items: []
      }
    }
  }
  clickClose (id) {
    if (id === 1) {
      this.setState({
        nameField: {
          firstName: '',
          lastName: '',
          middleName: ''
        },
        dateOfBirth: '',
        relationshipTypes: {
          items: this.props.props.relationshipTypes.items
        },
        availableApplicants: {
          items: this.props.props.relationshipTypes.items
        }
      })
    } else {
      this.props.removeCard(id)
    }
  }

  onChange (event, id) {
    if (event && id === 'relationshipTypes') {
      this.state.relationshipTypes.items.filter(function (item) {
        return item.id === event
      })
    }
    if (event && id === 'availableApplicants') {
      this.state.availableApplicants.items.filter(function (item) {
        return item.id === event
      })
    }
    if (event && id === 'dateOfBirth') {
      this.setState({
        dateOfBirth: event
      })
    }
    this.state.nameField[id] = event
    let newNameField = this.state.nameField
    this.setState({
      nameField: newNameField
    })
  }

  render () {
    return (

      <div className='row list-item' >
        <span onClick={() => this.clickClose(this.props.id)} className='pull-right glyphicon glyphicon-remove' />
        <form>

          <DropDownField gridClassName='col-md-4' id='relationshipTypes'
            selectClassName={'reusable-select'}
            optionList={this.state.relationshipTypes.items}
            label={'relationship type'} onChange={(event, id) => this.onChange(event.target.value, ('relationshipTypes'))} />
          <DropDownField gridClassName='col-md-4' id='availableApplicants'
            selectClassName={'reusable-select'}
            optionList={this.state.availableApplicants.items}
            label={'to whom'} onChange={(event, id) => this.onChange(event.target.value, ('availableApplicants'))} />
          <InputComponent gridClassName='col-md-4' id='dateOfBirth' value={this.state.dateOfBirth}
            label='Date of Birth' placeholder='Enter Date of Birth'
            type={'text'} onChange={(event, id) => this.onChange(event.target.value, ('dateOfBirth'))} />

          <InputComponent gridClassName='col-md-4' id='firstName' value={this.state.nameField.firstName}
            label='First Name' placeholder='Enter First Name'
            type={'text'} onChange={(event, id) => this.onChange(event.target.value, ('firstName'))} />
          <InputComponent gridClassName='col-md-4' id='middleName' value={this.state.nameField.middleName}
            label='Middle Name' placeholder='Enter Middle Name'
            type={'text'} onChange={(event, id) => this.onChange(event.target.value, ('middleName'))} />
          <InputComponent gridClassName='col-md-4' id='lastName' value={this.state.nameField.lastName}
            label='Last Name' placeholder='Enter Last Name'
            type={'text'} onChange={(event, id) => this.onChange(event.target.value, ('lastName'))} />

        </form>
      </div>

    )
  }
            }
