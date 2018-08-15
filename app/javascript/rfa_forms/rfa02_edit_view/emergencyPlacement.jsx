import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {isTrue} from 'helpers/commonHelper'
import {emergencyPlacementTable} from 'constants/defaultFields'
import YesNoRadioComponent from 'components/common/yesNoFields'
import TrackingTable from '../tracking/trackingTable'
import CheckListRow from './backGroundCheckRows/checkListRow'
import YesNoFieldShow from 'components/common/yesNoFieldShow'

const emergencyPlacementDefaults = Immutable.fromJS(emergencyPlacementTable)

export default class EmergencyPlacement extends React.Component {
  constructor (props) {
    super(props)
    this.handleEmergencyPlacementChange = this.handleEmergencyPlacementChange.bind(this)
    this.isEmergencyPlacement = this.isEmergencyPlacement.bind(this)
  }
  isEmergencyPlacement (key, value) {
    let emergencyPlacement = this.props.emergencyPlacementList
    let newEmergencyPlacement = emergencyPlacement.set(key, value)
    if (value === 'false') {
      newEmergencyPlacement = newEmergencyPlacement.delete('items')
    }
    this.props.setParentState('emergency_placement_only', newEmergencyPlacement, this.props.peopleIndex)
  }
  handleEmergencyPlacementChange (key, value, index) {
    let props = this.props.emergencyPlacementList
    let emergencyPlacement = props.get('items') ? props : emergencyPlacementDefaults
    let newEmergencyPlacement = emergencyPlacement.setIn(['items', index, key], value)
    this.props.setParentState('emergency_placement_only', newEmergencyPlacement, this.props.peopleIndex)
  }
  render () {
    const emergencyPlacementList = this.props.emergencyPlacementList
    return (
      <div>
        {this.props.editMode ? <YesNoRadioComponent
          idPrefix={'emergencyPlacement' + this.props.peopleIndex}
          index={this.props.peopleIndex}
          label='Is this an emergency placement?'
          gridClassName='col-xs-12 no-padding'
          value={emergencyPlacementList.get('is_emergency')}
          onFieldChange={(event) => { this.isEmergencyPlacement('is_emergency', event.target.value) }}
        />
          : <YesNoFieldShow
            value={emergencyPlacementList.get('is_emergency')}
            label='Is this an emergency placement?'
          />
        }

        {isTrue(emergencyPlacementList.get('is_emergency'))
          ? <TrackingTable
            colHeaders={['Emergency Placement Only', 'Date', 'Notes']}
            rowsComponent={
              <CheckListRow
                id={'emergencyPlacement' + this.props.peopleIndex}
                handleChange={this.handleEmergencyPlacementChange}
                checkListDocuments={emergencyPlacementList.get('items') || emergencyPlacementDefaults.get('items')}
                editMode={this.props.editMode} />
            }
          /> : null
        }
      </div>
    )
  }
}

EmergencyPlacement.defaultProps = {
  emergencyPlacementList: Immutable.fromJS({
    emergencyPlacementTable
  })
}
