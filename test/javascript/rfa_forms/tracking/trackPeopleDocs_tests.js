import React from 'react'
import TrackPeopleDocs from 'rfa_forms/tracking/trackPeopleDocs.jsx'
import {shallow, mount} from 'enzyme'

describe('Tracking People Documents test', () => {
  let trackPeopleDocsView, props, handleHrefClickSpy, handleIndividualDocRowChangeSpy,
    handleTrainingsDocsChangeSpy, handleClearancesDocsChangeSpy, setApplicationStateSpy
  beforeEach(() => {
    const trackingDocuments = {

      'people_documents': [
        {
          'person_id': 3173,
          'person_name': 'Constantin Abshire',
          'person_type': 'Applicant',
          'person_documents': {
            'trainings': {
              'items': [
                {
                  'notes': '',
                  'title': 'CPR Training',
                  'checked': false
                },
                {
                  'notes': '',
                  'title': 'First Aid Training',
                  'checked': false
                }
              ]
            },
            'clearances': {
              'items': [
                {
                  'notes': '',
                  'title': 'Criminal Background Checklist (RFA-02)',
                  'checked': false
                },
                {
                  'notes': '',
                  'title': 'DMV Reports',
                  'checked': false
                },
                {
                  'notes': '',
                  'title': 'Exemption Needed (if applicable)',
                  'checked': false
                },
                {
                  'notes': '',
                  'title': 'Previous Associations (if applicable)',
                  'checked': false
                },
                {
                  'notes': '',
                  'title': 'Legal Consult Needed (if applicable)',
                  'checked': false
                }
              ]
            },
            'individual_documents': {
              'items': [
                {
                  'notes': '',
                  'title': 'Criminal Record Statement (RFA-01B)',
                  'checked': false
                },
                {
                  'notes': '',
                  'title': 'Health Questionnaire (RFA-07)',
                  'checked': false
                },
                {
                  'notes': '',
                  'title': 'TB Questionnaire (RFA-08)',
                  'checked': false
                },
                {
                  'notes': '',
                  'title': 'Employment Verification',
                  'checked': false
                },
                {
                  'notes': '',
                  'title': 'Proof of Identity',
                  'checked': false
                }
              ]
            }
          }
        }
      ]

    }

    handleIndividualDocRowChangeSpy = jasmine.createSpy('handleIndividualDocRowChange')
    handleTrainingsDocsChangeSpy = jasmine.createSpy('handleTrainingsDocsChange')
    handleClearancesDocsChangeSpy = jasmine.createSpy('handleClearancesDocsChange')
    setApplicationStateSpy = jasmine.createSpy('setParentState')
    handleHrefClickSpy = jasmine.createSpy('handleHrefClick')

    trackPeopleDocsView = mount(<TrackPeopleDocs
      trackingDocuments={trackingDocuments}
      editMode={false}
      setParentState={setApplicationStateSpy}
      handleHrefClick={handleHrefClickSpy}

    />)
  })

  it('load table', () => {
    expect(trackPeopleDocsView.length).toBe(1)
  })

  it('Edit individual doc row text area', () => {
    const textAreaField = trackPeopleDocsView.find('#individual0ShowText0')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    spyOn(trackPeopleDocsView.instance(), 'handleIndividualDocRowChange').and.callThrough()
    trackPeopleDocsView.instance().handleIndividualDocRowChange('notes', 'text input', 0, 0)
    expect(trackPeopleDocsView.instance().handleIndividualDocRowChange).toHaveBeenCalled()
  })
  it('Edit individual doc row start date field', () => {
    const textAreaField = trackPeopleDocsView.find('#individual0showStartDate0')
    textAreaField.simulate('change', {target: {value: '07-06-1989'}})
    spyOn(trackPeopleDocsView.instance(), 'handleIndividualDocRowChange').and.callThrough()
    trackPeopleDocsView.instance().handleIndividualDocRowChange('start_date', '07-06-1989', 0, 0)
    expect(trackPeopleDocsView.instance().handleIndividualDocRowChange).toHaveBeenCalled()
  })
  it('Edit individual doc row complete date field', () => {
    const textAreaField = trackPeopleDocsView.find('#individual0ShowApprovedDate0')
    textAreaField.simulate('change', {target: {value: '07-06-1989'}})
    spyOn(trackPeopleDocsView.instance(), 'handleIndividualDocRowChange').and.callThrough()
    trackPeopleDocsView.instance().handleIndividualDocRowChange('completed_date', '07-06-1989', 0, 0)
    expect(trackPeopleDocsView.instance().handleIndividualDocRowChange).toHaveBeenCalled()
  })

  it('Edit training doc row text area', () => {
    const textAreaField = trackPeopleDocsView.find('#training0ShowText0')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    spyOn(trackPeopleDocsView.instance(), 'handleTrainingsDocsChange').and.callThrough()
    trackPeopleDocsView.instance().handleTrainingsDocsChange('notes', 'text input', 0, 0)
    expect(trackPeopleDocsView.instance().handleTrainingsDocsChange).toHaveBeenCalled()
  })
  it('Edit training doc row expiration date field', () => {
    const textAreaField = trackPeopleDocsView.find('#training0ShowExpirationDate0')
    textAreaField.simulate('change', {target: {value: '07-06-1989'}})
    spyOn(trackPeopleDocsView.instance(), 'handleTrainingsDocsChange').and.callThrough()
    trackPeopleDocsView.instance().handleTrainingsDocsChange('expiration_date', '07-06-1989', 0, 0)
    expect(trackPeopleDocsView.instance().handleTrainingsDocsChange).toHaveBeenCalled()
  })

  it('Edit clearances doc row text area', () => {
    const textAreaField = trackPeopleDocsView.find('#clearanceShowText0')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    spyOn(trackPeopleDocsView.instance(), 'handleClearancesDocsChange').and.callThrough()
    trackPeopleDocsView.instance().handleClearancesDocsChange('notes', 'text input', 0, 0)
    expect(trackPeopleDocsView.instance().handleClearancesDocsChange).toHaveBeenCalled()
  })
  it('Edit clearances doc row start date field', () => {
    const textAreaField = trackPeopleDocsView.find('#clearance0ShowStartDate0')
    textAreaField.simulate('change', {target: {value: '07-06-1989'}})
    spyOn(trackPeopleDocsView.instance(), 'handleClearancesDocsChange').and.callThrough()
    trackPeopleDocsView.instance().handleClearancesDocsChange('start_date', '07-06-1989', 0, 0)
    expect(trackPeopleDocsView.instance().handleClearancesDocsChange).toHaveBeenCalled()
  })
  it('Edit clearances doc row complete date field', () => {
    const textAreaField = trackPeopleDocsView.find('#clearance0ShowCompleteDate0')
    textAreaField.simulate('change', {target: {value: '07-06-1989'}})
    spyOn(trackPeopleDocsView.instance(), 'handleClearancesDocsChange').and.callThrough()
    trackPeopleDocsView.instance().handleClearancesDocsChange('completed_date', '07-06-1989', 0, 0)
    expect(trackPeopleDocsView.instance().handleClearancesDocsChange).toHaveBeenCalled()
  })
})
