import React from 'react'
import Immutable from 'immutable'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'
import {yesNo} from '../constants/constants'
import {dictionaryNilSelect} from '../helpers/commonHelper.jsx'

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
    let data = Immutable.fromJS(this.props.address || [blankAddressFields])
    let index = data.findIndex(x => x.get('type').get('value') === typeString)

    if (index === -1) {
      // data is immutable list, important to push blankaddress as immutable
      data = data.push(Immutable.fromJS(blankAddressFields))
      index = data.size - 1
    }

    data = data.update(index, x => x.set(key, value))
    this.props.setParentState('addresses', data.toJS())
  }

  render () {
    const hiddenMailingSameAsPhysical = this.props.physicalMailingSimilar === 'false' ? '' : 'hidden'
    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <InputComponent gridClassName='col-md-12' id='street_address'
              label='Physical Address:' placeholder=''
              onChange={(event) => this.onAddressChange(physicalAddressType, 'street_address', event.target.value)} />

            <InputComponent gridClassName='col-md-4' id='zip'
              label='Zip Code:' placeholder=''
              onChange={(event) => this.onAddressChange(physicalAddressType, 'zip', event.target.value)} />

            <InputComponent gridClassName='col-md-4' id='city'
              label='City:' placeholder=''
              onChange={(event) => this.onAddressChange(physicalAddressType, 'city', event.target.value)} />

            <DropDownField gridClassName='col-md-4' id='state'
              selectClassName='reusable-select'
              optionList={this.props.stateTypes}
              label='State'
              onChange={(event) => this.onAddressChange(physicalAddressType, 'state', dictionaryNilSelect(event.target.selectedOptions[0]))} />

            <DropDownField gridClassName='col-md-6' selectClassName='reusable-select'
              text={this.props.physicalMailingSimilar}
              optionList={yesNo.items}
              label='Mailing address the same as Physical Address?'
              onChange={(event) => this.props.setParentState('physical_mailing_similar', event.target.selectedOptions[0].value)} />

            <div className={hiddenMailingSameAsPhysical}>
              <InputComponent gridClassName='col-md-12' id='secondary_street_address'
                label='Mailing Address:' placeholder=''
                onChange={(event) => this.onAddressChange(mailingAddressType, 'street_address', event.target.value)} />

              <InputComponent gridClassName='col-md-4' id='secondary_zip'
                label='Zip Code:' placeholder=''
                onChange={(event) => this.onAddressChange(mailingAddressType, 'zip', event.target.value)} />

              <InputComponent gridClassName='col-md-4' id='secondary_city'
                label='City:' placeholder=''
                onChange={(event) => this.onAddressChange(mailingAddressType, 'city', event.target.value)} />

              <DropDownField gridClassName='col-md-4' id='secondary_state'
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
