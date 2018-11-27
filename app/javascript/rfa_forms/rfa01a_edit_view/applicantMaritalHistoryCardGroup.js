import React from 'react'
import {yesNo} from 'constants/constants'
import Immutable from 'immutable'
import ApplicantMaritalHistoryCard from './applicantMaritalHistoryCard'
import AdultChildrenFields from './adultChildrenFields'
import {addCardAsJS, removeCard} from 'helpers/cardsHelper.jsx'
import {addressDefaults, relationshipToAdultsDefaults, adultChildrenDefaults, formerSpousesDefaults, applicantsHistoryDefaults} from 'constants/defaultFields'

export default class ApplicantMaritalHistoryCardGroup extends React.Component {
  constructor (props) {
    super(props)
    this.addMaritalHistoryCard = this.addMaritalHistoryCard.bind(this)
    this.addAdultChildCard = this.addAdultChildCard.bind(this)
    this.changeMaritalHistory = this.changeMaritalHistory.bind(this)
    this.changeAdultChild = this.changeAdultChild.bind(this)
    this.changeAdultHistoryAddress = this.changeAdultHistoryAddress.bind(this)
    this.handleRelationshipTypeToApplicantFormerSpouse = this.handleRelationshipTypeToApplicantFormerSpouse.bind(this)
    this.handleRelationshipTypeToApplicantAdultChild = this.handleRelationshipTypeToApplicantAdultChild.bind(this)
    this.onMaritalHistoryClickClose = this.onMaritalHistoryClickClose.bind(this)
    this.onAdultChildClickClose = this.onAdultChildClickClose.bind(this)
    this.updateNestedCards = this.updateNestedCards.bind(this)
    this.handleClearOnConditionalChange = this.handleClearOnConditionalChange.bind(this)
  }

  updateNestedCards (newCardFields, type) {
    const maritalHistory = Immutable.fromJS(this.props.applicantsHistory)
    const updatedMaritalHistory = maritalHistory.set(type, Immutable.fromJS(newCardFields))
    this.props.setParentState('applicants_history', updatedMaritalHistory.toJS())
  }

  addMaritalHistoryCard (formerSpouses) {
    const newSpouseFields = addCardAsJS(formerSpouses, formerSpousesDefaults)
    this.updateNestedCards(newSpouseFields, 'former_spouses')
  }

  addAdultChildCard (adultChildren) {
    const newAdultFields = addCardAsJS(adultChildren, adultChildrenDefaults)
    this.updateNestedCards(newAdultFields, 'adult_children')
  }

  onMaritalHistoryClickClose (index) {
    const formerSpousesList = removeCard(this.props.applicantsHistory.former_spouses, index, formerSpousesDefaults)
    this.updateNestedCards(formerSpousesList, 'former_spouses')
  }

  onAdultChildClickClose (index) {
    const adultChildrenList = removeCard(this.props.applicantsHistory.adult_children, index, adultChildrenDefaults)
    this.updateNestedCards(adultChildrenList, 'adult_children')
  }

  changeAdultChild (type, value, adultChildIndex) {
    const maritalHistory = Immutable.fromJS(this.props.applicantsHistory)
    let adultChildrenList = Immutable.fromJS(this.props.applicantsHistory.adult_children)
    adultChildrenList = adultChildrenList.update(adultChildIndex, x => x.set(type, value))
    const updatedMaritalHistory = maritalHistory.set('adult_children', adultChildrenList)
    this.props.setParentState('applicants_history', updatedMaritalHistory.toJS())
  }

  changeMaritalHistory (type, value, formerSpuseIndex) {
    const maritalHistory = Immutable.fromJS(this.props.applicantsHistory)
    let formerSpousesList = Immutable.fromJS(this.props.applicantsHistory.former_spouses)
    formerSpousesList = formerSpousesList.update(formerSpuseIndex, x => x.set(type, value))
    const updatedMaritalHistory = maritalHistory.set('former_spouses', formerSpousesList)
    this.props.setParentState('applicants_history', updatedMaritalHistory.toJS())
  }

  changeAdultHistoryAddress (type, value, index) {
    if (type === 'address') {
      this.changeAdultChild(type, value, index)
    } else {
      let address = Immutable.fromJS(this.props.applicantsHistory.adult_children[index].address)
      address = address.set(type, value)
      this.changeAdultChild('address', address.toJS(), index)
    }
  }

  handleRelationshipTypeToApplicantFormerSpouse (index, value, type) {
    const maritalHistory = Immutable.fromJS(this.props.applicantsHistory)
    let formerSpousesList = Immutable.fromJS(this.props.applicantsHistory.former_spouses)
    formerSpousesList = formerSpousesList.setIn([index, 'relationship_to_applicants', 0, type], value)
    const updatedMaritalHistory = maritalHistory.set('former_spouses', formerSpousesList)
    this.props.setParentState('applicants_history', updatedMaritalHistory.toJS())
  }

