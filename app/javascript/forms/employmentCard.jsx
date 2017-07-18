import React from 'react'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'
import {getDictionaryId} from '../helpers/commonHelper.jsx'

const blankEmploymentFields = Object.freeze({
  employer_name: '',
  occupation: '',
  income: '',
  income_type: {
    id: '',
    value: ''
  },
  physical_address: {
    street_address: '',
    zip: '',
    city: '',
    state: {
      id: '',
      value: ''
    }
  }
})

export default class Employment extends React.Component {
  onEmploymentChange (key, value) {
    let newData = this.props.employmentFields || blankEmploymentFields
    newData[key] = value
    this.props.setParentState('employment', newData)
  }
  onPhysicalAddressChange (key, value) {
    let newData = this.props.employmentFields || blankEmploymentFields
    newData.physical_address[key] = value
    this.props.setParentState('employment', newData)
  }

  render () {
    const employmentFields = this.props.employment || blankEmploymentFields

    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <InputComponent gridClassName='col-md-4' id='employer_name'
              value={employmentFields.employer_name}
              label='Name of the Employer' placeholder=''
              type='text' onChange={(event) => this.onEmploymentChange('employer_name', event.target.value)} />

            <InputComponent gridClassName='col-md-4' id='occupation'
              value={employmentFields.occupation}
              label='Occupation' placeholder=''
              type='text' onChange={(event) => this.onEmploymentChange('occupation', event.target.value)}/>

            <InputComponent gridClassName='col-md-3' id='income'
              value={employmentFields.income}
              label='Annual Income' placeholder=''
              onChange={(event) => this.onEmploymentChange('income', event.target.value)}/>

            <DropDownField gridClassName='col-md-1' id='income'
              value={getDictionaryId(employmentFields.income_type)}
              selectClassName='reusable-select'
              optionList={this.props.salaryTypes}
              label='.'
              onChange={(event) => this.onEmploymentChange('income_type', {id: event.target.selectedOptions[0].value, value: event.target.selectedOptions[0].text})}/>

            <InputComponent gridClassName='col-md-12' id='street_address'
              value={employmentFields.physical_address.street_address}
              label='Physical Address' placeholder=''
              type='text' onChange={(event) => this.onPhysicalAddressChange('street_address', event.target.value)} />

            <InputComponent gridClassName='col-md-4' id='zip'
              value={employmentFields.physical_address.zip}
              label='Zip' placeholder=''
              type='text' onChange={(event) => this.onPhysicalAddressChange('zip', event.target.value)} />

            <InputComponent gridClassName='col-md-4' id='city'
              value={employmentFields.physical_address.city}
              label='City' placeholder=''
              type='text' onChange={(event) => this.onPhysicalAddressChange('city', event.target.value)}/>

            <DropDownField gridClassName='col-md-4' id='props'
              selectClassName='reusable-select'
              value={getDictionaryId(employmentFields.physical_address.state)}
              optionList={this.props.stateTypes}
              label='State'
              onChange={(event) => this.onPhysicalAddressChange('state', {id: event.target.selectedOptions[0].value, value: event.target.selectedOptions[0].text})}/>
          </form>
        </div>
      </div>
    )
  }
}
