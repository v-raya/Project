import {
  getFacilityData,
  getFacilityChildren,
  getFacilityComplaints
} from 'selectors/facilityDataSelectors'
describe('facilityDataSelectors', () => {
  describe('getFacilityDataSelector', () => {
    it('should return undefined when passed in null', () => {
      const state = {
        facilityReducer: {
          facility: null
        }
      }
      expect(getFacilityData(state)).toEqual(undefined)
    })
    it('should return facility object', () => {
      const state = {
        facilityReducer: {
          facility: {
            'href': 'facilities/100000299',
            'id': '100000299',
            'type': {
              'id': '6',
              'value': 'Foster Family Home'
            },
            'name': 'Little Dreams Home',
            'licensee_name': 'Ananya Nandi',
            'license_type': 'A',
            'assigned_worker': {},
            'district_office': {
              'number': '19',
              'name': 'PACIFIC INLAND CR'
            },
            'license_number': '100000299',
            'status': {
              'id': '7',
              'value': 'APPLICATION WITHDRWN'
            },
            'county': {
              'id': '33',
              'value': 'RIVERSIDE'
            },
            'phones': [{
              'relation': 'primary',
              'type': 'Cell',
              'number': '9162990000'
            }],
            'addresses': [{
              'type': 'Residential',
              'address': {
                'street_address': '123 Main St.',
                'state': 'CA'
              }
            }, {
              'type': 'Mailing',
              'address': {
                'state': 'CA'
              }
            }],
            'facility_source': 'LIS'
          }
        }
      }
      expect(getFacilityData(state)).toEqual({
        addresses: {
          physicalStreetAddress: '123 Main St.,',
          physicalAddressCityZipState: ', CA ',
          mailingStreetAddress: 'N/A',
          mailingAddressCityZipState: ', CA '
        },
        assigned_worker: 'N/A',
        capacity: 'N/A',
        capacity_last_changed: 'N/A',
        county: 'RIVERSIDE',
        district_office: 'PACIFIC INLAND CR',
        last_visit_date: 'N/A',
        last_visit_reason: 'N/A',
        licensee_name: 'Ananya Nandi',
        license_number: '100000299',
        license_effective_date: 'N/A',
        name: 'Little Dreams Home',
        original_application_recieved_date: 'N/A',
        phones: {
          primaryPhoneNumber: '(916) 299-0000',
          alternativePhoneNumber: 'N/A'
        },
        type: 'Foster Family Home',
        status: 'APPLICATION WITHDRWN'
      })
    })
  })
  describe('getChildrenDataSelector', () => {
    it('should return undefined when passed in null', () => {
      const state = {
        facilityReducer: {
          facilityChildren: null
        }
      }
      expect(getFacilityChildren(state)).toEqual(null)
    })
    it('should return children array', () => {
      const state = {
        facilityReducer: {
          facilityChildren: {
            'children': [{
              'id': '2q6FdWU03k',
              'person': {
                'gender': 'M',
                'age': 29,
                'first_name': 'boy F',
                'last_name': 'Cavy',
                'date_of_birth': '1988-08-08'
              },
              'date_of_placement': '1998-08-04',
              'assigned_worker': {
                'first_name': 'Wayne',
                'last_name': 'Fehlberg'
              },
              'county_of_origin': 'Modoc',
              'display_client_id': '0161-3317-6329-8000232'
            }]
          }
        }
      }
      expect(getFacilityChildren(state)).toEqual({
        children: [{
          age: 29,
          assigned_worker: 'Wayne Fehlberg',
          county_of_origin: 'Modoc',
          date_of_birth: '08/08/1988',
          date_of_placement: '08/04/1998',
          display_client_id: '0161-3317-6329-8000232',
          first_name: 'boy F',
          gender: 'M',
          id: '2q6FdWU03k',
          last_name: 'Cavy'
        }]
      })
    })
  })
  describe('getComplaintsDataSelector', () => {
    it('should return undefined when passed in null', () => {
      const state = {
        facilityReducer: {
          facilityComplaints: null
        }
      }
      expect(getFacilityComplaints(state)).toEqual(null)
    })
    it('should return complaints array', () => {
      const state = {
        facilityReducer: {
          facilityComplaints: {
            'complaints': [{
              'id': '19-CR-195002-20041019105945',
              'complaint_date': '2004-10-19 00:00:00',
              'assigned_worker': 'Saritha Reddy',
              'control_number': '198952',
              'status': 'Approved',
              'pre_investigation_comments': 'PO Zamora not in today - contact made with Janice Featherston as described above.',
              'post_investigation_comments': 'Left message on her voicemail informing her of the outcome of the investigation.',
              'contact_summary': 'Assigned to LPA Jeffers.\r\nComplaint originally written on 10/15/04, under the wrong Olive Crest home.  LPA Jeffers re-wrote the complaint under the same control #.\r\n"10-day" visit completed 10/21/04.\r\nInterviews conducted with the 3 clients in placement at the time, with the staff alleged to be the perpetrator.',
              'followup_comments': 'None at this time.',
              'allegations': [{
                'complaint_code': '3',
                'allegation': 'Staff Meena Desai marks clients Alexzena Webb and Dizirea Goodwin with a ballpoint pen while they are sleeping.',
                'resolution_code_unsub': 'U'
              }]
            }]
          }
        }
      }
      expect(getFacilityComplaints(state)).toEqual({
        complaints: [{
          id: '19-CR-195002-20041019105945',
          approval_date: 'N/A',
          assigned_worker: 'Saritha Reddy',
          complaint_date: '10/19/2004',
          control_number: '198952',
          priority_level: undefined,
          status: 'Approved'
        }]
      })
    })
  })
})
