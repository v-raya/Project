import React from 'react'
import TrackingTable from '../tracking/trackingTable'
import Immutable from 'immutable'
import LiveScanRow from './backGroundCheckRows/liveScanRow'

export default class LiveScan extends React.Component {
  constructor (props) {
    super(props)
    this.handleLiveScan = this.handleLiveScan.bind(this)
  }
  handleLiveScan (key, value, index) {
    const liveScanList = this.props.liveScanList
    const newLiveScanList = liveScanList.setIn(['items', index, key], value)
    this.props.setParentState('live_scan', newLiveScanList, this.props.peopleIndex)
  }
  render () {
    return (
      <div>
        <TrackingTable
          colHeaders={['Live Scan', 'Submitted', 'Received', 'Notes']}
          rowsComponent={
            <LiveScanRow
              id={`liveScan${this.props.peopleIndex}`}
              handleChange={this.handleLiveScan}
              checkListDocuments={this.props.liveScanList}
              editMode={this.props.editMode}
            />
          }
        />
      </div>
    )
  }
}

LiveScan.defaultProps = {
  liveScanList: Immutable.fromJS({
    items: []
  })
}
