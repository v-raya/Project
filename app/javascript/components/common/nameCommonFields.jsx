import React from 'react'
import PropTypes from 'prop-types'
import {InputComponent} from '../common/inputFields'

const NameCommonFields = ({
  index,
  fieldValues,
  onChange
}) => {
  return (
    <div>
      <InputComponent gridClassName='col-md-4' id='firstname'
        value={fieldValues.first_name}
        maxLength='13'
        label='First Name' placeholder='Enter First Name'
        type={'text'}
        onChange={(event) => onChange('first_name', event.target.value, index)} />
      <InputComponent gridClassName='col-md-4' id='middleName'
        value={fieldValues.middle_name}
        maxLength='13'
        label='Middle Name' placeholder='Enter Middle Name'
        type={'text'}
        onChange={(event) => onChange('middle_name', event.target.value, index)} />
      <InputComponent gridClassName='col-md-4' id='lastName'
        value={fieldValues.last_name}
        maxLength='13'
        label='Last Name' placeholder='Enter Last Name'
        type={'text'}
        onChange={(event) => onChange('last_name', event.target.value, index)} />
    </div>
  )
}

NameCommonFields.propTypes = {
  fieldValues: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default NameCommonFields
