import React from 'react'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'

export default class Employment extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      stateTypes: {items: this.props.stateTypes.items},
      salaryTypes: {items: this.props.salaryTypes.items},
      salaryDropdown : {
        id : '',
        value: ''
      },
      stateDropDown : {
        id : '',
        value : ''
      }
    }
  }

  render () {
    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <InputComponent gridClassName='col-md-4' id='employerName' value={this.props.first_name}
              label='Name of the Employer' placeholder=''
              type={'text'} onChange={(event) => this.onChange(event.target.value)} />

            <InputComponent gridClassName='col-md-4' id='Occupation' value={this.props.middle_name}
              label='Occupation' placeholder='' />

            <InputComponent gridClassName='col-md-3' id='Income' value={this.props.last_name}
              label='Annual Income' placeholder='' />

            <DropDownField gridClassName='col-md-1'
              selectClassName={'reusable-select'}
              value={this.state.salaryDropdown.value}
              optionList={this.state.salaryTypes.items}
              label='.' />

            <InputComponent gridClassName='col-md-12' id='firstname' value={this.props.first_name}
              label='Physical Address' placeholder=''
              type={'text'} onChange={(event) => this.onChange(event.target.value)} />

            <InputComponent gridClassName='col-md-4' id='firstname' value={this.props.first_name}
              label='Zip' placeholder=''
              type={'text'} onChange={(event) => this.onChange(event.target.value)} />

            <InputComponent gridClassName='col-md-4' id='middleName' value={this.props.middle_name}
              label='City' placeholder='' />

            <DropDownField gridClassName='col-md-4'
              selectClassName={'reusable-select'}
              value={this.state.stateDropDown.value}
              optionList={this.state.stateTypes.items}
              label={'Driver License State'} />
          </form>
        </div>
      </div>
    )
  }
}
