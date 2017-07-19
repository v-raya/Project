import Immutable from 'immutable'
import React from 'react'
import {checkArrayObjectPresence} from '../helpers/commonHelper.jsx'
import {OtherAdultsCardField} from '../common/OtherAdultsCardField'

const otherAdultsDefaults = Object.freeze({
  index: 0,
  nameField: {
    firstName: '',
    lastName: '',
    middleName: ''
  },
  dateOfBirth: '',
  availableApplicant: '',
  relationshipType: '',
  relationshipTypes: {
    items: []
  },
  availableApplicants: {
    items: []
  }
})

export default class OtherAdultsCardsGroup extends React.Component {
  constructor (props) {
    super(props)

    this.addCard = this.addCard.bind(this)
    this.handleNameFieldInput = this.handleNameFieldInput.bind(this)
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

  handleNameFieldInput (index, value, type) {
    let otherAdultsList = Immutable.fromJS(checkArrayObjectPresence(this.props.otherAdults) || [otherAdultsDefaults])
    otherAdultsList = otherAdultsList.update(index,
       otherAdult => otherAdult.setIn(['nameField', type], value))
    this.props.setParentState('otherAdults', otherAdultsList.toJS())
  }

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
            <span>Other adults residing or Regularly present in the home</span>
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
                  relationshipTypes={this.props.relationshipTypes}
                  otherAdults={otherAdultsFields}
                  handleNameFieldInput={this.handleNameFieldInput}
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
