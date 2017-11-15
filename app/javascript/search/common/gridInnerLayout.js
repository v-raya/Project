import React from 'react'
import PropTypes from 'prop-types'

const GridInnerLayout = ({
  title,
  value
}) => {
  return (
    <div>
      <p className='block_label'>{title}</p>
      <p className='block_text'>{value}</p>
    </div>
  )
}

GridInnerLayout.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default GridInnerLayout
