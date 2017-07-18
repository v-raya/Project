import React from 'react'
import {NameCardField} from '../common/nameCardField'
import Immutable from 'immutable'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'
import {checkArrayObjectPresence} from '../helpers/commonHelper.jsx'

const blankNameFields = Object.freeze({
  first_name: '',
  middle_name: '',
  last_name: '',
  name_type: {
    id: '',
    value: ''
  }
})

const legalTypeId = 2

export default class NameCard extends React.Component {
  constructor (props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.removeCard = this.removeCard.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }
  removeCard (indexValue) {
    let nameCardsList = Immutable.fromJS(this.props.nameFields.other_names)
    nameCardsList = nameCardsList.delete(indexValue)
    this.props.setParentState('other_names', nameCardsList.toJS())
  }
  handleNameChange (nameIndex, key, value) {
    let otherNameList = Immutable.fromJS(this.props.nameFields.other_names)

    otherNameList = otherNameList.update(nameIndex, x => x.set(key, value))
    this.props.setParentState('other_names', otherNameList.toJS())
  }
  addCard () {
    let nameCardsList = checkArrayObjectPresence(this.props.nameFields.other_names) || []
    nameCardsList.push(blankNameFields)
    this.props.setParentState('other_names', nameCardsList)
  }
  render () {
    let nameCardsList = checkArrayObjectPresence(this.props.nameFields.other_names)
    return (
      <div className='card-body'>
        <div className="row">
          <form>
            <InputComponent gridClassName='col-md-4' id='firstname' value={this.props.nameFields.first_name}
              label='First Name' placeholder='Enter First Name'
              type={'text'} onChange={(event) => this.props.setParentState('first_name', event.target.value)} />
            <InputComponent gridClassName='col-md-4' id='middleName' value={this.props.nameFields.middle_name}
              label='Middle Name' placeholder='Enter Middle Name'
              type={'text'} onChange={(event) => this.props.setParentState('middle_name', event.target.value)} />
            <InputComponent gridClassName='col-md-4' id='lastName' value={this.props.nameFields.last_name}
              label='Last Name' placeholder='Enter Last Name'
              type={'text'} onChange={(event) => this.props.setParentState('last_name', event.target.value)} />
            <DropDownField gridClassName='col-md-4' id='name_type'
              value={legalTypeId}
              selectClassName={'reusable-select'}
              disable={true}
              optionList={this.props.nameTypes}
              label='Name Type' />
          </form>
        </div>
        {
          nameCardsList && this.props.nameFields.other_names.map((nameCardFields, index) => {
            return (
              <div key={index} className='row list-item'>
                <span onClick={(event) => this.removeCard(index)}
                  className='pull-right glyphicon glyphicon-remove' />
                <NameCardField
                  index={index}
                  fieldValues={nameCardFields}
                  nameTypes={this.props.nameTypes}
                  onChange={this.handleNameChange} />
              </div>
            )
          })
        }
        <div className='text-center'>
          <button onClick={this.addCard} className='btn btn-default'>Add another Name +</button>
        </div>
      </div>
    )
  }
}
