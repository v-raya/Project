import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import FormField from 'components/common/formField'
import Cleave from 'cleave.js/react'

const CleaveInputField = ({
  blurPlaceholder,
  errors,
  focusPlaceholder,
  gridClassName,
  id,
  label,
  labelClassName,
  options,
  onBlur,
  onChange,
  placeholder,
  required,
  type,
  value
}) => {
  const formFieldProps = {
    errors: errors,
    gridClassName: gridClassName,
    id: id,
    label: label,
    labelClassName: labelClassName,
    required: required
  }

  return (
    <FormField {...formFieldProps}>
      <Cleave id={id} type={type} value={value} options={options}
        placeholder={placeholder} required={required} aria-required={required}
        onBlur={onBlur}
        onFocus={(event) => {
          event.target.placeholder = focusPlaceholder
        }}
        onChange={onChange}
      />
    </FormField>
  )
}

CleaveInputField.defaultProps = {
  type: 'text'
}

CleaveInputField.propTypes = {
  blurPlaceholder: PropTypes.string,
  errors: PropTypes.object,
  focusPlaceholder: PropTypes.string,
  gridClassName: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  options: PropTypes.object,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  placeholderChar: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
export default CleaveInputField
