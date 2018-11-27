import React from 'react'
import {shallow, mount} from 'enzyme'
import DesiredChildCardGroup from 'rfa_forms/rfa01c_edit_view/desiredChildCardGroup'
import {schoolGrades, countyTypes, suffixTypes, genderTypes, stateTypes} from './../../helpers/constants'
import Validator from 'helpers/validator'

describe('Verify Child Desired Comp', () => {
  let childDesiredComp, setParentStateSpy, getFocusClassNameSpy, setFocusStateSpy
  const validator = new Validator({})
  const applicants = [{
    id: 20,
    first_name: 'gdfghfhgv',
    last_name: 'hgbhg',
    middle_name: ''
  }]
  const identifiedChildren = Object.freeze({
    first_name: '',
    middle_name: '',
    last_name: '',
    name_suffix: null,
    date_of_birth: '',
    gender: null,
    county_of_jurisdiction: null,
    date_of_placement: '',
    relationship_to_applicants: [
      {
        applicant_id: '',
        relationship_to_applicant: null
      }
    ],
    school_grade: null,
    school_name: '',
    school_address: {
      street_address: '',
      zip: '',
      city: '',
      state: null,
      type: {
        value: 'Mailing',
        id: 3
      }
    }
  })
  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')
    setFocusStateSpy = jasmine.createSpy('setFocusState')

    childDesiredComp = mount(<DesiredChildCardGroup
      applicants={applicants}
      focusComponentName={'ChildDesiredMain'}
      identifiedChildren={[identifiedChildren, identifiedChildren]}
      desiredChild={identifiedChildren}
      getFocusClassName={getFocusClassNameSpy}
      setFocusState={setFocusStateSpy}
      setParentState={setParentStateSpy}
      countyTypes={countyTypes.items}
      schoolGrades={schoolGrades.items}
      genderTypes={genderTypes.items}
      suffixTypes={suffixTypes.items}
      stateTypes={stateTypes.items}
      validator={validator}
    />)
  })

  it('verify component load', () => {
    expect(childDesiredComp.length).toBe(1)
  })

  it('verify focus component', () => {
    const cardComponent = childDesiredComp.find('#DesiredChildSection').hostNodes()
    cardComponent.simulate('click')
    expect(setFocusStateSpy).toHaveBeenCalledWith('ChildDesiredMain')
  })

  it('adds a card', () => {
    spyOn(childDesiredComp.instance(), 'addCard').and.callThrough()
    childDesiredComp.instance().addCard()
    expect(childDesiredComp.instance().addCard).toHaveBeenCalled()
  })

  it('verify relationship to applicant Id value after component render', () => {
    const relationField = childDesiredComp.find('#relationship_to_applicant1child0').hostNodes()
    expect(relationField.length).toBe(1)
  })

  it('verify relationship to applicant on change', () => {
    const relationField = childDesiredComp.find('#relationship_to_applicant1child0').hostNodes()
    relationField.simulate('change', {target: {value: 'test'}})
    expect(setParentStateSpy).toHaveBeenCalledWith('identified_children', [ { gender: null,
      name_suffix: null,
      date_of_birth: '',
      school_address: { street_address: '', zip: '', city: '', state: null, type: { value: 'Mailing', id: 3 } },
      school_grade: null,
      relationship_to_applicants: [ { applicant_id: '', relationship_to_applicant: null } ],
      date_of_placement: '',
      last_name: '',
      county_of_jurisdiction: null,
      middle_name: '',
      school_name: '',
      first_name: '' },
    { gender: null,
      name_suffix: null,
      date_of_birth: '',
      school_address: { street_address: '', zip: '', city: '', state: null, type: { value: 'Mailing', id: 3 } },
      school_grade: null,
      relationship_to_applicants: [ { applicant_id: 20, relationship_to_applicant: null, relationship_to_applicant_freeform: 'test' } ],
      date_of_placement: '',
      last_name: '',
      county_of_jurisdiction: null,
      middle_name: '',
      school_name: '',
      first_name: '' } ])
  })

  it('removes a card', () => {
    spyOn(childDesiredComp.instance(), 'clickClose').and.callThrough()
    childDesiredComp.instance().clickClose()
    expect(childDesiredComp.instance().clickClose).toHaveBeenCalled()
  })
})
