import React from 'react'
import PropTypes from 'prop-types'

const GridOuterLayout = ({
  children
}) => {
  return (
    <div className='grid_layout col-xs-12 col-sm-4 col-md-4 col-lg-4'>
      {children}
    </div>
  )
}

GridOuterLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default GridOuterLayout
