import React from 'react'
import DesiredChildCard from 'rfa_forms/rfa01c_edit_view/desiredChildCard'
import {genderTypes, schoolGrades, countyTypes, suffixTypes, stateTypes} from './../../helpers/constants'
import {shallow, mount} from 'enzyme'
import Validator from 'helpers/validator'
import {RfaCommon} from 'constants/rfaText'

describe('Verify RFA 01C child desired', () => {
  const applicants = [{
    id: 20,
    first_name: 'gdfghfhgv',
    last_name: 'hgbhg',
    middle_name: ''
  }]
  const childDesired = {
    id: 0,
    application_county: {
      value: '',
      id: 0
    },
    child_identified: true,
    child_in_home: true,
    identified_children: [
      {
        first_name: '',
        middle_name: '',
        last_name: '',
        name_suffix: {
          value: '',
          id: 0
        },
        date_of_birth: '',
        gender: {
          value: '',
          id: 0
        },
        county_of_jurisdiction: {
          value: '',
          id: 0
        },
        date_of_placement: '',
        relationship_to_applicants: [
          {
            applicant_id: '',
            relationship_to_applicant_freeform: '',
            relationship_to_applicant: {
              value: '',
              id: 0
            }
          }
        ],
        school_grade: {
          value: '',
          id: 0
        },
        school_name: '',
        school_address: {
          street_address: '',
          zip: '',
          city: '',
          state: {
            value: '',
            id: 0
          },
          type: {
            value: '',
            id: 0
          }
        }
      }
    ]
  }

  let setParentStateSpy, childCardComponent, onChangeSpy, childCardComp
  const validator = new Validator({})

  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    onChangeSpy = jasmine.createSpy('')
    childCardComp = mount(<DesiredChildCard
      applicants={applicants}
      idPrefix='childIdentifiedField'
      // desiredChildNew={identified_children[0]}
      desiredChild={childDesired.identified_children[0]}
      setParentState={setParentStateSpy}
      genderTypes={genderTypes.items}
      schoolGrades={schoolGrades.items}
      countyTypes={countyTypes.items}
      suffixTypes={suffixTypes.items}
      stateTypes={stateTypes.items}
      validator={validator}
    />)
  })

  it('verify Gender', () => {
    const relationField = childCardComp.find('#gender').hostNodes()
    relationField.simulate('change', {target: {options: {'2': {value: '2', text: 'Female'}, selectedIndex: 2}}})
    expect(setParentStateSpy).toHaveBeenCalledWith(0, 'gender', Object({ id: '2', value: 'Female' }))
  })

  it('verify county_of_juridiction', () => {
    const relationField = childCardComp.find('#county_of_juridiction').hostNodes()
    relationField.simulate('change', {target: {options: {'1': {value: '1', text: 'Alameda'}, selectedIndex: 1}}})
    expect(setParentStateSpy).toHaveBeenCalledWith(0, 'county_of_jurisdiction', Object({ id: '1', value: 'Alameda' }))
  })

  it('verify school_grade', () => {
    const relationField = childCardComp.find('#grade').hostNodes()
    relationField.simulate('change', {target: {options: {'1': {value: '1', text: 'TK'}, selectedIndex: 1}}})
    expect(setParentStateSpy).toHaveBeenCalledWith(0, 'school_grade', Object({ id: '1', value: 'TK' }))
  })

  it('verify name_of_school', () => {
    const relationField = childCardComp.find('#name_of_school').hostNodes()
    relationField.simulate('change', {target: {value: 'Text'}})
    expect(setParentStateSpy).toHaveBeenCalledWith(0, 'school_name', 'Text')
  })

  it('verify date of birth', () => {
    const relationField = childCardComp.find('#childIdentifiedFielddate_of_birth').hostNodes()
    relationField.simulate('change', {target: {value: '01/01/2000'}})
    expect(setParentStateSpy).toHaveBeenCalledWith(0, 'date_of_birth', '2000-01-01')
  })

  it('verify date of birth on blur', () => {
    const relationField = childCardComp.find('#childIdentifiedFielddate_of_birth').hostNodes()
    relationField.simulate('blur', {target: {value: ''}})
    expect(setParentStateSpy).toHaveBeenCalledWith(0, 'date_of_birth', '')
  })

  it('verify date of placement on change', () => {
    const relationField = childCardComp.find('#childIdentifiedFielddate_of_placement').hostNodes()
    relationField.simulate('change', {target: {value: '01/01/2000'}})
    expect(setParentStateSpy).toHaveBeenCalledWith(0, 'date_of_placement', '2000-01-01')
  })

  it('verify date of placement on blur', () => {
    const relationField = childCardComp.find('#childIdentifiedFielddate_of_placement').hostNodes()
    relationField.simulate('blur', {target: {value: ''}})
    expect(setParentStateSpy).toHaveBeenCalledWith(0, 'date_of_placement', '')
  })

  it('verify relationship to applicant on change', () => {
    const relationField = childCardComp.find('#relationship_to_applicant0child0').hostNodes()
    relationField.simulate('change', {target: {value: 'test'}})
    expect(setParentStateSpy).toHaveBeenCalledWith(0, 'relationship_to_applicants',
      [{applicant_id: 20, relationship_to_applicant_freeform: 'test', relationship_to_applicant: {value: '', id: 0}}])
  })

  it('verify required fields labels', () => {
    const componentHtml = childCardComp.html()
    expect(componentHtml).toContain(`Is the child currently in your home?${RfaCommon.requiredIndicator}`)
    expect(childCardComp.find('[htmlFor="childIdentifiedFielddate_of_birth"]').html()).toContain(`Date of Birth${RfaCommon.requiredIndicator}`)
    expect(childCardComp.find('[htmlFor="childIdentifiedFieldfirst_name"]').html()).toContain(`First Name${RfaCommon.requiredIndicator}`)
    expect(childCardComp.find('[htmlFor="childIdentifiedFieldlast_name"]').html()).toContain(`Last Name${RfaCommon.requiredIndicator}`)
  })

  describe('Address component mount', () => {
    beforeEach(() => {
      childCardComponent = mount(<DesiredChildCard
        index={1}
        desiredChild={childDesired.identified_children[0]}
        setParentState={setParentStateSpy}
        genderTypes={genderTypes.items}
        schoolGrades={schoolGrades.items}
        countyTypes={countyTypes.items}
        suffixTypes={suffixTypes.items}
        stateTypes={stateTypes.items}
        validator={validator}
      />)
    })
    it('verify street address change', () => {
      const streetAddressField = childCardComponent.find('#Residentialstreet_address').hostNodes()
      streetAddressField.simulate('change', {target: {value: '2870 Gateway Oaks Dr'}})
      const addressObj = childDesired.identified_children[0].school_address
      addressObj.street_address = '2870 Gateway Oaks Dr'
      expect(setParentStateSpy).toHaveBeenCalledWith(1, 'school_address', addressObj)
    })

    it('verifies component did unmount', () => {
      const instance = childCardComp.instance()
      expect(instance.props.validator.validations.size).toEqual(8)
      childCardComp.unmount()
      expect(instance.props.validator.validations.size).toEqual(4)
    })
  })
})
