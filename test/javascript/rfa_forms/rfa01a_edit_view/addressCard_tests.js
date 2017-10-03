import React from 'react'
import AddressCard from 'rfa_forms/rfa01a_edit_view/addressCard.js'
var TestUtils= require('react-dom/test-utils')
import {stateTypes, genderTypes} from './../../helpers/constants'
import {shallow, mount} from 'enzyme'


describe('Verify Physical Address', function () {
  const props = {
    stateTypes: { stateTypes
    }
  }
  const addressCard = TestUtils.createRenderer()
  const cardRendered = addressCard.render(<AddressCard {...props} />)

  it('verify Resident Address fields', function () {
    let addressClassName = cardRendered
    expect(addressClassName.props.className).toBe('card-body')
  })
})


describe('Verify Address card fields', function () {

  const physicalAddressFields = Object.freeze({
    street_address: 'gate way oaks',
    zip: '',
    city: '',
    state: null,
    type: {
      id: '1',
      value: 'Residential'
    }
  }
  )

  let setParentStateSpy, addressCardMount, addressCardComp, setonAddressChangeSpy, addresses
    beforeEach(() => {
      setParentStateSpy = jasmine.createSpy('setParentState')
      setonAddressChangeSpy =  jasmine.createSpy('')
      addressCardComp = shallow(<AddressCard
        setParentState={setParentStateSpy}
        genderTypes={genderTypes.items}
        stateTypes={stateTypes.items}
        addresses={addresses}
        physicalAddressFields={physicalAddressFields}
      />)
      addressCardMount = mount(<AddressCard
        setParentState={setParentStateSpy}
        genderTypes={genderTypes.items}
        stateTypes={stateTypes.items}
        addresses={addresses}
        physicalAddressFields={physicalAddressFields}
      />)
  })
  //TODO: should change headless browser from Phantom to Chrome
  // it('verify street address', () => {
  //   let relationShipField = addressCardMount.find('#physicalAddress')
  //   let autoFillField = relationShipField.find('input[type="text"]')
  //   relationShipField.simulate('change', {target: {value: 'gate way oaks'}})
  //   expect(setParentStateSpy).toHaveBeenCalledWith('addresses', [physicalAddressFields])
  // })
  //
  // it('verify on change street address ', () => {
  //   let relationShipField = addressCardMount.find('#physicalAddress')
  //   let autoFillField = relationShipField.find('input[type="text"]')
  //   relationShipField.simulate('change', {target: {value: 'gate way oaks'}})
  //   expect(setParentStateSpy).toHaveBeenCalledWith('addresses', [physicalAddressFields])
  // })
  it('verify zip', () => {
    let relationShipField = addressCardComp.find('#zip')
    spyOn(addressCardComp.instance(), 'onAddressChange').and.callThrough()
    relationShipField.simulate('change', {target: {value: '12345'}})
    expect(addressCardComp.instance().onAddressChange).toHaveBeenCalledWith('Residential',  'zip', '12345')
  })

  it('verify city', () => {
    let relationShipField = addressCardComp.find('#city')
    spyOn(addressCardComp.instance(), 'onAddressChange').and.callThrough()
    relationShipField.simulate('change', {target: {value: 'sacremento'}})
    expect(addressCardComp.instance().onAddressChange).toHaveBeenCalledWith('Residential',  'city', 'sacremento')
  })

  it('verify state', () => {
    let relationShipField = addressCardComp.find('#state')
    spyOn(addressCardComp.instance(), 'onAddressChange').and.callThrough()
    relationShipField.simulate('change',{target: {selectedOptions: [{value: '17', text: 'Illinois'}]}})
    expect(addressCardComp.instance().onAddressChange).toHaveBeenCalledWith('Residential',  'state', {id: '17', value: 'Illinois'})
  })
  it('verify on mailing street address ', () => {
    let relationShipField = addressCardComp.find('#secondary_street_address')
    spyOn(addressCardComp.instance(), 'onAddressChange').and.callThrough()
    relationShipField.simulate('change', {target: {value: 'gate way oaks'}})
    expect(addressCardComp.instance().onAddressChange).toHaveBeenCalledWith('Mailing',  'street_address', 'gate way oaks')
  })
  it('verify mailing zip', () => {
    let relationShipField = addressCardComp.find('#secondary_zip')
    spyOn(addressCardComp.instance(), 'onAddressChange').and.callThrough()
    relationShipField.simulate('change', {target: {value: '12345'}})
    expect(addressCardComp.instance().onAddressChange).toHaveBeenCalledWith('Mailing',  'zip', '12345')
  })

  it('verify mailing city', () => {
    let relationShipField = addressCardComp.find('#secondary_city')
    spyOn(addressCardComp.instance(), 'onAddressChange').and.callThrough()
    relationShipField.simulate('change', {target: {value: 'sacremento'}})
    expect(addressCardComp.instance().onAddressChange).toHaveBeenCalledWith('Mailing',  'city', 'sacremento')
  })

  it('verify mailing state', () => {
    let relationShipField = addressCardComp.find('#secondary_state')
    spyOn(addressCardComp.instance(), 'onAddressChange').and.callThrough()
    relationShipField.simulate('change',{target: {selectedOptions: [{value: '17', text: 'Illinois'}]}})
    expect(addressCardComp.instance().onAddressChange).toHaveBeenCalledWith('Mailing',  'state', {id: '17', value: 'Illinois'})
  })
})
