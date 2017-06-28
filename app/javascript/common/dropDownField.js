import React from 'react'

const DropDownField = ({gridClassName, value, disable, selectClassName, optionList, onChange, label}) => (
  <div className={gridClassName}>
    <label>{label}</label>
    <select value={value} disabled={disable} onChange={onChange} className={selectClassName}>
      {!disable && <option key='' value='' />}
      {
        optionList.map((item) => {
          return (
            <option key={item.id}>{item.value}</option>
          )
        })
      }
    </select>
  </div>
)

export {DropDownField}
