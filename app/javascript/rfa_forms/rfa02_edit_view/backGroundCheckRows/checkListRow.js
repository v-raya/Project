import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {BinarySelectorField} from 'components/common/binarySelectorField'
import {DateField} from 'components/common/dateFields'
import {TextAreaComponent} from 'components/common/textArea'
import {FormatDateForDisplay, FormatDateForPersistance} from 'helpers/commonHelper.jsx'

const CheckListRow = ({
  checkListDocuments,
  id,
  cardIndex,
  editMode,
  handleChange
}) => {
  return (
    editMode
      ? checkListDocuments.map((docs, index) => {
        return (
          <tr key={id + 'checkboxEdit' + index}>
            <td><BinarySelectorField
              id={id + 'checkboxEdit' + index}
              type='checkbox'
              key={index}
              labelId={'checkLabel' + index}
              label={docs.get('title')}
              gridClassName='col-xs-12'
              onChange={(event) => handleChange('checked', event.target.checked, index, cardIndex)}
              defaultChecked={docs.get('checked')}
            />
            </td>
            <td>
              <DateField
                id={id + 'dateEdit' + index}
                value={FormatDateForDisplay(docs.get('date'))}
                onChange={(event) => handleChange('date', FormatDateForPersistance(event.target.value), index, cardIndex)} />

            </td>
            <td>
              <TextAreaComponent
                id={id + 'textAreaEdit' + index}
                value={docs.get('notes')}
                onChange={(event) => handleChange('notes', event.target.value, index, cardIndex)} />
            </td>
          </tr>
        )
      })
      : checkListDocuments.map((docs, index) => {
        return (
          <tr key={id + 'checkboxShow' + index}>
            <td id={id + 'checkboxShow' + index}>
              <BinarySelectorField
                type='checkbox'
                key={index}
                labelId={'checkLabel' + index}
                label={docs.get('title')}
                gridClassName='col-xs-12'
                defaultChecked={docs.get('checked')} />
            </td>
            <td id={id + 'dateShow' + index}>
              {FormatDateForDisplay(docs.get('date'))}
            </td>
            <td id={id + 'textAreaShow' + index}>
              {docs.get('notes')}
            </td>
          </tr>
        )
      })
  )
}

CheckListRow.defaultProps = {
  checkListDocuments: Immutable.fromJS([{
    'notes': '',
    'title': '',
    'checked': false,
    'date': ''
  }])
}

export default CheckListRow
