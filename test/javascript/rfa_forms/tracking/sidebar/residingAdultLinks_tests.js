import React from 'react'
import {shallow, mount} from 'enzyme'
import ResidingAdultLinks from 'rfa_forms/tracking/sidebar/residingAdultLinks'
import {RESIDING_PERSON_TYPE} from 'rfa_forms/tracking/trackingSideBar'

describe('RFA 01a tracking sidebar applicant links ', () => {
  let component, peopleDocs
  let isNavLinkActiveSpy = jasmine.createSpy('isNavLinkActive')
  let handleNavLinkClickSpy = jasmine.createSpy('handleHrefClick')
  beforeEach(() => {
    peopleDocs = [
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
    component = mount(<ResidingAdultLinks
      clickHandler={handleNavLinkClickSpy}
      hrefPrefix=''
      residingAdults={{adults: peopleDocs.filter(element =>
        element.person_type.indexOf(RESIDING_PERSON_TYPE) === 0),
      indexes: peopleDocs.reduce((a, e, i) => (e.person_type === RESIDING_PERSON_TYPE)
        ? a.concat(i) : a, [])}} />)
  })

  it('renders the div wrapper', () => {
    expect(component.length).toEqual(1)
  })

  it('renders a link to the Applicant Information card', () => {
    expect(component.find('NavLink[text="residing adult"]').props().href)
      .toBe('#ResidingAdult2-tracking-card')
  })
  it('clicks the link and updates link to the Applicant Information card', () => {
    component.find('Link[text="residing adult"]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith('#ResidingAdult2-tracking-card')
  })
})
