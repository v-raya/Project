import Immutable from 'immutable'
import React from 'react'
import PropTypes from 'prop-types'
import {PhoneNumberField} from '../common/phoneNumberFields'
import {getDictionaryId, checkArrayObjectPresence} from '../helpers/commonHelper.jsx'

const blankPhoneNumberFields = {
  number: '',
  phone_type: {id: '', value: ''},
  preferred: false
}

export default class PhoneComponent extends React.Component {
  constructor (props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.onPhoneClickClose = this.onPhoneClickClose.bind(this)
    this.onPhoneFieldChange = this.onPhoneFieldChange.bind(this)
  }

  onPhoneClickClose (phoneCardIndex) {
    let phoneNumbersList = Immutable.fromJS(checkArrayObjectPresence(this.props.phones) || [blankPhoneNumberFields])

    phoneNumbersList = phoneNumbersList.delete(phoneCardIndex)
    if (phoneNumbersList.size === 0) {
      phoneNumbersList = phoneNumbersList.push(blankPhoneNumberFields)
    }
    this.props.setParentState('phones', phoneNumbersList.toJS())
  }

  onPhoneFieldChange (phoneCardIndex, value, type) {
    let phoneNumbersList = Immutable.fromJS(checkArrayObjectPresence(this.props.phones) || [blankPhoneNumberFields])

    // if type preferred then set all preferred =false
    if (type === 'preferred') {
      phoneNumbersList = phoneNumbersList.map(x => x.set(type, false))
    }

    phoneNumbersList = phoneNumbersList.update(phoneCardIndex, x => x.set(type, value))
    this.props.setParentState('phones', phoneNumbersList.toJS())
  }

  addCard (event) {
    let phonesList = checkArrayObjectPresence(this.props.phones) || [blankPhoneNumberFields]
    phonesList.push(blankPhoneNumberFields)
    this.props.setParentState('phones', phonesList)
  }

  render () {
    let phonesList = checkArrayObjectPresence(this.props.phones) || [blankPhoneNumberFields]
    return (
      <div className='card-body'>
        {
          phonesList.map((numberFields, index) => {
            return (
              <div key={index} className='row list-item'>
                <span onClick={(event) => this.onPhoneClickClose(index)}
                  className='pull-right glyphicon glyphicon-remove' />
                <PhoneNumberField
                  index={index}
                  phoneFields={numberFields}
                  phoneTypes={this.props.phoneTypes}
                  onPhoneFieldChange={this.onPhoneFieldChange}
                />
              </div>
            )
          })
        }
        <div className='text-center'>
          <button onClick={this.addCard} className='btn btn-default'>Add another Number +</button>
        </div>
      </div>
    )
  }
}

PhoneComponent.propTypes = {
  phoneTypes: PropTypes.array.isRequired,
  phones: PropTypes.array.isRequired,
  setParentState: PropTypes.func.isRequired
}
