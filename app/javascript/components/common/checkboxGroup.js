import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {CheckboxField} from './checkboxField.js'
import {findArrayValueByMethod} from 'helpers/commonHelper.jsx'

let agePreferenceText = 'No preference'

export default class CheckboxGroup extends React.Component {
  constructor (props) {
    super(props)
    this.onCheckboxChange = this.onCheckboxChange.bind(this)
    this.onNoPreferenceChange = this.onNoPreferenceChange.bind(this)
  }
  onNoPreferenceChange (checkedValue, id, text) {
    let selectedAgePreference = checkedValue ? [{id: id, value: text}] : []
    this.props.onChange('preferred_ages', selectedAgePreference)
  }

  onCheckboxChange (checkedValue, id, text) {
    // get list without current id
    let selectedAgePreference = Immutable.fromJS(this.props.agePreferences).filter(x => x.get('id') !== id)

    // if checked true; insert value
    if (checkedValue) { selectedAgePreference = selectedAgePreference.push({id: id, value: text}) }

    this.props.onChange('preferred_ages', selectedAgePreference.toJS())
  }

  render () {
    const agePreferences = Immutable.fromJS(this.props.agePreferences)
    const isNoPreferenceChecked = agePreferences.find(x => x.get('value') === agePreferenceText) !== undefined

    return (
      <div className='col-md-12 age'>
        <label className='preferred-age-desc'>{this.props.sectionDesc}</label>
        <p>{this.props.label}</p>
        {
          this.props.optionList.map((item, index) => {
            const checkboxValue = findArrayValueByMethod(agePreferences, 'find', 'id', item.id) !== undefined
            return (
              <CheckboxField
                type={'checkbox'}
                id={'age-' + index}
                gridClassName={item.value === agePreferenceText ? 'col-xs-12' : 'col-xs-4'}
                key={index}
                disabled={item.value !== agePreferenceText ? isNoPreferenceChecked : false}
                label={item.value}
                value={checkboxValue}
                checked={checkboxValue}
                onChange={(item.value === agePreferenceText) ? (event) => this.onNoPreferenceChange(event.target.checked, item.id, item.value) : (event) => this.onCheckboxChange(event.target.checked, item.id, item.value)}
              />
            )
          })
        }
      </div>
    )
  }
}

CheckboxGroup.propTypes = {
  optionList: PropTypes.array.isRequired,
  agePreferences: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}
