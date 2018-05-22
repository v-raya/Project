import React from 'react'
import PropTypes from 'prop-types'
import {SmallInnerBlockDetails} from './smallInnerBlockDetails.js'
import {InnerBlockAddressTitles} from './innerBlockAddressTitles.js'
import {facilityDataDefaults} from 'constants/defaultFields'

const FacilityAddress = ({
  facilityData
}) => (
  <div className='facility-address col-xs-12 col-sm-12 col-md-12 col-lg-12'>
    <div className='facility-address-block col-xs-12 col-sm-12 col-md-12 col-lg-12'>
      <div className='facility-address-details col-xs-12 col-sm-4 col-md-4 col-lg-4'>
        <div className='inner_block'>
          <InnerBlockAddressTitles
            title='PHYSICAL ADDRESS'
            streetApt={facilityData.addresses.physicalStreetAddress}
            cityCountry={facilityData.addresses.physicalAddressCityZipState} />
          <SmallInnerBlockDetails
            title='COUNTY NAME'
            value={facilityData.county} />
          <SmallInnerBlockDetails
            title='PRIMARY PHONE'
            value={facilityData.phones.primaryPhoneNumber} />
        </div>
      </div>
      <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
        <div className='inner_block'>
          <InnerBlockAddressTitles
            title='POSTAL ADDRESS'
            streetApt={facilityData.addresses.mailingStreetAddress}
            cityCountry={facilityData.addresses.mailingAddressCityZipState} />
          <SmallInnerBlockDetails
            classNameTitle=''
            title='ALTERNATIVE PHONE'
            value={facilityData.phones.alternativePhoneNumber} />
        </div>
      </div>
      <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
        <div className='inner_block'>
          <SmallInnerBlockDetails
            title='LAST VISIT DATE'
            value={facilityData.last_visit_date} />
          <SmallInnerBlockDetails
            title='LAST VISIT REASON'
            value={facilityData.last_visit_reason} />
        </div>
      </div>
    </div>
  </div>
)

FacilityAddress.propTypes = {
  facilityData: PropTypes.object.isRequired
}

FacilityAddress.defaultProps = {
  facilityData: facilityDataDefaults
}

export default FacilityAddress
