import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const MultiSelect = ({
  label,
  value,
  optionList,
  className,
  placeholder,
  onChange
}) => {
  return (
    <div className='col-md-12'>
      <label>{label}</label>
      <Select
        className={className}
        tabSelectsValue={false}
        multi
        searchable={false}
        value={value}
        options={optionList}
        onChange={onChange}
        clearable={false}
        placeholder={placeholder}
      />
    </div>
  )
}

MultiSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  optionList: PropTypes.array,
  className: PropTypes.string,
  onChange: PropTypes.func
}

MultiSelect.defaultProps = {
  placeholder: ''
}

export default MultiSelect
