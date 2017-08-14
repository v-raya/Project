import React from 'react'
import PropTypes from 'prop-types'
import {InputComponent} from 'components/common/inputFields'
import {DropDownField} from 'components/common/dropDownField'
import {dictionaryNilSelect} from 'helpers/commonHelper.jsx'
import {yesNo} from 'constants/constants'
import {setToWhom} from 'helpers/cardsHelper.jsx'

export class MinorCardField extends React.Component {
  render () {
    const minor = this.props.minorChild

    return (
      <form>
        <DropDownField gridClassName='col-md-4' id='relationship_to_applicant'
          selectClassName='reusable-select'
          optionList={this.props.relationshipToApplicantTypes}
          label='Relationship Type' onChange={(event) => this.props.handleRelationshipTypeToApplicant(this.props.index, dictionaryNilSelect(event.target.selectedOptions[0]), 'relationship_to_applicant')} />
        <DropDownField gridClassName='col-md-4' id='applicant_id'
          selectClassName='reusable-select'
          optionList={setToWhom(this.props.applicants)}
          label='To whom'
          onChange={(event) => this.props.handleRelationshipTypeToApplicant(this.props.index, event.target.value, 'applicant_id')} />
        <InputComponent gridClassName='col-md-4' id='date_of_birth'
          value={minor.date_of_birth}
          label='Date of Birth' placeholder='Enter Date of Birth'
          type='text' onChange={(event) => this.props.onFieldChange(this.props.index, event.target.value, 'date_of_birth')} />
        <DropDownField gridClassName='col-md-4' id='gender'
          selectClassName='reusable-select'
          optionList={this.props.genderTypes}
          label='Gender'
          onChange={(event) => this.props.onFieldChange(this.props.index, dictionaryNilSelect(event.target.selectedOptions[0]), 'gender')} />
        <DropDownField id='child_financially_supported' gridClassName='col-md-4' value={minor.child_financially_supported}
          selectClassName={'reusable-select'}
          optionList={yesNo.items}
          label={'Do you financially support this child?'}
          onChange={(event) => this.props.onFieldChange(this.props.index, event.target.selectedOptions[0].value, 'child_financially_supported')} />
        <DropDownField id='child_adopted' gridClassName='col-md-4' value={minor.child_adopted}
          selectClassName={'reusable-select'}
          optionList={yesNo.items}
          label={'Is this child adopted?'}
          onChange={(event) => this.props.onFieldChange(this.props.index, event.target.selectedOptions[0].value, 'child_adopted')} />
      </form>
    )
  }
}

MinorCardField.propTypes = {
  index: PropTypes.number,
  minorChild: PropTypes.object.isRequired,
  applicants: PropTypes.array.isRequired,
  relationshipToApplicantTypes: PropTypes.array,
  genderTypes: PropTypes.array,
  handleRelationshipTypeToApplicant: PropTypes.func,
  onFieldChange: PropTypes.func
}
