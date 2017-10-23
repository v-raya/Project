import React from 'react'
import PropTypes from 'prop-types'

const DropDownField = ({gridClassName, id, value, disable, disableNullVal, selectClassName, optionList, onChange, label}) => (
  <div className={gridClassName}>
    <label>{label}</label>
    <select defaultValue={value} id={id} disabled={disable} onChange={onChange} className={selectClassName}>
      {!disable}
      { !disableNullVal && <option key='' value='' />}
      {
        optionList.map((item, index) => {
          return (
            <option key={index} value={item.id}>{item.value}</option>
          )
        })
      }
    </select>
  </div>
)
DropDownField.PropTypes = {
  value: PropTypes.string
}
export {DropDownField}
