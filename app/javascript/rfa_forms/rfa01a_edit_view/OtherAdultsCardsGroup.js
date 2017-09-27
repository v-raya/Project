import Immutable from 'immutable'
import React from 'react'
import {checkArrayObjectPresence} from 'helpers/commonHelper.jsx'
import {OtherAdultsCardField} from 'components/common/OtherAdultsCardField'
import {handleRelationshipTypeToApplicant, getFocusClassName} from 'helpers/cardsHelper.jsx'

const relationshipToAdultsDefaults = Object.freeze({
  applicant_id: '',
  relationship_to_applicant: {
    id: '',
    value: ''
  }
})
const otherAdultsDefaults = Object.freeze({
  index: 0,
  first_name: '',
  middle_name: '',
  last_name: '',
  date_of_birth: '',
  relationship_to_applicants: [
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

  handleRelationshipTypeToApplicant (index, value, type) {
    this.props.setParentState('otherAdults', handleRelationshipTypeToApplicant(index, value, type, checkArrayObjectPresence(this.props.otherAdults) || [otherAdultsDefaults]))
  }

  render () {
    let otherAdultsList = checkArrayObjectPresence(this.props.otherAdults) || [otherAdultsDefaults]

    return (
      <div className='other_adults_card'>

        <div id='otherAdultsSection' onClick={() => this.props.setFocusState('otherAdultsSection')}
          className={getFocusClassName('otherAdultsSection') + ' ' + 'card other-adults-section double-gap-top'}>

          <div className='card-header'>
            <span>Other Information</span>
          </div>
          <div className='card-body'>
            {
              otherAdultsList.map((otherAdultsFields, index) => {
                const idPrefix = 'otherAdults[' + index + '].'
                return (
                  <div key={index} className='row list-item' >
                    <div > <span onClick={() => this.clickClose(index)} className='pull-right glyphicon glyphicon-remove' />
                    </div>
                    <OtherAdultsCardField
                      index={index}
                      idPrefix={idPrefix}
                      relationship_types={this.props.relationship_types}
                      otherAdults={otherAdultsFields}
                      applicants={this.props.applicants}
                      handleRelationshipTypeToApplicant={this.handleRelationshipTypeToApplicant}
                      clickClose={this.clickClose}
                      onFieldChange={this.onFieldChange}
                      validator={this.props.validator}
                      errors={this.props.errors[index]} />
                  </div>

                )
              })
            }

            <div className='text-center'>
              <button onClick={this.addCard} className='btn btn-default'>Add another Adult +</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

OtherAdultsCardsGroup.defaultProps = {
  applicants: [],
  errors: []
}
