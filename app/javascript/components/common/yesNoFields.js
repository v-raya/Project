import React from 'react'
import PropTypes from 'prop-types'
import {BinarySelectorField} from 'components/common/binarySelectorField'
import {yesNoMarginStyle} from 'constants/rfaText'
const YesNoRadioComponent = ({
  idPrefix,
  value,
  label,
  onFieldChange
}) => (
  <div className='col-md-12' style={yesNoMarginStyle}>
    <label className={idPrefix + 'YesNoRadioLabel'} htmlFor={idPrefix}>{label}</label>
    <BinarySelectorField
      gridClassName='col-md-4'
      id={idPrefix + 'true'}
      type='radio'
      value='true'
      checked={value === true || value === 'true'}
      label='Yes'
      onChange={onFieldChange} />
    <BinarySelectorField
      gridClassName='col-md-4'
      id={idPrefix + 'false'}
      type='radio'
      value='false'
      checked={value === false || value === 'false'}
      label='No'
      onChange={onFieldChange} />
  </div>
)

YesNoRadioComponent.propTypes = {
  idPrefix: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func
}

export default YesNoRadioComponent
