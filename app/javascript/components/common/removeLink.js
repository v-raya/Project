import React from 'react'
import PropTypes from 'prop-types'

const RemoveLink = (
  key,
  clickClose
) => (
  <div key={key} className='row'>
    <button onClick={clickClose} className='pull-right remove-btn'>Remove</button>
  </div>
)
RemoveLink.propTypes = {
  key: PropTypes.string
}
RemoveLink.defaultProps = {
  key: 'default key'
}
export default RemoveLink
