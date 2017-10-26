import React from 'react'
import PropTypes from 'prop-types'

const CardLayout = ({
  children,
  idClassName,
  focusClassName,
  handleOnClick,
  id,
  label
}) => {
  return (
    <div className={idClassName}>
      <div
        className={focusClassName}
        onClick={handleOnClick}
        id={id}>
        <div className='card-header'>
          <span>{label}</span>
        </div>
        <div className='card-body'>
          <div className='row list-item'>
            <div className='text-center'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CardLayout.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  idClassName: PropTypes.string,
  focusClassName: PropTypes.string,
  handleOnClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default CardLayout
