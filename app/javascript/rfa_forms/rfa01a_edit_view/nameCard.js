import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import {NameCardField} from 'components/common/nameCardField'
import Immutable from 'immutable'
import {InputComponent} from 'components/common/inputFields'
import {DropDownField} from 'components/common/dropDownField'
import CompleteNameFields from './completeNameField.jsx'
import {checkArrayObjectPresence, removeLegalNameType} from 'helpers/commonHelper.jsx'
import {addCardAsJS, removeCard} from 'helpers/cardsHelper.jsx'
import {requiredForSubmitRule} from 'helpers/validator'

const blankNameFields = Object.freeze({
  name_suffix: null,
  name_prefix: null,
  first_name: '',
  middle_name: '',
  last_name: '',
  name_type: null
})

const requiredNameRule = {rule: 'isRequired', message: 'Required'}

export default class NameCard extends React.PureComponent {
  constructor (props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.removeCard = this.removeCard.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)

    this.firstNameValidationId = `${this.props.idPrefix}first_name`
    this.lastNameValidationId = `${this.props.idPrefix}last_name`
    this.props.validator.addFieldValidation(this.firstNameValidationId, requiredNameRule)
    this.props.validator.addFieldValidation(this.lastNameValidationId, requiredNameRule)
  }
  addCard (event) {
    this.props.setParentState('other_names', addCardAsJS(this.props.nameFields.get('other_names'), Immutable.fromJS(blankNameFields)))
  }

  removeCard (indexValue) {
    this.props.setParentState('other_names', this.props.nameFields.get('other_names').delete(indexValue))
  }

  handleNameChange (key, value, nameIndex) {
    let otherNameList = this.props.nameFields.get('other_names')

    otherNameList = otherNameList.update(nameIndex, x => x.set(key, value))
    this.props.setParentState('other_names', otherNameList)
  }

  componentWillUnmount () {
    const rulesToRemove = [this.firstNameValidationId, this.lastNameValidationId]
    this.props.validator.removeValidations(rulesToRemove)
  }

  render () {
    // console.log('rendering - nameCard.js')

    const nameFields = this.props.nameFields.toJS()
    const nameCardsList = nameFields.other_names
    return (
      <div className='card-body'>
        <div className='row'>
          <CompleteNameFields
            idPrefix={this.props.idPrefix}
            firstName={nameFields.first_name}
            middleName={nameFields.middle_name}
            lastName={nameFields.last_name}
            nameSuffix={nameFields.name_suffix}
            namePrefix={nameFields.name_prefix}
            onChange={this.props.setParentState}
            suffixTypes={this.props.suffixTypes}
            prefixTypes={this.props.prefixTypes}
            hideNameType
            //  validator={this.props.validator}
            errors={this.props.errors} />
        </div>
        {
          nameCardsList && nameCardsList.map((nameCardFields, index) => {
            return (
              <div key={index} className='row list-item'>
                <button onClick={(event) => this.removeCard(index)}
                  className='pull-right remove-btn'>Remove</button>
                <CompleteNameFields
                  index={index}
                  idPrefix={`${this.props.idPrefix}other_names[${index}].`}
                  firstName={nameCardFields.first_name}
                  middleName={nameCardFields.middle_name}
                  lastName={nameCardFields.last_name}
                  nameSuffix={nameCardFields.name_suffix}
                  namePrefix={nameCardFields.name_prefix}
                  nameType={nameCardFields.name_type}
                  onChange={this.handleNameChange}
                  nameTypes={removeLegalNameType(this.props.nameTypes)}
                  suffixTypes={this.props.suffixTypes}
                  prefixTypes={this.props.prefixTypes}
                  hideNameType={false}
                  validator={this.props.validator}
                  errors={this.props.errors} />
              </div>
            )
          })
        }
        <div className='text-center'>
          <button disabled={this.props.hasValidName} onClick={this.addCard} className='btn btn-default'>Add Alias +</button>
        </div>
      </div>
    )
  }
}

NameCard.propTypes = {
  idPrefix: PropTypes.string,
  nameTypes: PropTypes.array.isRequired,
  nameFields: PropTypes.object,
  setParentState: PropTypes.func.isRequired
}

NameCard.defaultProps = {
  nameFields: Immutable.fromJS(blankNameFields),
  idPrefix: ''
}
