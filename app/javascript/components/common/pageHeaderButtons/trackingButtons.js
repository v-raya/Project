import PropTypes from 'prop-types'
import React from 'react'
import Button from 'components/common/button'

const TrackingButtons = ({
  editMode,
  saveProgress,
  editProgress,
  cancelProgress
}) => {
  return (
    <div>
      {
        editMode
          ? <div className='pull-right' >
            <div >
              <div className='tracking-cancel inlineBlock'>
                <Button
                  buttonId='CancelTracking'
                  label='Cancel'
                  textAlignment='center'
                  onClick={cancelProgress} />
              </div>
              <div className='tracking-button inlineBlock'>
                <Button
                  buttonId='saveTracking'
                  label='Save'
                  textAlignment='center'
                  onClick={saveProgress} />
              </div>
            </div>
          </div>
          : <div className='pull-right'>
            <div className='tracking-button'>
              <Button
                buttonId='editTracking'
                label='Edit Checklist'
                textAlignment='center'
                onClick={editProgress} />
            </div>
          </div>
      }
    </div>
  )
}

export default TrackingButtons
