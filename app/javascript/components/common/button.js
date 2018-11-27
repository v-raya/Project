import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  buttonId,
  onClick,
  label,
  disabled,
  textAlignment
}) => (
  <div className={`text-${textAlignment}`}>
    <button className='btn'
      disabled={disabled}
      id={buttonId}
      onClick={onClick}>
      {label}
    </button>
  </div>
)

Button.propTypes = {
  buttonId: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  textAlignment: PropTypes.string,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  textAlignment: 'center',
  disabled: false
}
export default Button
