import React from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import {urlPrefixHelper} from '../helpers/url_prefix_helper.js.erb'
import {Link} from 'react-router-dom'
import {checkForNA, checkForObjectAndValue, checkNullOrEmptyValue, respectiveFullAddressOrNA, respectiveNumberOrNA,
  primaryPhoneRelation, alternativePhoneRelation, physicalAddressType} from './common/commonUtils'

const searchListColumns = [
  {
    Header: 'Facility Name',
    minWidth: 70,
    className: 'facility_name',
    id: 'facilityName',
    accessor: data => (<Link to={urlPrefixHelper('/facilities/' + data.id)}>{checkNullOrEmptyValue(data.name)}</Link>)
  },
  {
    Header: 'Facility ID / Approval #',
    className: 'facility_id',
    minWidth: 70,
    accessor: 'license_number'
  },
  {
    Header: 'Facility Type / Facility Source',
    id: 'facilityTypeSource',
    className: 'facility_type_source',
    minWidth: 100,
    accessor: data => (`${checkForNA(data.type)} / ${checkNullOrEmptyValue(data.facility_source)}`)
  },
  {
    Header: 'License Status',
    id: 'licenseeStatus',
    className: 'license_status',
    minWidth: 80,
    accessor: data => checkForNA(data.status)
  },
  {
    Header: 'Licensee Name',
    className: 'licensee_name',
    minWidth: 80,
    accessor: 'licensee_name'
  },
  {
    Header: 'Facility Address',
    id: 'facilityAddress',
    className: 'facility_address',
    minWidth: 130,
    accessor: data => respectiveFullAddressOrNA(data.addresses, physicalAddressType)
  },
  {
    Header: 'County',
    id: 'countyName',
    className: 'county_name',
    minWidth: 70,
    accessor: data => checkForNA(data.county)
  },
  {
    Header: 'Phone Number',
    minWidth: 90,
    id: 'phoneNumber',
    className: 'phone_number',
    accessor: data => respectiveNumberOrNA(data.phones, primaryPhoneRelation)
  },
  {
    Header: 'Facility Email',
    id: 'facilityEmail',
    className: 'facility_email',
    accessor: data => checkNullOrEmptyValue(data.email_address)
  },
  {
    Header: 'Approval / Licensing Worker',
    id: 'licensingWorker',
    className: 'licensing_worker',
    accessor: data => checkForObjectAndValue(data.assigned_worker, 'full_name')
  },
  {
    Header: 'Alternative Number',
    id: 'alternativeNumber',
    className: 'alternative_number',
    accessor: data => respectiveNumberOrNA(data.phones, alternativePhoneRelation)
  }
]

export const SearchList = ({
  searchResults
}) => (
  <div className='main_table'>
    {
      searchResults.length > 0 &&
      <ReactTable
        data={searchResults}
        columns={searchListColumns}
        pageSize={searchResults.length}
        sortable={false}
        resizable={true}
        showPagination={false}
      />
    }
  </div>
)

SearchList.propTypes = {
  searchResults: PropTypes.array.isRequired
}

SearchList.defaultProps = {
  searchResults: []
}

export default SearchList
