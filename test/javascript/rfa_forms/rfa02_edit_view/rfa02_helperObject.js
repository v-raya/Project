export const rfa02HelperObject = Object.freeze({
  'id': -1,
  'tracking_id': -1,
  'county_or_agency': '',
  'people': [
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
  ]
})
