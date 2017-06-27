import React from 'react';

const CheckboxField = ({gridClassName,label, id, value, checked, disabled, onChange}) => (
  <div className={gridClassName}>
    <input type='checkbox'
           id={id}
           value={value}
           checked={checked}
           disabled={disabled}
           onChange={onChange}
    />
    <label htmlFor={id}>{label}</label>
  </div>
)

export {CheckboxField}