export const disclosureDefaults = Object.freeze({
  'offense': '',
  'offense_city': '',
  'offense_date': '',
  'when_offense_happen': '',
  'offense_details': ''
})
export const addressDefaults = Object.freeze({
  street_address: '',
  zip: '',
  city: '',
  state: null,
  type: null
})

export const userDefaults = Object.freeze({
  county_name: ''
})

export const phoneDefaults = Object.freeze({
  relation: '',
  type: '',
  number: ''
})

export const blankPhoneNumberFields = Object.freeze({
  number: '',
  phone_type: {id: 2, value: 'Home'},
  preferred: false
})

const facilityDataAddressDefaults = Object.freeze({
  physicalStreetAddress: '',
  physicalAddressCityZipState: '',
  mailingStreetAddress: '',
  mailingAddressCityZipState: ''
})

const facilityDataPhoneDefaults = Object.freeze({
  primaryPhoneNumber: '',
  alternativePhoneNumber: ''
})

export const facilityDetailsDefaults = Object.freeze({
  type: '',
  capacity: '',
  district_office: '',
  capacity_last_changed: '',
  license_number: '',
  status: '',
  license_effective_date: '',
  original_application_recieved_date: ''
})

export const facilityDataDefaults = Object.freeze({
  addresses: facilityDataAddressDefaults,
  phones: facilityDataPhoneDefaults,
  county: '',
  last_visit_date: '',
  last_visit_reason: ''
})

export const relationshipToApplicantDefaults = Object.freeze({
  applicant_id: '',
  applicant_name: '',
  relationship_to_applicant: null,
  relationship_to_applicant_freeform: ''
})

export const blankRelationshipBetweenApplicantsValues = Object.freeze({
  relationship_type: null,
  date_of_relationship: '',
  place_of_relationship_city: '',
  other_relationship: '',
  place_of_relationship_state: null
})

export const blankIdentifiedChild = Object.freeze({
  first_name: '',
  middle_name: '',
  last_name: '',
  name_suffix: null,
  child_in_home: '',
  date_of_birth: '',
  gender: null,
  county_of_jurisdiction: null,
  date_of_placement: '',
  relationship_to_applicants: [relationshipToApplicantDefaults],
  school_grade: null,
  school_name: '',
  school_address: {
    street_address: '',
    zip: '',
    city: '',
    state: null,
    type: {
      value: 'Mailing',
      id: 3
    }
  }
})

export const relationshipToAdultsDefaults = Object.freeze({
  applicant_id: '',
  applicant_name: '',
  relationship_to_applicant: null
})

export const adultChildrenDefaults = Object.freeze({
  name_prefix: null,
  first_name: '',
  middle_name: '',
  last_name: '',
  name_suffix: null,
  relationship_to_applicants: [
    relationshipToAdultsDefaults
  ],
  lives_in_home: '',
  address: addressDefaults
})

export const formerSpousesDefaults = Object.freeze({
  relationship_type: null,
  applicant_id: '',
  applicant_name: '',
  name_prefix: null,
  first_name: '',
  middle_name: '',
  last_name: '',
  name_suffix: null,
  date_of_marriage: '',
  place_of_marriage_city: '',
  place_of_marriage_state: null,
  marriage_termination_reason: null,
  date_of_marriage_end: '',
  place_of_marriage_end_city: '',
  place_of_marriage_end_state: null
})

export const applicantsHistoryDefaults = Object.freeze({
  former_spouses: [formerSpousesDefaults],
  adult_children: [adultChildrenDefaults]
})

export const blankPhysicalAddress = Object.freeze({
  street_address: '',
  zip: '',
  city: '',
  state: null,
  type: {
    id: '1',
    value: 'Residential'
  }
})

export const blankMailingAddress = Object.freeze({
  street_address: '',
  zip: '',
  city: '',
  state: null,
  type: {
    id: '3',
    value: 'Mailing'
  }
})

export const blankResidenceFields = Object.freeze({
  residence_ownership: null,
  physical_mailing_similar: '',
  weapon_in_home: '',
  body_of_water_exist: '',
  body_of_water_description: '',
  others_using_residence_as_mailing: '',
  directions_to_home: '',
  addresses: [],
  home_languages: null
})

export const blankEmploymentFields = Object.freeze({
  employer_name: '',
  occupation: '',
  income: '',
  income_type: {
    id: 1,
    value: 'yearly'
  },
  physical_address: {
    street_address: '',
    zip: '',
    city: '',
    state: null
  }
})

export const residenceAddressValueDefaults = Object.freeze({
  street_address: '',
  zip: '',
  city: '',
  state: null,
  type: {
    id: '1',
    value: 'Residential'
  }
})

export const rfa01BapplicantDefaults = Object.freeze({
  resource_family_name: '',
  applicant_first_name: '',
  applicant_middle_name: '',
  applicant_last_name: '',
  applicant_name_suffix: null,
  applicant_name_prefix: null,
  ssn: '',
  date_of_birth: '',
  driver_license: '',
  driver_license_state: null,
  residence_address: residenceAddressValueDefaults
})

export const othersUsingAddressMailing = Object.freeze({
  name_suffix: null,
  name_prefix: null,
  first_name: '',
  middle_name: '',
  last_name: ''
})

export const minorDefaults = Object.freeze({
  relationship_to_applicants: [
    {
      relationship_to_applicant_freeform: '',
      applicant_id: '',
      applicant_name: '',
      relationship_to_applicant: null,
      child_adopted: '',
      child_financially_supported: ''
    }
  ]
})

export const otherAdultsDefaults = Object.freeze({
  relationship_to_applicants: [
    {
      relationship_to_applicant_freeform: '',
      applicant_id: '',
      applicant_name: '',
      relationship_to_applicant: null
    }
  ],
  name_suffix: null,
  name_prefix: null,
  first_name: '',
  middle_name: '',
  last_name: ''
})

export const emergencyPlacementTable = Object.freeze({
  is_emergency: true,
  items: [
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
})

export const defaultRegistryInfo = Object.freeze({
  'items': [
    {
      'title': 'Requested State Info',
      'date': '',
      'notes': '',
      'checked': null
    },
    {
      'title': 'Received State info',
      'date': '',
      'notes': '',
      'checked': null
    }
  ]
})

export const outOfStateRegistry = Object.freeze({
  'state': {
    'value': '',
    'id': ''},
  'is_registry_maintained_by_state': null
})

export const exemptions = Object.freeze({
  'is_requested': false
})

export const inPersonContactDataDefaults = Object.freeze({
  'location': '',
  'notice': '',
  'is_collateral_visit': '',
  'collateral_visit_start_time': '',
  'collateral_visit_end_time': '',
  'visit_type': null
})

export const contactDefaults = Object.freeze({
  'date': '',
  'classification': null,
  'contact_method': null,
  'in_person_contact_data': inPersonContactDataDefaults,
  'title': '',
  'notes': ''
})
