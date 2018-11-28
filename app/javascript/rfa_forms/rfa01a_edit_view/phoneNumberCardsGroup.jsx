import Immutable from 'immutable'
import React from 'react'
import PropTypes from 'prop-types'
import {PhoneNumberField} from 'components/common/phoneNumberFields'
import {addCardAsJS, removeCard} from 'helpers/cardsHelper.jsx'
import {blankPhoneNumberFields} from 'constants/defaultFields'

export default class PhoneComponent extends React.Component {
  constructor (props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.onPhoneClickClose = this.onPhoneClickClose.bind(this)
    this.onPhoneFieldChange = this.onPhoneFieldChange.bind(this)
  }

  onPhoneClickClose (phoneCardIndex) {
    this.props.setParentState('phones',
      removeCard(this.props.phones, phoneCardIndex, Immutable.fromJS(blankPhoneNumberFields)))
  }

  onPhoneFieldChange (phoneCardIndex, value, type) {
    let phoneNumbersList = this.props.phones
    if (type === 'preferred') {
      phoneNumbersList = phoneNumbersList.map(x => x.set(type, false))
    }
    phoneNumbersList = phoneNumbersList.update(phoneCardIndex, x => x.set(type, value))
    this.props.setParentState('phones', phoneNumbersList)
  }

  addCard (event) {
    this.props.setParentState('phones', addCardAsJS(this.props.phones, Immutable.fromJS(blankPhoneNumberFields)))
  }

  render () {
    const phonesList = this.props.phones.toJS()

    return (
      <div className='card-body'>
        {
          phonesList.map((numberFields, index) => {
            const idPrefix = this.props.idPrefix + 'phones[' + index + '].'
            return (
              <div key={idPrefix} className='row list-item'>
                <button onClick={(event) => this.onPhoneClickClose(index)}
                  className='pull-right remove-btn'>Remove</button>
                <PhoneNumberField
                  index={index}
                  idPrefix={idPrefix}
                  phoneFields={numberFields}
                  phoneTypes={this.props.phoneTypes}
                  onPhoneFieldChange={this.onPhoneFieldChange}
                  validator={this.props.validator}
                  errors={this.props.errors[index]}
                />
              </div>
            )
          })
        }
        <div className='text-center'>
          <button onClick={this.addCard} id='addAnotherNumber' className='btn btn-default'>Add another Number +</button>
        </div>
      </div>
    )
  }
}

PhoneComponent.propTypes = {
  idPrefix: PropTypes.string,
  phoneTypes: PropTypes.array.isRequired,
  phones: PropTypes.object.isRequired,
  setParentState: PropTypes.func.isRequired
}

PhoneComponent.defaultProps = {
  idPrefix: '',
  phones: Immutable.fromJS([blankPhoneNumberFields]),
  errors: []
}
