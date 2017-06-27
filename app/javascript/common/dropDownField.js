import React from 'react';

const DropDownField = ({gridClassName, selectClassName, optionList,onChange, label}) => (
  <div className={gridClassName}>
    <label>{label}</label>
    <select defaultValue="" onChange={onChange} className={selectClassName}>
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

export {DropDownField}