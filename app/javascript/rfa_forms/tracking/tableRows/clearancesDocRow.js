import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {BinarySelectorField} from 'components/common/binarySelectorField'
import {DateField} from 'components/common/dateFields'
import {TextAreaComponent} from 'components/common/textArea'
import {FormatDateForDisplay, FormatDateForPersistance} from 'helpers/commonHelper.jsx'

const ClearancesDocRow = ({
  clearanceDocuments,
  peopleIndex,
  editMode,
  handleChange
}) => {
  return (
    editMode
      ? clearanceDocuments.items.map((peopleDoc, itemIndex) => {
        return (
          <tr key={'clearance' + peopleIndex + 'Edit' + itemIndex}>
            <td><BinarySelectorField
              id={'clearance' + peopleIndex + 'EditCheckbox' + itemIndex}
              type='checkbox'
              key={itemIndex}
              labelId={'checkLabel' + itemIndex}
              label={peopleDoc.title}
              gridClassName='col-xs-12'
              onChange={(event) => handleChange('checked', event.target.checked, peopleIndex, itemIndex)}
              defaultChecked={peopleDoc.checked}
            />
            </td>
            <td>
              <DateField
                id={'clearance' + peopleIndex + 'EditStartDate' + itemIndex}
                value={FormatDateForDisplay(peopleDoc.start_date)}
                onChange={(event) => handleChange('start_date', FormatDateForPersistance(event.target.value), peopleIndex, itemIndex)} />
            </td>
            <td>
              <DateField
                id={'clearance' + peopleIndex + 'EditCompleteDate' + itemIndex}
                value={FormatDateForDisplay(peopleDoc.completion_date)}
                onChange={(event) => handleChange('completion_date', FormatDateForPersistance(event.target.value), peopleIndex, itemIndex)} />
            </td>
            <td>
              <TextAreaComponent
                id={'clearance' + peopleIndex + 'EditText' + itemIndex}
                value={peopleDoc.notes}
                onChange={(event) => handleChange('notes', event.target.value, peopleIndex, itemIndex)} />
            </td>
          </tr>
        )
      })
      : clearanceDocuments.items.map((peopleDoc, index) => {
        return (
          <tr key={'clearance' + peopleIndex + 'Show' + index}>
            <td id={'clearanceShowCheckbox' + index}>
              <BinarySelectorField
                type='checkbox'
                key={index}
                labelId={'checkLabel' + index}
                label={peopleDoc.title}
                gridClassName='col-xs-12'
                defaultChecked={peopleDoc.checked} />
            </td>
            <td id={'clearance' + peopleIndex + 'ShowStartDate' + index}>
              {FormatDateForDisplay(peopleDoc.start_date)}
            </td>
            <td id={'clearance' + peopleIndex + 'ShowCompleteDate' + index}>
              {FormatDateForDisplay(peopleDoc.completion_date)}
            </td>
            <td id={'clearanceShowText' + index}>
              {peopleDoc.notes}
            </td>
          </tr>
        )
      })
  )
}

ClearancesDocRow.defaultProps = {
  trackingDocuments: {
    'notes': '',
    'title': '',
    'checked': false,
    'start_date': '',
    'completion_date': ''
  }
}

export default ClearancesDocRow
