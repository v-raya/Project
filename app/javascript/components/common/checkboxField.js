import React from 'react'

const CheckboxField = ({gridClassName, type, label, id, value, checked, disabled, onChange}) => (
  <div className={gridClassName}>
    <input
      type={type}
      id={id}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    <label htmlFor={id}>{label}</label>
  </div>
)

CheckboxField.defaultProps = {
  type: 'checkbox'
}
export {CheckboxField}
