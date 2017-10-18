import React from 'react'
import Immutable from 'immutable'
import {InputComponent} from 'components/common/inputFields'
import CompleteNameFields from './completeNameField'
import CommonAddressFields from 'components/rfa_forms/commonAddressField'
import PropTypes from 'prop-types'
import CleaveInputField from 'components/common/cleaveInputField.jsx'
import {fieldErrorsAsImmutableSet} from 'helpers/validationHelper.jsx'

import {fetchRequest} from 'helpers/http'

const phoneNumberRule = {rule: 'is10digits', message: 'Invalid Phone Number'}

export default class ReferencesCard extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.onSelection = this.onSelection.bind(this)
    this.state = {
      suggestions: []
    }
    this.props.validator.addFieldValidation(this.props.idPrefix + 'phone_number', phoneNumberRule)
  }
  handleAddressChange (key, value, referencesIndex) {
    let mailingAddressObj = Immutable.fromJS(this.props.reference.mailing_address)
    mailingAddressObj = mailingAddressObj.set(key, value)
    this.props.setParentState('mailing_address', mailingAddressObj.toJS(), referencesIndex)
  }
  onSelection (addressType, autofillData) {
    this.handleAddressChange()
  }
  // onSelection (autoFillData, referenceIndex) {
  //   this.handleAddressChange(, autoFillData, referenceIndex)
  // }

  onSuggestionSelected (event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}, referencesIndex) {
    let url = '/geoservice/validate'
    let params = suggestion
    let updateSuggetions
    fetchRequest(url, 'POST', params).then(
      response => response.json()).then((response) => {
      updateSuggetions = response[0]
      this.onSelection(updateSuggetions, referencesIndex)
    }).catch(() => {
      updateSuggetions = suggestion
      this.onSelection(updateSuggetions, referencesIndex)
    })
  }

  // onSuggestionsFetchRequested (value, reason) {
  onSuggestionsFetchRequested ({value, reason}) {
    let url = '/geoservice/'
    let params = encodeURIComponent(value)
    fetchRequest(url, 'POST', params).then(
      response => response.json()).then((response) => {
      return this.setState({
        suggestions: response
      })
    }).catch(() => {
      return this.setState({
        suggestions: []
      })
    })
  }

  render () {
    const phoneNumberId = this.props.idPrefix + 'phone_number'

    return (
      <div>
        <CompleteNameFields
          index={this.props.index}
          fieldValues={this.props.reference}
          suffixTypes={this.props.suffixTypes}
          prefixTypes={this.props.prefixTypes}
          onChange={this.props.setParentState} />
        <CommonAddressFields
          suggestions={this.state.suggestions || []}
          addressTitle='Physical Address'
          id="street_address"
          index={this.props.index}
          stateTypes={this.props.stateTypes}
          addressFields={this.props.reference.mailing_address}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
          onSuggestionSelected={(event, object) => this.onSuggestionSelected(event, object, this.props.index)}
          onChange={(fieldId, event) => this.handleAddressChange(fieldId, event, this.props.index)} />
        <CleaveInputField
          gridClassName='col-md-4'
          id={phoneNumberId}
          value={this.props.reference.phone_number}
          label='Phone Number'
          placeholder=''
          blurPlaceholder=''
          focusPlaceholder='(___)___-____'
          options={{
            delimiters: ['(', ')', '-'],
            blocks: [0, 3, 3, 4],
            numericOnly: true}}
          type='text'
          errors={fieldErrorsAsImmutableSet(this.props.errors.phone_number)}
          onChange={(event) => this.props.setParentState('phone_number', event.target.rawValue, this.props.index)}
          onBlur={(event) => this.props.validator.validateFieldSetErrorState(phoneNumberId, event.target.rawValue)} />
        <InputComponent gridClassName='col-md-4' id='email'
          value={this.props.reference.email}
          label='Email (optional)' placeholder=''
          type='text' onChange={(event) => this.props.setParentState('email',
            event.target.value, this.props.index)} />
      </div>
    )
  }
}

ReferencesCard.propTypes = {
  index: PropTypes.number,
  suffixTypes: PropTypes.array.isRequired,
  reference: PropTypes.object.isRequired,
  prefixTypes: PropTypes.array.isRequired,
  nameTypes: PropTypes.array.isRequired,
  stateTypes: PropTypes.array.isRequired,
  setParentState: PropTypes.func.isRequired
}

ReferencesCard.defaultProps = {
  index: 0,
  idPrefix: '',
  errors: {}
}
