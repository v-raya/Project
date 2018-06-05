import {connect} from 'react-redux'
import FacilityChildren from 'facility/facilityChildren'
import {getFacilityChildren} from 'selectors/facilityDataSelectors'
import {facilityChildrenApiCall} from 'actions/facilityChildrenActions'

const mapStateToProps = (state, ownProps) => ({
  children: getFacilityChildren(state),
  match: ownProps.match,
  isFetching: state.facilityChildrenReducer.isFetching,
  errors: state.facilityChildrenReducer.errors

})

export default connect(mapStateToProps, {facilityChildrenApiCall})(FacilityChildren)
