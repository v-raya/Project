import React from 'react'

const InputComponent = ({gridClassName, fieldClassName, labelClassName,
   id, label, onChange, value, placeholder, type, maxLength, onBlur}) => (
     <div className={gridClassName}>
       <div>
         <label className={labelClassName} htmlFor={id}>{label}</label>
         <input className={fieldClassName}
           id={id}
           type={type}
           placeholder={placeholder}
           value={value}
           onChange={onChange}
           onBlur={onBlur}
           maxLength={maxLength}
         />
       </div>
     </div>
)

export {InputComponent}
