import PropTypes from 'prop-types'
import React from 'react'

const ApiErrorMessages = ({errors, url}) => (
  errors.map((error, index) =>
    <div key={'error' + '[' + index + ']'} >
      {url ? (<span className='input-error-message' role='alert'>{url}</span>) : ''}
      <span className='input-error-message' role='alert'>Type: {error.type}</span>
      <span className='input-error-message' role='alert'>Message: {error.user_message}</span>
      {(() => {
        switch (error.type) {
          case 'constraint_validation':
            return (
              <div>
                <span className='input-error-message' role='alert'>a constraint validation exception occured on property: {error.property}</span>
                <span className='input-error-message' role='alert'>Invalid Value : {error.invalid_value}</span>
              </div>
            )
          default:
            return (<span className='input-error-message' role='alert'>an exception occured: {error.technical_message}</span>)
        }
      })()}
    </div>
  )
)

ApiErrorMessages.propTypes = {
  errors: PropTypes.array,
  url: PropTypes.string
}

ApiErrorMessages.defaultProps = {
  errors: [],
  url: ''
}
export default ApiErrorMessages