  handleRelationshipTypeToApplicantAdultChild (index, value, type) {
    const maritalHistory = Immutable.fromJS(this.props.applicantsHistory)
    let adultChildrenList = Immutable.fromJS(this.props.applicantsHistory.adult_children)
    adultChildrenList = adultChildrenList.setIn([index, 'relationship_to_applicants', 0, type], value)
    const updatedMaritalHistory = maritalHistory.set('adult_children', adultChildrenList)
    this.props.setParentState('applicants_history', updatedMaritalHistory.toJS())
  }

  handleClearOnConditionalChange (key, hiddenKey, value, hiddenDefaultValue, index) {
    if (value === 'false') {
      const maritalHistory = Immutable.fromJS(this.props.applicantsHistory)
      let newData = Immutable.fromJS(this.props.applicantsHistory.adult_children)
      newData = newData.update(index, x => x.set(key, value))
      newData = newData.update(index, x => x.set(hiddenKey, hiddenDefaultValue))
      const updatedMaritalHistory = maritalHistory.set('adult_children', newData)
      this.props.setParentState('applicants_history', updatedMaritalHistory.toJS())
    } else {
      this.changeAdultChild(key, value, index)
    }
  }

  render () {
    const applicantsHistory = this.props.applicantsHistory
    const applicantMaritalHistories = applicantsHistory && applicantsHistory.former_spouses
    const adultChildrenList = applicantsHistory && applicantsHistory.adult_children

    return (
      <div className='applicant_marital_history_cards'>
        <div id='ApplicantMaritalHistoryCardGroup' onClick={() => this.props.setFocusState('ApplicantMaritalHistoryCardGroup')}
          className={this.props.getFocusClassName('ApplicantMaritalHistoryCardGroup') + ' ' + 'card phone-section double-gap-top active-bar'}>
          <div className='card-header'>
            <span>Applicants Marital / Domestic Partnership History</span>
          </div>
          <div className='card-body'>
            {
              applicantMaritalHistories.map((applicantMaritalHistory, index) => {
                return (
                  <div key={'formerSpouse' + '[' + index + ']'} className='row list-item' >
                    <div> <a onClick={(event) => this.onMaritalHistoryClickClose(index)} className='pull-right remove-btn'>Remove</a>
                    </div>
                    { <ApplicantMaritalHistoryCard
                      index={index}
                      idPrefix={'applicantsHistory.former_spouses' + '[' + index + '].'}
                      applicants={this.props.applicants}
                      maritalHistory={applicantMaritalHistory}
                      validator={this.props.validator}
                      changeMaritalHistory={this.changeMaritalHistory}
                      handleRelationshipTypeToApplicant={this.handleRelationshipTypeToApplicantFormerSpouse}
                      setParentState={this.props.setParentState}
                      relationshipTypes={this.props.relationshipTypes}
                      suffixTypes={this.props.suffixTypes}
                      prefixTypes={this.props.prefixTypes}
                      nameTypes={this.props.nameTypes}
                      stateTypes={this.props.stateTypes}
                      marriageTerminationReasons={this.props.marriageTerminationReasons}
                      errors={this.props.errors.former_spouses[index]} /> }
                  </div>
                )
              })
            }
            <div className='text-center'>
              <button onClick={(event) => { this.addMaritalHistoryCard(applicantMaritalHistories) }} className='btn btn-default'>Add another Marital History +</button>
            </div>
          </div>
          <div className='card-header'>
            <span>Adult Children of All Applicants</span>
          </div>
          <div className='card-body'>
            {
              adultChildrenList.map((adultChild, index) => {
                return (

                  <div key={'adultChild' + '[' + index + ']'} className='row list-item' >
                    <a onClick={() => this.onAdultChildClickClose(index)} className='pull-right remove-btn'>Remove</a>

                    { <AdultChildrenFields
                      index={index}
                      idPrefix={'applicantsHistory.adult_children' + '[' + index + '].'}
                      applicants={this.props.applicants}
                      adultChild={adultChild}
                      validator={this.props.validator}
                      changeAdultChild={this.changeAdultChild}
                      setParentState={this.props.setParentState}
                      handleClearOnConditionalChange={this.handleClearOnConditionalChange}
                      changeAdultHistoryAddress={this.changeAdultHistoryAddress}
                      handleRelationshipTypeToApplicant={this.handleRelationshipTypeToApplicantAdultChild}
                      relationshipToApplicantTypes={this.props.relationshipToApplicantTypes}
                      suffixTypes={this.props.suffixTypes}
                      prefixTypes={this.props.prefixTypes}
                      nameTypes={this.props.nameTypes}
                      stateTypes={this.props.stateTypes}
                    />}
                  </div>

                )
              })
            }
            <div className='text-center'>
              <button onClick={() => this.addAdultChildCard(adultChildrenList)} className='btn btn-default'>Add another Adult Child +</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

ApplicantMaritalHistoryCardGroup.defaultProps = {
  applicants: [],
  applicantsHistory: applicantsHistoryDefaults,
  former_spouses: [formerSpousesDefaults],
  adult_children: [adultChildrenDefaults],
  errors: {
    former_spouses: [],
    adult_children: []
  }
}
