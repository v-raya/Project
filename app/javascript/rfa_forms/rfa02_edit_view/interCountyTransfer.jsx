import React from 'react'
import Immutable from 'immutable'
import TrackingTable from '../tracking/trackingTable'
import CheckListRow from './backGroundCheckRows/checkListRow'

export default class InterCountyTransfer extends React.Component {
  constructor (props) {
    super(props)
    this.handleCountyTrasferChange = this.handleCountyTrasferChange.bind(this)
  }
  handleCountyTrasferChange (key, value, index) {
    let countyTrasferList = this.props.countyTrasferList
    let newCountyTrasferList = countyTrasferList.setIn(['items', index, key], value)
    this.props.setParentState('inter_county_transfer', newCountyTrasferList, this.props.peopleIndex)
  }
  render () {
    return (
      <div>
        <TrackingTable
          colHeaders={['Inter-County Transfer', 'Date', 'Notes']}
          rowsComponent={
            <CheckListRow
              id={'interCountyTransfer' + this.props.peopleIndex}
              handleChange={this.handleCountyTrasferChange}
              checkListDocuments={this.props.countyTrasferList.get('items')}
              editMode={this.props.editMode}
            />
          }
        />
      </div>
    )
  }
}

InterCountyTransfer.defaultProps = {
  countyTrasferList: Immutable.fromJS({
    'items': [
      {
        'title': 'Effective date Approved by DOJ',
        'date': '',
        'notes': '',
        'checked': false
      }
    ]
  })
}
