import React from 'react'
import Immutable from 'immutable'
import {DropDownField} from 'components/common/dropDownField'
import {TextAreaComponent} from 'components/common/textArea'
import {yesNo} from 'constants/constants'
import {InputComponent} from 'components/common/inputFields'
import {isTrue, getDictionaryId, dictionaryNilSelectValue, dictionaryNilSelect} from 'helpers/commonHelper.jsx'
import MultiSelect from 'components/common/multiSelect'
import PropTypes from 'prop-types'
import YesNoRadioComponent from 'components/common/yesNoFields'
import {othersUsingAddressMailing} from 'constants/defaultFields'
import CompleteNameFields from './completeNameField'
import {addCardAsJS, removeCard} from 'helpers/cardsHelper.jsx'

export default class AboutThisResidenceCard extends React.Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.addCard = this.addCard.bind(this)
    this.removeCard = this.removeCard.bind(this)

    this.props.validator.addFieldValidation(`${this.props.idPrefix}weapon_in_home`, {rule: 'isRequiredBoolean', message: 'Required'})
    this.props.validator.addFieldValidation(`${this.props.idPrefix}body_of_water_exist`, {rule: 'isRequiredBoolean', message: 'Required'})
    this.props.validator.addFieldValidation(`${this.props.idPrefix}others_using_residence_as_mailing`, {rule: 'isRequiredBoolean', message: 'Required'})
    this.props.validator.addFieldValidation(`${this.props.idPrefix}residence_ownership`, {rule: 'isRequiredBoolean', message: 'Required'})
    this.props.validator.addFieldValidation(`${this.props.idPrefix}home_languages`, {rule: 'isRequiredBoolean', message: 'Required'})
  }

  onChange (key, value, index) {
    let othersMailing = Immutable.fromJS(this.props.aboutResidence.other_people_using_residence_as_mailing || [othersUsingAddressMailing])
    othersMailing = othersMailing.update(index, x => x.set(key, value))
    this.props.setParentState('other_people_using_residence_as_mailing', othersMailing.toJS())
  }
  removeCard (index) {
    this.props.setParentState('other_people_using_residence_as_mailing', removeCard(this.props.aboutResidence.other_people_using_residence_as_mailing, index, othersUsingAddressMailing))
  }

  addCard (event) {
    this.props.setParentState('other_people_using_residence_as_mailing', addCardAsJS(this.props.aboutResidence.other_people_using_residence_as_mailing, othersUsingAddressMailing))
  }

  render () {
    const aboutResidence = this.props.aboutResidence
    const othersMailing = aboutResidence.other_people_using_residence_as_mailing || [othersUsingAddressMailing]
    const hiddenBodyOfWater = (aboutResidence.body_of_water_exist !== undefined && aboutResidence.body_of_water_exist.toString() === 'true') ? '' : 'hidden'
    return (
      <div className='card-body'>
        <div className='row'>
          <DropDownField id='residenceTypes' gridClassName='col-md-7'
            selectClassName={'reusable-select'}
            value={getDictionaryId(aboutResidence.residence_ownership)}
            optionList={this.props.residenceTypes}
            label={'Do you own, rent or lease the residence? (required)'}
            onChange={(event) => this.props.setParentState('residence_ownership', dictionaryNilSelect(event.target.options))}
          />
          <div>
            <YesNoRadioComponent
              label='Weapons in home? (required)'
              idPrefix='weapons'
              value={aboutResidence.weapon_in_home}
              onFieldChange={(event) => this.props.setParentState('weapon_in_home', event.target.value)} />
          </div>
          <div>
            <YesNoRadioComponent
              label='Body of Water? (required)'
              idPrefix='body_of_water_exist'
              value={aboutResidence.body_of_water_exist}
              onFieldChange={(event) => this.props.handleClearOnConditionalChange('body_of_water_exist', 'body_of_water_description', event.target.value, '')} />
          </div>
          <div className={hiddenBodyOfWater}>
            <TextAreaComponent gridClassName='col-md-12' id='body_of_water_description'
              value={aboutResidence.body_of_water_description}
              label='Please Describe the location of the body of water and its size.' placeholder=''
              onChange={(event) => this.props.setParentState('body_of_water_description', event.target.value)} />
          </div>
          <div>
            <YesNoRadioComponent
              label='Does any person not listed in this document use the residence as their mailing address? (required)'
              idPrefix='others_using_residence_as_mailing'
              value={(aboutResidence.others_using_residence_as_mailing)}
              onFieldChange={(event) => this.props.handleDeleteOnConditionalChange('others_using_residence_as_mailing', 'other_people_using_residence_as_mailing', event.target.value, [othersUsingAddressMailing])} />
          </div>
          {isTrue(aboutResidence.others_using_residence_as_mailing)
            ? <div className={'row'} >
              {
                othersMailing.map((person, index) => {
                  return (
                    <div key={index}>
                      <a onClick={() => this.removeCard(index)}
                        className='pull-right remove-btn'>Remove</a>
                      <CompleteNameFields
                        idPrefix={`${this.props.idPrefix}other_people_using_residence_as_mailing` + `[${index}].`}
                        index={index}
                        required={false}
                        firstName={person.first_name}
                        middleName={person.middle_name}
                        lastName={person.last_name}
                        nameSuffix={person.name_suffix}
                        namePrefix={person.name_prefix}
                        onChange={this.onChange}
                        suffixTypes={this.props.suffixTypes}
                        prefixTypes={this.props.prefixTypes}
                        validator={this.props.validator} />
                    </div>
                  )
                })
              }
              <div className='col-md-12 text-center'>
                <button onClick={this.addCard} className='btn btn-default'>Add Another Person +</button>
              </div>
            </div> : null
          }

          <TextAreaComponent gridClassName='col-md-12' id='directions'
            optionList={this.props.directions}
            value={aboutResidence.directions_to_home}
            label='Please provide directions, including major cross-street information, to your physical address.' placeholder=''
            onChange={(event) => this.props.setParentState('directions_to_home', event.target.value)} />

          <MultiSelect
            gridClassName='col-md-12'
            label='Language(s) spoken in the home (required)'
            values={aboutResidence.home_languages || []}
            className='languages'
            optionList={this.props.languageTypes}
            onChange={(event) => this.props.setParentState('home_languages', event.map((e) => ({id: e.id, value: e.value})))} />
        </div>
      </div>
    )
  }
}

AboutThisResidenceCard.propTypes = {
  idPrefix: PropTypes.string,
  aboutResidence: PropTypes.object.isRequired,
  handleClearOnConditionalChange: PropTypes.func,
  handleDeleteOnConditionalChange: PropTypes.func,
  validator: PropTypes.object
}

AboutThisResidenceCard.defaultProps = {
  idPrefix: 'residence.',
  aboutResidence: [othersUsingAddressMailing]
}
