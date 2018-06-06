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
  const residentialAddress = address && address.size > 0 ? address.get(0) : Immutable.fromJS(addressDefaults)
  return residentialAddress.get(key)
}

const ApplicationsListRow = ({
  facilityId,
  familyName,
  trackingId,
  applicantsInfo,
  applicationAddress,
  applicationStatus,
  applicationReceivedDate
}) => {
  let trackingUrl = trackingId
    ? urlPrefixHelper('/rfa/a01/' + facilityId + '/tracking/' + trackingId + '/edit')
    : urlPrefixHelper('/rfa/a01/' + facilityId + '/tracking/')

  return (
    <tr>
      <td>{facilityId}</td>
      <td><a href={urlPrefixHelper('/rfa/a01/' + facilityId + '/edit')}>{familyName}</a></td>
      <td className='tracking'><a href={trackingUrl} >tracking</a></td>
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
