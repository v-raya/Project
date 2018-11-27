import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {isTrue} from 'helpers/commonHelper'
import YesNoRadioComponent from 'components/common/yesNoFields'
import YesNoFieldShow from 'components/common/yesNoFieldShow'
import DateNoteFields from 'components/common/dateNoteFields'
import {exemptions} from 'constants/defaultFields'

export default class Exemptions extends React.Component {
  constructor (props) {
    super(props)
    this.exemptionHandler = this.exemptionHandler.bind(this)
  }
  exemptionHandler (key, value, subKey) {
    const exemptionList = this.props.exemptionList
    let newExemptionList
    if (key === 'is_requested' && value === 'false') {
      newExemptionList = Immutable.fromJS(exemptions)
    } else if (subKey) {
      newExemptionList = exemptionList.setIn([subKey, key], value)
    } else {
      newExemptionList = exemptionList.set(key, value)
    }
    this.props.setParentState('exemptions', newExemptionList, this.props.peopleIndex)
  }
  render () {
    const exemptionList = this.props.exemptionList
    return (
      <div className='col-xs-12 double-pad-bottom'>
        <div className='tracking-card-header'>
          <h3>Exemptions</h3>
        </div>
        <div className='col-xs-6'>
          {this.props.editMode ? <YesNoRadioComponent
            idPrefix={'exemptionRequest' + this.props.peopleIndex}
            label='Exemption requested by applicant?'
            gridClassName='col-xs-12 no-padding'
            value={exemptionList.get('is_requested')}
            onFieldChange={(event) => { this.exemptionHandler('is_requested', event.target.value) }}
          /> : <YesNoFieldShow
            value={exemptionList.get('is_requested')}
            id='exemption_request'
            label='Exemption requested by applicant?'
          />
          }
          {isTrue(exemptionList.get('is_requested'))
            ? <DateNoteFields
              id={'exemptionRequest' + this.props.peopleIndex}
              dateValue={exemptionList.get('date')}
              notesValue={exemptionList.get('notes')}
              editMode={this.props.editMode}
              handleChange={this.exemptionHandler}
            /> : null
          }
        </div>
        {isTrue(exemptionList.get('is_requested'))
          ? <div className='col-xs-6'>
            {this.props.editMode
              ? <YesNoRadioComponent
                idPrefix={'exemptionStatus' + this.props.peopleIndex}
                label='Exemption approved or denied?'
                gridClassName='col-xs-12 no-padding'
                value={exemptionList.getIn(['approval', 'is_approved'])}
                labelDefaultYes='Approved'
                labelDefaultNo='Denied'
                onFieldChange={(event) => { this.exemptionHandler('is_approved', event.target.value, 'approval') }}
              /> : <YesNoFieldShow
                value={exemptionList.getIn(['approval', 'is_approved'])}
                labelDefaultYes='Approved'
                labelDefaultNo='Denied'
                id={'exemption_status'}
                label='Exemption requested by applicant?'
              />
            }
            {<DateNoteFields
              id={'exemptionApproval' + this.props.peopleIndex}
              subKey='approval'
              handleChange={this.exemptionHandler}
              dateValue={exemptionList.getIn(['approval', 'date'])}
              notesValue={exemptionList.getIn(['approval', 'notes'])}
              editMode={this.props.editMode}
            />
            }
          </div> : null
        }
      </div>
    )
  }
}

Exemptions.propTypes = {
  editMode: PropTypes.bool
}

Exemptions.defaultProps = {
  exemptionList: Immutable.fromJS({
    'is_requested': false,
    'date': '',
    'notes': '',
    'approval': {
      'is_approved': false,
      'date': '',
      'notes': ''
    }
  })
}
