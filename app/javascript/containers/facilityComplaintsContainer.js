import {connect} from 'react-redux'
import FacilityComplaints from 'facility/facilityComplaints'
import {getFacilityComplaints} from 'selectors/facilityDataSelectors'
import {facilityComplaintsApiCall} from 'actions/facilityComplaintsActions'

const mapStateToProps = (state, ownProps) => ({
  complaints: getFacilityComplaints(state),
  match: ownProps.match,
  isFetching: state.facilityComplaints.isFetching,
  errors: state.facilityComplaints.errors

})

export default connect(mapStateToProps, {facilityComplaintsApiCall})(FacilityComplaints)
