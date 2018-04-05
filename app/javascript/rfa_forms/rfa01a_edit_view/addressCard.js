import React from 'react'
import _ from 'lodash'
import Immutable from 'immutable'
import PropTypes from 'prop-types'
import YesNoRadioComponent from 'components/common/yesNoFields'
import {physicalAddressType, mailingAddressType} from 'constants/rfaConstants'
import {getDictionaryId, dictionaryNilSelect, dictionaryNilSelectValue, findArrayValueByMethod} from 'helpers/commonHelper.jsx'
import AddressComponent from 'components/rfa_forms/addressComponent'
import {blankPhysicalAddress, blankMailingAddress} from 'constants/defaultFields'
import {fetchRequest} from 'helpers/http'

export default class AddressCard extends React.Component {
  constructor (props) {
    super(props)
    this.onMailingAddressChange = this.onMailingAddressChange.bind(this)
    this.onPhysicalAddressChange = this.onPhysicalAddressChange.bind(this)
  //  this.isPhysicalDifferentThanMailingAddress = this.isPhysicalDifferentThanMailingAddress.bind(this)
    this.props.validator.addFieldValidation(this.props.idPrefix + 'physical_mailing_similar', {rule: 'isRequiredBoolean', message: 'Required'})
    this.props.validator.addFieldValidation(this.props.idPrefix + 'addresses[0].street_address', {rule: 'isRequired', message: 'Required'})
    this.props.validator.addFieldValidation(this.props.idPrefix + 'addresses[0].zip', {rule: 'isRequired', message: 'Required'})
    this.props.validator.addFieldValidation(this.props.idPrefix + 'addresses[0].city', {rule: 'isRequired', message: 'Required'})
    this.props.validator.addFieldValidation(this.props.idPrefix + 'addresses[0].state', {rule: 'isRequiredBoolean', message: 'Required'})

    this.props.validator.addFieldValidation(this.props.idPrefix + 'addresses[1].street_address',
      {rule: 'isRequiredIf',
        message: 'Required',
        condition: () => this.isPhysicalDifferentThanMailingAddress()})
    this.props.validator.addFieldValidation(this.props.idPrefix + 'addresses[1].zip',
      {rule: 'isRequiredIf',
        message: 'Required',
        condition: () => this.isPhysicalDifferentThanMailingAddress()})
    this.props.validator.addFieldValidation(this.props.idPrefix + 'addresses[1].city',
      {rule: 'isRequiredIf',
        message: 'Required',
        condition: () => this.isPhysicalDifferentThanMailingAddress()})
    this.props.validator.addFieldValidation(this.props.idPrefix + 'addresses[1].state',
      {rule: 'isRequiredIf',
        message: 'Required',
        condition: () => this.isPhysicalDifferentThanMailingAddress()})
  }

  onMailingAddressChange (key, value) {
    let mailingAddress = Immutable.fromJS(this.props.mailingAddress)
    mailingAddress = mailingAddress.set(key, value)
    let addresses = Immutable.List([this.props.physicalAddress, mailingAddress])
    this.props.setParentState('addresses', addresses.toJS())
  }

  onPhysicalAddressChange (key, value) {
    let physicalAddress = Immutable.fromJS(this.props.physicalAddress)
    physicalAddress = physicalAddress.set(key, value)
    let addresses = Immutable.List([physicalAddress, this.props.mailingAddress])
    this.props.setParentState('addresses', addresses.toJS())
  }

  isPhysicalDifferentThanMailingAddress () {
    return (this.props.physicalMailingSimilar == 'false' || this.props.physicalMailingSimilar == false)
  }

  render () {
    return (
      <div className='card-body'>
        <div className='row'>
          <AddressComponent
            stateTypes={this.props.stateTypes}
            addressTitle='Physical Address (required)'
            label=' (required)'
            id='street_address'
            addressType={physicalAddressType}
            addressFields={this.props.physicalAddress}
            mailingAddress={this.props.mailingAddress}
            setParentState={this.props.setParentState}
            parentStateKey='addresses'
            validator={this.props.validator}
            onChange={(fieldId, event) => this.onPhysicalAddressChange(fieldId, event)} />
          <YesNoRadioComponent
            label='Mailing address the same as Physical Address? (required)'
            idPrefix='mailing_similar'
            value={this.props.physicalMailingSimilar}
            onFieldChange={(event) => this.props.handleClearOnConditionalChange(
              'physical_mailing_similar', 'addresses', event.target.value, blankMailingAddress)} />
          {
            this.props.physicalMailingSimilar.toString() === 'false'
              ? <AddressComponent
                stateTypes={this.props.stateTypes}
                addressTitle='Mailing Address (required)'
                label=' (required)'
                id='street_address'
                parentStateKey='addresses'
                addressType={mailingAddressType}
                addressFields={this.props.mailingAddress}
                physicalAddress={this.props.physicalAddress}
                setParentState={this.props.setParentState}
                validator={this.props.validator}
                onChange={(fieldId, event) => this.onMailingAddressChange(fieldId, event)} />
              : null
          }
        </div>
      </div>
    )
  }
}

AddressCard.propTypes = {
  handleClearOnConditionalChange: PropTypes.func,
  idPrefix: PropTypes.string
}

AddressCard.defaultProps = {
  physicalMailingSimilar: '',
  idPrefix: 'residence.',
  suggestions: [],
  mailingAddress: blankMailingAddress,
  physicalAddress: blankPhysicalAddress
}
