import React from 'react'
import PropTypes from 'prop-types'
import {InputComponent} from 'components/common/inputFields'
import {DropDownField} from 'components/common/dropDownField'
import {getDictionaryId} from 'helpers/commonHelper.jsx'
import {DateField} from 'components/common/dateFields'

const PlaceDateField = ({
  dateId,
  dateValue,
  onDateChange,
  cityId,
  cityValue,
  onCityChange,
  stateId,
  stateValue,
  stateTypes,
  onStateChange,
  errors,
  onBlurChange
}) => {
  return (
    <div>
      <DateField
        gridClassName='col-md-4'
        label='Date'
        id={dateId}
        value={dateValue}
        errors={errors}
        onChange={onDateChange}
        onBlur={onBlurChange} />

      <InputComponent
        gridClassName='col-md-4'
        label='City'
        id={cityId}
        value={cityValue}
        onChange={onCityChange} />

      <DropDownField
        gridClassName='col-md-4'
        selectClassName='reusable-select'
        label='State'
        id={stateId}
        value={stateValue}
        optionList={stateTypes}
        onChange={onStateChange} />
    </div>
  )
}

PlaceDateField.propTypes = {
  dateValue: PropTypes.string,
  onDateChange: PropTypes.func.isRequired,
  cityValue: PropTypes.string,
  onCityChange: PropTypes.func.isRequired,
  stateTypes: PropTypes.array,
  onStateChange: PropTypes.func.isRequired
}

export {PlaceDateField}
