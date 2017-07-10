import React from 'react'
import {PhoneNumberField} from '../common/phoneNumberFields'

export default class PhoneComponent extends React.Component {
  constructor (props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.removeCard = this.removeCard.bind(this)
    this.checkPreferred = this.checkPreferred.bind(this)
    this.state = {
      phoneComponentValue: 0,
      phoneFieldList: [{
        ID: 0,
        number: '',
        phone_type: {
          id: '',
          value: ''
        },
        is_preferred: false
      }],
      'insert': true
    }
  }
  removeCard (value) {
    let newPhoneList = []
    newPhoneList = newPhoneList.concat(this.state.phoneFieldList)
    if (this.state.phoneComponentValue > 0) {
      for (var i = 0; i < this.state.phoneFieldList.length; i++) {
        if (newPhoneList[i].ID === value) {
          newPhoneList.splice(i, 1)
          break
        }
      }
      this.state.phoneComponentValue -= 1
    }
    this.setState({
      phoneFieldList: newPhoneList
    })
  }
  addCard (event) {
    this.setState({
      'insert': true
    })
    if (this.state.insert) {
      this.state.phoneComponentValue += 1
      let phoneList = this.state.phoneFieldList
      phoneList.push({
        ID: this.state.phoneComponentValue,
        number: '',
        phone_type: {
          id: '',
          value: ''
        },
        is_preferred: false
      })
      this.setState({
        phoneFieldList: phoneList
      })
    }
  }
  checkPreferred (data) {
    var changedPhoneList = []
    changedPhoneList = changedPhoneList.concat(this.state.phoneFieldList)
    for (var i = 0; i < changedPhoneList.length; i++) {
      if (data.phoneField.ID !== changedPhoneList[i].ID) {
        changedPhoneList[i].is_preferred = false
      }
    }
  }
  render () {
    let phoneListToChild = this.state.phoneFieldList
    return (
      <div className='card-body'>
        {
          phoneListToChild.map((i) => {
            return <PhoneNumberField key={i.ID} id={i.ID} {...this}/>
          })
        }
        <div className='text-center'>
          <button onClick={this.addCard} className='btn btn-default'>Add another Number +</button>
        </div>
      </div>
    )
  }
}
