import React from 'react'
import PropTypes from 'prop-types'
import {DateField} from 'components/common/dateFields'
import {TextAreaComponent} from 'components/common/textArea'
import {FormatDateForDisplay, FormatDateForPersistance} from 'helpers/commonHelper.jsx'

const DateNoteFields = ({
  containerClass,
  editMode,
  dateFieldClass,
  textFieldClass,
  id,
  subKey,
  dateValue,
  notesValue,
  handleChange
}) => {
  return (
    editMode
      ? <div className={containerClass}>
        <div className={dateFieldClass}>
          <p>Date</p>
          <DateField
            id={id + 'date' + subKey}
            value={FormatDateForDisplay(dateValue)}
            onChange={(event) => handleChange('date', FormatDateForPersistance(event.target.value), subKey)}
          />
        </div>
        <div className={textFieldClass}>
          <p>Notes</p>
          <TextAreaComponent
            id={id + 'notes' + subKey}
            value={notesValue}
            onChange={(event) => handleChange('notes', event.target.value, subKey)}
          />
        </div>
      </div>
      : <div className={containerClass}>
        <div>
          <p>Date</p>
          <p>{FormatDateForDisplay(dateValue)}</p>
        </div>
        <div>
          <p>Notes</p>
          <p>{notesValue}</p>
        </div>
      </div>
  )
}

DateNoteFields.defaultProps = {
  containerClass: 'col-xs-12',
  dateValue: '',
  notesValue: '',
  textFieldClass: '',
  dateFieldClass: ''
}

export default DateNoteFields
