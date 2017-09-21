import React from 'react'
import Immutable from 'immutable'
import moment from 'moment'
import momentLocalizer from 'react-widgets-moment'
import {InputComponent} from 'components/common/inputFields'
import {TextAreaComponent} from 'components/common/textArea'
import {DropDownField} from 'components/common/dropDownField'
import {getDictionaryId, dictionaryNilSelect, FormateDobForDisplay, FormatDoBForPersistance} from 'helpers/commonHelper.jsx'
import {DateOfBirthField} from 'components/common/DateFields.jsx'
import Validator from 'helpers/validator'

moment.locale('en')
momentLocalizer()

const dateValidator = {rule: 'isValidDate', message: 'date is invalid'}

export default class RelationshipBetweenApplicantsFields extends React.Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)

    this.validator = this.props.validator.addFieldValidation(this.props.idPrefix + 'date_of_relationship', dateValidator)
  }

  onChange (key, value) {
    let newData = Immutable.fromJS(this.props.relationshipBetweenApplicants)
    newData = newData.update(0, x => x.set(key, value))

    this.props.setParentState('relationshipBetweenApplicants', newData.toJS())
  }
  render () {
    const relationship = this.props.relationshipBetweenApplicants
    const relationshipType = relationship !== undefined && relationship.relationship_type !== undefined ? relationship.relationship_type.value : false
    const hideRelationshipDetails = relationshipType === 'Married' || relationshipType === 'Domestic Partnership' ? 'row' : 'row hidden'
    const hideOtherRelationship = relationshipType === 'Other' ? 'row' : 'row hidden'
    const applicant1FirstName = this.props.applicants[0] !== undefined && this.props.applicants[0].first_name ? this.props.applicants[0].first_name : false
    const applicant1MiddleName = this.props.applicants[0] !== undefined && this.props.applicants[0].middle_name ? this.props.applicants[0].middle_name : ''
    const applicant1LastName = this.props.applicants[0] !== undefined && this.props.applicants[0].last_name ? this.props.applicants[0].last_name : ''
    const applicant2FirstName = this.props.applicants[1] !== undefined && this.props.applicants[1].first_name ? this.props.applicants[1].first_name : false
    const applicant2MiddleName = this.props.applicants[1] !== undefined && this.props.applicants[1].middle_name ? this.props.applicants[1].middle_name : ''
    const applicant2LastName = this.props.applicants[1] !== undefined && this.props.applicants[1].last_name ? this.props.applicants[1].last_name : ''

    const relationshipId = this.props.idPrefix + 'date_of_relationship'

    return (
      <form>
        <div className='row'>
          <DropDownField gridClassName='col-md-12' id='relationship_type'
            selectClassName='reusable-select'
            value={getDictionaryId(relationship.relationship_type)}
            optionList={this.props.relationshipTypes}
            label={'Relationship between ' + applicant1FirstName + ' ' + applicant1MiddleName + ' ' + applicant1LastName + ' and' +
            ' ' + applicant2FirstName + ' ' + applicant2MiddleName + ' ' + applicant2LastName}
            onChange={(event) => this.props.setParentState('relationship_type', dictionaryNilSelect(event.target.selectedOptions[0]))} />
        </div>
        <div className={'relationship-status ' + hideRelationshipDetails}>Status of relationship</div>
        <div className={'relationship-status-details ' + hideRelationshipDetails} >

          <DateOfBirthField
            gridClassName='col-md-4'
            label='Date'
            id={'date_of_relationship'}
            value={FormateDobForDisplay(relationship.date_of_relationship || '')}
            errors={this.props.validator.fieldErrors(relationshipId)}
            onChange={(event) => this.props.setParentState('date_of_relationship',
              FormatDoBForPersistance(event.target.value || ''))}
            onBlur={(event) => this.props.validator.validateField(relationshipId, event.target.value)} />

          <InputComponent gridClassName='col-md-4' id='place_of_relationship_city'
            value={relationship.place_of_relationship_city}
            label='City' placeholder='Enter City'
            type='text' onChange={(event) => this.props.setParentState('place_of_relationship_city', event.target.value)} />
          <DropDownField gridClassName='col-md-4' id='place_of_relationship_state'
            value={getDictionaryId(relationship.place_of_relationship_state)}
            selectClassName='reusable-select'
            optionList={this.props.stateTypes}
            label='State'
            onChange={(event) => this.props.setParentState('place_of_relationship_state', dictionaryNilSelect(event.target.selectedOptions[0]))} />
        </div>
        <div className={hideOtherRelationship}>
          <TextAreaComponent gridClassName='col-md-12' id='other_relationship'
            value={relationship.other_relationship}
            label='Please provide details of other_relationship' placeholder=''
            onChange={(event) => this.props.setParentState('other_relationship', event.target.value)} />

        </div>
      </form>
    )
  }
}

RelationshipBetweenApplicantsFields.defaultProps = {
  idPrefix: ''
}
