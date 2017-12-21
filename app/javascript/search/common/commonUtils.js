import React from 'react'

export const addressStringValueOrNa = (addresses) => {
  if (addresses.length > 0 && addresses[0].address) {
    return fullAddressString(addresses[0].address)
  } else {
    return 'N/A'
  }
}

export const fullAddressString = (addressObject) => {
  return addressObject.street_address + ',' + addressObject.city + ',' + addressObject.state + ' ' + addressObject.zip_code
}

export const phoneNumberOrNa = (phone) => {
  if (phone.length > 0) {
    return createPhoneNumber(phone[0])
  } else {
    return 'N/A'
  }
}

export const createPhoneNumber = (phoneObject) => {
  return phoneObject.number.replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3')
}

export const checkForNA = (object) => {
  return object ? object.value : 'N/A'
}
