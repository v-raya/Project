import React from 'react'
import PropTypes from 'prop-types'

const InputDataBlock = ({
  columnWidth,
  title,
  children
}) => {
  return (
    <div className={'input_data col-xs-12' + ' ' + 'col-sm-' + columnWidth + ' ' + 'col-md-' + columnWidth + ' ' + 'col-lg-' + columnWidth}>
      <div className='input_lable'>
        <span>{title}</span>
      </div>
      {children}
    </div>
  )
}

InputDataBlock.propTypes = {
  columnWidth: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default InputDataBlock
