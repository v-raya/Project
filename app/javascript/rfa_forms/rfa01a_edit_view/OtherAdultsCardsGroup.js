import Immutable from 'immutable'
import React from 'react'
import {checkArrayObjectPresence} from 'helpers/commonHelper.jsx'
import {OtherAdultsCardField} from 'components/common/OtherAdultsCardField'
const relationshipToAdultsDefaults = Object.freeze({
//  'applicant_id': null,
  'relationship_to_applicant': {
    'id': 0,
    'value': ''
  }
})
const otherAdultsDefaults = Object.freeze({
  index: 0,
  // 'name_prefix': {
  //   'id': 0,
  //   'value': ''
  // },
  'first_name': '',
  'middle_name': '',
  'last_name': '',
  // 'name_suffix': {
  //   'id': 0,
  //   'value': ''
  // },
//  'date_of_birth': '',
  'relationship_to_applicants': [
    relationshipToAdultsDefaults
  ],
  relationship_types: {
    items: []
  }
})

export default class OtherAdultsCardsGroup extends React.Component {
  constructor (props) {
    super(props)

    this.addCard = this.addCard.bind(this)
    this.handleRelationshipTypeToApplicant = this.handleRelationshipTypeToApplicant.bind(this)
    this.handleToWhom = this.handleToWhom.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
    this.clickClose = this.clickClose.bind(this)
  }

  addCard (event) {
    let adultsList = checkArrayObjectPresence(this.props.otherAdults) || [otherAdultsDefaults]
    adultsList.push(otherAdultsDefaults)
    this.props.setParentState('otherAdults', adultsList)
  }

  clickClose (cardIndex) {
    let otherAdults = Immutable.fromJS(checkArrayObjectPresence(this.props.otherAdults) || [otherAdultsDefaults])

    otherAdults = otherAdults.delete(cardIndex)
    if (otherAdults.size === 0) {
      otherAdults = otherAdults.push(otherAdultsDefaults)
    }
    this.props.setParentState('otherAdults', otherAdults.toJS())
  }

  onFieldChange (cardIndex, value, type) {
    let otherAdultsList = Immutable.fromJS(checkArrayObjectPresence(this.props.otherAdults) || [otherAdultsDefaults])
    if (otherAdultsList.size === 0) {
      otherAdultsList = otherAdultsList.push(otherAdultsDefaults)
    }
    otherAdultsList = otherAdultsList.update(cardIndex, x => x.set(type, value))
    this.props.setParentState('otherAdults', otherAdultsList.toJS())
  }

  handleRelationshipTypeToApplicant (index, value) {
    let otherAdults = checkArrayObjectPresence(this.props.otherAdults) || [otherAdultsDefaults]
    let otherAdultsList = Immutable.fromJS(otherAdults)
    let relationshipList = Immutable.fromJS(otherAdults[index].relationship_to_applicants[0])

    relationshipList = relationshipList.setIn(['relationship_to_applicant', 'id'], value)
    relationshipList = relationshipList.setIn(['relationship_to_applicant', 'value'], this.props.relationship_types[value].value)

    otherAdultsList = otherAdultsList.update(index, x => x.set('relationship_to_applicants', relationshipList))
    this.props.setParentState('otherAdults', otherAdultsList.toJS())
  }
  handleToWhom (index, value) {
    let otherAdults = checkArrayObjectPresence(this.props.otherAdults) || [otherAdultsDefaults]
    let otherAdultsList = Immutable.fromJS(otherAdults)
    let relationships = Immutable.fromJS(otherAdults[index].relationship_to_applicants)
    relationships = relationships.set('applicant_id', value)
    otherAdultsList = otherAdultsList.update(index, x => x.set('relationship_to_applicants', relationships))

    this.props.setParentState('otherAdults', otherAdultsList.toJS())
  }
  // handleNameFieldInput (index, value, type) {
  //   let otherAdultsList = Immutable.fromJS(checkArrayObjectPresence(this.props.otherAdults) || [otherAdultsDefaults])
  //   otherAdultsList = otherAdultsList.update(index,
  //     otherAdult => otherAdult.setIn(['nameField', type], value))
  //   this.props.setParentState('otherAdults', otherAdultsList.toJS())
  // }

  getFocusClassName (componentName) {
    return this.props.focusComponentName === componentName ? 'edit' : 'show'
  }

  render () {
    let otherAdultsList = checkArrayObjectPresence(this.props.otherAdults) || [otherAdultsDefaults]

    return (
      <div className='other_adults_card'>

        <div id='otherAdultsSection' onClick={() => this.props.setFocusState('otherAdultsSection')}
          className={this.getFocusClassName('otherAdultsSection') + ' ' + 'card other-adults-section double-gap-top'}>

          <div className='card-header'>
            <span>Other Information</span>
          </div>
          <div className='card-body'>
            {
              otherAdultsList.map((otherAdultsFields, index) => {
                return (
                  <div key={index} className='row list-item' >
                    <div > <span onClick={() => this.clickClose(index)} className='pull-right glyphicon glyphicon-remove' />
                    </div>
                    <OtherAdultsCardField
                      index={index}
                      relationship_types={this.props.relationship_types}
                      otherAdults={otherAdultsFields}
                      handleRelationshipTypeToApplicant={this.handleRelationshipTypeToApplicant}
                      handleToWhom={this.handleToWhom}
                      clickClose={this.clickClose}
                      onFieldChange={this.onFieldChange} />
                  </div>

                )
              })
            }
          </div>

          <div className='text-center'>
            <button onClick={this.addCard} className='btn btn-default'>Add another Adult +</button>
          </div>
        </div>
      </div>
    )
  }
}
