import React from 'react'
import TrackingSideBar from 'rfa_forms/tracking/trackingSideBar'
import {shallow, mount} from 'enzyme'

describe('Tracking Page test', () => {
  let trackingSidebar, handleHrefClickSpy, facilityName, trackingDocuments
  beforeEach(() => {
    facilityName = 'Facility Name'
    trackingDocuments = {
      'facility_documents': {
        'family_documents': {
          'items': [
            {
              'title': 'RFA Application (RFA 01A)',
              'notes': '',
              'checked': false
            },
            {
              'title': 'Verification of Income',
              'notes': '',
              'checked': false
            },
            {
              'title': 'Disclosure of Expenses',
              'notes': '',
              'checked': false
            },
            {
              'title': 'Verification of Property',
              'notes': '',
              'checked': false
            },
            {
              'title': 'Home Environment Checklist (RFA-03)',
              'notes': '',
              'checked': false
            },
            {
              'title': 'Reference Letter #1',
              'notes': '',
              'checked': false
            },
            {
              'title': 'Reference Letter #2',
              'notes': '',
              'checked': false
            },
            {
              'title': 'Reference Letter #3 (if applicable)',
              'notes': '',
              'checked': false
            }
          ]
        },
        'tasks_and_trainings': {
          'items': [
            {
              'title': 'Attended Orientation Meeting',
              'notes': '',
              'checked': false
            },
            {
              'title': 'Risk Assessment',
              'notes': '',
              'checked': false
            },
            {
              'title': 'Home Environment Checklist (RFA-03)',
              'notes': '',
              'checked': false
            },
            {
              'title': 'Pre-Service Training',
              'notes': '',
              'checked': false
            }
          ]
        },
        'assessments': {
          'items': [
            {
              'title': 'Family Evaluation',
              'notes': '',
              'checked': false
            },
            {
              'title': 'Written Report',
              'notes': '',
              'checked': false
            },
            {
              'title': 'Acknowledgement of Written Report',
              'notes': '',
              'checked': false
            }
          ]
        }
      },
      'people_documents': [
        {
          'person_id': 4399,
          'person_name': '0one 0person',
          'person_type': 'Applicant',
          'person_documents': {
            'individual_documents': {
              'items': [
                {
                  'title': 'Criminal Record Statement (RFA-01B)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Health Questionnaire (RFA-07)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'TB Questionnaire (RFA-08)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Employment Verification',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Proof of Identity',
                  'notes': '',
                  'checked': false
                }
              ]
            },
            'trainings': {
              'items': [
                {
                  'title': 'CPR Training',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'First Aid Training',
                  'notes': '',
                  'checked': false
                }
              ]
            },
            'clearances': {
              'items': [
                {
                  'title': 'Criminal Background Checklist (RFA-02)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'DMV Reports',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Exemption Needed (if applicable)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Previous Associations (if applicable)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Legal Consult Needed (if applicable)',
                  'notes': '',
                  'checked': false
                }
              ]
            }
          }
        },
        {
          'person_id': 4400,
          'person_name': 'two 0one',
          'person_type': 'Applicant',
          'person_documents': {
            'individual_documents': {
              'items': [
                {
                  'title': 'Criminal Record Statement (RFA-01B)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Health Questionnaire (RFA-07)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'TB Questionnaire (RFA-08)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Employment Verification',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Proof of Identity',
                  'notes': '',
                  'checked': false
                }
              ]
            },
            'trainings': {
              'items': [
                {
                  'title': 'CPR Training',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'First Aid Training',
                  'notes': '',
                  'checked': false
                }
              ]
            },
            'clearances': {
              'items': [
                {
                  'title': 'Criminal Background Checklist (RFA-02)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'DMV Reports',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Exemption Needed (if applicable)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Previous Associations (if applicable)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Legal Consult Needed (if applicable)',
                  'notes': '',
                  'checked': false
                }
              ]
            }
          }
        },
        {
          'person_id': 1685,
          'person_name': 'residing adult',
          'person_type': 'Residing Adult',
          'person_documents': {
            'individual_documents': {
              'items': [
                {
                  'title': 'Criminal Record Statement (RFA-01B)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'TB Questionnaire (RFA-08)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'DMV Report',
                  'notes': '',
                  'checked': false
                }
              ]
            },
            'clearances': {
              'items': [
                {
                  'title': 'Criminal Background Checklist (RFA-02)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Previous Associations',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Exemption Needed (if applicable)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Legal Consult Needed (if applicable)',
                  'notes': '',
                  'checked': false
                }
              ]
            }
          }
        },
        {
          'person_id': 1686,
          'person_name': 'present adult',
          'person_type': 'Present Adult',
          'person_documents': {
            'individual_documents': {
              'items': [
                {
                  'title': 'Criminal Record Statement (RFA-01B)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'DMV Report (if applicable)',
                  'notes': '',
                  'checked': false
                }
              ]
            },
            'clearances': {
              'items': [
                {
                  'title': 'Criminal Background Checklist (RFA-02)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Previous Associations (if applicable)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Exemption Needed (if applicable)',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'Legal Consult Needed (if applicable)',
                  'notes': '',
                  'checked': false
                }
              ]
            }
          }
        }
      ]
    }
    handleHrefClickSpy = jasmine.createSpy('handleHrefClick')
    trackingSidebar = mount(
      <TrackingSideBar
        handleHrefClick={handleHrefClickSpy}
        facilityName={facilityName}
        tracking={trackingDocuments} />)
  })

  it('tests sidebar renders', () => {
    expect(trackingSidebar.length).toEqual(1)
  })
})
