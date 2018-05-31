import {connect} from 'react-redux'
import FacilityDetails from 'facility/facilityDetails'
import {getFacilityData} from 'selectors/facilityDataSelectors'

const mapStateToProps = (state) => ({
  facilityData: getFacilityData(state),
  errors: state.facilityReducer.errors
})

export default connect(mapStateToProps)(FacilityDetails)
