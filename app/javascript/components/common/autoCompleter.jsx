import React from 'react'
import ReactAutosuggest from 'react-autosuggest'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {fetchRequest} from 'helpers/http'
import PropTypes from 'prop-types'

export default class AutoCompleter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      suggestions: []
    }
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.getSuggestionValue = this.getSuggestionValue.bind(this)
    this.renderSuggestion = this.renderSuggestion.bind(this)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  getSuggestionValue (suggestion) {
    return suggestion.street_address
  }
  onSuggestionsClearRequested () {
    // this.props.onSelection(suggestion)
  }
  onSuggestionSelected (event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) {
    // this.props.onSelection(suggestion)
  }
  onSuggestionsFetchRequested ({ value, reason }) {
    let url = this.props.url
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
  renderSuggestion (suggestion) {
    return (
      <div>
        {suggestion.street_address}, {suggestion.city}, {suggestion.state}
      </div>
    )
  }
  onChange (event, {newValue}) {
    this.props.onChange(this.props.addressType, this.props.fieldName, newValue)
  }
  render () {
    const inputProps = {
      id: this.props.id,
      value: this.props.value,
      onChange: this.onChange
    }
    return (
      <ReactAutosuggest
        id={this.props.fieldName}
        suggestions={this.state.suggestions}
        inputProps={inputProps}
        renderSuggestion={this.renderSuggestion}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        getSuggestionValue={this.getSuggestionValue}
        onSuggestionSelected={this.onSuggestionSelected}
      />
    )
  }
}

AutoCompleter.propTypes = {
  url: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  addressType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}