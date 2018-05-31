import {connect} from 'react-redux'
import FacilityAddress from 'facility/facilityAddress'
import {getFacilityAddresses, getFacilityPhones, getOtherFacilityData} from 'selectors/facilityDataSelectors'

const mapStateToProps = (state) => ({
  facilityAddress: getFacilityAddresses(state),
  facilityPhones: getFacilityPhones(state),
  otherFacilityData: getOtherFacilityData(state)
})

export default connect(mapStateToProps)(FacilityAddress)
