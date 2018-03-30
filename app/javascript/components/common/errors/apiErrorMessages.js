import PropTypes from 'prop-types'
import React from 'react'

const ApiErrorMessages = ({errors}) => (
  errors.map((error, index) =>
    <div key={'error' + '[' + index + ']'} >
      <span className='input-error-message' role='alert'>Type: {error.type}</span>
      <span className='input-error-message' role='alert'>Message: {error.user_message}</span>
      {(() => {
        switch (error.type) {
          case 'business_validation':
            return (<span className='input-error-message' role='alert'>a business validation exception occured: {error.technical_message}</span>)
          case 'unexpected_exception':
            return (<span className='input-error-message' role='alert'>an unexpected exception occured: {error.technical_message}</span>)
          case 'security_exception':
            return (<span className='input-error-message' role='alert'>a security exception occured: {error.technical_message}</span>)
          default:
            return (
              <div>
                <span className='input-error-message' role='alert'>a constraint validation exception occured on property: {error.property}</span>
                <span className='input-error-message' role='alert'>Invalid Value : {error.invalid_value}</span>
              </div>
            )
        }
      })()}
    </div>
  )
)

ApiErrorMessages.propTypes = {
  errors: PropTypes.array
}

ApiErrorMessages.defaultProps = {
  errors: []
}
export default ApiErrorMessages
