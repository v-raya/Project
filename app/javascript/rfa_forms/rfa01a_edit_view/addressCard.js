import React from 'react'
import Immutable from 'immutable'
import {InputComponent} from 'components/common/inputFields'
import {DropDownField} from 'components/common/dropDownField'
import AutoCompleter from 'components/common/autoCompleter.jsx'
import {yesNo} from 'constants/constants'
import {getDictionaryId, dictionaryNilSelect} from 'helpers/commonHelper.jsx'

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

    data = data.update(index, x => x.set(key, value))
    this.props.setParentState('addresses', data.toJS())
  }
  onSelection (autoFillData) {
    this.onAddressChange(physicalAddressType, 'city', autoFillData.city)
  }
  render () {
    const hasPhysicalAddressFields = this.props.addresses !== undefined && this.props.addresses.find(o => o.type.value === physicalAddressType)
    const physicalAddressFields = hasPhysicalAddressFields ? this.props.addresses.find(o => o.type.value === physicalAddressType) : blankPhysicalAddress
    const hasMailingAddressFields = this.props.addresses !== undefined && this.props.addresses.find(o => o.type.value === mailingAddressType)
    const mailingAddressFields = hasMailingAddressFields ? this.props.addresses.find(o => o.type.value === mailingAddressType) : blankMailingAddress
    const mailingAddress = this.props.physicalMailingSimilar !== undefined ? this.props.physicalMailingSimilar : ''
    const hiddenMailingSameAsPhysical = mailingAddress.toString() === 'false' ? '' : 'hidden'
    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <div className="col-md-12">
              <label>Physical Address:</label>
              <AutoCompleter gridClassName='col-md-12'
                url='/geoservice/'
                id='physicalAddress'
                fieldName='street_address'
                addressType={physicalAddressType}
                value = {physicalAddressFields.street_address}
                onSelection={this.onSelection.bind(this)}
                placeholder=''
                onChange={this.onAddressChange.bind(this)}/>
            </div>
            {/* <InputComponent gridClassName='col-md-12' id='street_address' */}
            {/* value = {physicalAddressFields.street_address} */}
            {/* label='Physical Address:' placeholder='' */}
            {/* onChange={(event) => this.onAddressChange(physicalAddressType, 'street_address', event.target.value)} /> */}
            <InputComponent gridClassName='col-md-4' id='zip'
              value = {physicalAddressFields.zip}
              label='Zip Code:' placeholder=''
              onChange={(event) => this.onAddressChange(physicalAddressType, 'zip', event.target.value)} />

            <InputComponent gridClassName='col-md-4' id='city'
              value = {physicalAddressFields.city}
              selectClassName='reusable-select'
              label='City:' placeholder=''
              onChange={(event) => this.onAddressChange(physicalAddressType, 'city', event.target.value)} />

            <DropDownField gridClassName='col-md-4' id='state'
              value = {getDictionaryId(physicalAddressFields.state)}
              selectClassName='reusable-select'
              optionList={this.props.stateTypes}
              label='State'
              onChange={(event) => this.onAddressChange(physicalAddressType, 'state', dictionaryNilSelect(event.target.selectedOptions[0]))} />

            <DropDownField gridClassName='col-md-6' selectClassName='reusable-select' id='mailing_similar'
              value = {mailingAddress}
              text={this.props.physicalMailingSimilar}
              optionList={yesNo.items}
              label='Mailing address the same as Physical Address?'
              onChange={(event) => this.props.setParentState('physical_mailing_similar', event.target.selectedOptions[0].value)} />
            <div className={hiddenMailingSameAsPhysical}>
              <InputComponent gridClassName='col-md-12' id='secondary_street_address'
                value = {mailingAddressFields.street_address}
                label='Mailing Address:' placeholder=''
                onChange={(event) => this.onAddressChange(mailingAddressType, 'street_address', event.target.value)} />

              <InputComponent gridClassName='col-md-4' id='secondary_zip'
                value = {mailingAddressFields.zip}
                label='Zip Code:' placeholder=''
                onChange={(event) => this.onAddressChange(mailingAddressType, 'zip', event.target.value)} />

              <InputComponent gridClassName='col-md-4' id='secondary_city'
                value = {mailingAddressFields.city}
                label='City:' placeholder=''
                onChange={(event) => this.onAddressChange(mailingAddressType, 'city', event.target.value)} />

              <DropDownField gridClassName='col-md-4' id='secondary_state'
                value = {getDictionaryId(mailingAddressFields.state)}
                selectClassName='reusable-select'
                optionList={this.props.stateTypes}
                label='State'
                onChange={(event) => this.onAddressChange(mailingAddressType, 'state', dictionaryNilSelect(event.target.selectedOptions[0]))} />
            </div>

          </form>
        </div>
      </div>
    )
  }
}
