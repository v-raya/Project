import Immutable from 'immutable'
import React from 'react'
import PropTypes from 'prop-types'
import {checkArrayObjectPresence} from 'helpers/commonHelper.jsx'
import {MinorCardField} from './minorCardField'
import {addCardAsJS, removeCardWithId, getFocusClassName, handleRelationshipTypeToApplicant} from 'helpers/cardsHelper.jsx'
import {minorDefaults} from 'constants/defaultFields'

export default class MinorCardsGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {minorChildren: this.prepareChildrenList(this.props.minorChildren)}
    this.addCard = this.addCard.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
    this.clickClose = this.clickClose.bind(this)
    this.handleRelationshipTypeChange = this.handleRelationshipTypeChange.bind(this)
  }

  prepareChildrenList (propsChildrenList) {
    let minorChildrenList = JSON.parse(JSON.stringify(propsChildrenList)) // clone minor children
    let visibleChildrenList = propsChildrenList.filter(minorChild => minorChild && !minorChild.to_delete)
    if (!visibleChildrenList.length) {
      let childlist = Immutable.fromJS(minorChildrenList)
      minorChildrenList = childlist.push(minorDefaults).toJS()
    }
    return minorChildrenList
  }

  updateState (childrenList) {
    this.props.setParentState('minor_children', childrenList)
    this.setState({minorChildren: this.prepareChildrenList(childrenList)})
  }

  addCard (event) {
    this.updateState(addCardAsJS(this.state.minorChildren, minorDefaults))
  }

  clickClose (cardIndex) {
    this.updateState(removeCardWithId(this.state.minorChildren, cardIndex, null))
  }

  onFieldChange (cardIndex, value, type) {
    let itemsList = Immutable.fromJS(this.state.minorChildren)
    itemsList = itemsList.update(cardIndex, x => x.set(type, value))
    this.updateState(itemsList.toJS())
  }

  handleRelationshipTypeChange (applicant, value, index, subIndex, type) {
    let itemsList = Immutable.fromJS(this.state.minorChildren)
    itemsList = handleRelationshipTypeToApplicant(itemsList, applicant.id, value, index, subIndex, type)
    this.updateState(itemsList.toJS())
  }

  render () {
    return (
      <div className='minor_card'>
        <div id='minorsSection' onClick={() => this.props.setFocusState('minorsSection')}
          className={this.props.getFocusClassName('minorsSection') + ' ' + 'card minors-section double-gap-top active-bar'}>
          <div className='card-header'>
            <span>Other Information</span>
          </div>
          <div className='card-body'>
            {
              this.state.minorChildren.map((minor, index) => {
                const idPrefix = 'minor_children[' + index + '].'
                if (!minor.to_delete) {
                  return (
                    <div key={index} className='row list-item' >
                      <div> <a onClick={() => this.clickClose(index)} className='pull-right remove-btn'>Remove</a>
                      </div>
                      <MinorCardField
                        index={index}
                        idPrefix={idPrefix}
                        genderTypes={this.props.genderTypes}
                        minorChild={minor}
                        handleRelationshipTypeChange={this.handleRelationshipTypeChange}
                        applicants={this.props.applicants}
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
              <button onClick={this.addCard} className='btn btn-default'>Add another minor +</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MinorCardsGroup.propTypes = {
  minorChildren: PropTypes.array.isRequired,
  applicants: PropTypes.array.isRequired

}

MinorCardsGroup.defaultProps = {
  minorChildren: [minorDefaults],
  applicants: [],
  errors: []
}
