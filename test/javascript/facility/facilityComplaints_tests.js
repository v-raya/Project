import React from 'react'
import FacilityComplaints from 'facility/facilityComplaints.jsx'
import {mount, shallow} from 'enzyme'

describe('Verify Complaints Component', () => {
  const props = {
    'complaints': [{
      'complaint_date': '09/27/2016',
      'assigned_worker': 'Harry Potter',
      'control_number': '19-CR-20160927081411',
      'priority_level': '2',
      'status': 'Approved',
      'approval_date': '12/10/2016',
      'allegations': [{
        'index_subcomponent': '1.',
        'type_code': '10 - Neglect/Lack of Supervision',
        'allegation': 'Personal Rights- Licensee/ Perpetrator was very hostile to Child #1 and grabbed her in the inner part of her left arm.',
        'resolution_type_description': 'Unsubstantiated'
      },
      {
        'index_subcomponent': '2.',
        'type_code': '3 - Neglect',
        'allegation': 'Staff Meena Desai marks clients Alexzena Webb and Dizirea Goodwin with a ballpoint pen while they are sleeping.',
        'resolution_type_description': 'Unsubstantiated'
      }
      ]
    }
    ],
    'isFetching': false,
    'match': {
      'params': {
        'id': 'SouUlov56F'
      }
    }
  }

  const facilityComplaintsApiCallSpy = jasmine.createSpy('facilityComplaintsApiCall')

  const renderComplaintsComp = shallow(
    <FacilityComplaints {...props} facilityComplaintsApiCall={facilityComplaintsApiCallSpy}
    />)
  it('check Complaints table', () => {
    expect(renderComplaintsComp.length).toBe(1)
  })
  it('Verify complaint date', () => {
    expect(renderComplaintsComp.find('.table').props().data[0].complaint_date).toBe('09/27/2016')
  })
  it('Verify assigned worker full name', () => {
    expect(renderComplaintsComp.find('.table').props().data[0].assigned_worker).toBe('Harry Potter')
  })
  it('Verify complaint control number', () => {
    expect(renderComplaintsComp.find('.table').props().data[0].control_number).toBe('19-CR-20160927081411')
  })
  it('Verify priority level', () => {
    expect(renderComplaintsComp.find('.table').props().data[0].priority_level).toBe('2')
  })
  it('Verify complaint status', () => {
    expect(renderComplaintsComp.find('.table').props().data[0].status).toBe('Approved')
  })
  it('Verify complaint approval date', () => {
    expect(renderComplaintsComp.find('.table').props().data[0].approval_date).toBe('12/10/2016')
  })
  it('Verify allegation index value', () => {
    expect(renderComplaintsComp.find('.table').props().data[0].allegations[0].index_subcomponent).toBe('1.')
  })
  it('Verify allegation complaint type code', () => {
    expect(renderComplaintsComp.find('.table').props().data[0].allegations[0].type_code).toBe('10 - Neglect/Lack of Supervision')
  })
  it('Verify allegation description ', () => {
    expect(renderComplaintsComp.find('.table').props().data[0].allegations[0].allegation).toBe('Personal Rights- Licensee/ Perpetrator was very hostile to Child #1 and grabbed her in the inner part of her left arm.')
  })
  it('Verify allegation resolution ', () => {
    expect(renderComplaintsComp.find('.table').props().data[0].allegations[0].resolution_type_description).toBe('Unsubstantiated')
  })
})
