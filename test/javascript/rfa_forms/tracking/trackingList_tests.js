import React from 'react'
import TrackingList from 'rfa_forms/tracking'
import {shallow, mount} from 'enzyme'

describe('Rfa01CEditView test', () => {
  let trackingListView, saveProgressSpy, editProgressSpy, trackingListViewNoProps

  beforeEach(() => {
    const props = {
      user: {county_code: 1},
      tracking: {
        'id': 10,
        'create_user_id': '0X5',
        'create_date_time': '2018-06-05 16:12:14',
        'update_user_id': '0X5',
        'update_date_time': '2018-06-05 16:12:14',
        'facility_name': '',
        'rfa_1a_id': 744,
        'tracking_documents': {
          'people_documents': [ ],
          'facility_documents': {
            'assessments': {
              'items': [ {
                'notes': '',
                'title': 'Family Evaluation',
                'checked': false,
                'approved_date': '',
                'submitted_date': ''
              }, {
                'notes': '',
                'title': 'Written Report',
                'checked': false,
                'approved_date': '',
                'submitted_date': ''
              }, {
                'notes': '',
                'title': 'Acknowledgement of Written Report',
                'checked': false,
                'approved_date': '',
                'submitted_date': ''
              } ]
            },
            'family_documents': {
              'items': [ {
                'notes': '',
                'title': 'RFA Application (RFA 01A)',
                'checked': false,
                'received_date': ''
              }, {
                'notes': '',
                'title': 'Verification of Income',
                'checked': false,
                'received_date': ''
              }, {
                'notes': '',
                'title': 'Disclosure of Expenses',
                'checked': false,
                'received_date': ''
              }, {
                'notes': '',
                'title': 'Verification of Property',
                'checked': false,
                'received_date': ''
              }, {
                'notes': '',
                'title': 'Home Environment Checklist (RFA-03)',
                'checked': false,
                'received_date': ''
              }, {
                'notes': '',
                'title': 'Reference Letter #1',
                'checked': false,
                'received_date': ''
              }, {
                'notes': '',
                'title': 'Reference Letter #2',
                'checked': false,
                'received_date': ''
              }, {
                'notes': '',
                'title': 'Reference Letter #3 (if applicable)',
                'checked': false,
                'received_date': ''
              } ]
            },
            'tasks_and_trainings': {
              'items': [ {
                'notes': '',
                'title': 'Attended Orientation Meeting',
                'checked': false,
                'completed_date': ''
              }, {
                'notes': '',
                'title': 'Risk Assessment',
                'checked': false,
                'completed_date': ''
              }, {
                'notes': '',
                'title': 'Home Environment Checklist (RFA-03)',
                'checked': false,
                'completed_date': ''
              }, {
                'notes': '',
                'title': 'Pre-Service Training',
                'checked': false,
                'completed_date': ''
              } ]
            }
          }
        }
      },
      rfa_application: {
        'id': 744,
        'tracking_id': 10,
        application_county: {
          value: 'Los Angeles',
          'id': 19
        },
        'residence': {
          'addresses': [
            {
              'street_address': '4220 Ardwell Way',
              'zip': '95823',
              'city': 'Sacramento',
              'state': {
                'value': 'California',
                'id': 'CA'
              },
              'type': {
                'value': 'Residential',
                'id': 1
              }
            },
            {
              'street_address': '',
              'zip': '',
              'city': '',
              'type': {
                'value': 'Mailing',
                'id': 3
              }
            }
          ],
          'physical_mailing_similar': true,
          'residence_ownership': {
            'value': 'Own',
            'id': 1
          },
          'weapon_in_home': true,
          'body_of_water_exist': false,
          'body_of_water_description': '',
          'others_using_residence_as_mailing': false,
          'directions_to_home': '',
          'home_languages': [
            {
              'value': 'American Sign Language',
              'id': 1
            }
          ]
        },
        'applicants': [
          {
            'id': 396,
            'first_name': 'lkj',
            'middle_name': '',
            'last_name': 'lj',
            'other_names': [],
            'date_of_birth': '1111-11-11',
            'driver_license_number': '',
            'email': '',
            'phones': [
              {
                'phone_type': {
                  'value': 'Home',
                  'id': 2
                },
                'number': '1111111111',
                'preferred': false
              }
            ]
          }
        ],
        'child_desired': {
          'child_identified': true,
          'child_in_home': false,
          'preferred_ages': []
        },
        'is_initial_application': false,
        metadata: {submit_enabled: true}
      }
    }
    saveProgressSpy = spyOn(TrackingList.prototype, 'saveProgress').and.callThrough()
    editProgressSpy = spyOn(TrackingList.prototype, 'editProgress').and.callThrough()
    trackingListView = mount(<TrackingList {...props} />)
    trackingListViewNoProps = mount(<TrackingList />)
  })

  it('tests tracking List View renders page', () => {
    expect(trackingListView.length).toEqual(1)
  })

  it('tests save', () => {
    let saveProgressBtn = trackingListView.find('#saveProgress')
    saveProgressBtn.simulate('click')
    expect(saveProgressSpy).toHaveBeenCalled()
  })

  it('tests Edit', () => {
    let editProgressBtn = trackingListView.find('#editProgress')
    editProgressBtn.simulate('click')
    expect(editProgressSpy).toHaveBeenCalled()
  })

  it('tests save with no props', () => {
    let saveProgressBtn = trackingListViewNoProps.find('#saveProgress')
    saveProgressBtn.simulate('click')
    expect(saveProgressSpy).toHaveBeenCalled()
  })
})
