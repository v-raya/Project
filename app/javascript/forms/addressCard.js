import React from 'react'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'
import {yesNo} from '../constants/constants'

export default class AddressCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stateTypes: {items: this.props.stateTypes.items},
      addressFieldValues: {
        state: {
          id: '',
          value: ''
        },
        type: {
          id: '1',
          value: 'physical'
        },
        street_address: '',
        city: '',
        zip: ''
      },
      physical_mailing_similar: ''
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange (value, e) {
    let data = this.state.addressFieldValues
    if (typeof (value) !== 'object' && e === 'physical_mailing_similar') {
      this.state.physical_mailing_similar = value.toLowerCase() === 'yes'
    } else if (typeof (value) === 'object') {
      data[e] = {id: value.target.selectedOptions[0].value, value: value.target.selectedOptions[0].text}
    } else {
      data[e] = value
    }

    this.setState({
      addressFieldValues: data
    })

    this.props.sendProps(this.state)
  }

  render () {
    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <InputComponent gridClassName='col-md-12' id='street_address'
              label='Physical Address:' placeholder=''
              onChange={(event, number) => this.onChange(event.target.value, ('street_address'))} />

            <InputComponent gridClassName='col-md-4' id='zip'
              label='Zip Code:' placeholder=''
              onChange={(event, number) => this.onChange(event.target.value, ('zip'))} />

            <InputComponent gridClassName='col-md-4' id='city'
              label='City:' placeholder=''
              onChange={(event, number) => this.onChange(event.target.value, ('city'))} />

            <DropDownField gridClassName='col-md-4' id='state'
              selectClassName={'reusable-select'}
              optionList={this.state.stateTypes.items}
              label={'State'}
              onChange={(event, number) => this.onChange(event, ('state'))} />

            <DropDownField defaultValue='ddd'
              gridClassName='col-md-6'
              selectClassName={'reusable-select'}
              optionList={yesNo.items}
              label={'Mailing address the same as Physical Address?'}
              onChange={(event, number) => this.onChange(event.target.selectedOptions[0].text, ('physical_mailing_similar'))} />
          </form>
        </div>
      </div>
    )
  }
}
