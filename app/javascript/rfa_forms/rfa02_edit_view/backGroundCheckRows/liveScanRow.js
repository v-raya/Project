import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {BinarySelectorField} from 'components/common/binarySelectorField'
import {DateField} from 'components/common/dateFields'
import {TextAreaComponent} from 'components/common/textArea'
import {FormatDateForDisplay, FormatDateForPersistance} from 'helpers/commonHelper.jsx'

const LiveScanRow = ({
  checkListDocuments,
  id,
  editMode,
  handleChange,
  checkList
}) => {
  return (
    editMode
      ? checkListDocuments.get('items').map((docs, index) => {
        return (
          <tr key={id + 'checkboxEdit' + index}>
            <td><BinarySelectorField
              id={id + 'checkboxEdit' + index}
              type='checkbox'
              key={index}
              labelId={'checkLabel' + index}
              label={docs.get('title')}
              gridClassName='col-xs-12'
              onChange={(event) => handleChange('checked', event.target.checked, index)}
              defaultChecked={docs.get('checked')}
            />
            </td>
            <td>
              <DateField
                id={id + 'submitDateEdit' + index}
                value={FormatDateForDisplay(docs.get('date_submitted'))}
                onChange={(event) => handleChange('date_submitted', FormatDateForPersistance(event.target.value), index)} />
            </td>
            <td>
              <DateField
                id={id + 'approveDateEdit' + index}
                value={FormatDateForDisplay(docs.get('date_received'))}
                onChange={(event) => handleChange('date_received', FormatDateForPersistance(event.target.value), index)} />

            </td>
            <td>
              <TextAreaComponent
                id={id + 'textAreaEdit' + index}
                value={docs.get('notes')}
                onChange={(event) => handleChange('notes', event.target.value, index)} />
            </td>
          </tr>
        )
      })
      : checkListDocuments.get('items').map((docs, index) => {
        return (
          <tr key={id + 'checkboxShow' + +index}>
            <td id={id + 'checkboxShow' + index}>
              <BinarySelectorField
                type='checkbox'
                key={index}
                labelId={'checkLabel' + index}
                label={docs.get('title')}
                gridClassName='col-xs-12'
                defaultChecked={docs.get('checked')} />
            </td>
            <td id={id + 'submitDateShow' + index}>
              {FormatDateForDisplay(docs.get('date_submitted'))}
            </td>
            <td id={id + 'approveDateShow' + index}>
              {FormatDateForDisplay(docs.get('date_received'))}
            </td>
            <td id={id + 'textAreaShow' + index}>
              {docs.get('notes')}
            </td>
          </tr>
        )
      })
  )
}

LiveScanRow.defaultProps = {
  checkListDocuments: {
    'notes': '',
    'title': '',
    'checked': false,
    'date_received': '',
    'date_submitted': ''
  }
}

export default LiveScanRow
