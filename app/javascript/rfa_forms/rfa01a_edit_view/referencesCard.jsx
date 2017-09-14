import React from 'react'
import Immutable from 'immutable'
import {InputComponent} from 'components/common/inputFields'
import CompleteNameFields from './completeNameField'
import CommonAddressFields from 'components/rfa_forms/commonAddressField'
import PropTypes from 'prop-types'

export default class ReferencesCard extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddressChange = this.handleAddressChange.bind(this)
  }
  handleAddressChange (key, value, referencesIndex) {
    let mailingAddressObj = Immutable.fromJS(this.props.reference.mailing_address)
    mailingAddressObj = mailingAddressObj.set(key, value)
    this.props.setParentState('mailing_address', mailingAddressObj.toJS(), referencesIndex)
  }
  render () {
    return (
      <div>
        <CompleteNameFields
          index={this.props.index}
          fieldValues={this.props.reference}
          suffixTypes={this.props.suffixTypes}
          prefixTypes={this.props.prefixTypes}
          onChange={this.props.setParentState}/>
        <CommonAddressFields
          index={this.props.index}
          stateTypes={this.props.stateTypes}
          addressFields={this.props.reference}
          onChange={this.handleAddressChange}/>
        <InputComponent gridClassName='col-md-4' id='phone'
          value={this.props.reference.phone_number}
          label='Phone' placeholder=''
          type='text' onChange={(event) => this.props.setParentState('phone_number', event.target.value, this.props.index)} />
        <InputComponent gridClassName='col-md-4' id='email'
          value={this.props.reference.email}
          label='Email (optional)' placeholder=''
          type='text' onChange={(event) => this.props.setParentState('email', event.target.value, this.props.index)} />
      </div>
    )
  }
}

ReferencesCard.propTypes = {
  suffixTypes: PropTypes.array.isRequired,
  reference: PropTypes.object.isRequired,
  prefixTypes: PropTypes.array.isRequired,
  nameTypes: PropTypes.array.isRequired,
  stateTypes: PropTypes.array.isRequired,
  setParentState: PropTypes.func.isRequired
}
