import React from 'react'
import PropTypes from 'prop-types'
import CommonAddressFields from './commonAddressField.jsx'
import {fetchRequest} from 'helpers/http'

export default class CommonAddressComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      suggestions: []
    }
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
  }
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
  onSuggestionSelected (event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}, addressType) {
    let url = '/geoservice/validate'
    let params = suggestion
    let updateSuggetions
    fetchRequest(url, 'POST', params).then(
      response => response.json()).then((response) => {
      updateSuggetions = response[0]
      this.props.onSelection(updateSuggetions)
    }).catch(() => {
      updateSuggetions = suggestion
      this.props.onSelection(updateSuggetions)
    })
  }
  render () {
    return (
      <CommonAddressFields
        addressTitle='Physical Address'
        addressType={this.props.addressType}
        id={this.props.id}
        suggestions={this.state.suggestions}
        addressFields={this.props.addressFields}
        stateTypes={this.props.stateTypes}
        onChange={this.props.onChange}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionSelected={this.onSuggestionSelected}
      />
    )
  }
}

CommonAddressFields.propTypes = {
  addressType: PropTypes.string,
  id: PropTypes.string,
  // index: PropTypes.number,
  addressTitle: PropTypes.string.isRequired,
  addressFields: PropTypes.object.isRequired,
  stateTypes: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

CommonAddressFields.defaultProps = {
  addressType: '',
  placeholder: '',
  addressTitle: 'Physical Address'
}