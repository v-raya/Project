import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {addressDefaults} from 'constants/defaultFields'
import {findArrayValueByMethod} from 'helpers/commonHelper'
import {formatPhoneNumberForDashes} from 'search/common/commonUtils'

const getPhoneNumber = (phonesList) => {
  const primaryPhoneObj = phonesList && phonesList.size > 0 && (findArrayValueByMethod(phonesList, 'find', 'preferred', true) || phonesList.get(0))
  const phoneNumber = primaryPhoneObj ? primaryPhoneObj.get('number') : ''
  return formatPhoneNumberForDashes(phoneNumber || '')
}

const getAddress = (address, key) => {
  const residentialAddress = address.get(0)
  return residentialAddress.get(key)
}

const ApplicationsListRow = ({
  facilityId,
  familyName,
  applicantsInfo,
  applicationAddress,
  applicationStatus,
  applicationReceivedDate
}) => {
  return (
    <tr>
      <td>{facilityId}</td>
      <td><a href={urlPrefixHelper('/rfa/a01/' + facilityId + '/packet')}>{familyName}</a></td>
      <td>{getPhoneNumber(applicantsInfo.getIn([0, 'phones']))}</td>
      <td>{getAddress(applicationAddress, 'street_address')}</td>
      <td>{getAddress(applicationAddress, 'city')}</td>
      <td>{getAddress(applicationAddress, 'zip')}</td>
      <td>{applicationStatus}</td>
      <td>{applicationReceivedDate}</td>
    </tr>
  )
}

ApplicationsListRow.defaultProps = {
  facilityId: '',
  familyName: '',
  applicationStatus: '',
  applicationReceivedDate: '',
  applicantsInfo: Immutable.fromJS([{
    phones: []
  }]),
  applicationAddress: Immutable.fromJS([addressDefaults])
}
export default ApplicationsListRow
