import React from 'react'
import Immutable from 'immutable'
import CriminalBackgroudDocument from 'rfa_forms/rfa02_edit_view/criminalBackgroudDocument.js'
import {mount} from 'enzyme'

describe('RFA 02 test Criminal background Page', () => {
  let criminalBackgroudComp, setStateSpy, setParentStateSpy, criminalBackgroudWithProps, handleHrefClickSpy
  beforeEach(() => {
    setStateSpy = jasmine.createSpy('setState')
    handleHrefClickSpy = jasmine.createSpy('handleHrefClick')
    const props = {
      editMode: true,
      setState: setStateSpy,
      handleHrefClick: handleHrefClickSpy,
      people: Immutable.fromJS([
        {
          'person_id': -1,
          'person_name': 'Chris Cambell',
          'person_type': 'Applicant',
          'background_check': {
            'emergency_placement_only': {
              'is_emergency': true,
              'items': [
                {
                  'title': 'CLETS',
                  'date': '',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'CACI',
                  'date': '',
                  'notes': '',
                  'checked': false
                }
              ]
            },
            'live_scan': {
              'items': [
                {
                  'title': 'DOJ',
                  'date_submitted': '',
                  'date_received': '',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'FBI',
                  'date_submitted': '',
                  'date_received': '',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'CACI',
                  'date_submitted': '',
                  'date_received': '',
                  'notes': '',
                  'checked': false
                }
              ]
            },
            'other_resources': {
              'items': [
                {
                  'title': "Megan's Law Check",
                  'date': '',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'LAARS',
                  'date': '',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'AARS',
                  'date': '',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'LIS Check',
                  'date': '',
                  'notes': '',
                  'checked': false
                },
                {
                  'title': 'DMV',
                  'date': '',
                  'notes': '',
                  'checked': false
                }
              ]
            },
            'inter_county_transfer': {
              'items': [
                {
                  'title': 'Effective date Approved by DOJ',
                  'date': '',
                  'notes': '',
                  'checked': false
                }
              ]
            },
            'exemptions': {
              'is_requested': true,
              'date': '',
              'notes': '',
              'approval': {
                'is_approved': true,
                'date': '',
                'notes': ''
              }
            },
            'out_of_state_registry_checklist': {
              'state_registries': [
                {
                  'state': {
                    'value': 'Arizona',
                    'id': 'AZ'
                  },
                  'is_registry_maintained_by_state': true,
                  'registry_info': {
                    'items': [
                      {
                        'title': 'Requested Arizona State info',
                        'date': '',
                        'notes': '',
                        'checked': false
                      },
                      {
                        'title': 'Received Arizona State info',
                        'date': '',
                        'notes': '',
                        'checked': false
                      }
                    ],
                    'is_cleared': true,
                    'date': '',
                    'notes': ''
                  }
                },
                {
                  'state': {
                    'value': 'Nevada',
                    'id': 'NV'
                  },
                  'is_registry_maintained_by_state': false
                }
              ]
            }
          }
        }
      ])
    }

    setParentStateSpy = spyOn(CriminalBackgroudDocument.prototype, 'setParentState').and.callThrough()
    criminalBackgroudComp = mount(<CriminalBackgroudDocument />)
    criminalBackgroudWithProps = mount(<CriminalBackgroudDocument {...props} />)
  })
  it('render with default props', () => {
    expect(criminalBackgroudComp.length).toBe(1)
    expect(criminalBackgroudComp.props().people.length).toBe(0)
  })
  it('render with props', () => {
    expect(criminalBackgroudWithProps.props().people.size).toBe(1)
  })
  it('setParentState to be called', () => {
    const emergencyPlacementSelect = criminalBackgroudWithProps.find('#emergencyPlacement0false').hostNodes()
    emergencyPlacementSelect.simulate('change', {target: {value: 'false'}})
    expect(setParentStateSpy).toHaveBeenCalled()
  })
})
