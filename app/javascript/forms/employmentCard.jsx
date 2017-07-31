import React from 'react'
import Immutable from 'immutable'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'
import {getDictionaryId, dictionaryNilSelect} from '../helpers/commonHelper.jsx'

const blankEmploymentFields = Object.freeze({
  employer_name: '',
  occupation: '',
  income: '',
  income_type: null,
  physical_address: {
    street_address: '',
    zip: '',
    city: '',
    state: null
  }
})

export default class Employment extends React.Component {
  onEmploymentChange (key, value) {
    let newData = Immutable.fromJS(this.props.employment || blankEmploymentFields)
    newData = newData.set(key, value)
    this.props.setParentState('employment', newData.toJS())
  }
  onPhysicalAddressChange (key, value) {
    let newData = Immutable.fromJS(this.props.employment || blankEmploymentFields)
    // newData.physical_address[key] = value
    newData = newData.setIn(['physical_address', key], value)
    this.props.setParentState('employment', newData.toJS())
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

            <DropDownField gridClassName='col-md-1' id='income_type'
              value={getDictionaryId(employmentFields.income_type)}
              selectClassName='reusable-select'
              optionList={this.props.salaryTypes}
              label='.'
              onChange={(event) => this.onEmploymentChange('income_type', dictionaryNilSelect(event.target.selectedOptions[0]))}/>

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

            <DropDownField gridClassName='col-md-4' id='state_type'
              selectClassName='reusable-select'
              value={getDictionaryId(employmentFields.physical_address.state)}
              optionList={this.props.stateTypes}
              label='State'
              onChange={(event) => this.onPhysicalAddressChange('state', dictionaryNilSelect(event.target.selectedOptions[0]))}/>
          </form>
        </div>
      </div>
    )
  }
}
