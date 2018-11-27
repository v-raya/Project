import React from 'react'
import {DropDownField} from 'components/common/dropDownField'
import {DateField} from 'components/common/dateFields'
import CompleteNameFields from './../rfa01a_edit_view/completeNameField'
import {InputComponent} from 'components/common/inputFields'
import {dictionaryNilSelect, getDictionaryId, FormatDateForPersistance, FormatDateForDisplay} from 'helpers/commonHelper.jsx'
import {RfaCommon} from 'constants/rfaText'
import PropTypes from 'prop-types'

export default class DesiredChildDetails extends React.Component {
  constructor (props) {
    super(props)
    this.dateOfBirthId = `${this.props.idPrefix}date_of_birth`
    // this.dateOfPlacement = this.props.idPrefix + 'date_of_placement'
    this.props.validator.addNewValidation(
      {
        [this.dateOfBirthId]: [{
          rule: 'isValidDate',
          message: 'date is invalid'},
        {
          rule: 'isRequired',
          message: 'date is required'}
        ]
      }
    )
  }

  componentWillUnmount () {
    const rulesToRemove = [this.dateOfBirthId]
    this.props.validator.removeValidations(rulesToRemove)
  }
  render () {
    const child = this.props.child
    return (

      <div className='row'>
        <div className='child-name-section'><span className='row-margin'>Name of the Child</span></div>
        <CompleteNameFields
          index={this.props.index}
          idPrefix={this.props.idPrefix}
          fieldValues={child}
          firstName={child.first_name}
          middleName={child.middle_name}
          lastName={child.last_name}
          nameSuffix={child.name_suffix}
          namePrefix={child.name_prefix}
          suffixTypes={this.props.suffixTypes}
          errors={this.props.errors}
          validator={this.props.validator}
          onChange={(key, event) => this.props.setParentState(this.props.index, key, event)} />

        <div className='col-md-12'>
          <DateField
            gridClassName='col-md-4 dateOfBirthField'
            label={`Date of Birth${RfaCommon.requiredIndicator}`}
            id={`${this.props.idPrefix}date_of_birth`}
            value={FormatDateForDisplay(child.date_of_birth)}
            onChange={(event) => this.props.setParentState(this.props.index, 'date_of_birth', FormatDateForPersistance(event.target.value))}
            onBlur={(event) => this.props.setParentState(this.props.index, 'date_of_birth', FormatDateForPersistance(event.target.value))} />
          <DropDownField
            gridClassName='col-md-4'
            id='gender'
            selectClassName='reusable-select'
            optionList={this.props.genderTypes}
            label='Gender'
            value={getDictionaryId(child.gender)}
            onChange={(event) => this.props.setParentState(this.props.index, 'gender', dictionaryNilSelect(event.target.options))} />
          <DropDownField
            id='county_of_juridiction'
            gridClassName='col-md-4'
            selectClassName='reusable-select'
            value={getDictionaryId(child.county_of_jurisdiction)}
            optionList={this.props.countyTypes}
            label='County of Juridiction'
            onChange={(event) => this.props.setParentState(this.props.index, 'county_of_jurisdiction', dictionaryNilSelect(event.target.options))} />
        </div>

        <div className='col-md-12'>
          <DateField
            gridClassName='col-md-4'
            label='Date of Placement'
            id={`${this.props.idPrefix}date_of_placement`}
            value={FormatDateForDisplay(child.date_of_placement)}
            onChange={(event) => this.props.setParentState(this.props.index, 'date_of_placement', FormatDateForPersistance(event.target.value))}
            onBlur={(event) => this.props.setParentState(this.props.index, 'date_of_placement', FormatDateForPersistance(event.target.value))} />
        </div>
      </div>
    )
  }
}

DesiredChildDetails.propTypes = {
  index: PropTypes.number,
  idPrefix: PropTypes.string,
  child: PropTypes.object,
  setParentState: PropTypes.func,
  suffixTypes: PropTypes.array,
  genderTypes: PropTypes.array,
  countyTypes: PropTypes.array
}

DesiredChildDetails.defaultProps = {
  index: 0,
  idPrefix: '',
  suffixTypes: [],
  genderTypes: [],
  countyTypes: []
}
