import React from 'react';
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'

export default class Employment extends React.Component {
  render () {
    const yearList = {
      "items": [
        {
          "id": 1,
          "value": "Alias"
        }
      ]
    }
    return (
      <div className="card-body">
        <div className="row">
          <form>
            <InputComponent gridClassName='col-md-4' id='firstname' value={this.props.first_name}
                            label='Name of the Employer' placeholder=''
                            type={'text'} onChange={(event) => this.onChange(event.target.value)} />
            <InputComponent gridClassName='col-md-4' id='middleName' value={this.props.middle_name}
                            label='Occupation' placeholder='Enter Middle Name' />
            <InputComponent gridClassName='col-md-3' id='lastName' value={this.props.last_name}
                            label='Annual Income' placeholder='Enter Last Name' />
            <DropDownField gridClassName='col-md-1'
                           selectClassName={'reusable-select'}
                           optionList={yearList.items}
                           label='.'/>
            <InputComponent gridClassName='col-md-12' id='firstname' value={this.props.first_name}
                            label='Physical Address' placeholder=''
                            type={'text'} onChange={(event) => this.onChange(event.target.value)} />
            <InputComponent gridClassName='col-md-4' id='firstname' value={this.props.first_name}
                            label='Zip' placeholder=''
                            type={'text'} onChange={(event) => this.onChange(event.target.value)} />
            <InputComponent gridClassName='col-md-4' id='middleName' value={this.props.middle_name}
                            label='City' placeholder='Enter Middle Name' />
            <InputComponent gridClassName='col-md-3' id='lastName' value={this.props.last_name}
                            label='State' placeholder='Enter Last Name' />
          </form>
        </div>
      </div>
    )
  }
}