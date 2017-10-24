import React from 'react'
import Immutable from 'immutable'
import {InputComponent} from 'components/common/inputFields'
import {DropDownField} from 'components/common/dropDownField'
import AutoCompleter from 'components/common/autoCompleter.jsx'
import {yesNo} from 'constants/constants'
import {getDictionaryId, dictionaryNilSelect, findArrayValueByMethod} from 'helpers/commonHelper.jsx'
import CommonAddressFields from 'components/rfa_forms/commonAddressField.jsx'

import {fetchRequest} from 'helpers/http'

const blankPhysicalAddress = Object.freeze({
  street_address: '',
  zip: '',
  city: '',
  state: null,
  type: {
    id: '1',
    value: 'Residential'
  }
})
const blankMailingAddress = Object.freeze({
  street_address: '',
  zip: '',
  city: '',
  state: null,
  type: {
    id: '3',
    value: 'Mailing'
  }
})

const physicalAddressType = 'Residential'
const mailingAddressType = 'Mailing'

export default class AddressCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      suggestions: []
    }
  }
  onAddressChange (typeString, key, value) {
    // find index of address with type.id=physical
    const blankAddressFields = (typeString === physicalAddressType) ? blankPhysicalAddress : blankMailingAddress
    let data = Immutable.fromJS(this.props.addresses || [blankAddressFields])
    let index = data.findIndex(x => x.get('type').get('value') === typeString)
    if (index === -1) {
      // data is immutable list, important to push blankaddress as immutable
      data = data.push(Immutable.fromJS(blankAddressFields))
      index = data.size - 1
    }
    if (key === 'fromSelection') {
      let selectedAddress = Immutable.fromJS(value)
      selectedAddress.keySeq().forEach(k => {
        if (k === 'state') {
          let stateTypes = Immutable.fromJS(this.props.stateTypes)
          value[k] = findArrayValueByMethod(stateTypes, 'find', 'id', value[k]).toJS()
        }
        // data = data.update(index, x => x.set(k, value[k]))
        data = data.toJS()
        data[index][k] = value[k]
        data = Immutable.fromJS(data)
      })
    } else {
      data = data.update(index, x => x.set(key, value))
    }
    this.props.setParentState('addresses', data.toJS())
  }
  onSelection (autoFillData, addressType) {
    this.onAddressChange(addressType, 'fromSelection', autoFillData)
  }

  onSuggestionSelected (event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}, addressType) {
    let url = '/geoservice/validate'
    let params = suggestion
    let updateSuggetions
    fetchRequest(url, 'POST', params).then(
      response => response.json()).then((response) => {
      updateSuggetions = response[0]
      this.onSelection(updateSuggetions, addressType)
    }).catch(() => {
      updateSuggetions = suggestion
      this.onSelection(updateSuggetions, addressType)
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
    const hasPhysicalAddressFields = this.props.addresses !== undefined && this.props.addresses.find(o => o.type.value === physicalAddressType)
    const physicalAddressFields = hasPhysicalAddressFields ? this.props.addresses.find(o => o.type.value === physicalAddressType) : blankPhysicalAddress
    const hasMailingAddressFields = this.props.addresses !== undefined && this.props.addresses.find(o => o.type.value === mailingAddressType)
    const mailingAddressFields = hasMailingAddressFields ? this.props.addresses.find(o => o.type.value === mailingAddressType) : blankMailingAddress
    const mailingAddress = this.props.physicalMailingSimilar !== undefined ? this.props.physicalMailingSimilar : ''
    const hiddenMailingSameAsPhysical = mailingAddress.toString() === 'false' ? 'show' : 'hidden'
    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <CommonAddressFields
              suggestions={this.state.suggestions}
              addressTitle='Physical Address'
              id='street_address'
              addressType={physicalAddressType}
              addressFields={physicalAddressFields}
              stateTypes={this.props.stateTypes}
              onChange={(fieldId, event) => this.onAddressChange(physicalAddressType, fieldId, event)}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
              onSuggestionSelected={(event, object) => this.onSuggestionSelected(event, object, physicalAddressType)} />

            <DropDownField gridClassName='col-md-6' selectClassName='reusable-select' id='mailing_similar'
              value={mailingAddress}
              text={this.props.physicalMailingSimilar}
              optionList={yesNo.items}
              label='Mailing address the same as Physical Address?'
              onChange={(event) => this.props.setParentState('physical_mailing_similar', event.target.selectedOptions[0].value)} />
            <div className={hiddenMailingSameAsPhysical}>
              <CommonAddressFields
                suggestions={this.state.suggestions}
                addressTitle='Mailing Address'
                id='street_address'
                addressType={mailingAddressType}
                addressFields={mailingAddressFields}
                onSelection={this.onSelection.bind(this)}
                stateTypes={this.props.stateTypes}
                onChange={(fieldId, event) => this.onAddressChange(mailingAddressType, fieldId, event)}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                onSuggestionSelected={(event, object) => this.onSuggestionSelected(event, object, mailingAddressType)} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
