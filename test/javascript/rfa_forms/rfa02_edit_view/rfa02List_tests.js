import React from 'react'
import Rfa02EditView from 'rfa_forms/rfa02_edit_view'
import {shallow, mount} from 'enzyme'

describe('Rfa02EditView Page test', () => {
  let saveProgressSpy, editProgressSpy, cancelProgressSpy, rfa02ListView
  beforeEach(() => {
    const props = {
      tracking: {
        id: 12,
        rfa_1a_id: 121
      },
      rfa02: {
        'id': 525,
        'tracking_id': 50,
        'county_or_agency': 'string',
        'people': [
          {
            'person_id': 744,
            'person_name': 'string',
            'person_type': 'string',
            'background_check': {
              'emergency_placement_only': {
                'is_emergency': false,
                'items': [
                  {
                    'title': 'string',
                    'date': '2000-01-01',
                    'notes': 'string',
                    'checked': false
                  }
                ]
              },
              'live_scan': {
                'items': [
                  {
                    'title': 'string',
                    'date_submitted': '2000-01-01',
                    'date_received': '2000-01-01',
                    'notes': 'string',
                    'checked': false
                  }
                ]
              },
              'other_resources': {
                'items': [
                  {
                    'title': 'string',
                    'date': '2000-01-01',
                    'notes': 'string',
                    'checked': false
                  }
                ]
              },
              'inter_county_transfer': {
                'items': [
                  {
                    'title': 'string',
                    'date': '2000-01-01',
                    'notes': 'string',
                    'checked': false
                  }
                ]
              },
              'exemptions': {
                'is_requested': false,
                'date': '2000-01-01',
                'notes': 'string',
                'approval': {
                  'is_approved': false,
                  'date': '2000-01-01',
                  'notes': 'string'
                }
              },
              'out_of_state_registry_checklist': {
                'state_registries': [
                  {
                    'state': {
                      'value': 'string',
                      'id': 'string'
                    },
                    'is_registry_maintained_by_state': false,
                    'registry_info': {
                      'is_cleared': false,
                      'date': '2000-01-01',
                      'notes': 'string',
                      'items': [
                        {
                          'title': 'string',
                          'date': '2000-01-01',
                          'notes': 'string',
                          'checked': false
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
    saveProgressSpy = spyOn(Rfa02EditView.prototype, 'saveProgress').and.callThrough()
    editProgressSpy = spyOn(Rfa02EditView.prototype, 'editProgress').and.callThrough()
    cancelProgressSpy = spyOn(Rfa02EditView.prototype, 'cancelProgress').and.callThrough()
    rfa02ListView = mount(<Rfa02EditView {...props} />)
  })

  it('tests rfa02 List View renders page', () => {
    expect(rfa02ListView.length).toEqual(1)
  })

  it('tests save', () => {
    const editProgressBtn = rfa02ListView.find('#editTracking').hostNodes()
    editProgressBtn.simulate('click')
    const saveProgressBtn = rfa02ListView.find('#saveTracking').hostNodes()
    saveProgressBtn.simulate('click')
    expect(saveProgressSpy).toHaveBeenCalled()
  })

  it('test cancel', () => {
    const editProgressBtn = rfa02ListView.find('#editTracking').hostNodes()
    editProgressBtn.simulate('click')
    const cancelProgressLink = rfa02ListView.find('#CancelTracking').hostNodes()
    cancelProgressLink.simulate('click')
    expect(cancelProgressSpy).toHaveBeenCalled()
  })

  it('tests Edit', () => {
    let editProgressBtn = rfa02ListView.find('#editTracking').hostNodes()
    editProgressBtn.simulate('click')
    const cancelProgressLink = rfa02ListView.find('#CancelTracking').hostNodes()
    cancelProgressLink.simulate('click')
    editProgressBtn = rfa02ListView.find('#editTracking').hostNodes()
    editProgressBtn.simulate('click')
    expect(editProgressSpy).toHaveBeenCalled()
  })
})
