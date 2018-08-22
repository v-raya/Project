import PropTypes from 'prop-types'
import React from 'react'
import InputField from 'components/common/inputField.jsx'
import {DropDownField} from 'components/common/dropDownField'
import YesNoRadioComponent from 'components/common/yesNoFields'
import {inPersonContactDataDefaults} from 'constants/defaultFields'
import {getDictionaryId, dictionaryNilSelect} from 'helpers/commonHelper.jsx'

export default class InPersonData extends React.Component {
  render () {
    let inPersonContactData = this.props.inPersonContactData
    return (
      <div>
        <div className='row' >
          <div className='col-xs-4' >
            <DropDownField
              selectClassName='reusable-select'
              id='contactLocation'
              value={getDictionaryId(inPersonContactData.location)}
              optionList={this.props.contactLocations}
              label='Location'
              onChange={(event) => { this.props.setInPersonData('location', dictionaryNilSelect(event.target.options)) }} />
          </div>
          <div className='col-xs-2' />
          <div className='col-xs-4' >
            <YesNoRadioComponent
              gridClassName='col-xs-6 no-padding'
              label='Notice'
              labelDefaultYes='Announced'
              labelDefaultNo='Unannounced'
              idPrefix='contactNotice'
              value={inPersonContactData.notice}
              onFieldChange={(event) => { this.props.setInPersonData('notice', event.target.value === 'true') }} />
          </div>
        </div>

        <div className='row' >
          <div className='col-xs-4' >
            <YesNoRadioComponent
              gridClassName='col-xs-6'
              label='Collateral Visit?'
              idPrefix='collateralVisit'
              value={inPersonContactData.is_collateral_visit}
              onFieldChange={(event) => { this.props.setInPersonData('is_collateral_visit', event.target.value === 'true') }} />
          </div>
          <div className='col-xs-2' />
          <div className='col-xs-4' >
            <DropDownField
              selectClassName='reusable-select'
              id='contactType'
              value={getDictionaryId(inPersonContactData.visit_type)}
              optionList={this.props.contactVisitTypes}
              label='Type'
              onChange={(event) => { this.props.setInPersonData('visit_type', dictionaryNilSelect(event.target.options)) }} />
          </div>
        </div>

        <div className='row' >
          <div className='col-xs-3' >
            <InputField
              id='startTime'
              label='Start Time'
              type='time'
              step='1'
              value={inPersonContactData.collateral_visit_start_time}
              onChange={(event) => { this.props.setInPersonData('collateral_visit_start_time', event.target.value) }} />
          </div>
          <div className='col-xs-3' >
            <InputField
              id='endTime'
              label='End Time'
              type='time'
              step='1'
              value={inPersonContactData.collateral_visit_end_time}
              onChange={(event) => { this.props.setInPersonData('collateral_visit_end_time', event.target.value) }} />
          </div>
        </div>
      </div>
    )
  }
}

InPersonData.defaultProps = {
  inPersonContactData: inPersonContactDataDefaults
}
