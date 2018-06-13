import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {BinarySelectorField} from 'components/common/binarySelectorField'

const TrackingListRowsShow = ({
  docs
}) => {
  return (
    <tr>
      <td><BinarySelectorField
        gridClassName='inlineBlock'
        value={docs.checked}/>
      {docs.title}
      </td>
      <td>
        {docs.completed_date}
      </td>
      <td>
        {docs.notes}
      </td>
    </tr>
  )
}

TrackingListRowsShow.defaultProps = {
  'notes': '',
  'title': '',
  'checked': false,
  'approved_date': '',
  'submitted_date': ''
}
export default TrackingListRowsShow
