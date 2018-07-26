import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {isTrue} from 'helpers/commonHelper'
import YesNoRadioComponent from 'components/common/yesNoFields'
import {outOfStateRegistry} from 'constants/defaultFields'
import DateNoteFields from './common/dateNoteFields'
import TrackingTable from '../tracking/trackingTable'
import CheckListRow from './backGroundCheckRows/checkListRow'
import YesNoFieldShow from './common/yesNoFieldShow'

const outOfStateRegistryDefaults = Immutable.fromJS(outOfStateRegistry)

export default class OutOfStateRegistryCheck extends React.Component {
  constructor (props) {
    super(props)
    this.handleOutOfStateRegistry = this.handleOutOfStateRegistry.bind(this)
    this.handleRequestInfo = this.handleRequestInfo.bind(this)
    this.handleRegistryClear = this.handleRegistryClear.bind(this)
  }
  handleOutOfStateRegistry (key, value, index) {
    let outOfStateRegistryList = this.props.outOfStateRegistryList
    let newOutOfStateRegistryList = outOfStateRegistryList.setIn(['state_registries', index, key], value)
    this.props.setParentState('out_of_state_registry_checklist', newOutOfStateRegistryList, this.props.peopleIndex)
  }
  handleRequestInfo (key, value, rowIndex, cardIndex) {
    let outOfStateRegistryList = this.props.outOfStateRegistryList
    let registryCheckItems = outOfStateRegistryList.getIn(['state_registries', cardIndex, 'registry_info']) ? outOfStateRegistryList.getIn(['state_registries', cardIndex, 'registry_info']) : outOfStateRegistryDefaults
    let newRegistryCheckList = registryCheckItems.setIn(['items', rowIndex, key], value)
    let newOutOfStateRegistryList = outOfStateRegistryList.setIn(['state_registries', cardIndex, 'registry_info'], newRegistryCheckList)
    this.props.setParentState('out_of_state_registry_checklist', newOutOfStateRegistryList, this.props.peopleIndex)
  }
  handleRegistryClear (key, value, subKeyIndex) {
    let outOfStateRegistryList = this.props.outOfStateRegistryList
    let newOutOfStateRegistryList = outOfStateRegistryList.setIn(['state_registries', subKeyIndex, 'registry_info', key], value)
    this.props.setParentState('out_of_state_registry_checklist', newOutOfStateRegistryList, this.props.peopleIndex)
  }
  render () {
    const outOfStateRegistryList = this.props.outOfStateRegistryList.get('state_registries')
    return (
      <div id='outOfStateRegistryCheck' className='col-xs-12'>
        <div className='tracking-card-header'>
          <h3>Resource Family Out-of-State Child Abuse Registry Checklist</h3>
        </div>
        {
          outOfStateRegistryList.map((outOfStateData, index) => {
            return (
              <div key={index}>
                <div className='col-xs-12'>
                  <h5>{outOfStateData.getIn(['state', 'value']) + ' Information'}</h5>
                </div>
                {this.props.editMode
                  ? <YesNoRadioComponent
                    idPrefix={'outOfStateRegistry' + this.props.peopleIndex + index}
                    label={'Is registry maintained by ' + outOfStateData.getIn(['state', 'value']) + '?'}
                    gridClassName='col-xs-12 no-padding'
                    value={outOfStateData.get('is_registry_maintained_by_state')}
                    onFieldChange={(event) => { this.handleOutOfStateRegistry('is_registry_maintained_by_state', event.target.value, index) }}
                  />
                  : <YesNoFieldShow
                    id={'outOfStateRegistry' + this.props.peopleIndex + index}
                    value={outOfStateData.get('is_registry_maintained_by_state')}
                    label={'Is registry maintained by ' + outOfStateData.getIn(['state', 'value']) + '?'}
                  />
                }
                {isTrue(outOfStateData.get('is_registry_maintained_by_state')) ? <div>
                  <TrackingTable
                    colHeaders={['', 'Date', 'Notes']}
                    rowsComponent={
                      <CheckListRow
                        cardIndex={index}
                        id={'outOfStateRegistry' + index}
                        handleChange={this.handleRequestInfo}
                        checkListDocuments={outOfStateData.getIn(['registry_info', 'items']) || outOfStateRegistryDefaults.get('items')}
                        editMode={this.props.editMode}
                      />
                    }
                  />
                  {this.props.editMode
                    ? <YesNoRadioComponent
                      idPrefix={'outOfStateRegistryCleared' + this.props.peopleIndex + index}
                      label='Was the request cleared or not cleared?'
                      gridClassName='col-xs-12 no-padding'
                      value={outOfStateData.getIn(['registry_info', 'is_cleared'])}
                      labelDefaultYes='Cleared'
                      labelDefaultNo='Not Cleared'
                      onFieldChange={(event) => { this.handleRegistryClear('is_cleared', event.target.value, index) }}
                    />
                    : <YesNoFieldShow
                      id={'outOfStateRegistryCleared' + this.props.peopleIndex + index}
                      labelDefaultYes='Cleared'
                      labelDefaultNo='Not Cleared'
                      value={outOfStateData.getIn(['registry_info', 'is_cleared'])}
                      label='Was the request cleared or not cleared?'
                    />
                  }
                  <DateNoteFields
                    id='outOfStateRegistry'
                    subKey={index}
                    dateValue={outOfStateData.getIn(['registry_info', 'date'])}
                    notesValue={outOfStateData.getIn(['registry_info', 'notes'])}
                    editMode={this.props.editMode}
                    handleChange={this.handleRegistryClear}
                  />
                </div> : null }
              </div>
            )
          })
        }
      </div>
    )
  }
}

OutOfStateRegistryCheck.defaultProps = {
  outOfStateRegistryList: Immutable.fromJS({
    'state_registries': [
      {
        'state': {
          'value': 'Arizona',
          'id': 'AZ'
        },
        'is_registry_maintained_by_state': true,
        'registry_info': {
          'items': [
            {
              'title': 'Requested Arizona State info',
              'date': '',
              'notes': '',
              'checked': false
            },
            {
              'title': 'Received Arizona State info',
              'date': '',
              'notes': '',
              'checked': false
            }
          ],
          'is_cleared': true,
          'date': '',
          'notes': ''
        }
      },
      {
        'state': {
          'value': 'Nevada',
          'id': 'NV'
        },
        'is_registry_maintained_by_state': false
      }
    ]
  })
}
