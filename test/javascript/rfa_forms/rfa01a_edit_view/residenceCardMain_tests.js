import React from 'react'
import ResidenceCards from 'rfa_forms/rfa01a_edit_view/residenceCardsMain.jsx'
import {mount} from 'enzyme'
import {stateTypes, languageTypes, residenceTypes} from '../../helpers/constants'

describe('Verify Residence main', function () {
  const blankResidenceFields = Object.freeze({
    residence_ownership: {
      'id': 0,
      'value': 'Own'
    },
    physical_mailing_similar: true,
    weapon_in_home: '',
    body_of_water_exist: '',
    body_of_water_description: '',
    others_using_residence_as_mailing: '',
    directions_to_home: '',
    home_languages: ''
  })

  let setParentStateSpy, componentMount, setFocusStateSpy

  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    let setResidenceStateSpy = jasmine.createSpy('setResidenceState')
    let getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')
    setFocusStateSpy = jasmine.createSpy('setFocusState')

    componentMount = mount(<ResidenceCards residence={blankResidenceFields}
      stateTypes={stateTypes.items}
      languageTypes={languageTypes.items}
      setFocusState={setFocusStateSpy}
      getFocusClassName={getFocusClassNameSpy}
      residenceTypes={residenceTypes.items}
    />)
  })
  describe('Verify minor card Component View', () => {
    it('verify on click address card', () => {
      let relationShipField = componentMount.find('#residentAddress')
      relationShipField.simulate('click')
      expect(setFocusStateSpy).toHaveBeenCalledWith('residentAddress')
    })

    it('verify on about the residence card', () => {
      let relationShipField = componentMount.find('#aboutResidence')
      relationShipField.simulate('click')
      expect(setFocusStateSpy).toHaveBeenCalledWith('aboutResidence')
    })
  })
})
