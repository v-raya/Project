import {
  checkForNA,
  checkforDateOrNa,
  checkfullNameorNA,
  checkNameorNA,
  handleLicenseEffectiveDate,
  cityStateZipOfRespectiveAddressOrNA,
  respectiveNumberOrNA,
  respectiveStreetAddressOrNA,
  primaryPhoneRelation,
  alternativePhoneRelation,
  physicalAddressType,
  mailingAddressType
} from 'search/common/commonUtils'

const facilitySelector = (state) => state.facilityReducer.facility

const facilityChildrenSelector = (state) => state.facilityReducer.facilityChildren

const facilityComplaintsSelector = (state) => state.facilityReducer.facilityComplaints

const getAddressesOfFacility = (addresses) => ({
  physicalStreetAddress: respectiveStreetAddressOrNA(addresses, physicalAddressType),
  physicalAddressCityZipState: cityStateZipOfRespectiveAddressOrNA(addresses, physicalAddressType),
  mailingStreetAddress: respectiveStreetAddressOrNA(addresses, mailingAddressType),
  mailingAddressCityZipState: cityStateZipOfRespectiveAddressOrNA(addresses, mailingAddressType)
})

const getPhonesOfFacility = (phones) => ({
  primaryPhoneNumber: respectiveNumberOrNA(phones, primaryPhoneRelation),
  alternativePhoneNumber: respectiveNumberOrNA(phones, alternativePhoneRelation)
})

const getOtherDataOfFacility = (facilityState) => ({
  county: checkForNA(facilityState.county),
  lastVisitDate: checkforDateOrNa(facilityState.last_visit_date),
  lastVisitReason: checkForNA(facilityState.last_visit_reason)
})

const getFacilityDetails = (facilityState) => ({
  assigned_worker: checkForNA(facilityState.assigned_worker),
  capacity: facilityState.capacity || 'N/A',
  capacity_last_changed: checkforDateOrNa(facilityState.capacity_last_changed),
  district_office: checkNameorNA(facilityState.district_office),
  licensee_name: facilityState.licensee_name,
  license_number: facilityState.license_number || 'N/A',
  license_effective_date: handleLicenseEffectiveDate(facilityState),
  original_application_recieved_date: checkforDateOrNa(facilityState.original_application_recieved_date),
  type: checkForNA(facilityState.type),
  status: checkForNA(facilityState.status)
})

const getFacilityChildrenData = (facilityChildrenState) => {
  return facilityChildrenState.children.map((child) => ({
    age: child.person.age,
    assigned_worker: checkfullNameorNA(child.assigned_worker),
    county_of_origin: child.county_of_origin,
    date_of_birth: checkforDateOrNa(child.person.date_of_birth),
    date_of_placement: checkforDateOrNa(child.date_of_placement),
    display_client_id: child.display_client_id,
    first_name: child.person.first_name,
    gender: child.person.gender,
    id: child.id,
    last_name: child.person.last_name
  })
  )
}

const getFacilityComplaintsData = (facilityComplaintsState) => {
  return facilityComplaintsState.complaints.map((complaint) => ({
    id: complaint.id,
    approval_date: checkforDateOrNa(complaint.approval_date),
    assigned_worker: complaint.assigned_worker,
    complaint_date: checkforDateOrNa(complaint.complaint_date),
    control_number: complaint.control_number,
    priority_level: complaint.priority_level,
    status: complaint.status
  })
  )
}

export const getFacilityName = (state) => {
  const facilityState = facilitySelector(state)
  if (facilityState !== null) {
    return facilityState.name || 'N/A'
  }
}

export const getOtherFacilityData = (state) => {
  const facilityState = facilitySelector(state)
  if (facilityState !== null) {
    return getOtherDataOfFacility(facilityState)
  }
}

export const getFacilityAddresses = (state) => {
  const facilityState = facilitySelector(state)
  if (facilityState !== null) {
    return getAddressesOfFacility(facilityState.addresses)
  }
}

export const getFacilityPhones = (state) => {
  const facilityState = facilitySelector(state)
  if (facilityState !== null) {
    return getPhonesOfFacility(facilityState.phones)
  }
}

export const getFacilityData = (state) => {
  const facilityState = facilitySelector(state)
  if (facilityState !== null) {
    return getFacilityDetails(facilityState)
  }
}

export const getFacilityChildren = (state) => {
  const facilityChildrenState = facilityChildrenSelector(state)
  if (facilityChildrenState !== null) {
    return {
      children: getFacilityChildrenData(facilityChildrenState)
    }
  }
  return null
}

export const getFacilityComplaints = (state) => {
  const facilityComplaintsState = facilityComplaintsSelector(state)
  if (facilityComplaintsState !== null) {
    return {
      complaints: getFacilityComplaintsData(facilityComplaintsState)
    }
  }
  return null
}
