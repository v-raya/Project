import React from 'react'
import PropTypes from 'prop-types'
import {BinarySelectorField} from 'components/common/binarySelectorField'
import {yesNoMarginStyle} from 'constants/rfaText'

const YesNoFieldShow = ({
  id,
  value,
  onFieldChange,
  label,
  labelDefaultYes,
  labelDefaultNo,
  gridClassName
}) => {
  return (
    <div id={id} className='col-md-12' style={yesNoMarginStyle}>
      <label>{label}</label>
      <p>{(value === true || value === 'true') ? labelDefaultYes : labelDefaultNo}</p>
    </div>
  )
}

YesNoFieldShow.propTypes = {
  label: PropTypes.string,
  onFieldChange: PropTypes.func,
  idPrefix: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  labelDefaultYes: PropTypes.string,
  labelDefaultNo: PropTypes.string
}

YesNoFieldShow.defaultProps = {
  labelDefaultYes: 'Yes',
  labelDefaultNo: 'No',
  gridClassName: 'col-md-4'
}

export default YesNoFieldShow
