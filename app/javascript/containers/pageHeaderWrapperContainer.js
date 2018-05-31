import {connect} from 'react-redux'
import {PageHeaderWrapper} from 'facility/pageHeaderWrapper'
import {getFacilityName} from 'selectors/facilityDataSelectors'

const mapStateToProps = (state) => ({
  facilityName: getFacilityName(state)
})

export default connect(mapStateToProps)(PageHeaderWrapper)
