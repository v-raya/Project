import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import {InputComponent} from '../../components/common/inputFields'
import {DropDownField} from '../../components/common/dropDownField'
import NameCommonFields from '../../components/common/nameCommonFields'
import {getDictionaryId, dictionaryNilSelect} from 'helpers/commonHelper.jsx'

export default class CompleteNameFields extends React.Component {
  constructor (props) {
    super(props)
    if (this.props.validator) {
      this.props.validator.addFieldValidation(`${this.props.idPrefix}first_name`,
        {rule: 'isRequired', message: 'Required'})
      this.props.validator.addFieldValidation(`${this.props.idPrefix}last_name`,
        {rule: 'isRequired', message: 'Required'})
    }
  }
  componentWillUnmount () {
    if (this.props.validator) {
      const rulesToRemove = [`${this.props.idPrefix}first_name`, `${this.props.idPrefix}last_name`]
      this.props.validator.removeValidations(rulesToRemove)
    }
  }
  render () {
    return (
      <div>
        {
          this.props.prefixTypes && <div className='col-md-12'>
            <DropDownField gridClassName='col-md-4'
              id={`${this.props.idPrefix}name_prefix`} value={getDictionaryId(this.props.namePrefix)}
              selectClassName={'reusable-select'}
              optionList={this.props.prefixTypes}
              label={'Prefix'}
              onChange={(event, id) => this.props.onChange(`${this.props.onChangePrefix}name_prefix`, dictionaryNilSelect(event.target.options), this.props.index)} />
          </div>
        }
        <div className='col-md-12'>
          <NameCommonFields
            index={this.props.index}
            onChangePrefix={this.props.onChangePrefix}
            idPrefix={this.props.idPrefix}
            firstName={this.props.firstName}
            middleName={this.props.middleName}
            lastName={this.props.lastName}
            onChange={this.props.onChange}
            validator={this.props.validator} />
        </div>
        <div className='col-md-12'>
          <DropDownField
            gridClassName='col-md-4'
            id={`${this.props.idPrefix}name_suffix`}
            value={getDictionaryId(this.props.nameSuffix)}
            selectClassName={'reusable-select'}
            optionList={this.props.suffixTypes}
            label={'Suffix'}
            onChange={(event, id) => this.props.onChange(`${this.props.onChangePrefix}name_suffix`, dictionaryNilSelect(event.target.options), this.props.index)} />
        </div>
        {
          this.props.nameTypes && <div className='col-md-12'>
            <DropDownField
              gridClassName='col-md-4'
              id={`${this.props.idPrefix}name_type`}
              value={getDictionaryId(this.props.nameType)}
              selectClassName={'reusable-select'}
              optionList={this.props.nameTypes}
              label={'Name Type (required)'}
              onChange={(event, id) => this.props.onChange(`${this.props.onChangePrefix}name_type`, dictionaryNilSelect(event.target.options), this.props.index)} />
          </div>
        }
      </div>)
  }
}

CompleteNameFields.propTypes = {
  firstNameId: PropTypes.string,
  middleNameId: PropTypes.string,
  lastNameId: PropTypes.string,
  nameSuffixId: PropTypes.string,
  namePrefixId: PropTypes.string,
  firstName: PropTypes.string,
  middleName: PropTypes.string,
  lastName: PropTypes.string,
  nameSuffix: PropTypes.object,
  namePrefix: PropTypes.object,
  nameType: PropTypes.object,
  nameTypeId: PropTypes.string,
  nameTypes: PropTypes.array,
  prefixTypes: PropTypes.array,
  suffixTypes: PropTypes.array,
  onChange: PropTypes.func.isRequired
}

CompleteNameFields.defaultProps = {
  suffixTypes: [],
  idPrefix: '',
  onChangePrefix: '',
  validator: null
}
