import React from 'react'
import PropTypes from 'prop-types'
import {DateField} from 'components/common/dateFields'
import {TextAreaComponent} from 'components/common/textArea'
import {FormatDateForDisplay, FormatDateForPersistance} from 'helpers/commonHelper.jsx'

const DateNoteFields = ({
  containerClass,
  editMode,
  id,
  subKey,
  dateValue,
  notesValue,
  handleChange
}) => {
  return (
    editMode
      ? <div className={containerClass}>
        <DateField
          id={id + 'date' + subKey}
          value={FormatDateForDisplay(dateValue)}
          onChange={(event) => handleChange('date', FormatDateForPersistance(event.target.value), subKey)}
        />
        <TextAreaComponent
          id={id + 'notes' + subKey}
          value={notesValue}
          onChange={(event) => handleChange('notes', event.target.value, subKey)}
        />
      </div>
      : <div className={containerClass}>
        <p>{FormatDateForDisplay(dateValue)}</p>
        <p>{notesValue}</p>
      </div>
  )
}

DateNoteFields.defaultProps = {
  containerClass: 'col-xs-12',
  dateValue: '',
  notesValue: ''
}

export default DateNoteFields
