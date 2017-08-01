import React from 'react'
import PropTypes from 'prop-types'

const DropDownField = ({gridClassName, id, value, disable, selectClassName, optionList, onChange, label}) => (
  <div className={gridClassName}>
    <label>{label}</label>
    <select value={value} id={id} disabled={disable} onChange={onChange} className={selectClassName}>
      {!disable && <option key='' value='' />}
      {
        optionList.map((item) => {
          return (
            <option key={item.id} value={item.id}>{item.value}</option>
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
