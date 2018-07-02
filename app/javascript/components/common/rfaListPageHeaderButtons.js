import PropTypes from 'prop-types'
import React from 'react'
import Button from 'components/common/button'

const RfaListPageHeaderButtons = ({
  disbaleRfaApplication,
  submit,
  buttonWrapClass,
  checkForPriviliges,
  submitForSearch
}) => {
  return (
    <div className={buttonWrapClass}>
      {
        checkForPriviliges
          ? <div className='col-xs-6'>
            <Button
              onClick={submitForSearch}
              label='Search for Facility'
            />
          </div> : null
      }
      {
        !disbaleRfaApplication
          ? <div className='col-xs-6'>
            <Button
              onClick={submit}
              label='Create RFA Application'
            />
          </div> : null
      }
    </div>

  )
}
RfaListPageHeaderButtons.defaultProps = {
  buttonWrapClass: 'col-xs-12 col-sm-7 col-lg-5'
}

export default RfaListPageHeaderButtons
