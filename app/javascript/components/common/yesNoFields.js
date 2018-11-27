import React from 'react'
import PropTypes from 'prop-types'
import {BinarySelectorField} from 'components/common/binarySelectorField'
import {yesNoMarginStyle} from 'constants/rfaText'
const YesNoRadioComponent = ({
  idPrefix,
  value,
  onFieldChange,
  label,
  labelDefaultYes,
  labelDefaultNo,
  gridClassName
}) => (
  <div className='col-md-12 no-padding' style={yesNoMarginStyle}>
    <label>{label}</label>
    <BinarySelectorField
      gridClassName={gridClassName}
      id={`${idPrefix}true`}
      labelId={`${idPrefix}Yes`}
      type='radio'
      value='true'
      checked={value === true || value === 'true'}
      label={labelDefaultYes}
      onChange={onFieldChange} />
    <BinarySelectorField
      gridClassName={gridClassName}
      id={`${idPrefix}false`}
      labelId={`${idPrefix}No`}
      type='radio'
      value='false'
      checked={value === false || value === 'false'}
      label={labelDefaultNo}
      onChange={onFieldChange} />
  </div>
)

YesNoRadioComponent.propTypes = {
  label: PropTypes.string,
  onFieldChange: PropTypes.func,
  idPrefix: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  labelDefaultYes: PropTypes.string,
  labelDefaultNo: PropTypes.string
}

YesNoRadioComponent.defaultProps = {
  labelDefaultYes: 'Yes',
  labelDefaultNo: 'No',
  gridClassName: 'col-md-4'
}

export default YesNoRadioComponent
