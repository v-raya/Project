import Immutable from 'immutable'
import React from 'react'
import {PhoneNumberField} from '../common/phoneNumberFields'

const blankPhoneNumberFields = {
  number: '',
  phoneType: '',
  isPreferred: false
}

export default class PhoneComponent extends React.Component {
  constructor (props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.onPhoneClickClose = this.onPhoneClickClose.bind(this)
    this.onPhoneFieldChange = this.onPhoneFieldChange.bind(this)

    this.state = {
      phoneNumbers: [
        blankPhoneNumberFields]
    }
  }

  onPhoneClickClose (phoneCardIndex) {
    let phoneNumbersList = Immutable.fromJS(this.state.phoneNumbers)

    phoneNumbersList = phoneNumbersList.delete(phoneCardIndex)
    if (phoneNumbersList.size === 0) {
      phoneNumbersList = phoneNumbersList.push(blankPhoneNumberFields)
    }

    this.setState({
      // convert to regular js array
      phoneNumbers: phoneNumbersList.toJS()
    })
  }

  onPhoneFieldChange (phoneCardIndex, value, type) {
    let phoneNumbersList = Immutable.fromJS(this.state.phoneNumbers)

    // if type preferred then set all isPreferred=false
    if (type === 'isPreferred') {
      phoneNumbersList = phoneNumbersList.map(x => x.set(type, false))
    }

    phoneNumbersList = phoneNumbersList.update(phoneCardIndex, x => x.set(type, value))

    this.setState({
      // convert to regular js array
      phoneNumbers: phoneNumbersList.toJS()
    })
  }

  addCard (event) {
    let phoneNumbersList = this.state.phoneNumbers
    phoneNumbersList.push(blankPhoneNumberFields)

    this.setState({
      phoneNumbers: phoneNumbersList
    })
  }

  render () {
    let phoneListToChild = this.state.phoneNumbers
    return (
      <div className='card-body'>
        {
          phoneListToChild.map((numberFields, index) => {
            return (
              <PhoneNumberField
                key={index}
                index={index}
                phoneFields={numberFields}
                phoneTypes={this.props.phoneTypes}
                onPhoneFieldChange={this.onPhoneFieldChange}
                onClickClose={this.onPhoneClickClose}
              />
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
