import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

import {InputComponent} from 'components/common/inputFields'
import {TextAreaComponent} from 'components/common/textArea'
import {Rfa01bCriminalFieldsCardText, RfaCommon} from 'constants/rfaText'
import {disclosureDefaults} from 'constants/defaultFields'
import Button from 'components/common/button'

export default class CriminalFields extends React.Component {
  constructor (props) {
    super(props)

    this.offenseId = `${this.props.validatorPrefix}offense`
    this.offenseCityId = `${this.props.validatorPrefix}offense_city`
    this.offenseDateId = `${this.props.validatorPrefix}when_offense_happen`
    this.offenseDetailsId = `${this.props.validatorPrefix}offense_details`
    this.props.validator.addNewValidation(
      {
        [this.offenseId]: [{
          rule: 'isRequiredIf',
          message: 'offense is required',
          condition: () => this.props.validatorCondition
        }],
        [this.offenseCityId]: [{
          rule: 'isRequiredIf',
          message: 'offense city is required',
          condition: () => this.props.validatorCondition
        }],
        [this.offenseDateId]: [{
          rule: 'isRequiredIf',
          message: 'offense date is required',
          condition: () => this.props.validatorCondition
        }],
        [this.offenseDetailsId]: [{
          rule: 'isRequiredIf',
          message: 'offense details are required',
          condition: () => this.props.validatorCondition
        }]
      }
    )
  }

  componentWillUnmount () {
    const rulesToRemove = [this.offenseId, this.offenseCityId,
      this.offenseDateId, this.offenseDetailsId]
    this.props.validator.removeValidations(rulesToRemove)
  }
  render () {
    const crime = this.props.crime
    return (
      <div className='row'>
        <hr />
        <div>
          <span onClick={() => this.props.clickClose(this.props.index)} className='pull-right glyphicon glyphicon-remove' role='presentation'/>
        </div>
        <div><b>{Rfa01bCriminalFieldsCardText.details}</b></div>
        <InputComponent
          gridClassName='col-md-12'
          id={`${this.props.idPrefix}offenseReason`}
          value={crime.offense}
          label={`What was the offense?${RfaCommon.requiredIndicator}`}
          onChange={(event) => this.props.onFieldChange(this.props.index, 'offense', event.target.value)} />
        <InputComponent
          gridClassName='col-md-12'
          id={`${this.props.idPrefix}offenseCity`}
          value={crime.offense_city}
          label={`Where did the offense happen? (City, State, Country or other location information)${RfaCommon.requiredIndicator}`}
          onChange={(event) => this.props.onFieldChange(this.props.index, 'offense_city', event.target.value)} />
        <InputComponent
          gridClassName='col-md-12'
          id={`${this.props.idPrefix}OffenseDate`}
          value={crime.when_offense_happen}
          label={`When did the offense happen?${RfaCommon.requiredIndicator}`}
          onChange={(event) => this.props.onFieldChange(this.props.index, 'when_offense_happen', event.target.value)} />
        <TextAreaComponent
          gridClassName='col-md-12'
          id={`${this.props.idPrefix}offenseDetails`}
          value={crime.offense_details}
          label={`Explain what happened.${RfaCommon.requiredIndicator}`}
          placeholder=''
          onChange={(event) => this.props.onFieldChange(this.props.index, 'offense_details', event.target.value)} />
      </div>
    )
  }
}

CriminalFields.propTypes = {
  errors: PropTypes.array,
  idPrefix: PropTypes.string
}

CriminalFields.defaultProps = {
  errors: [],
  crime: disclosureDefaults,
  validatorPrefix: ''
}
