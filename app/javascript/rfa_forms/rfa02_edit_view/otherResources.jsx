import React from 'react'
import Immutable from 'immutable'
import TrackingTable from '../tracking/trackingTable'
import CheckListRow from './backGroundCheckRows/checkListRow'

export default class OtherResources extends React.Component {
  constructor (props) {
    super(props)
    this.handleOtherResourceList = this.handleOtherResourceList.bind(this)
  }
  handleOtherResourceList (key, value, index) {
    const otherResourcesList = this.props.otherResourcesList
    const newOtherResourcesList = otherResourcesList.setIn(['items', index, key], value)
    this.props.setParentState('other_resources', newOtherResourcesList, this.props.peopleIndex)
  }
  render () {
    return (
      <div>
        <TrackingTable
          colHeaders={['Other Resources', 'Date', 'Notes']}
          rowsComponent={
            <CheckListRow
              id={`otherResources${this.props.peopleIndex}`}
              handleChange={this.handleOtherResourceList}
              checkListDocuments={this.props.otherResourcesList.get('items')}
              editMode={this.props.editMode}
            />
          }
        />
      </div>
    )
  }
}

OtherResources.defaultProps = {
  otherResourcesList: Immutable.fromJS({
    items: []
  })
}
