import React from 'react'
import {shallow, mount} from 'enzyme'
import B01SideBar from 'rfa_forms/rfa_sidebar/b01SideBar'

describe('RFA 01b side bar ', () => {
  let component, applicants, otherAdults, applicationId
  let isNavLinkActiveSpy = jasmine.createSpy('isNavLinkActive')
  let handleNavLinkClickSpy = jasmine.createSpy('handleNavLinkClick')
  applicationId = 88
  applicants = [
    {
      'id': 643,
      'first_name': 'f',
      'middle_name': 'l',
      'last_name': 'n',
      'other_names': [],
      'driver_license_number': '',
      'email': '',
      'rfa1b_form': {
        'id': 91
      }
    },
    {
      'id': 694,
      'first_name': 'person',
      'middle_name': '',
      'last_name': 'two',
      'other_names': [],
      'driver_license_number': '',
      'email': ''
    }
  ]
  otherAdults = [
    {
      'id': 171,
      'first_name': 'persona',
      'last_name': 'one',
      'relationship_to_applicants': [
        {}
      ],
      'rfa1b_form': {
        'id': 101
      }
    },
    {
      'id': 172,
      'first_name': 'persona',
      'last_name': 'two',
      'date_of_birth': '1111-11-11',
      'relationship_to_applicants': [
        {
          'applicant_id': 643,
          'relationship_to_applicant': {
            'value': 'Child',
            'id': 1
          }
        }
      ]
    }
  ]

  beforeEach(() => {
    component = mount(<B01SideBar
      applicants={applicants}
      otherAdults={otherAdults}
      rfa01aApplicationId={applicationId}
      isNavLinkActive={isNavLinkActiveSpy}
      handleNavLinkClick={handleNavLinkClickSpy}
    />)
  })

  it('renders the div wrapper', () => {
    expect(component.find('div').exists()).toBe(true)
  })

  it('renders a link to the card', () => {
    expect(component.find('NavLink[text="f n"]').props().href)
      .toBe('/rfa/b01/91/edit?application_id=88')
  })
  it('clicks the link and updates link', () => {
    component.find('Link[text="f n"]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith(91)
  })

  it('renders a link to the card', () => {
    expect(component.find('NavLink[text="person two"]').props().href)
      .toBe('/rfa/b01/?application_id=88&adult_id=694&api_url_path=applicants')
  })
  it('clicks the link and updates link', () => {
    component.find('Link[text="person two"]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith(694)
  })

  it('renders a link to the card', () => {
    expect(component.find('NavLink[text="persona one"]').props().href)
      .toBe('/rfa/b01/101/edit?application_id=88')
  })
  it('clicks the link and updates link', () => {
    component.find('Link[text="persona one"]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith(91)
  })

  it('renders a link to the card', () => {
    expect(component.find('NavLink[text="persona two"]').props().href)
      .toBe('/rfa/b01/?application_id=88&adult_id=172&api_url_path=other-adults')
  })
  it('clicks the link and updates link', () => {
    component.find('Link[text="persona two"]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith(694)
  })
})
