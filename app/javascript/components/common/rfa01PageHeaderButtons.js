import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/common/button'
import PageTemplate from 'components/common/pageTemplate'

const Rfa01PageHeaderButtons = ({
  disableSave,
  onSaveProgressClick,
  disableSubmit,
  onSubmitClick,
  buttonTextAlignment
}) => (
  <div className='col-xs-5'>
    <div className='col-xs-7'>
      <Button
        buttonId='saveProgress'
        disabled={disableSave}
        label='Save Progress'
        textAlignment={buttonTextAlignment}
        onClick={onSaveProgressClick} />
    </div>
    <div className='col-xs-5'>
      <Button
        buttonId='submitApplication'
        disabled={disableSubmit}
        label='Submit'
        textAlignment={buttonTextAlignment}
        onClick={onSubmitClick} />
    </div>
  </div>
)

Rfa01PageHeaderButtons.propTypes = {
  buttonId: PropTypes.string,
  buttonTextAlignment: PropTypes.string,
  onButtonClick: PropTypes.func
}

Rfa01PageHeaderButtons.defaultProps = {
  buttonTextAlignment: 'center',
  disableSave: false,
  disableSubmit: false
}

export default Rfa01PageHeaderButtons
