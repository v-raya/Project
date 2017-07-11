import React from 'react'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'
import {yesNo} from '../constants/constants'

export default class AddressCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stateTypes: {items: this.props.stateTypes.items},
      visibleMailingSameAsPhysical: false,
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
        zip: '',

        secondary_state: {
          id: '',
          value: ''
        },
        secondary_street_address: '',
        secondary_city: '',
        secondary_zip: ''
      },

      physical_mailing_similar: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleMailingAddress = this.handleMailingAddress.bind(this)
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

  handleMailingAddress (event) {
    if (event.target.value === '2') {
      this.setState({
        visibleMailingSameAsPhysical: true
      })
    } else {
      this.setState({
        visibleMailingSameAsPhysical: false
      })
    }
  }

  render () {
    const hiddenMailingSameAsPhysical = this.state.visibleMailingSameAsPhysical ? '' : 'hidden'
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

            <DropDownField gridClassName='col-md-6'
              selectClassName={'reusable-select'}
              optionList={yesNo.items}
              label={'Mailing address the same as Physical Address?'}
              onChange={this.handleMailingAddress} />

            <div className={hiddenMailingSameAsPhysical}>
              <InputComponent gridClassName='col-md-12' id='secondary_street_address'
                label='Physical Address:' placeholder=''
                onChange={(event, number) => this.onChange(event.target.value, ('secondary_street_address'))} />

              <InputComponent gridClassName='col-md-4' id='secondary_zip'
                label='Zip Code:' placeholder=''
                onChange={(event, number) => this.onChange(event.target.value, ('secondary_zip'))} />

              <InputComponent gridClassName='col-md-4' id='secondary_city'
                label='City:' placeholder=''
                onChange={(event, number) => this.onChange(event.target.value, ('secondary_city'))} />

              <DropDownField gridClassName='col-md-4' id='secondary_state'
                selectClassName={'reusable-select'}
                optionList={this.state.stateTypes.items}
                label={'State'}
                onChange={(event, number) => this.onChange(event, ('secondary_state'))} />

            </div>

          </form>
        </div>
      </div>
    )
  }
}
