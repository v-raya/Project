import React from 'react'
import PropTypes from 'prop-types'
import {urlPrefixHelper} from '../helpers/url_prefix_helper.js.erb'
import {Link} from 'react-router-dom'
import {checkForNA, checkForObjectAndValue, checkNullOrEmptyValue, respectiveFullAddressOrNA, respectiveNumberOrNA,
  primaryPhoneRelation, alternativePhoneRelation, physicalAddressType} from './common/commonUtils'

export const SearchList = ({
  searchResults
}) => (
  <div className='main_table'>
    <table className='table'>
      {searchResults.length > 0 && <thead>
        <tr>
          <th>Facility Name </th>
          <th>Facility ID / Approval #</th>
          <th>Facility Type / Facility Source</th>
          <th>License Status</th>
          <th>Licensee Name</th>
          <th>Facility Address</th>
          <th>County</th>
          <th>Phone Number</th>
          <th>Facility Email</th>
          <th>Approval / Licensing Worker</th>
          <th>Alternative Number</th>
        </tr>
      </thead>}
      <tbody>
        {searchResults.map((result, index) => {
          return (
            <tr key={index}>
              <td><Link to={urlPrefixHelper('/facilities/' + result.id)}>{checkNullOrEmptyValue(result.name)}</Link></td>
              <td>{result.license_number}</td>
              <td id={'facilities[' + index + '].' + 'type'}>{checkForNA(result.type) + ' / ' + checkNullOrEmptyValue(result.facility_source)}</td>
              <td>{checkForNA(result.status)}</td>
              <td id={'facilities[' + index + '].' + 'licensee_name'}>{result.licensee_name}</td>
              <td id={'facilities[' + index + '].' + 'physical_address'}>{respectiveFullAddressOrNA(result.addresses, physicalAddressType)}</td>
              <td id={'facilities[' + index + '].' + 'county'}>{checkForNA(result.county)}</td>
              <td id={'facilities[' + index + '].' + 'primary_phone'}>{respectiveNumberOrNA(result.phones, primaryPhoneRelation)}</td>
              <td>{checkNullOrEmptyValue(result.email_address)}</td>
              <td>{checkForObjectAndValue(result.assigned_worker, 'full_name')}</td>
              <td>{respectiveNumberOrNA(result.phones, alternativePhoneRelation)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)

SearchList.propTypes = {
  searchResults: PropTypes.array.isRequired
}

SearchList.defaultProps = {
  searchResults: []
}

export default SearchList
