import React from 'react'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'
import {yesNo} from '../constants/constants'

export default class AddressCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {stateTypes: {items: this.props.stateTypes.items}}
    this.onChange = this.onChange.bind(this)
  }
  onChange (value) {
    var x = this
    console.log(value)
  }
  render () {
    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <InputComponent gridClassName='col-md-12' id='physicalAddress'
              label='Physical Address:' placeholder='' />

            <InputComponent gridClassName='col-md-4' id='zip'
              label='Zip Code:' placeholder='' />

            <InputComponent gridClassName='col-md-4' id='lastName'
              label='City:' placeholder='' />

            <DropDownField gridClassName='col-md-4'
              selectClassName={'reusable-select'}
              optionList={this.state.stateTypes.items}
              label={'State'} />

            <DropDownField defaultValue='ddd'
              gridClassName='col-md-6'
              selectClassName={'reusable-select'}
              optionList={yesNo.items}
              label={'Mailing address the same as Physical Address?'} />
          </form>
        </div>
      </div>
    )
  }
}
