import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {DateField} from 'components/common/dateFields'
import {TextAreaComponent} from 'components/common/textArea'
import {BinarySelectorField} from 'components/common/binarySelectorField'

const TrackingListRowsEdit = ({
  docs,
  handleChange
}) => {
  return (
    <tr>
      <td><BinarySelectorField
        gridClassName='inlineBlock'
        onChange={(event) => console.log('date')}
        value={docs.checked}/>
      {docs.title}
      </td>
      <td>
        <DateField
          value={docs.completed_date}
          onChange={(event) => { console.log('date') }}
        />
      </td>
      <td>
        <TextAreaComponent
          value={docs.notes}
          onChange={(event) => console.log('date')}
        />
      </td>
    </tr>
  )
}

TrackingListRowsEdit.defaultProps = {
  docs: {
    'notes': '',
    'title': '',
    'checked': false
  }
}
export default TrackingListRowsEdit
