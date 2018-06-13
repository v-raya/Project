import React from 'react'
import TrackPeopleDocs from 'rfa_forms/tracking/trackPeopleDocs.jsx'
import {shallow, mount} from 'enzyme'

describe('Tracking People Documents test', () => {
  let trackPeopleDocsView, props
  beforeEach(() => {
    props = {
      trackingDocuments: {
        'facility_documents': {
          'assessments': {
            'items': [ {
              'notes': '',
              'title': 'Family Evaluation',
              'checked': false,
              'approved_date': '',
              'submitted_date': ''
            }]
          },
          'family_documents': {
            'items': [ {
              'notes': '',
              'title': 'Reference Letter #1',
              'checked': false,
              'received_date': ''
            }]
          },
          'tasks_and_trainings': {
            'items': [ {
              'notes': '',
              'title': 'Attended Orientation Meeting',
              'checked': false,
              'completed_date': ''
            }]
          }
        }
      }
    }

    trackPeopleDocsView = shallow(<TrackPeopleDocs
      trackingDocuments={props.trackingDocuments}
    />)
  })

  it('load table', () => {
    expect(trackPeopleDocsView.length).toBe(1)
  })
})
