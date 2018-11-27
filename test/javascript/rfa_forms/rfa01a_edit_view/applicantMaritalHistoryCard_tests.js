import React from 'react'
import ApplicantMaritalHistoryCard from 'rfa_forms/rfa01a_edit_view/applicantMaritalHistoryCard'
import AdultChildrenFields from 'rfa_forms/rfa01a_edit_view/adultChildrenFields'
import {shallow, mount} from 'enzyme'
import {relationshipTypes, suffixTypes, prefixTypes, nameTypes, stateTypes, marriageTerminationReasons, relationshipToApplicantTypes} from '../../helpers/constants'
import Validator from 'helpers/validator.js'

describe('applicant Marital History Card', () => {
  let applicantHistoryComponent, setParentStateSpy,
    applicantMaritalHistory, applicantHistoryComponentMount
  const applicants = [
    {
      first_name: 'My',
      last_name: 'Name',
      middle_name: 'Middle',
      applicant_id: '1'
    }
  ]

  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    applicantHistoryComponent = shallow(<ApplicantMaritalHistoryCard
      index={0}
      idPrefix=''
      applicants={applicants}
      maritalHistory={[]}
      stateTypes={stateTypes.items}
      prefixTypes={prefixTypes.items}
      suffixTypes={suffixTypes.items}
      nameTypes={nameTypes.items}
      marriageTerminationReasons={''}
      changeMaritalHistory={setParentStateSpy}
      setParentState={setParentStateSpy}
      validator={new Validator({})}
    />)
  })
  it('verify component load', () => {
    expect(applicantHistoryComponent.length).toBe(1)
  })
  it('change applicant dropdown', () => {
    const applicantSelected = applicantHistoryComponent.find('#applicant_id')
    applicantSelected.simulate('change', {target: {options: {'1': {id: '1', value: 'My Middle Name'}, selectedIndex: 1}}})
    expect(setParentStateSpy).toHaveBeenCalledWith('applicant_name', 'My Middle Name', 0)
  })
  it('change relationship type dropdown', () => {
    const applicantSelected = applicantHistoryComponent.find('#relationship_type')
    applicantSelected.simulate('change', {target: {options: {'1': {id: '1', value: 'My Middle Name'}, selectedIndex: 1}}})
    expect(setParentStateSpy).toHaveBeenCalledWith('relationship_type', Object({ id: 'My Middle Name', value: undefined }), 0)
  })

  it('change relationship termination dropdown', () => {
    const applicantSelected = applicantHistoryComponent.find('#relationship_termination')
    applicantSelected.simulate('change', {target: {options: {'1': {id: '1', value: 'My Middle Name'}, selectedIndex: 1}}})
    expect(setParentStateSpy).toHaveBeenCalledWith('marriage_termination_reason', Object({ id: 'My Middle Name', value: undefined }), 0)
  })
})
