import Immutable from 'immutable'
import React from 'react'
import PropTypes from 'prop-types'
import {checkArrayObjectPresence} from 'helpers/commonHelper.jsx'
import {OtherAdultsCardField} from 'components/common/OtherAdultsCardField'
import {addCardAsJS, removeCardWithId, getFocusClassName, handleRelationshipTypeToApplicant} from 'helpers/cardsHelper.jsx'
import {otherAdultsDefaults} from 'constants/defaultFields'

export default class OtherAdultsCardsGroup extends React.Component {
  constructor (props) {
    super(props)

    this.addCard = this.addCard.bind(this)
    this.handleRelationshipTypeChange = this.handleRelationshipTypeChange.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
    this.clickClose = this.clickClose.bind(this)
  }

  addCard (event) {
    this.props.setParentState('other_adults', addCardAsJS(this.props.otherAdults, otherAdultsDefaults))
  }

  clickClose (cardIndex) {
    this.props.setParentState('other_adults',
      removeCardWithId(this.props.otherAdults, cardIndex, otherAdultsDefaults))
  }

  onFieldChange (cardIndex, value, type) {
    let otherAdultsList = Immutable.fromJS(this.props.otherAdults)
    otherAdultsList = otherAdultsList.update(cardIndex, x => x.set(type, value))
    this.props.setParentState('other_adults', otherAdultsList.toJS())
  }

  handleRelationshipTypeChange (applicant, value, index, subIndex, type) {
    let itemsList = Immutable.fromJS(this.props.otherAdults)
    itemsList = handleRelationshipTypeToApplicant(itemsList, applicant.id, value, index, subIndex, type)
    this.props.setParentState('other_adults', itemsList.toJS())
  }

  render () {
    let otherAdultsList = this.props.otherAdults

    return (
      <div className='other_adults_card'>
        <div id='otherAdultsSection' onClick={() => this.props.setFocusState('otherAdultsSection')}
          className={this.props.getFocusClassName('otherAdultsSection') + ' ' + 'card other-adults-section double-gap-top active-bar'}>
          <div className='card-header'>
            <span>Other Information</span>
          </div>
          <div className='card-body'>
            {
              otherAdultsList.map((otherAdultsFields, index) => {
                const idPrefix = 'other_adults[' + index + '].'
                if (!otherAdultsFields.to_delete) {
                  return (
                    <div key={index} className='row list-item' >
                      <div > <a onClick={() => this.clickClose(index)} className='pull-right remove-btn'>Remove</a>
                      </div>
                      <OtherAdultsCardField
                        suffixTypes={this.props.suffixTypes}
                        prefixTypes={this.props.prefixTypes}
                        index={index}
                        idPrefix={idPrefix}
                        otherAdults={otherAdultsFields}
                        applicants={this.props.applicants}
                        handleRelationshipTypeChange={this.handleRelationshipTypeChange}
                        onFieldChange={this.onFieldChange}
                        validator={this.props.validator}
                        errors={this.props.errors[index]} />
                    </div>
                  )
                } else {
                  return (null)
                }
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

OtherAdultsCardsGroup.propTypes = {
  otherAdults: PropTypes.array.isRequired,
  applicants: PropTypes.array.isRequired

}

OtherAdultsCardsGroup.defaultProps = {
  otherAdults: [otherAdultsDefaults],
  applicants: [],
  errors: []
}
