import PropTypes from 'prop-types'
import React from 'react'
import Button from 'components/common/button'

const CancelSaveGroup = ({
  idPrefix,
  cancelAction,
  saveAction
}) => {
  return (
    <div className='pull-right col-xs-4' >
      <div className={idPrefix + '-cancel inlineBlock'}>
        <Button
          buttonId={idPrefix + 'Cancel'}
          label='Cancel'
          textAlignment='center'
          onClick={cancelAction} />
      </div>
      <div className={idPrefix + '-save inlineBlock'}>
        <Button
          buttonId={idPrefix + 'Save'}
          label='Save'
          textAlignment='center'
          onClick={saveAction} />
      </div>
    </div>
  )
}

export default CancelSaveGroup
