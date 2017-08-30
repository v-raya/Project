import Immutable from 'immutable'
import React from 'react'
import PropTypes from 'prop-types'
import {PhoneNumberField} from 'components/common/phoneNumberFields'
import {addCardAsJS, removeCardAsJS} from 'helpers/cardsHelper.jsx'
import Validator from 'helpers/validator'

export const blankPhoneNumberFields = Object.freeze({
  number: '',
  phone_type: {id: 2, value: 'Home'},
  preferred: false
})

export default class PhoneComponent extends React.Component {
  constructor (props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.onPhoneClickClose = this.onPhoneClickClose.bind(this)
    this.onPhoneFieldChange = this.onPhoneFieldChange.bind(this)

    // const phoneNumberValidator = {
    //   number: [
    //     {rule: 'is10digits', message: 'Invalid Phone Number'}
    //   ]
    // }
    // this.validator = new Validator(phoneNumberValidator)
  }

  onPhoneClickClose (phoneCardIndex) {
    this.props.setParentState('phones',
      removeCardAsJS(this.props.phones, phoneCardIndex, blankPhoneNumberFields))
  }

  onPhoneFieldChange (phoneCardIndex, value, type) {
    // if (!this.validator.fieldErrors(type).isEmpty()) {
    // this.validator.validateField(type, value)
    // }

    let phoneNumbersList = Immutable.fromJS(this.props.phones)
    // if type preferred then set all preferred =false
    if (type === 'preferred') {
      phoneNumbersList = phoneNumbersList.map(x => x.set(type, false))
    }

    phoneNumbersList = phoneNumbersList.update(phoneCardIndex, x => x.set(type, value))
    this.props.setParentState('phones', phoneNumbersList.toJS())
  }

  addCard (event) {
    this.props.setParentState('phones', addCardAsJS(this.props.phones, blankPhoneNumberFields))
  }

  render () {
    let phonesList = this.props.phones
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
                  // validator={this.validator}
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

PhoneComponent.defaultProps = {
  phones: [blankPhoneNumberFields]
}
