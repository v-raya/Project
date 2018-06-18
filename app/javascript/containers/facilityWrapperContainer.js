import {connect} from 'react-redux'
import FacilityWrapper from 'facility/facilityWrapper'
import {facilityApiCall} from 'actions/facilityActions'
import {getFacilityData, getFacilityName, getFacilityAddresses, getFacilityPhones, getOtherFacilityData, getFacilityAssignedWorker} from 'selectors/facilityDataSelectors'

const mapStateToProps = (state, ownProps) => ({
  facilityData: getFacilityData(state),
  facilityName: getFacilityName(state),
  facilityAddress: getFacilityAddresses(state),
  facilityPhones: getFacilityPhones(state),
  facilityAssignedWorker: getFacilityAssignedWorker(state),
  otherFacilityData: getOtherFacilityData(state),
  isFetching: state.facilityReducer.isFetching,
  errors: state.facilityReducer.errors,
  match: ownProps.match
})

export {FacilityWrapper}
export default connect(mapStateToProps, {facilityApiCall})(FacilityWrapper)
